const baseUrl = 'http://localhost:3001/api/v1'

export const createEmployee = employee => {
  return dispatch => {
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
          // Add logic to handle invalid creation of a user
        } else {
          localStorage.setItem("token", data.auth_token)
          dispatch(loginUser(data.user))
        }
      })
  }
}



const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})


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
    }
  })
}

export const logOut = () => {
  console.log("Logged Out!")
  return fetch(`${baseUrl}/api/v1/sessions`, {
    method: 'DELETE',
    credentials: 'include'
  }).then(res => res.json())
}
