import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [user, photo] = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
    Promise.all([user, photo]);
    return [
      {
        status: 'success',
        value: user,
      },
      {
        status: 'success',
        value: photo,
      },
    ];
  } catch (error) {
    return [
      { status: 'failure', value: error },
      { status: (error.name === 'UploadError') ? 'failure' : 'pending' },
    ];
  }
}
