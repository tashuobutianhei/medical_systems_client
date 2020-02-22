
import {get, post} from '../common/client';

// type login = (username: string, password: string) => new Promise<T>()

const userClient =  {
  login(username: string, password: string) {
    return post('/users/login', {
        username: username,
        password: password,
      })
    }
};

export default userClient;