import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const [user, photo] = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled([user, photo]).then((i) => {
    i.map((item) => ({
      status: item.status,
      value: item.status === 'fulfilled' ? item.value : item.reason,
    }));
  });
}
