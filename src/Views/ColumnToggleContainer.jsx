import Checkbox from "../Components/Checkbox";
import React from "react";

const ColumnToggleContainer = ({colHeaders, dispatch}) => {
    return (<div className="cb-container">
        {Array.from(colHeaders.keys()).map(header =>
            <Checkbox key={header} label={header} value={colHeaders.get(header).show} dispatch={dispatch}/>)}
    </div>);
}

export default ColumnToggleContainer;