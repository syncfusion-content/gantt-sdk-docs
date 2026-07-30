import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { Query } from '@syncfusion/ej2-data';
import { kanbanData } from './datasource';

function App(){
    let kanbanObj: KanbanComponent;
    let priorityObj: DropDownListComponent;
    let data = extend([], kanbanData, null, true);
    let priorityData = ['None', 'High', 'Normal', 'Low'];
    let value = 'None';
    function change(args: ChangeEventArgs): void {
        let filterQuery: Query = new Query();
        if (args.value !== 'None') {
            if (args.element.id === 'priority') {
                filterQuery = new Query().where('Priority', 'equal', args.value);
            }
        }
        kanbanObj.query = filterQuery;
    };
    return(
        <div className='control-wrapper'>
             <DropDownListComponent id='priority' ref={(kanban) => { priorityObj = kanban; }} dataSource={priorityData} change={change.bind(this)} value={value} placeholder='Select a priority'></DropDownListComponent>
            <KanbanComponent ref={(kanban) => { kanbanObj = kanban }} id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id", showHeader: false }}>
                <ColumnsDirective>
                  <ColumnDirective headerText="To Do" keyField="Open" />
                  <ColumnDirective headerText="In Progress" keyField="InProgress" />
                  <ColumnDirective headerText="Testing" keyField="Testing" />
                  <ColumnDirective headerText="Done" keyField="Close" />
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('kanban'));
