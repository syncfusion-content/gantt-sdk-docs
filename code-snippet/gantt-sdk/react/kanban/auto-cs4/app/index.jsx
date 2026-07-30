import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { kanbanData } from './datasource';
function App() {
    let data = extend([], kanbanData, null, true);
    let kanbanObj;
    function particularColumn() {
        kanbanObj.columns[1].allowToggle = true;
    }
    function column() {
        kanbanObj.columns = [
            { headerText: 'To Do', keyField: 'Open' },
            { headerText: 'Done', keyField: 'Close' }
        ];
    }
    return (<div className='control-wrapper'>
        <ButtonComponent id='particularColumn' className="e-btn" onClick={particularColumn.bind(this)}>Enable Allow Toggle</ButtonComponent>
        <ButtonComponent id='column' className="e-btn" onClick={column.bind(this)}>Change Columns</ButtonComponent>
        <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} ref={(kanban) => { kanbanObj = kanban; }}>
            <ColumnsDirective>
                <ColumnDirective headerText="To Do" keyField="Open"/>
                <ColumnDirective headerText="In Progress" keyField="InProgress"/>
                <ColumnDirective headerText="Testing" keyField="Testing"/>
                <ColumnDirective headerText="Done" keyField="Close"/>
            </ColumnsDirective>
        </KanbanComponent>
      </div>);
}
ReactDOM.render(<App />, document.getElementById('kanban'));