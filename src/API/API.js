import axios from "axios";
export const api = {
  signUp: ({ email, password }) => {
    return axios.post("https://pre-onboarding-selection-task.shop/auth/signup", {
      "email": `${email}`,
      "password": `${password}`,
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => { console.log(res); return res; })
  },
  logIn: ({ email, password }) => {
    return axios.post("https://pre-onboarding-selection-task.shop/auth/signin", {
      "email": `${email}`,
      "password": `${password}`,
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    })
  }
}