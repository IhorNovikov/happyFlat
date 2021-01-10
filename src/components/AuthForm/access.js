export async function access(username, password, allUs, allPass) {
  let UserInfo = allUs.map((i, ind) => [i, allPass[ind]].join())
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((allUs.includes(username, 0) && allPass.includes(password, 0)) &&
        UserInfo.find(i => i === [username, password].join()) === [username, password].join()
      ) {
        resolve()
      } else {
        reject();
      }
    }, 500);
  });
}