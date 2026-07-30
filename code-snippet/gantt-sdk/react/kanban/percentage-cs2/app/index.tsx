import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';

function App(){
  let data = extend([], kanbanData, null, true);
    return(
      <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} width="100%" height="100%">
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
