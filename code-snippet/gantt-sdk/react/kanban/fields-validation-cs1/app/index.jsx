import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.data = extend([], kanbanData, null, true);
    }
    fields = [
        { text: 'ID', key: 'Id', type: 'Input' },
        { key: 'Status', type: 'DropDown' },
        { key: 'Estimate', type: 'Numeric', validationRules: { range: [0, 1000] } },
        { key: 'Summary', type: 'TextArea', validationRules: { required: true } }
    ];
    render() {
        return <KanbanComponent id="kanban" keyField="Status" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id" }} dialogSettings={{ fields: this.fields }}>
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open"/>
                  <ColumnDirective headerText="In Progress" keyField="InProgress"/>
                  <ColumnDirective headerText="Testing" keyField="Testing"/>
                  <ColumnDirective headerText="Done" keyField="Close"/>
                </ColumnsDirective>
            </KanbanComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('kanban'));