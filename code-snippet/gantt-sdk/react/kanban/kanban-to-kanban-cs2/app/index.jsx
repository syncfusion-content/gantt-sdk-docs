import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, closest } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanAData, kanbanBData } from './datasource';
function App() {
    let kanbanA;
    let kanbanB;
    let dataA = extend([], kanbanAData, null, true);
    let dataB = extend([], kanbanBData, null, true);
    let externalKanbanADropId = ["#KanbanB"];
    let externalKanbanBDropId = ["#KanbanA"];
    function onKanbanADragStop(args) {
        let kanbanBElement = closest(args.event.target, '#KanbanB');
        if (kanbanBElement) {
            kanbanA.deleteCard(args.data);
            args.data.forEach((card, i) => {
                const index = kanbanB.kanbanData.findIndex((colData) => colData[kanbanB.cardSettings.headerField] === card[kanbanB.cardSettings.headerField]);
                if (index !== -1) {
                    card[kanbanB.cardSettings.headerField] = Math.max(...kanbanB.kanbanData.map((obj) => parseInt(obj[kanbanB.cardSettings.headerField], 10))) + ++i;
                }
            });
            kanbanB.addCard(args.data, args.dropIndex);
            args.cancel = true;
        }
    }
    function onKanbanBDragStop(args) {
        let kanbanAElement = closest(args.event.target, '#KanbanA');
        if (kanbanAElement) {
            kanbanB.deleteCard(args.data);
            args.data.forEach((card, i) => {
                const index = kanbanA.kanbanData.findIndex((colData) => colData[kanbanA.cardSettings.headerField] === card[kanbanA.cardSettings.headerField]);
                if (index !== -1) {
                    card[kanbanA.cardSettings.headerField] = Math.max(...kanbanA.kanbanData.map((obj) => parseInt(obj[kanbanA.cardSettings.headerField], 10))) + ++i;
                }
            });
            kanbanA.addCard(args.data, args.dropIndex);
            args.cancel = true;
        }
    }
    return (<div>
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-6">
                <h4>Kanban A</h4>
                    <KanbanComponent id="KanbanA" ref={kanbanA => kanbanA = kanbanA} keyField="Status" dataSource={dataA} cardSettings={{ contentField: "Summary", headerField: "Id" }} dragStop={onKanbanADragStop.bind(this)} externalDropId={externalKanbanADropId}>
                        <ColumnsDirective>
                            <ColumnDirective headerText="To Do" keyField="Open"/>
                            <ColumnDirective headerText="Done" keyField="Close"/>
                        </ColumnsDirective>
                    </KanbanComponent>
              </div>
              <div className="col-sm-6">
                  <h4>Kanban B</h4>
                    <KanbanComponent id="KanbanB" ref={kanbanB => kanbanB = kanbanB} keyField="Status" dataSource={dataB} cardSettings={{ contentField: "Summary", headerField: "Id" }} dragStop={onKanbanBDragStop.bind(this)} externalDropId={externalKanbanBDropId}>
                        <ColumnsDirective>
                            <ColumnDirective headerText="To Do" keyField="Open"/>
                            <ColumnDirective headerText="Done" keyField="Close"/>
                        </ColumnsDirective>
                    </KanbanComponent>
              </div>
          </div>
      </div>
    </div>);
}
ReactDOM.render(<App />, document.getElementById('kanban'));