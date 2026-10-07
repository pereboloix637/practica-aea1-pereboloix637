// AQUEST INTERFICIE S'HA FET SENSE INTELIGENCIA ARTIFICIAL
export interface Glob {
id: number; // Numero asignado segun cuando fueron agregados.
nombre: string; // No es obvio? Nombre del Glob, es el que aparece en el juego.
descripciom?: string; //el ? vol dir que es opcional
habitat ?: string; // Lugar de donde viene el Glob (o la actualización de este)
categoria ?: string; // Lo que hace especial, por ejemplo: Melee, Stunner, Principal, etc.
obtenible: boolean; // Si se obtiene gratis o no, si es falso, significa que es un Glob que solo se puede obtener por compras en la tienda o jugando.
creditos?: string; // Creditos del Glob, si es que tiene, por ejemplo: "Creado por: KirByte_Bi"
imagenUrl?: string; // URL de la imagen del Glob (EN PROCESO)
}