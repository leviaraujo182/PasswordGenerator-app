import Realm from 'realm'

import PasswordSchema from '../schemas/PasswordSchema'

export default function getRealm(){
    return Realm.open({
        schema: [PasswordSchema],
    });
}