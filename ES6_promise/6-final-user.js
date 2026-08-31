import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName){
    const user = signUpUser(firstName, lastName);
    const photo = uploadPhoto(fileName);
    const promises = [user, photo];
    return Promise.allSettled(promises)
    .then((result) => result.map((item) => (
    {
      status: item.status,
      value: item.value || toString(item.reason)
    })
  )
)
}