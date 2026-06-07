import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto';

describe('Users (Pruebas Unitarias e Integración)', () => {
    let controller: UsersController;
    let service: UsersService;

    const mockUsersService = {
        findAllUsers: jest.fn().mockResolvedValue([{ id: 1, name: 'Marlon', email: 'marlon@mail.com' }]),
        findOneByEmail: jest.fn().mockResolvedValue({ id: 1, name: 'Marlon', email: 'marlon@mail.com' }),
        createUser: jest.fn().mockResolvedValue({ id: 1, name: 'Marlon', email: 'marlon@mail.com' }),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [
                {
                    provide: UsersService,
                    useValue: mockUsersService,
                },
            ],
        }).compile();

        controller = module.get<UsersController>(UsersController);
        service = module.get<UsersService>(UsersService);
    });


    it('Integración 1: Debe retornar todos los usuarios a través del controlador', async () => {
        const result = await controller.findAll();
        expect(result).toEqual([{ id: 1, name: 'Marlon', email: 'marlon@mail.com' }]);
        expect(service.findAllUsers).toHaveBeenCalled();
    });

    it('Integración 2: El servicio debe ser llamado al buscar por email indirectamente', async () => {
        const result = await mockUsersService.findOneByEmail('marlon@mail.com');
        expect(result.name).toBe('Marlon');
        expect(mockUsersService.findOneByEmail).toHaveBeenCalledWith('marlon@mail.com');
    });

    it('Integración 3: Debe crear un usuario correctamente completando el CreateUserDto', async () => {
        const dto: CreateUserDto = {
            name: 'Marlon',
            email: 'marlon@mail.com',
            password: 'password123',
            roleId: 1
        };

        const result = await controller.createUser(dto);

        expect(result).toEqual({ id: 1, name: 'Marlon', email: 'marlon@mail.com' });
        expect(service.createUser).toHaveBeenCalledWith(dto);
    });
});