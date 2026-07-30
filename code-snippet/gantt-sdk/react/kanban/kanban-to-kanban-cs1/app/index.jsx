import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, closest } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanAData, kanbanBData } from './datasource';
class App extends React.Component {
    kanbanA;
    kanbanB;
    constructor() {
        super(...arguments);
        this.dataA = extend([], kanbanAData, null, true);
        this.dataB = extend([], kanbanBData, null, true);
        this.externalKanbanADropId = ["#KanbanB"];
        this.externalKanbanBDropId = ["#KanbanA"];
    }
    onKanbanADragStop(args) {
        let kanbanBElement = closest(args.event.target, '#KanbanB');
        if (kanbanBElement) {
            this.kanbanA.deleteCard(args.data);
            args.data.forEach((card, i) => {
                const index = this.kanbanB.kanbanData.findIndex((colData) => colData[this.kanbanB.cardSettings.headerField] === card[this.kanbanB.cardSettings.headerField]);
                if (index !== -1) {
                    card[this.kanbanB.cardSettings.headerField] = Math.max(...this.kanbanB.kanbanData.map((obj) => parseInt(obj[this.kanbanB.cardSettings.headerField], 10))) + ++i;
                }
            });
            this.kanbanB.addCard(args.data, args.dropIndex);
            args.cancel = true;
        }
    }
    onKanbanBDragStop(args) {
        let kanbanAElement = closest(args.event.target, '#KanbanA');
        if (kanbanAElement) {
            this.kanbanB.deleteCard(args.data);
            args.data.forEach((card, i) => {
                const index = this.kanbanA.kanbanData.findIndex((colData) => colData[this.kanbanA.cardSettings.headerField] === card[this.kanbanA.cardSettings.headerField]);
                if (index !== -1) {
                    card[this.kanbanA.cardSettings.headerField] = Math.max(...this.kanbanA.kanbanData.map((obj) => parseInt(obj[this.kanbanA.cardSettings.headerField], 10))) + ++i;
                }
            });
            this.kanbanA.addCard(args.data, args.dropIndex);
            args.cancel = true;
        }
    }
    render() {
        return <div>
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-sm-6">
                        <h4>Kanban A</h4>
                            <KanbanComponent id="KanbanA" ref={kanbanA => this.kanbanA = kanbanA} keyField="Status" dataSource={this.dataA} cardSettings={{ contentField: "Summary", headerField: "Id" }} dragStop={this.onKanbanADragStop.bind(this)} externalDropId={this.externalKanbanADropId}>
                                <ColumnsDirective>
                                    <ColumnDirective headerText="To Do" keyField="Open"/>
                                    <ColumnDirective headerText="Done" keyField="Close"/>
                                </ColumnsDirective>
                            </KanbanComponent>
                      </div>
                      <div className="col-sm-6">
                          <h4>Kanban B</h4>
                            <KanbanComponent id="KanbanB" ref={kanbanB => this.kanbanB = kanbanB} keyField="Status" dataSource={this.dataB} cardSettings={{ contentField: "Summary", headerField: "Id" }} dragStop={this.onKanbanBDragStop.bind(this)} externalDropId={this.externalKanbanBDropId}>
                                <ColumnsDirective>
                                    <ColumnDirective headerText="To Do" keyField="Open"/>
                                    <ColumnDirective headerText="Done" keyField="Close"/>
                                </ColumnsDirective>
                            </KanbanComponent>
                      </div>
                  </div>
              </div>
        </div>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('kanban'));