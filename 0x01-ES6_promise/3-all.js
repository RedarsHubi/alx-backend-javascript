import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([pres, ures]) => { console.log(pres.body, ures.firstName, ures.lastName); })
    .catch(() => console.log('Signup system offline'));
}
