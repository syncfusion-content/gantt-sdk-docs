import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { kanbanData } from './datasource';

class App extends React.Component<{}, {}>{
    private kanbanObj: KanbanComponent;
    private priorityObj: DropDownListComponent;
    constructor() {
        super(...arguments);
        this.data = extend([], kanbanData, null, true);
        this.priorityData = ['None', 'High', 'Normal', 'Low'];
        this.value = 'None';
    }
    change(args: ChangeEventArgs): void {
        let filterQuery: Query = new Query();
        if (args.value !== 'None') {
            if (args.element.id === 'priority') {
                filterQuery = new Query().where('Priority', 'equal', args.value);
            }
        }
        this.kanbanObj.query = filterQuery;
    };
  render() {
    return <div className='control-wrapper'>
             <DropDownListComponent id='priority' ref={(kanban) => { this.priorityObj = kanban; }} dataSource={this.priorityData} change={this.change.bind(this)} value={this.value} placeholder='Select a priority'></DropDownListComponent>
            <KanbanComponent ref={(kanban) => { this.kanbanObj = kanban }} id="kanban" keyField="Status" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id", showHeader: false }}>
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open" />
                  <ColumnDirective headerText="In Progress" keyField="InProgress" />
                  <ColumnDirective headerText="Testing" keyField="Testing" />
                  <ColumnDirective headerText="Done" keyField="Close" />
                </ColumnsDirective>
            </KanbanComponent>
        </div>
  }
};
ReactDOM.render(<App />, document.getElementById('kanban'));
