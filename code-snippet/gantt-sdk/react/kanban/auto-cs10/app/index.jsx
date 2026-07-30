import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { Query } from '@syncfusion/ej2-data';
import { kanbanData } from './datasource';
function App() {
    let textBoxObj;
    let kanbanObj;
    let data = extend([], kanbanData, null, true);
    function searchClick(e) {
        let searchValue = e.value;
        let searchQuery = new Query();
        if (searchValue !== '') {
            searchQuery = new Query().search(searchValue, ['Id', 'Summary'], 'contains', true);
        }
        kanbanObj.query = searchQuery;
    }
    ;
    function reset() {
        textBoxObj.value = '';
        kanbanObj.query = new Query();
    }
    ;
    return (<div className='control-wrapper'>
        <table>
            <tbody>
                <td>
                    <TextBoxComponent id="search" ref={(kanban) => { textBoxObj = kanban; }} showClearButton={true} placeholder="Enter search text" input={searchClick.bind(this)}/>
                </td>
                <td>
                <ButtonComponent id='reset' className="e-btn" onClick={reset.bind(this)}>Reset</ButtonComponent></td>
            </tbody>
        </table>
        <KanbanComponent ref={(kanban) => { kanbanObj = kanban; }} id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id", showHeader: false }}>
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