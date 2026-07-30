import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';

function App(){
    let data = extend([], kanbanData, null, true);
    function rowTemplate(props): any {
        var src = props.keyField + '.png';
        return (
            <div className='swimlane-template e-swimlane-template-table'>
                <div className="e-swimlane-row-text"><img src={src} alt={props.keyField} />
                  <span>{props.textField}</span></div>
            </div>
        );
    }
    let template: any = rowTemplate;
    return(
      <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} swimlaneSettings={{ keyField: "Assignee", textField: 'AssigneeName', template: template.bind(this) }}>
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
