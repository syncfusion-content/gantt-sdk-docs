import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';
import { KanbanComponent, ColumnsDirective, ColumnDirective, DialogEventArgs } from "@syncfusion/ej2-react-kanban";

class App extends React.Component<{}, {}>{
   public data = new DataManager({
     url: 'https://services.syncfusion.com/react/production/api/Kanban',
        adaptor: new ODataAdaptor,
        crossDomain: true
    });
    private DialogOpen(args: DialogEventArgs): void {
        args.cancel = true;
    }
  render() {
    return <KanbanComponent id="kanban" keyField="Status" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id" }} allowDragAndDrop={false} dialogOpen={this.DialogOpen.bind(this)}>
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open" />
                  <ColumnDirective headerText="In Progress" keyField="InProgress" />
                  <ColumnDirective headerText="Testing" keyField="Testing" />
                  <ColumnDirective headerText="Done" keyField="Close" />
                </ColumnsDirective>
            </KanbanComponent>
  }
};
ReactDOM.render(<App />, document.getElementById('kanban'));
