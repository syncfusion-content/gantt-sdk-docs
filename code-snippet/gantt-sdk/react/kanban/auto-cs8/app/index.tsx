import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';

function App(){
    let data = extend([], kanbanData, null, true);
    function OnDataBound(): void {
        let headerEle: HTMLElement = document.querySelector('.e-header-row');
        headerEle.addEventListener("dblclick", function (e: Event) {
            let target = closest(e.target, '.e-header-cells');
            DialogUtility.alert({
                title: 'Header',
                content: "Double clicked on " + target.querySelector('.e-header-text').innerText + " header",
                showCloseIcon: true,
                closeOnEscape: true,
                animationSettings: { effect: 'Zoom' }
            });
        });
    }
    return(
      <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} dataBound={OnDataBound.bind(this)}>
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
