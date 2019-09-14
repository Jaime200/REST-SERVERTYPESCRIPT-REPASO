import {Router,Response,Request } from 'express'

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
     
    return res.json({
        ok: true,
        mensaje:{
            cuerpo,
            de
        }
    })
});


routerNormal.post('/mensajes/:id',(req:Request,res:Response)=>{
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id
     
    return res.json({
        ok: true,
        mensaje:{
            cuerpo,
            de, 
            id
        }
    })
});

export default routerNormal

 