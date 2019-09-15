import { Usuario } from './usuario';
export class usuarioLista {
    private lista:Usuario[] = []
    constructor(){}

    public agregarUsuario(nuevoUsuario:Usuario){
        console.log(nuevoUsuario);
        this.lista.push(nuevoUsuario);
        return nuevoUsuario;
    }

    public actualizarNombre(id:string, nombre:string){
        for( let usuario of this.lista){
            if(usuario.id ===id){
                usuario.nombre = nombre
                break;
            }
        }

        console.log('====Actualizando usuario====')
        console.log(this.lista)
    }

    public getLista(){
        return this.lista;
    }

    public getUsuario(id:string){
        return this.lista.find(usuario=>usuario.id===id);
    }

    public getUsuarioEnSala(sala:string){
        return this.lista.filter(usuario => usuario.sala ===sala);
    }

    public borrarUsuario(id:string){
        const tempUsuario = this.lista.find(usuario =>usuario.id ===id);
        this.lista = this.lista.filter(usuario=>usuario.id!==id)
        return tempUsuario;
    }

}