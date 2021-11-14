# INSTALLATIONS #

- NodeJS 12.14 ou 14.0.
- Angular CLI 7.0.2.
- node-sass : utilise les bons correspondant pour la version NodeJS. Pour NodeJS 14.0 on a besoin de node-sass version 4.14+.

Sur Windows, ces installations requière d'utiliser PowerShell en mode administrateur.

## DOSSIER P6_eric_janvier_code ##

- Clonez le reposite
- En utilisant le terminal se rendre dans le dossier frontend puis taper: `npm install`.
- En utilisant le terminal se rendre dans le dossier backend puis taper: `npm install`.

### Utilisation du FRONTEND ###

- Tapez `npm start` ou `run npm start` dans le terminal.

- Si cela ne fonctionne pas essayer de taper : `run npm install`, et `run npm install --save-dev run-script-os`.

- S'il y l'erreur 404 , verifiez si c'est  le port est le bon : "http://localhost:8080" ou "http://localhost:8081".

- Utiliser `Ctrl+C` dans le terminal pour arrêter le local server.

#### Utilisation du BACKEND ####

- Tapez  `nodemon server` dans le terminal.
- Si necessaire installer nodemon : `npm install -g nodemon` (si il y a une erreur).
- Si necessaire installer express : `npm install express` (si il y a une erreur).

Sur Mac, il ne faut pas oublier de mettre "sudo" devant "npm" pour ces types d'installations, par exemple : "sudo npm install express".


##### Remarque ######

Le fichier `.env` (qui contient les SECRET_KEY) ainsi que le dossier `images` ne sont volontairement pas misent dans le `.gitignore` pour permettre à l'application d'être fonctionnel par d'autres Utilisateur.