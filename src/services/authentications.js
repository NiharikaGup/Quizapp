const storeUser = (data) => {
  let users = window.localStorage.getItem("users")
    ? JSON.parse(window.localStorage.getItem("users"))
    : [];
  if (users && users.length) {
    users.push(data);
    window.localStorage.setItem("users", JSON.stringify(data));
  } else {
    window.localStorage.setItem("users", JSON.stringify([data]));
  }
};

const loginCheck = (data) => {
  let users = window.localStorage.getItem("users")
    ? JSON.parse(window.localStorage.getItem("users"))
    : [];

  let user = users.find(
    (item) => item.name === data.name && item.password === data.password
  );
  if (user) {
    window.localStorage.setItem("userInfo", JSON.stringify(user));
    return { status: true, data: user, message: "Login Success" };
  }
  return {
    status: false,
    error: "Please check email or password.",
    message: "Login Failed",
  };
};

export { storeUser, loginCheck };
