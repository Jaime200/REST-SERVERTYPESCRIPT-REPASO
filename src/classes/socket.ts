import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { usuarioLista } from './usuariosLista';
import { Usuario } from './usuario';

export const usuariosConectados = new usuarioLista();


export const ConectarCliente = (cliente:Socket) =>{
    const usuario = new Usuario(cliente.id);
    usuariosConectados.agregarUsuario(usuario);
}

export const desconectar = (cliente: Socket) =>{
    cliente.on('disconnect', ()=>{
        console.log('[Clase socket disconnect ]     ==> ','Cliente desconectado', cliente.id)
        usuariosConectados.borrarUsuario(cliente.id);
    })

}

export const mensaje = ( cliente:Socket, io:socketIO.Server ) =>{
    cliente.on('mensaje', (payload: {de:string, cuerpo:string} )=>{
        console.log('[Clase socket mensaje ]        ==> ',payload)
        io.emit('mensaje-nuevo',payload);
    })
}

export const configurarUsuario = ( cliente:Socket, io:socketIO.Server ) =>{
    cliente.on('configuracion-usuario', (payload:{nombre:string} , callback : Function )=>{
        console.log('[Clase socket conf. Usuario ]        ==> ',payload)

        usuariosConectados.actualizarNombre(cliente.id, payload.nombre);
        callback({
            ok: true,
            usuario: `Usuario ${payload.nombre} configurado`
        })
    })
}