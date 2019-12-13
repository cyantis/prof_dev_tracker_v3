const baseUrl = 'http://localhost:3001/api/v1'

export const createEmployee = employee => {
  return fetch(`${baseUrl}/employees`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({employee})
  })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        // Add logic to handle invalid login
      } else {
        localStorage.setItem("token", data.auth_token)
        localStorage.setItem("user_id", data.user_id)
        localStorage.setItem("isManager", data.manager)
        window.location.href='/home'
      }
    })
}

//const loginUser = userObj => ({
//    type: 'LOGIN_USER',
//    payload: userObj
//})


export const logIn = loginParams => {
  return fetch(`${baseUrl}/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(loginParams)
  }).then(res => res.json())
  .then(data => {
    if (data.message) {
      // Add logic to handle invalid login
    } else {
      localStorage.setItem("token", data.auth_token)
      localStorage.setItem("user_id", data.user_id)
      localStorage.setItem("isManager", data.manager)
      window.location.href='/home'
    }
  })
}

export const logOut = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("user_id")
  window.location.href='/login'
}
