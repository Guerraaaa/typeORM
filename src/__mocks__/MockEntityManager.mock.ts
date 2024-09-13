import { EntityManager } from "typeorm";

interface MockManagerArgs {
    saveReturn?: Object | [object]
    findOneReturn?: Object
}
    
export const getMockEntityManager = async({
    saveReturn = undefined,
    findOneReturn = undefined
}: MockManagerArgs):Promise<EntityManager> => {
    const manager:Partial<EntityManager> = {}

    // Basicamente ele está testando a chamada do metodos que estão no UserRepository
    manager.save = jest.fn().mockImplementation(() => Promise.resolve(saveReturn))
    manager.findOne = jest.fn().mockImplementation(() => Promise.resolve(findOneReturn))


    return manager as EntityManager
}