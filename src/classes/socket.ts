import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const desconectar = (cliente: Socket) =>{
    cliente.on('disconnect', ()=>{
        console.log('[Clase socket disconnect ]     ==> ','Cliente desconectado', cliente.id)
    })

}

export const mensaje = ( cliente:Socket, io:socketIO.Server ) =>{
    cliente.on('mensaje', (payload: {de:string, cuerpo:string} )=>{
        console.log('[Clase socket mensaje ]        ==> ',payload)
        io.emit('mensaje-nuevo',payload);
    })
}