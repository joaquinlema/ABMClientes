
export interface ClientDTO {
    alias?:             string;
    nombre?:            string;
    telefono?:          number;
    mail?:              string;
    dni?:               number;
    cuil?:              number;
    direccion?:         string;
    clearingCompra?:    number;
    clearingVenta?:     number;
    comisionCompra?:    number;
    comisionVenta?:     number;
    tasaMensualCompra?: number;
    tasaMensualVenta?:  number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toClientDTO(json: string): ClientDTO {
        return JSON.parse(json);
    }

    public static clientDTOToJson(value: ClientDTO): string {
        return JSON.stringify(value);
    }
}