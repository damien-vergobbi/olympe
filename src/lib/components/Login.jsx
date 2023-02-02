import React from "react";
import { LogIn } from "react-feather";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Olympe } from "../";
import { ContainerLogin, LoginError } from "./styles/Login";

export default function LoginPage () {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const navigate = useNavigate();
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [valid, setValid] = React.useState(false);
  const { handleSubmit, register, setFocus, setValue, watch, getValues } =
    useForm();

  React.useEffect(() => {
    watch(["clid", "pswd"]);
    upValues();
  }, []);

  const upValues = () => {
    setError(false);
    if (regex.test(getValues("clid")) && getValues("pswd").length > 5) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const onSubmit = async (data) => {
    setSent(true);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(data.clid + ":empty")
      },
      body: JSON.stringify({ pwd: data.pswd })
    };

    fetch("https://api.damien-vergobbi.fr/v1/login/", requestOptions)
      .then((response) => response.text())
      .then((data) => {
        if (
          typeof data === "string" &&
          data !== "false" &&
          !data.startsWith("account_")
        ) {
          throw new Error(data || "réponse serveur erronée.");
        }

        if (data === "false") {
          setFocus("clid");
          setValue("pswd", "");
          setError(true);
          return;
        }

        localStorage.setItem("key", data);
        navigate("/application/");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("Une erreur est survenue : " + error.message);
      })
      .finally(() => {
        setSent(false);
      });
  };

  window.addEventListener("resize", Olympe.Utils.appHeight);
  Olympe.Utils.appHeight();

  return (
    <Olympe.Fade>
      <ContainerLogin>
        <form onSubmit={handleSubmit(onSubmit)}>
          <img
            src={Olympe.Color.logoLight}
            alt="Chargement"
            height={80}
            width={80}
          />

          <div className="basicInput">
            <Olympe.Input.Text
              type="text"
              {...register("clid")}
              defaultValue={""}
              autoComplete="username"
              placeholder="Identifiant"
              onKeyUp={() => upValues()}
              onKeyPress={(e) => {
                e.key === "Enter" && Olympe.Utils.enterInput(e);
              }}
            />
          </div>

          <div className="basicInput">
            <Olympe.Input.Text
              type="password"
              {...register("pswd")}
              defaultValue={""}
              autoComplete="current-password"
              placeholder="Mot de passe"
              onKeyUp={() => upValues()}
            />
          </div>

          {error && (
            <LoginError>Identifiant ou mot de passe incorrect.</LoginError>
          )}

          {!sent
            ? (
              <Olympe.Button.Basic
                label={"Se connecter"}
                icon={<LogIn />}
                type="submit"
                toExecute={valid && !sent ? () => true : false}
              />
            )
            : (
              <Olympe.MiniLoader />
            )}
        </form>
      </ContainerLogin>
    </Olympe.Fade>
  );
}
