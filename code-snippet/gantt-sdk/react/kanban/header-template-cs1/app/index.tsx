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
    private columnTemplate(props: { [key: string]: string }): JSX.Element {
        return (
            <div className="header-template-wrap">
                <div className={"header-icon e-icons " + props.keyField}></div>
                <div className="header-text">{props.headerText}</div>
            </div>
        );
    }
  render() {
    return <KanbanComponent id="kanban" keyField="Status" cssClass="kanban-header" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id" }}>
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open" template={this.columnTemplate.bind(this)} />
                  <ColumnDirective headerText="In Progress" keyField="InProgress" template={this.columnTemplate.bind(this)} />
                  <ColumnDirective headerText="Review" keyField="Review" template={this.columnTemplate.bind(this)} />
                  <ColumnDirective headerText="Done" keyField="Close" template={this.columnTemplate.bind(this)} />
                </ColumnsDirective>
            </KanbanComponent>
  }
};
ReactDOM.render(<App />, document.getElementById('kanban'));
