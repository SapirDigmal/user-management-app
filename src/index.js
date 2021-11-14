import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

fetch("http://localhost:3001/user", {
    method: 'GET'}).then(function(response) {
    return response.json();
}).then(function(data) {
    ReactDOM.render(
        <React.StrictMode>
            <App usersFromServer={data}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}).catch(e => {
    alert("Please run server first");
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
