export interface Evento {
    id_evento: number;
    titulo: string;
    descripcion: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    id_usuario_creador: number;
    fecha_creacion: Date;
}