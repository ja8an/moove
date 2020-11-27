import { auth } from '../config/firebaseConfig';

const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

export { login };