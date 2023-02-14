const apiIP: string = `https://api.ipify.org?format=json`
const apiNames: string = `https://random-data-api.com/api/users/random_user`
const apiUser: string = ` https://random-data-api.com/api/users/random_user`

/*          task 1          */
fetch(apiIP)
  .then(res => res.json())
  .then(data => console.log(data.ip))
  .catch(err => console.log(err))

/*        task 2        */
async function fetchIP(): Promise<string> {
  return await fetch(apiIP)
    .then(res => res.json())
    .then(date => date.ip)
    .catch(err => console.log(err))
}
//test
// fetchIP().then(ip => console.log("fetchIP", ip))

/*    task 3   in Event loop, Promises, async/await    */

async function fetchUser(): Promise<any> {
  try {
    const res = await fetch(apiNames)
    return await res.json()
  } catch (err) {
    return console.log(err)
  }
}
// 3.1  async/await + Promise.all aap
async function aapFetchNames(numOfNames: number = 1): Promise<string[]> {
  return await Promise.all(
    Array(numOfNames)
      .fill(null)
      .map(async () => {
        const user = await fetchUser()
        return user.first_name
      })
  )
}
//test
// aapFetchNames(3).then(name => console.log("aapFetchNames", name))

//3.2 async/await aa
async function aaFetchNames(numOfNames: number = 1): Promise<string[]> {
  const names: string[] = []
  for (let i = 0; i < numOfNames; i++) {
    const user = await fetchUser()
    names.push(user.first_name)
  }
  return names
}
//test
// aaFetchNames(3).then(name => console.log("aaFetchNames", name))

// 3.3 Promises p
function getUserPromise(): Promise<any> {
  return fetch(apiNames)
    .then(data => data.json())
    .then(user => user.first_name)
    .catch(err => err)
}
//test
// getUserPromise().then(user => console.log(user))

function pFetchNames(numOfNames: number = 1): Promise<any> {
  return new Promise((resolve, reject) => {
    const names: Promise<string>[] = []
    try {
      for (let i = 0; i < numOfNames; i++) {
        getUserPromise().then(name => names.push(name))
      }
      resolve(names)
    } catch (err) {
      reject(err)
    }
  })
}
//test
// pFetchNames(3).then(name => console.log("pFetchNames", name.first_name))

/*                 task4                 */
// 4.1 fetch user woman, for the lowest count of tries    with async/await
async function aafetchFirstUserWoman(): Promise<any> {
  let count = 0
  let data = await fetch(apiUser)
  let user = await data.json()

  while (user.gender !== "Female") {
    data = await fetch(apiUser)
    user = await data.json()
    ++count
  }
  return {
    user: {
      name: user.first_name,
      gender: user.gender,
    },
    fetchCounts: count,
  }
}
//test
// aafetchFirstUserWoman().then(user => console.log(user))

// 4.2 fetch user woman, for the lowest count of tries    without async/await

function fetchFirstUserWoman(fetchCountss: number = 1): Promise<any> {
  return fetch(apiUser)
    .then(res => res.json())
    .then(data =>
      data.gender === "Female"
        ? {
            user: { username: data.username, gender: data.gender },
            fetchCountss,
          }
        : fetchFirstUserWoman(++fetchCountss)
    )
}
//test
// fetchFirstUserWoman().then(name => console.log(name))

/*               task5                  */
function myIP1(callback: (value: string) => void): void {
  fetchIP().then(ip => callback(ip))
}
async function showIP() {
  myIP1(value => console.log(value))
}
//test
// showIP()

/*                 task6                 */
async function myIP2(): Promise<string> {
  const res = await fetch(apiIP)
  const data = await res.json()
  return data.ip
}

async function getIP(callback: (value: string) => void): Promise<void> {
  const ip = await myIP2()
  callback(ip)
}
//test
// getIP(value => console.log(value))
