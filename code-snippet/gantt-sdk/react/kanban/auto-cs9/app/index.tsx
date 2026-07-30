import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent, InputEventArgs } from '@syncfusion/ej2-react-inputs';
import { Query } from '@syncfusion/ej2-data';
import { kanbanData } from './datasource';

class App extends React.Component<{}, {}>{
    private textBoxObj: TextBoxComponent;
    private kanbanObj: KanbanComponent;
    constructor() {
        super(...arguments);
        this.data = extend([], kanbanData, null, true);
    }
    searchClick(e: InputEventArgs): void {
        let searchValue: string = e.value;
        let searchQuery: Query = new Query();
        if (searchValue !== '') {
            searchQuery = new Query().search(searchValue, ['Id', 'Summary'], 'contains', true);
        }
        this.kanbanObj.query = searchQuery;
    };
    reset(): void {
        this.textBoxObj.value = '';
        this.kanbanObj.query = new Query();
    };
  render() {
    return <div className='control-wrapper'>
             <table>
                <tbody>
                    <td style={{ width: '200px' }}>
                         <TextBoxComponent id="search" ref={(kanban) => { this.textBoxObj = kanban; }} showClearButton={true} placeholder="Enter search text" input={this.searchClick.bind(this)}/>
                    </td>
                    <td>
                    <ButtonComponent id='reset' className="e-btn" onClick={this.reset.bind(this)}>Reset</ButtonComponent></td>
                </tbody>
            </table>
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
