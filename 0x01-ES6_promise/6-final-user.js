import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const photo = uploadPhoto(fileName);
  const user = signUpUser(firstName, lastName);

  return Promise.allSettled([photo, user])
    .then(([pres, ures]) => [
      {
        status: pres.status,
        value: pres.status === 'fulfilled' ? pres.value : pres.reason,
      },
      {
        status: ures.status,
        value: ures.status === 'fulfilled' ? ures.value : ures.reason,
      },
    ]);
}
