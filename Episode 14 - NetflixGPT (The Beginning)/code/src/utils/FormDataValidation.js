// Email,password (FormDataValidation)

export const FormDataValidation = (email, password) => {
  const emailAddressRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>\-_+=;']).{8,20}$/;

  const confirmEmail = emailAddressRegEx.test(email);
  const confirmPassword = passwordRegEx.test(password);

  if (!confirmEmail) return "Email is not Valid";
  if (!confirmPassword) return "Password is not Valid";
  return null;
};
