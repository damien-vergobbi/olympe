
# Olympe Interface

L'Interface Olympe est une librairire contenenant des modules, fonctions et ressources nécessaires à la création d'une instance d'Interface administrateur.


## Installation

Le paquet est disponible sur NPM au nom de dv-olympe. Procéder comme suit pour l'utiliser :

```bash
  cd my-project
  npm install dv-olympe
```
## Exemple d'utilisation

```javascript
import { Olympe } from 'dv-olympe';

function App() {
  return <Olympe.Loader />;
} // Print Logo loader

function App() {
  return (
    <p style={{ color: Olympe.Color.primary}}>
      Hello World
    </p>)
  ;
} // Get color from Olympe
```


## Modifier Olympe

Pour modifier le code source :
- Cloner le repo
- Executer les commandes

```bash
  npm install --save-dev @babel/core @babel/cli @babel/preset-env
  npm install -save @babel/polyfill   
```



## 🛠 Skills
Javascript, HTML, React, ES6...


## Authors

- [@damien-vergobbi](https://www.github.com/damien-vergobbi)

## Documentation
Accessible depuis Olympe :
| Name | Paramètres| Description |
| ----------------- | --|------------------------------------------------------------------ |
| Color | - | Liste des couleurs principales et logo. |
| Interface | MainContext, ListItem | Principale interface. |
| Wrapper | horizontal, centered | Conteneur de type page. |
| SubItem | - | Item à insérer dans un Wrapper. |
| LoginPage | - | Page de connexion. |
| Fade | - | Composant animé d'une fondue. |
| Chart | title, subtitle, chart, chartTitle, chartLegend, large | Conteneur de type item pour un graphique. |
| GlobalStyles | - | Styles par défaut, à mettre au début du programme. |
| ErrorPage | e.status, e.statusText | Page d'erreur, e est l'erreur. |
| Tooltips | title, placement, notSpan, classes | Tooltips customisé. |
| Item | - | Item par défaut |
| ItemTitle | - | Titre de type h2 pour item. |
| ItemChart | - | Item pour un graphique. |
| ItemFullWidth | - | Item qui prend toute la largeur de son parent. |
| ItemWithAvatar | - | Item avec une image sur la partie droite. |
| Loader | text, show | Chargement avec Logo. |
| MiniLoader | - | Petit chargement en rond. |
| WrapPdf | - | Conteneur pour afficher un PDF (plus grand). |
| Modal | title, content, loading, buttons, verifTxt, open, onClose, closeOnDocumentClick| Composant modal. |

Accessible depuis Olympe.List :
| Name | Paramètres| Description |
| ----------------- | --|------------------------------------------------------------------ |
| Table | id, name, tableTitle, buttonLabel, buttonIcon, loading, colums, datas, handleSearch, search, placeholder, onClickRow, onClickBtn, sortAsc, sortId, forceButton | Composant table avec tableau. |
| Menu | label, handleSearch, search, placeholder, content, uri, children, btnFct, btnIcon, btnTitle | Composant table avec liste. |

Accessible depuis Olympe.Table :
| Name | Paramètres| Description |
| ----------------- | --|------------------------------------------------------------------ |
| Wrap | - | Styles customisés pour un react-data-table-component |
| Empty | - | Styles customisés pour un tableau vide. |
| Style | - | Styles customisés pour le thème d'un tableau. |
| Pagination | - | Composant personnalisé pour la pagination des tableaux. |
| Theme | - | Thème customisé pour un tableau.|

Accessible depuis Olympe.Input :
| Name | Paramètres| Description |
| ----------------- | --|------------------------------------------------------------------ |
| Text | - | Champ de type text basic |
| FormFile | - | Wrapper pour Olympe.Input.File. |
| File | - | Champ de type text pour un formulaire de fichier. |

Accessible depuis Olympe.Button :
| Name | Paramètres| Description |
| ----------------- | --|------------------------------------------------------------------ |
| Basic | toExecute, label, icon, anim, type | Bouton de base. |
| FilePick | - | Styles customisés pour un champ de type file. |
| FileUpload | - | Styles customisés pour un champ de type file non vide. |
| FileCancel | - | Styles customisés pour l'annulation d'un fichier. |

Accessible depuis Olympe.Utils :
| Name | Paramètres| Description |
| ----------------- | --|------------------------------------------------------------------ |
| renderHTML | rawHTML, classes | HTML code vers React, avec classes personnalisées. |
| appHeight | - | Retourne la hauteur de l'écran. |
| numberShorter | number | Transforme un nombre : 1000 => 1k
| stringUpper | str | Retourne la chaine avec le premier caractère en majuscules. |
| SentLogTime | lastSeenString, short | Retourne une durée depuis une date. |
| AvatarSvg | seed | Retourne un avatar depuis une chaîne de caractères. |
| AvatarSvgHtml | seed | Retourne un avatar dans un élément HTML depuis une chaîne de caractères. |
| truncStr | str, len | Coupe une chaîne de caractère dans la longueur précisée. |
| getFileSize | bytes | Retourne une chaîne de caractères depuis un nombre de bytes. |
| enterInput | e | Arrête la propagation de la touche Entrer. |
| downloadCSV | datas, filename | Transforme un tableau en fichier CSV. |
| useWindowSize | - | Capture le changement de taille de fenêtre. |