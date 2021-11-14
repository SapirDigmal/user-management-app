import './App.css';
import React, {useReducer, useState} from "react";
import UsersTable from "./Views/UsersTable";
import SearchTable from "./Views/SearchTable";
import useModal from "./Components/Modal/useModal";
import Modal from "./Components/Modal/Modal";
import NewUserForm from "./Views/NewUserForm";
import {formatDate} from "./helperMethods";

const searchReducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {searchTerm: action.searchTerm};
        case 'CLEAR':
            return {searchTerm: ""};
        default:
            return state
    }
}

const newUserReducer = (state, action) => {
    switch(action.type) {
        case 'NEW_USER':
            return {newUser: [...action.newUser]};
        default:
            return state
    }
}

function App({usersFromServer}) {
    const colHeadersInf = usersFromServer.users[0].map(userData => userData.key); //["Date", "Name", "Address"];
    const colHeaders = colHeadersInf.reduce((colMap, currentCol) => {
        colMap.set(currentCol, {show: true});
        return colMap;
    }, new Map());

    const [rows, setRows] = useState(usersFromServer.users.map(userData => ({cells: userData}))); //{cells: [{key: "Date", value: "2016-05-02"}, {key: "Name", value: "Sapir"}, {key: "Address", value: "Tel-Aviv, Israel"}]}

    const [searchState, dispatchSearch] = useReducer(searchReducer, {searchTerm: ""});
    const [newUser, dispatchNewUser] = useReducer(newUserReducer, {newUser: [{key: "Name", value: ""},
            {key: "Address", value: ""}]});
    const {isShowing, toggleModal} = useModal();

    const saveUser = () => {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const userWithDate = [{key: "Date", value: formatDate(today, 'yyyy-mm-dd')}].concat(newUser.newUser);
        setRows([...rows, {cells:userWithDate}]);
        fetch("http://localhost:3001/user", {method: "POST", headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({user: userWithDate})});
    }

    return (
        <div className="App">
            <div className="header">
                <div className="r-header">
                    <SearchTable dispatch={dispatchSearch}/>
                    <button onClick={toggleModal}><span>Add user</span></button>
                    <Modal isShowing={isShowing} hide={toggleModal} save={saveUser} title="Add user">
                        <NewUserForm dispatchNewUser={dispatchNewUser} />
                    </Modal>
                </div>
            </div>
            <div className="content">
                <UsersTable tableColumns={colHeaders} tableRows={rows} searchTerm={searchState.searchTerm}/>
                <UsersTable tableColumns={colHeaders} tableRows={rows}/>
            </div>
        </div>
    );
}

export default App;
