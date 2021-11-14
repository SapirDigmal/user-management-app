import React from "react";

const SearchTable = ({dispatch}) => {
    const onChangeHandler = (changeEvent) => {
        const dispatchType = changeEvent.target.value.trim() === "" ? 'CLEAR' : 'SEARCH';
        dispatch({type: dispatchType, searchTerm: changeEvent.target.value});
    };

    return (<input type="text" placeholder="Search table" onChange={onChangeHandler}/>)
}

export default SearchTable;