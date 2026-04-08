async function getUser() {
  try {
    const res = await fetch("/api/user/profile/username");
    const userData = await res.json();
    return userData;
  } catch (err) {
    console.log(err);
  }
}
export default getUser;
