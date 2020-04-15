/*
 * action creators
 */
import axios from "axios";

// const apphostname = () => <h1>{process.env.apphostname}</h1>;

var myaxios = axios.create({
  baseURL: "http://" + process.env.REACT_APP_API_HOST_IP + ":8080",
  responseType: "json"
});

export function getUserList(dispatch) {
    console.log("action.js - getUserList() called ");

    // Make a request for a user with a given ID
    myaxios.get('/demo/all')
    .then(function (response) {
        // handle success
        console.log(response);
        dispatch({ type: "get_user", text: "I want to get sth 2. ", users: response.data});
        // TODO: how to wait for the result to send to reducers ? 
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });    

    // return { type: "get", text: "I want to get sth 2. " }
}

export function addUser(dispatch, name) {
    console.log("action.js - addUser() called ");
    console.log("action.js - addUser() called name: " , name);

    // Make a request for a user with a given ID

    myaxios.post('/demo/add?name=' + name + '&email=' + name + '@gmail.com', {})
      .then(function (response) {
        console.log(response);

        getUserList(dispatch);

      })
      .catch(function (error) {
        console.log(error);
      });

    // return { type: "get", text: "I want to get sth 2. " }
}


  
// export function increment(index) {
//     return { type: "increment", text: "I want to increment sth." }
// }
  
