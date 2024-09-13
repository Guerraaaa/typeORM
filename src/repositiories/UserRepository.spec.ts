import { EntityManager } from "typeorm";
import { getMockEntityManager } from "../__mocks__/MockEntityManager.mock";
import { User } from "../entities/User";
import { UserRepository } from "./UserRepository";

describe("UserRespository", () => {
  let userRepository: UserRepository;
  let managerMock: Partial<EntityManager>

  const mockRepository: User = {
    id_user: "",
    name: "Mario",
    email: "mario@gmail.com",
    password: "password",
  };

  beforeAll(async () => {
    managerMock = await getMockEntityManager({
        saveReturn: mockRepository
    });
    userRepository = new UserRepository(managerMock as EntityManager);
  });

  it("Deve cadastrar um novo usuario no banco de dados", async () => {
    const res = await userRepository.createUser(mockRepository);
    expect(managerMock.save).toHaveBeenCalled()

    expect(res).toMatchObject(mockRepository)
  });
});
