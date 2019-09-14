
import Server from './classes/server';
import routerNormal from './routes/router';
import bodyParser from 'body-parser'
import cors from 'cors'
const server = Server.instance;
//Body parser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
//cors
server.app.use(cors({ origin:true, credentials:true  }))
server.app.use('/',routerNormal)

server.start(()=>{
    console.log('[Clase index en server.start]  ==> ',`Escuchando el puerto ${server.port}`)
    
})