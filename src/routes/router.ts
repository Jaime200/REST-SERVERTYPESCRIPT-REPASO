import {Router,Response,Request, response } from 'express'
import Server from '../classes/server';
import { Socket } from 'socket.io';
import { usuariosConectados } from '../classes/socket';

 const routerNormal = Router();

routerNormal.get('/mensajes',(req:Request,res:Response)=>{

     
    return res.json({
        ok: true,
        mensaje:'Todo ok'
    })
});


routerNormal.post('/mensajes',(req:Request,res:Response)=>{
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
     
    const server = Server.instance;

    const payloadEmit = {cuerpo,  de, }
    server.io.emit('mensaje-nuevo',payloadEmit)
    return res.json({
        ok: true,
        mensaje:{ cuerpo, de  }
    })
});


routerNormal.post('/mensajes/:id',(req:Request,res:Response)=>{
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id
    
    const server = Server.instance;

    const payloadEmit = {
        cuerpo,
        de, 
        id
    }
    server.io.in(id).emit('mensaje-privado',payloadEmit)
    return res.json({
        ok: true,
        mensaje:payloadEmit
    })
});



//Servicios para tener todos los ID de los usuarios
routerNormal.get('/usuarios',(req:Request, resp:Response)=>{
    const server = Server.instance;
    
    server.io.clients( (err:any, clientes: string[]) =>{
        if(err) return resp.json({
            ok:false,
            mensaje: err
        })
        return resp.json({
            ok: true,   
            clientes 
        })

    })
   
})

// Obtener usuarios y nombres 
routerNormal.get('/usuarios/detalle' ,(req:Request, resp:Response) =>{


return resp.json({
    ok:true,
    clientes: usuariosConectados.getLista()
})
})

export default routerNormal

 