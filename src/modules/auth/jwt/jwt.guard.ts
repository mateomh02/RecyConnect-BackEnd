import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    handleRequest(err, user, info) {
        if (info?.name === 'TokenExpiredError') {
            throw new UnauthorizedException('El token ha expirado. Por favor, inicia sesión de nuevo.');
        }

        if (err || !user) {
            throw err || new UnauthorizedException('Token no válido o no proporcionado');
        }

        return user;
    }
}