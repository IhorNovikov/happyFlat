export async function access(username, password, allUs, allPass) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((allUs.includes(username, 0) && allPass.includes(password, 0)) &&
        (allUs.indexOf(username) === allPass.indexOf(password))
      ) {
        resolve()
      } else {
        reject();
      }
    }, 500);
  });
}