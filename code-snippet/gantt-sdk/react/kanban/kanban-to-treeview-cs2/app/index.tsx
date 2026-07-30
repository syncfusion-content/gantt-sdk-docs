import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, closest } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective, DragEventArgs, Kanban } from "@syncfusion/ej2-react-kanban";
import { DragAndDropEventArgs } from '@syncfusion/ej2-navigations';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { kanbanData, treeViewData } from './datasource';

function App(){
  let kanbanObj: Kanban | null;
  let treeViewObj: TreeViewComponent | null;
  let data = extend([], kanbanData, null, true);
  let treeData = extend([], treeViewData, null, true);
  let fields = { dataSource: treeData, id: 'Id', text: 'Status' };
  let allowDragAndDrops = true;
  let externalKanbanDropId = ["#treeView"];

  function treeTemplate(props: KanbanDataModel): JSX.Element {
      return (<div><div id="treelist"><div id="treeviewlist">{props.Id} - {props.Status}</div></div></div>);
  }
  function onKanbanADragStop(args: DragEventArgs): void {
      let treeViewElement: Element = closest(args.event.target as Element, '#treeView');
        if (treeViewElement) {
            kanbanObj.deleteCard(args.data);
            treeViewObj.addNodes(args.data);
            args.cancel = true;
        }
  }
  function onTreeDragStop(args: DragAndDropEventArgs): void {
    let kanbanElement: Element = closest(args.event.target as Element, '#Kanban');
        if (kanbanElement) {
            let treeData = treeViewObj.fields.dataSource as { [key: string]: Object }[];
            const filteredData =
                treeData.filter((item: any) => item.Id === parseInt(args.draggedNodeData.id as string, 10));
            treeViewObj.removeNodes([args.draggedNodeData.id] as string[]);
            kanbanObj.openDialog('Add', filteredData[0]);
            args.cancel = true;
        }
  }
  return(
    <div>
      <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6">
              <h4>Kanban</h4>
                  <KanbanComponent id="Kanban" ref={kanban => kanbanObj = kanban} keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} dragStop={onKanbanADragStop.bind(this)} externalDropId={externalKanbanDropId} >
                      <ColumnsDirective>
                          <ColumnDirective headerText="To Do" keyField="Open" />
                          <ColumnDirective headerText="Done" keyField="Close" />
                      </ColumnsDirective>
                  </KanbanComponent>
            </div>
            <div className="col-sm-6">
              <h4>TreeView</h4>
                <TreeViewComponent id="treeView" ref={treeView => treeViewObj = treeView} nodeTemplate={treeTemplate.bind(this)} fields={fields} nodeDragStop={onTreeDragStop.bind(this)} allowDragAndDrop={allowDragAndDrops} />
            </div>
        </div>
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('kanban'));
