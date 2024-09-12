import { User, UserService } from "./UserService"


describe('TesteAPI', () => {
    const mockDb:User[] = []

    const userService = new UserService(mockDb)

    it('Deve criar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console,'log')
        userService.createUser("lucas.teste", 18)
        expect(mockConsole).toHaveBeenCalledWith('Database atualizada - ', mockDb)
    })
})