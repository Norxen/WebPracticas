export interface Comunidad {
    id_comunidad: number;
    nombre: string;
    descripcion: string;
    id_usuario_creador: number;
    fecha_creacion: Date;
    color_fondo: number[];
}