import { LoginAuthDto } from "@/modules";
import { IsNotEmpty } from "class-validator";

export class RegisterAuthDto extends LoginAuthDto {
    @IsNotEmpty()
    name!: string

    @IsNotEmpty()
    roleId!: number
}