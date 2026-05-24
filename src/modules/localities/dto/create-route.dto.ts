import { IsNotEmpty, IsString, IsISO8601, IsInt } from 'class-validator';

export class CreateRutaDto {
    @IsNotEmpty({ message: 'El nombre de la ruta es obligatorio' })
    @IsString({ message: 'El nombre de la ruta debe ser un texto' })
    routeName!: string; // Ej: "j"

    @IsNotEmpty({ message: 'La zona/localidad es obligatoria' })
    @IsString({ message: 'La zona debe ser el identificador en formato texto' })
    zone!: string; // Ej: "1" (ID de la localidad de Usaquén)

    @IsNotEmpty({ message: 'La fecha es obligatoria' })
    @IsISO8601({}, { message: 'El formato de la fecha debe ser un formato ISO válido' })
    day!: string; // Ej: "2026-05-06T05:00:00.000Z"

    @IsNotEmpty({ message: 'La hora es obligatoria' })
    @IsString({ message: 'La hora debe tener un formato de texto válido' })
    hour!: string; // Ej: "00:30"

    @IsNotEmpty({ message: 'El ID del usuario es obligatorio' })
    @IsInt({ message: 'El idUser debe ser un número entero' })
    idUser!: number; // Ej: 1
}