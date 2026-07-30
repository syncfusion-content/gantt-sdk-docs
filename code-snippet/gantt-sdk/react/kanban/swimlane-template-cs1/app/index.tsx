import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';

class App extends React.Component<{}, {}>{
   constructor() {
        super(...arguments);
        this.data = extend([], kanbanData, null, true);
    }
    public rowTemplate(props): any {
        var src = props.keyField + '.png';
        return (
            <div className='swimlane-template e-swimlane-template-table'>
                <div className="e-swimlane-row-text"><img src={src} alt={props.keyField} />
                    <span>{props.textField}</span></div>
            </div>
        );
    }
    public template: any = this.rowTemplate;
  render() {
    return <KanbanComponent id="kanban" keyField="Status" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id" }} swimlaneSettings={{ keyField: "Assignee", textField: 'AssigneeName', template: this.template.bind(this) }}>
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
