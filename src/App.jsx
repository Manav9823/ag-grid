import './App.css';
import { AgGridReact } from "ag-grid-react";
import { useState, useMemo, useCallback } from 'react';
import { render } from "react-dom";
import BtnCellRendered from './BtnCellRendered';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const App = () => {

  const defaultColDef = useMemo(() => {
    return {
      // editable: true,
      // enableRowGroup: true,
      // enablePivot: true,
      // enableValue: true,
      // sortable: true,
      // resizable: true,
      // filter: true,
      // flex: 1,
      // minWidth: 100,
      flex: 1,
      minWidth: 180,
      filter: true,
      floatingFilter: true,
      sortable: true,
      resizable: true,
    };
  }, []);

  const cellClickedListener = useCallback(
    (e) => {
      console.log("cellClickedListener", e);
    },
    []
  );

  const [rowData] = useState([
    {"athlete":"Michael Phelps","age":23,"country":"United States","year":2008,"date":"24-08-2008","sport":"Swimming","gold":8,"silver":0,"bronze":0,"total":8},
    {"athlete":"Michael Phelps","age":19,"country":"United States","year":2004,"date":"29-08-2004","sport":"Swimming","gold":6,"silver":0,"bronze":2,"total":8},
    {"athlete":"Michael Phelps","age":27,"country":"United States","year":2012,"date":"12-08-2012","sport":"Swimming","gold":4,"silver":2,"bronze":0,"total":6},
    {"athlete":"Natalie Coughlin","age":25,"country":"United States","year":2008,"date":"24-08-2008","sport":"Swimming","gold":1,"silver":2,"bronze":3,"total":6}
  ]);

  const [columnDefs] = useState([
    { 
      field: "athlete",
      cellDataType: 'text' 
    },

    {
       field: "age",
       cellDataType: 'number'
    },
    { 
      field: "gold",
      cellDataType: 'boolean',
      editable : true
    },
    { 
      field: "date",
      cellDataType: 'date' 
    },
    {
      field: "date(string)",
      cellDataType: 'dateString'
    },
    {
      field: "country",
      cellDataType: 'object'
    },
    {
      field: 'clickable',
      cellRenderer: BtnCellRendered,
      cellRendereParams: {
        clicked: function(field) {
          alert(`${field} was clicked`);
        },
      },
    }
  
  ]);
  return (
    <div className="ag-theme-alpine" style={{ height: 800, width: 2000 }}>
    <AgGridReact 
    rowData={rowData} 
    columnDefs={columnDefs}
    pagination={true}
    defaultColDef={defaultColDef}
    onCellClicked={cellClickedListener}
    rowSelection={'multiple'}
    ></AgGridReact>
  </div>
  );
}

export default App;
