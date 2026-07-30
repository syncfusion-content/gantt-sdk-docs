

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, ToolbarItem }from '@syncfusion/ej2-react-gantt';
import { DragAndDropEventArgs } from '@syncfusion/ej2-navigations';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { closest,addClass } from '@syncfusion/ej2-base';
import { editingData, editingResources } from './datasource';
function  App (){
    let ganttInstance: any;
    const  taskFields: any = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      resourceInfo: 'resources',
      parentID: 'ParentId'
    };
    const resourceFields = {
        id: 'resourceId',
        name: 'resourceName'
    };
    const editSettings = {
      allowEditing: true
    };
    const labelSettings = {
      rightLabel: 'resources'
    };
    const  fields = { dataSource: editingResources, id: 'resourceId', text: 'resourceName' };
    const allowDragAndDrop = true;
    function  nodeDragStop(args: DragAndDropEventArgs): void {
        args.cancel = true;
        let chartEle: any = closest(args.target, '.e-chart-row');
        let gridEle: any = closest(args.target, '.e-row');
        if(gridEle){
          var index = ganttInstance.treeGrid.getRows().indexOf(gridEle);
          ganttInstance.selectRow(index);
        }
        if(chartEle){
          var index = chartEle.rowIndex;
          ganttInstance.selectRow(index);
      }
        let record: any = args.draggedNodeData;
        let selectedData = ganttInstance.flatData[ganttInstance.selectedRowIndex];
        let selectedDataResource = selectedData.taskData.resources;
        let resources = [];
        if (selectedDataResource) {
            for (var i = 0; i < selectedDataResource.length; i++) {
              resources.push(selectedDataResource[i].resourceId);
            }
        }
        resources.push(parseInt(record.id));
        if (chartEle || gridEle) {
            var data = {
                TaskID: selectedData.taskData.TaskID,
                resources: resources
            };
            ganttInstance.updateRecordByID(data);
        }
    };

        return (
          <div>
            <GanttComponent 
              dataSource={editingData} 
              taskFields={taskFields} 
              resources={editingResources} 
              editSettings={editSettings}
              height='450px' 
              resourceFields={resourceFields}  
              labelSettings={labelSettings} 
              ref={gantt => ganttInstance = gantt}
              >
              <Inject services={[ Edit, Selection]} />
            </GanttComponent>
            <TreeViewComponent 
              fields={fields} 
              allowDragAndDrop={allowDragAndDrop} 
              nodeDragStop={nodeDragStop}
            />
        </div>
        );
};
ReactDOM.render(<App />, document.getElementById('root'));


