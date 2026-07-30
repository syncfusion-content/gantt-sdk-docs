import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
function App() {
    return (<KanbanComponent id="kanban" keyField="Status">
          <ColumnsDirective>
            <ColumnDirective headerText="To Do" keyField="Open"/>
            <ColumnDirective headerText="In Progress" keyField="InProgress"/>
            <ColumnDirective headerText="Testing" keyField="Testing"/>
            <ColumnDirective headerText="Done" keyField="Close"/>
          </ColumnsDirective>
      </KanbanComponent>);
}
ReactDOM.render(<App />, document.getElementById('kanban'));
