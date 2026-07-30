import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';
function App() {
    let data = extend([], kanbanData, null, true);
    function columnTemplate(props) {
        return (<div className="header-template-wrap">
              <div className={"header-icon e-icons " + props.keyField}></div>
              <div className="header-text">{props.headerText}</div>
          </div>);
    }
    return (<KanbanComponent id="kanban" keyField="Status" cssClass="kanban-header" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }}>
          <ColumnsDirective>
            <ColumnDirective headerText="To Do" keyField="Open" template={columnTemplate.bind(this)}/>
            <ColumnDirective headerText="In Progress" keyField="InProgress" template={columnTemplate.bind(this)}/>
            <ColumnDirective headerText="Review" keyField="Review" template={columnTemplate.bind(this)}/>
            <ColumnDirective headerText="Done" keyField="Close" template={columnTemplate.bind(this)}/>
          </ColumnsDirective>
      </KanbanComponent>);
}
ReactDOM.render(<App />, document.getElementById('kanban'));