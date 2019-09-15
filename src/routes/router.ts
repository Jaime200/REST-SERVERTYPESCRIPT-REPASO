import {Router,Response,Request } from 'express'
import Server from '../classes/server';

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

export default routerNormal

 