export default (username, password) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      if (username === "test" && password === "test") {
        res();
      } else {
        rej(new Error("Invalid credentials supplied, please try again"));
      }
    }, 3000);
  });
