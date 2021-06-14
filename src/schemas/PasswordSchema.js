export default class PasswordSchema {
    static schema = {
        name: 'Passwords',
        primaryKey: 'id',
        properties: {
            id: {type: 'int', indexed: true},
            password: 'string',
        },
    };
}