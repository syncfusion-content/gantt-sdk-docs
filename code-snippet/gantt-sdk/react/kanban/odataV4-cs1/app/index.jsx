import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
class App extends React.Component {
    data = new DataManager({
        url: 'https://services.odata.org/v4/northwind/northwind.svc/Suppliers',
        adaptor: new ODataV4Adaptor
    });
    DialogOpen(args) {
        args.cancel = true;
    }
    render() {
        return <KanbanComponent id="kanban" keyField="ContactTitle" dataSource={this.data} cardSettings={{ contentField: "ContactName", headerField: "SupplierID" }} allowDragAndDrop={false} dialogOpen={this.DialogOpen.bind(this)}>
                <ColumnsDirective>
                  <ColumnDirective headerText="Order Administrator" keyField="Order Administrator"/>
                  <ColumnDirective headerText="Sales Representative" keyField="Sales Representative"/>
                  <ColumnDirective headerText="Export Administrator" keyField="Export Administrator"/>
                </ColumnsDirective>
            </KanbanComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('kanban'));