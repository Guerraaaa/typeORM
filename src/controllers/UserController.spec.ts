import { MockResponse } from "../__mocks__/MockReponse.mock"
import { UserController } from "./UserController"

import { UserService } from "../services/UserService"
import { Request } from "express"

describe('UserControllerTeste', () => {
    const mockUserController: Partial<UserService> = {createUser: jest.fn()}

    const userController = new UserController(mockUserController as UserService)
    it('Criando um novo usuario', () => {
        const mockUserResquest = {
            body: {
                name: 'Mario Guerra',
                idade: 19
            }
        } as Request
        const mockUserResponse = MockResponse()
        
        userController.createUser(mockUserResquest, mockUserResponse)

        expect(mockUserResponse.state.status).toBe(201)
        expect(mockUserResponse.state.json).toMatchObject({message: 'Usuario criado'})
    })
})