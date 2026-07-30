import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, closest } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { kanbanData, treeViewData } from './datasource';
class App extends React.Component {
    kanbanObj;
    treeViewObj;
    constructor() {
        super(...arguments);
        this.data = extend([], kanbanData, null, true);
        this.treeData = extend([], treeViewData, null, true);
        this.fields = { dataSource: this.treeData, id: 'Id', text: 'Status' };
        this.allowDragAndDrops = true;
        this.externalKanbanDropId = ["#treeView"];
    }
    treeTemplate(props) {
        return (<div><div id="treelist"><div id="treeviewlist">{props.Id} - {props.Status}</div>
                </div></div>);
    }
    onKanbanADragStop(args) {
        let treeViewElement = closest(args.event.target, '#treeView');
        if (treeViewElement) {
            this.kanbanObj.deleteCard(args.data);
            this.treeViewObj.addNodes(args.data);
            args.cancel = true;
        }
    }
    onTreeDragStop(args) {
        let kanbanElement = closest(args.event.target, '#Kanban');
        if (kanbanElement) {
            let treeData = this.treeViewObj.fields.dataSource;
            const filteredData = treeData.filter((item) => item.Id === parseInt(args.draggedNodeData.id, 10));
            this.treeViewObj.removeNodes([args.draggedNodeData.id]);
            this.kanbanObj.openDialog('Add', filteredData[0]);
            args.cancel = true;
        }
    }
    render() {
        return <div>
          <div className="container-fluid">
                  <div className="row">
                      <div className="col-sm-6">
                        <h4>Kanban</h4>
                            <KanbanComponent id="Kanban" ref={kanban => this.kanbanObj = kanban} keyField="Status" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id" }} dragStop={this.onKanbanADragStop.bind(this)} externalDropId={this.externalKanbanDropId}>
                                <ColumnsDirective>
                                    <ColumnDirective headerText="To Do" keyField="Open"/>
                                    <ColumnDirective headerText="Done" keyField="Close"/>
                                </ColumnsDirective>
                            </KanbanComponent>
                      </div>
                    <div className="col-sm-6">
                    <h4>TreeView</h4>
                             <TreeViewComponent id="treeView" ref={treeView => this.treeViewObj = treeView} nodeTemplate={this.treeTemplate.bind(this)} fields={this.fields} nodeDragStop={this.onTreeDragStop.bind(this)} allowDragAndDrop={this.allowDragAndDrops}/>
                    </div>
                </div>
            </div>
        </div>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('kanban'));