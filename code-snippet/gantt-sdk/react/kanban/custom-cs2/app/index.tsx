import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataManager } from '@syncfusion/ej2-data';
import { KanbanComponent, ColumnsDirective, ColumnDirective, DialogEventArgs } from "@syncfusion/ej2-react-kanban";
import { TaskIdAdaptor } from './TaskIdAdaptor';

function App(){
   let data = new DataManager({
     url: 'https://services.syncfusion.com/react/production/api/Kanban',
        adaptor: new TaskIdAdaptor
    });
    function DialogOpen(args: DialogEventArgs): void {
        args.cancel = true;
    }
    return(
      <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} allowDragAndDrop={false} dialogOpen={DialogOpen.bind(this)}>
          <ColumnsDirective>
            <ColumnDirective headerText="To Do" keyField="Open" />
            <ColumnDirective headerText="In Progress" keyField="InProgress" />
            <ColumnDirective headerText="Testing" keyField="Testing" />
            <ColumnDirective headerText="Done" keyField="Close" />
          </ColumnsDirective>
      </KanbanComponent>
    );
}
ReactDOM.render(<App />, document.getElementById('kanban'));