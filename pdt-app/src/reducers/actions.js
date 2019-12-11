const baseUrl = 'http://localhost:3001/api/v1'

export const userPostFetch = employee => {
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
      .then(data => console.log(data))
  }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})


export const logIn = loginParams => {
  return fetch(`${baseUrl}/auth`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(loginParams)
  }).then(res => res.json())
}

/*{
  if (data.message) {
    // Here you should have logic to handle invalid creation of a user.
    // This assumes your Rails API will return a JSON object with a key of
    // 'message' if there is an error with creating the user, i.e. invalid username
  } else {
    localStorage.setItem("token", data.jwt)
    dispatch(loginUser(data.user))
  }
}*/
