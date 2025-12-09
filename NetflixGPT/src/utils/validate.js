const checkValidData = (email, password) => {
  const isMailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isMailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

export default checkValidData;
