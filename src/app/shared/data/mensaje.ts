export interface Mensaje {
    id_mensaje: number;
    contenido: string;
    id_chat: number;
    id_usuario: number;
    fecha_creacion: Date;
}