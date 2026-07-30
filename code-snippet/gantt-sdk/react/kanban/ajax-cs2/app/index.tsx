import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Ajax } from '@syncfusion/ej2-base';
import { useEffect } from "react";
import { KanbanComponent, ColumnsDirective, ColumnDirective, Kanban } from "@syncfusion/ej2-react-kanban";

function App(){
  let kanbanObj: KanbanComponent|null;
  React.useEffect(() => {
    const ajax = new Ajax("https://services.syncfusion.com/react/production/api/Orders", "GET");
     ajax.send();
     ajax.onSuccess = (data: any) => {
       if (kanbanObj) {
        kanbanObj.dataSource = JSON.parse(data);
       }
     }
   });
   return(
     <KanbanComponent ref={(kanban) => { kanbanObj = kanban }} id="kanban" keyField="ShipCountry" cardSettings={{ contentField: "ShippedDate", headerField: "OrderID" }}>
       <ColumnsDirective>
         <ColumnDirective headerText="Denmark" keyField="Denmark" />
         <ColumnDirective headerText="Brazil" keyField="Brazil" />
         <ColumnDirective headerText="Switzerland" keyField="Switzerland" />
         <ColumnDirective headerText="Germany" keyField="Germany" />
       </ColumnsDirective>
     </KanbanComponent>
   );
}
ReactDOM.render(<App />, document.getElementById('kanban'));
