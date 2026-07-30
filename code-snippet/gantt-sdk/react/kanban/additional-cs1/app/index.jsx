import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
class App extends React.Component {
    data = new DataManager({
        url: 'https://services.syncfusion.com/react/production/api/Kanban',
        adaptor: new ODataAdaptor
    });
    DialogOpen(args) {
        args.cancel = true;
    }
    query = new Query().addParams('ej2kanban', 'true');
    render() {
        return <KanbanComponent id="kanban" keyField="Status" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id" }} query={this.query} allowDragAndDrop={false} dialogOpen={this.DialogOpen.bind(this)}>
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