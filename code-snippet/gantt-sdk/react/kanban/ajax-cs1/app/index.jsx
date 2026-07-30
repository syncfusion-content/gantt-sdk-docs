import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Ajax } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
class App extends React.Component {
    kanban;
    componentDidMount() {
        const ajax = new Ajax("https://services.syncfusion.com/react/production/api/Orders", "GET");
        ajax.send();
        ajax.onSuccess = (data) => {
            if (this.kanban) {
                this.kanban.dataSource = JSON.parse(data);
            }
        };
    }
    render() {
        return <KanbanComponent ref={kanban => this.kanban = kanban} id="kanban" keyField="ShipCountry" dataSource={this.data} cardSettings={{ contentField: "ShippedDate", headerField: "OrderID" }}>
                <ColumnsDirective>
                  <ColumnDirective headerText="Denmark" keyField="Denmark"/>
                  <ColumnDirective headerText="Brazil" keyField="Brazil"/>
                  <ColumnDirective headerText="Switzerland" keyField="Switzerland"/>
                  <ColumnDirective headerText="Germany" keyField="Germany"/>
                </ColumnsDirective>
            </KanbanComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('kanban'));