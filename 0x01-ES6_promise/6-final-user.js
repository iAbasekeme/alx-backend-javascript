import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [user, photo] = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
    await Promise.allSettled([user, photo]);
    return [
      {
        status: user.status,
        value: user.status,
      },
      {
        status: photo.satus,
        value: photo.status,
      },
    ];
  } catch (error) {
    return [
      { status: 'failure', value: error },
    ];
  }
}
