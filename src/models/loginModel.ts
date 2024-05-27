export enum UserRole {
    MEMBER = 'member',
    ADMIN = 'admin',
  }
  
  class User {
    constructor(public email: string, public username: string, public password: string, public role: UserRole) {}
  }
  
  const users: User[] = [];
  
  function addUser(email: string, username: string, password: string, role: UserRole): User {
    const newUser = new User(email, username, password, role);
    users.push(newUser);
    return newUser;
  }
  
  function findUserByEmail(email: string): User | undefined {
    return users.find(user => user.email === email);
  }

  function findUserByUsername(username: string): User | undefined {
    return users.find(user => user.username === username);
  }
  
  function loginUser(email: string, password: string): User | undefined {
    return users.find(user => user.email === email &&  user.password === password);
  }
  
  export { User, addUser, findUserByEmail, findUserByUsername, loginUser };
  