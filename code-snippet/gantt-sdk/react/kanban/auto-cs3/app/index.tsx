import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { kanbanData } from './datasource';

class App extends React.Component<{}, {}>{
    private kanbanObj: KanbanComponent;
   constructor() {
        super(...arguments);
        this.data = extend([], kanbanData, null, true);
    }
    particularColumn() {
        this.kanbanObj.columns[1].allowToggle= true;
    }
    column() {
      this.kanbanObj.columns = [
        { headerText: 'To Do', keyField: 'Open' },
        { headerText: 'Done', keyField: 'Close' }
      ]
    }
  render() {
    return <div className='control-wrapper'>
                <ButtonComponent id='particularColumn' className="e-btn" onClick={this.particularColumn.bind(this)} >Enable Allow Toggle</ButtonComponent>
                <ButtonComponent id='column' className="e-btn" onClick={this.column.bind(this)}>Change Columns</ButtonComponent>
                <KanbanComponent id="kanban" keyField="Status" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id" }} ref={(kanban) => { this.kanbanObj = kanban }}>
                    <ColumnsDirective>
                        <ColumnDirective headerText="To Do" keyField="Open"/>
                        <ColumnDirective headerText="In Progress" keyField="InProgress"/>
                        <ColumnDirective headerText="Testing" keyField="Testing"/>
                        <ColumnDirective headerText="Done" keyField="Close"/>
                    </ColumnsDirective>
                </KanbanComponent>
            </div>
  }
};
ReactDOM.render(<App />, document.getElementById('kanban'));
