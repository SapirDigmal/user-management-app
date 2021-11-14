import React from "react";

const Table = ({colHeaders, rows, filterRows}) => {
    const isTableEmpty = Array.from(colHeaders.keys()).find(header => colHeaders.get(header).show);
    const filteredRows = !filterRows || filterRows === "" ? rows : rows.filter(row => row.cells.some(cell => cell.value.includes(filterRows)));

    return (isTableEmpty ? <table className="usersTable">
        <thead>
        <tr>
            {
                Array.from(colHeaders.keys()).map((header) => colHeaders.get(header).show &&
                    <th key={header}>{header}</th>)
            }
        </tr>
        </thead>
        <tbody>
        {
            filteredRows.map((row, idx) =>
                <tr key={idx}>
                    {row.cells.map(cell => colHeaders.get(cell.key).show &&
                        <td key={idx+"-"+cell.value}>{cell.value}</td>)}
                </tr>)
        }
        </tbody>
    </table> : false)
}

export default Table;