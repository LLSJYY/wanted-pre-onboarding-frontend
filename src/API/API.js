import axios from "axios";
const url = "https://pre-onboarding-selection-task.shop"
export const api = {
  signUp: ({ email, password }) => {
    return axios.post(`${url}/auth/signup`, {
      "email": `${email}`,
      "password": `${password}`,
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => { console.log(res); return res; })
  },
  logIn: ({ email, password }) => {
    return axios.post(`${url}/auth/signin`, {
      "email": `${email}`,
      "password": `${password}`,
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    })
  },
  initTodo: (accessToken) => {
    return axios.get(`${url}/todos`,
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`
        }
      }
    )
  },
  addTodo: (accessToken, data) => {
    return axios.post(`${url}/todos`, {
      "todo": data,
    }, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      }
    })
  },
  destoryTodo: (accessToken, id) => {
    return axios.delete(`${url}/todos/${id}`, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
      }
    },
    )
  },
  completedTodo: (accessToken, item) => {
    return axios.put(`https://pre-onboarding-selection-task.shop/todos/${item.id}`, {
      todo: item.todo,
      isCompleted: !item.isCompleted,
    }, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      }
    })  
  },
  modifyTodo : (accessToken,{ item, newTodo }) => {
    return axios.put(`https://pre-onboarding-selection-task.shop/todos/${item.id}`, {
      todo: newTodo,
      isCompleted: item.isCompleted,
    }, {
      headers: {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      }
    })
  },
}