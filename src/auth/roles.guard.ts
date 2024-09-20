import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
        try {
            if (!requiredRoles) {
                return true;
            }
            const { user } = context.switchToHttp().getRequest();
            return requiredRoles.some((role) => user.role === role);
        } catch (error) {
            throw new UnauthorizedException('FORBIDDEN', 'This User do not have the permission to access this api')
        }
    }
}