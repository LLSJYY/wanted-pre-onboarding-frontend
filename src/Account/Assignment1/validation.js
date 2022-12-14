export function validUserId(id) {
  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return id.match(emailformat) ? false : true;
}

export function validUserPassword(password) {
  const passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  return password.match(passwordformat) ? false : true;

}