// backend/models/loginModel.ts
class User {
    constructor(public email: string, public username: string, public password: string) {}
}

const users: User[] = [];

function addUser(email: string, username: string, password: string): User {
    const newUser = new User(email, username, password);
    users.push(newUser);
    return newUser;
}

function findUserByEmail(email: string): User | undefined {
    return users.find(user => user.email === email);
}

function loginUser(email: string, password: string): User | undefined {
    return users.find(user => user.email === email && user.password === password);
}

export { User, addUser, findUserByEmail, loginUser };
