const baseUrl = 'http://localhost:3001/api/v1/'

export const createEmployee = employee => {
  fetch(`${baseUrl}employees`, {
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
        localStorage.setItem("user", data.name)
        window.location.href='/home'
      }
    })
}

export const logIn = loginParams => {
  fetch(`${baseUrl}sessions`, {
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
      localStorage.setItem("user", data.name)
      window.location = '/home'
    }
  })
}

export const logOut = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("user_id")
  window.location = 'login'
}
