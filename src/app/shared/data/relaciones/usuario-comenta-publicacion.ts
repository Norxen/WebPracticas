export interface UsuarioComentaPublicacion {
    id_usuario: number;
    id_publicacion: number;
    fecha_comentario: Date;
    contenido_comentario: string;
}