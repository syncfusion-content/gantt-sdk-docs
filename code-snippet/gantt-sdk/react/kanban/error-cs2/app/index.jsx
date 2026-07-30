import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DataManager } from '@syncfusion/ej2-data';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
function App() {
  const kanbanRef = React.useRef(null);
  let data = new DataManager({
    url: 'http://some.com/invalidUrl'
  });
  function onActionFailure(e) {
    const span = document.createElement('span');
    const kanban = kanbanRef.current;
    if (kanban) {
      kanban.element.parentNode.insertBefore(span, kanban.element);
      span.style.color = "#FF0000";
      span.innerHTML = "Server exception: 404 Not found";
    }
  }

  return (<KanbanComponent ref={kanbanRef} id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} actionFailure={onActionFailure.bind(this)}>
    <ColumnsDirective>
      <ColumnDirective headerText="To Do" keyField="Open" />
      <ColumnDirective headerText="In Progress" keyField="InProgress" />
      <ColumnDirective headerText="Testing" keyField="Testing" />
      <ColumnDirective headerText="Done" keyField="Close" />
    </ColumnsDirective>
  </KanbanComponent>);

}
ReactDOM.render(<App />, document.getElementById('kanban'));