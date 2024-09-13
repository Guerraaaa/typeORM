import { UserService } from "./UserService"

//Mockar o endereço de memoria.
jest.mock('../repositiories/UserRepository')

// Para evitar erros, chamamos a função de inicialização do dataSource 
jest.mock('../database', () => {
    initialize: jest.fn()
})

const mockUserRepository = require('../repositiories/UserRepository')

describe('TesteAPI', () => {
    const userService = new UserService(mockUserRepository)

    it('Deve criar um novo usuário', async () => {
         mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            id_user : '123456',
            name: "lucas.teste", 
            email: 'teste@gmail', 
            password: '123'
         }))
        const res = await userService.createUser("lucas.teste", 'teste@gmail', '123')
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(res).toMatchObject({
            id_user : '123456',
            name: "lucas.teste", 
            email: 'teste@gmail', 
            password: '123'
         } )
    })
})