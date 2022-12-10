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
  },
  initTodo: (accessToken) => {
    return axios.get('https://pre-onboarding-selection-task.shop/todos',
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      }
    )
  },
  addTodo: (accessToken,data) => {
    return axios.post("https://pre-onboarding-selection-task.shop/todos", {
      "todo": data,
    }, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      }
    })
  },
  destoryTodo : (accessToken,id) => {
    return axios.delete(`https://pre-onboarding-selection-task.shop/todos/${id}`, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      }
    },
    )},
}