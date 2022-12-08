import axios from "axios";
const url = 'https://pre-onboarding-selection-task.shop/';

export const api = {
  signup: ({ email, password }) => {
    axios.post("https://pre-onboarding-selection-task.shop/auth/signup", {
      "email": `${email}`,
      "password": `${password}`,
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.warn(err);
    }
    );
  },
  login: ({ email, password }) => {
    axios.post("https://pre-onboarding-selection-task.shop/auth/signin", {
      "email": `${email}`,
      "password": `${password}`,
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    }).then((res) => {
      localStorage.setItem('wtd_tk', res.data.access_token);
    }).catch((err) => {
      alert(JSON.parse(err.request.response).message); /* todo: id/pw 검증 분할 */
    })
  }
}