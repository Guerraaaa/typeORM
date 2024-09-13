import { MockResponse } from "../__mocks__/MockReponse.mock"
import { UserController } from "./UserController"

import { UserService } from "../services/UserService"
import { Request } from "express"

const mockUserRequest = {
    createUser: jest.fn 
}

jest.mock("../services/UserService", () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return mockUserRequest
        })
    }
})
describe('UserControllerTeste', () => {
    const mockUserController: Partial<UserService> = {
        createUser: jest.fn()
    }

    const userController = new UserController(mockUserController as UserService)
    it('Criando um novo usuario', () => {
        const mockUserResquest = {
            body: {
                name: 'Mario Guerra',
                email: 'mario@gmail.com',
                password: '123456'
            }
        } as Request
        const mockUserResponse = MockResponse()
        
        userController.createUser(mockUserResquest, mockUserResponse)

        expect(mockUserResponse.state.status).toBe(201)
        expect(mockUserResponse.state.json).toMatchObject({message: 'Usuario criado'})
    })

})