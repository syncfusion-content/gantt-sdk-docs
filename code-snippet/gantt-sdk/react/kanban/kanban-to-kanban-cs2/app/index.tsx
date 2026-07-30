
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, closest } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective, DragEventArgs, Kanban } from "@syncfusion/ej2-react-kanban";
import { kanbanAData, kanbanBData } from './datasource';

function App(){
  let kanbanA: Kanban | null;
  let kanbanB: Kanban | null;
  let dataA = extend([], kanbanAData, null, true);
  let dataB = extend([], kanbanBData, null, true);
  let externalKanbanADropId = ["#KanbanB"];
  let externalKanbanBDropId = ["#KanbanA"];
  function onKanbanADragStop(args: DragEventArgs): void {
    let kanbanBElement: Element = closest(args.event.target as Element, '#KanbanB');
    if (kanbanBElement) {
      kanbanA.deleteCard(args.data);
      args.data.forEach((card: Record<string, any>, i: number) => {
          const index: number = kanbanB.kanbanData.findIndex((colData: Record<string, any>) =>
              colData[kanbanB.cardSettings.headerField] === card[kanbanB.cardSettings.headerField]);
          if (index !== -1) {
              card[kanbanB.cardSettings.headerField] = Math.max(...kanbanB.kanbanData.map(
                  (obj: Record<string, string>) => parseInt(obj[kanbanB.cardSettings.headerField], 10))) + ++i;
          }
      });
      kanbanB.addCard(args.data, args.dropIndex);
      args.cancel = true;
    }
  }
  function onKanbanBDragStop(args: DragEventArgs): void {
      let kanbanAElement: Element = closest(args.event.target as Element, '#KanbanA');
      if (kanbanAElement) {
        kanbanB.deleteCard(args.data);
        args.data.forEach((card: Record<string, any>, i: number) => {
            const index: number = kanbanA.kanbanData.findIndex((colData: Record<string, any>) =>
                colData[kanbanA.cardSettings.headerField] === card[kanbanA.cardSettings.headerField]);
            if (index !== -1) {
                card[kanbanA.cardSettings.headerField] = Math.max(...kanbanA.kanbanData.map(
                    (obj: Record<string, string>) => parseInt(obj[kanbanA.cardSettings.headerField], 10))) + ++i;
            }
        });
        kanbanA.addCard(args.data, args.dropIndex);
        args.cancel = true;
      }
  }
  return(
    <div>
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-6">
                <h4>Kanban A</h4>
                    <KanbanComponent id="KanbanA" ref={kanbanA => kanbanA = kanbanA} keyField="Status" dataSource={dataA} cardSettings={{ contentField: "Summary", headerField: "Id" }} dragStop={onKanbanADragStop.bind(this)} externalDropId={externalKanbanADropId}>
                        <ColumnsDirective>
                            <ColumnDirective headerText="To Do" keyField="Open" />
                            <ColumnDirective headerText="Done" keyField="Close" />
                        </ColumnsDirective>
                    </KanbanComponent>
              </div>
              <div className="col-sm-6">
                  <h4>Kanban B</h4>
                    <KanbanComponent id="KanbanB" ref={kanbanB => kanbanB = kanbanB} keyField="Status" dataSource={dataB} cardSettings={{ contentField: "Summary", headerField: "Id" }} dragStop={onKanbanBDragStop.bind(this)} externalDropId={externalKanbanBDropId}>
                        <ColumnsDirective>
                            <ColumnDirective headerText="To Do" keyField="Open" />
                            <ColumnDirective headerText="Done" keyField="Close" />
                        </ColumnsDirective>
                    </KanbanComponent>
              </div>
          </div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('kanban'));
