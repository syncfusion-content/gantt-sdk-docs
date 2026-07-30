import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';

function App(){
  let data = extend([], kanbanData, null, true);
  return(
    <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} enablePersistence={true} swimlaneSettings={{ keyField: "Assignee" }}>
        <ColumnsDirective>
          <ColumnDirective headerText="To Do" keyField="Open" allowToggle={true} />
          <ColumnDirective headerText="In Progress" keyField="InProgress" allowToggle={true} />
          <ColumnDirective headerText="Testing" keyField="Testing" allowToggle={true} />
          <ColumnDirective headerText="Done" keyField="Close" allowToggle={true} />
        </ColumnsDirective>
    </KanbanComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('kanban'));
