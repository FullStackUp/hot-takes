//*---Création d'un server Node par importation du package HTTP natif de Node---*//

const http = require('http');
const app = require('./app');  

// Pour résoudre une erreur inconnue lors de la création d'un user depuis le front.
const cors = require('cors');
app.use(cors()) 

//cette fonction normalizePort renvoie un port valide qu'il soit fourni sous la forme d'un numéro ou d'une chaîne
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};
const port = normalizePort(process.env.PORT || '3000');


//Indiquation à l'app Express sur quel PORT elle va tourner
app.set('port', port);


//cette fonction errorHandler recherche les erreurs et les gères, ensuite elle est enregistré dans le server 
const errorHandler = error => {
    if (error.syscall !== 'écoute') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES' : 
            console.error(bind + ' nécessite des privilèges élevés.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ` est déjà en cours d'utilisation.`);
            process.exit(1);
            break;
        default:
            throw error;
    }
};


/*Cette méthode "end" (prend comme argument "app")
 Cette fonction sera appelé à chaque requête reçu par le server*/
const server = http.createServer(app);


//Un écouteur d'évènement pour lire le port ou le canal sur lequel le server s'exécute dans la console
server.on('error', errorHandler);
server.on('écoute', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('écoute sur ' + bind);
});


//par défaut c'est le PORT 3000 sinon un autre PORT
server.listen(process.env.PORT || 3000);


var accesslog = require('access-log');
 
http.createServer(function(req, res) {
  accesslog(req, res);
  res.end();
}).listen(80, '0.0.0.0');


