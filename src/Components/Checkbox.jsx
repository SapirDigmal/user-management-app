import React from "react";

const Checkbox = ({label, value, dispatch}) => {

    const clickHandler = (clickEvent) => {
        const dispatchType = clickEvent.target.checked ? "SHOW" : "HIDE";
        dispatch({type: dispatchType, columnHeader: label});
    }

    return (<div className="cb">
        <input type="checkbox" id={label} name={label} defaultChecked={value} onClick={clickHandler}/>
        <label>{label}</label>
    </div>);
}

export default Checkbox;