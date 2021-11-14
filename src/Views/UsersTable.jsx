import React, {useReducer} from "react";
import ColumnToggleContainer from "./ColumnToggleContainer";
import Table from "../Components/Table";

const tableColumnsReducer = (state, action) => {
    const newTableColumns = new Map(state.tableColumns);

    switch(action.type) {
        case 'SHOW': {
            newTableColumns.set(action.columnHeader, {show: true});
            return {tableColumns: newTableColumns}
        }
        case 'HIDE': {
            newTableColumns.set(action.columnHeader, {show: false});
            return {tableColumns: newTableColumns}
        }
        default:
            return state
    }
};

const UsersTable = ({tableColumns, tableRows, searchTerm}) => {
    const [tableColumnState, dispatchTableColumn] = useReducer(tableColumnsReducer, {tableColumns: tableColumns});

    return (<>
        <ColumnToggleContainer colHeaders={tableColumnState.tableColumns} dispatch={dispatchTableColumn}/>
        <Table colHeaders={tableColumnState.tableColumns} rows={tableRows} filterRows={searchTerm}/>
    </>);
};

export default UsersTable;