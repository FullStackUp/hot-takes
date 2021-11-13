# INSTALLATIONS #

- NodeJS 12.14 ou 14.0.
- Angular CLI 7.0.2.
- node-sass : utilise les bons correspondant pour la version NodeJS. Pour NodeJS 14.0 on a besoin de node-sass version 4.14+.

Sur Windows, ces installations requière d'utiliser PowerShell en mode administrateur.

## DOSSIER FRONTEND ##

Clonez le repo, puis tapez `run npm install`, et `run npm install --save-dev run-script-os`.

## Utilisation du FRONTEND ##

Tapez  `npm start` ou `run npm start` dans le terminal.

S'il y l'erreur 404 , verifiez si c'est  le port est le bon : "http://localhost:8080" ou "http://localhost:8081" .

Utiliser `Ctrl+C` dans le terminal pour arrêter le local server.


### DOSSIER BACKEND ###

Clonez le repo, puis tapez `npm install`.

- Tapez "npm install" 
- Si necessaire installer nodemon : `npm install -g nodemon`
- Si necessaire installer express : `npm install express`

Sur Mac, il ne faut pas oublier de mettre "sudo" devant "npm" pour ces types d'installations, par exemple : "sudo npm install express"

# Utilisation du BACKEND #

Tapez  `nodemon server` dans le terminal.
