const db = [
  {
    name: "Mario",
    idade: 19,
  },
];

export interface User {
  name: string;
  idade: number;
}

export class UserService {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }
  createUser = (name: string, idade: number) => {
    const user = { name, idade };
    this.db.push(user);
    console.log("Database atualizada - ", this.db);
  };

  getAllData = () => {
    console.log(this.db);
    return this.db;
  };

  deleteUser = (name: string) => {
    const deleteUser = db.filter((el) => el.name !== name);
    return deleteUser;
  };
}
