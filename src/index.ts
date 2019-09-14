
import Server from './classes/server';
import routerNormal from './routes/router';
import bodyParser from 'body-parser'
import cors from 'cors'
const server = new Server();
//Body parser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
//cors
server.app.use(cors({ origin:true, credentials:true  }))
server.app.use('/',routerNormal)

server.start(()=>{
    console.log(`Servidor corriendo el el puerto ${server.port}`)
})