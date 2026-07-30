import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, closest } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective, DragEventArgs, Kanban } from "@syncfusion/ej2-react-kanban";
import { DragAndDropEventArgs } from '@syncfusion/ej2-navigations';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { kanbanData, treeViewData } from './datasource';

class App extends React.Component<{}, {}>{
  public kanbanObj: Kanban | null;
  public treeViewObj: TreeViewComponent | null;
   constructor() {
        super(...arguments);
        this.data = extend([], kanbanData, null, true);
        this.treeData = extend([], treeViewData, null, true);
        this.fields = { dataSource: this.treeData, id: 'Id', text: 'Status' };
        this.allowDragAndDrops = true;
        this.externalKanbanDropId = ["#treeView"];
    }
    private treeTemplate(props: KanbanDataModel): JSX.Element {
        return (<div><div id="treelist"><div id="treeviewlist">{props.Id} - {props.Status}</div>
                </div></div>);
    }
    private onKanbanADragStop(args: DragEventArgs): void {
       let treeViewElement: Element = closest(args.event.target as Element, '#treeView');
          if (treeViewElement) {
              this.kanbanObj.deleteCard(args.data);
              this.treeViewObj.addNodes(args.data);
              args.cancel = true;
          }
    }
    private onTreeDragStop(args: DragAndDropEventArgs): void {
      let kanbanElement: Element = closest(args.event.target as Element, '#Kanban');
          if (kanbanElement) {
              let treeData = this.treeViewObj.fields.dataSource as { [key: string]: Object }[];
              const filteredData =
                  treeData.filter((item: any) => item.Id === parseInt(args.draggedNodeData.id as string, 10));
              this.treeViewObj.removeNodes([args.draggedNodeData.id] as string[]);
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
                            <KanbanComponent id="Kanban" ref={kanban => this.kanbanObj = kanban} keyField="Status" dataSource={this.data} cardSettings={{ contentField: "Summary", headerField: "Id" }} dragStop={this.onKanbanADragStop.bind(this)} externalDropId={this.externalKanbanDropId} >
                                <ColumnsDirective>
                                    <ColumnDirective headerText="To Do" keyField="Open" />
                                    <ColumnDirective headerText="Done" keyField="Close" />
                                </ColumnsDirective>
                            </KanbanComponent>
                      </div>
                    <div className="col-sm-6">
                    <h4>TreeView</h4>
                             <TreeViewComponent id="treeView" ref={treeView => this.treeViewObj = treeView} nodeTemplate={this.treeTemplate.bind(this)} fields={this.fields} nodeDragStop={this.onTreeDragStop.bind(this)} allowDragAndDrop={this.allowDragAndDrops} />
                    </div>
                </div>
            </div>
        </div>
  }
};
ReactDOM.render(<App />, document.getElementById('kanban'));
