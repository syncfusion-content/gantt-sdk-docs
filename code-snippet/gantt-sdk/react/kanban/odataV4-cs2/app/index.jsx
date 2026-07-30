import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
function App() {
    let data = new DataManager({
        url: 'https://services.odata.org/v4/northwind/northwind.svc/Suppliers',
        adaptor: new ODataV4Adaptor
    });
    function DialogOpen(args) {
        args.cancel = true;
    }
    return (<KanbanComponent id="kanban" keyField="ContactTitle" dataSource={data} cardSettings={{ contentField: "ContactName", headerField: "SupplierID" }} allowDragAndDrop={false} dialogOpen={DialogOpen.bind(this)}>
          <ColumnsDirective>
            <ColumnDirective headerText="Order Administrator" keyField="Order Administrator"/>
            <ColumnDirective headerText="Sales Representative" keyField="Sales Representative"/>
            <ColumnDirective headerText="Export Administrator" keyField="Export Administrator"/>
          </ColumnsDirective>
      </KanbanComponent>);
}
ReactDOM.render(<App />, document.getElementById('kanban'));