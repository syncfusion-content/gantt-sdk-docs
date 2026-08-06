import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { TreeView, DragAndDropEventArgs } from '@syncfusion/ej2-navigations';
import { editingData, editingResources } from './datasource.ts';
import { closest } from '@syncfusion/ej2-base';

Gantt.Inject(Edit, Selection);

let treeObj: TreeView = new TreeView({
    fields: { dataSource: editingResources, id: 'resourceId', text: 'resourceName' },
    allowDragAndDrop: true,
    height: "200px",
    nodeDragStop: function (args: DragAndDropEventArgs): void {
        args.cancel= true;
        let ganttObj: any = document.getElementById('Gantt').ej2_instances[0];
        let chartEle: any = closest(args.target, '.e-chart-row');
        let gridEle: any = closest(args.target, '.e-row');
        if(gridEle){
          var index = ganttObj.treeGrid.getRows().indexOf(gridEle);
          ganttObj.selectRow(index);
        }
        if (chartEle) {
            var index = chartEle.rowIndex;
            ganttObj.selectRow(index);
        }
        let record: any = args.draggedNodeData;
        let selectedData = ganttObj.flatData[ganttObj.selectedRowIndex];
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
            gantt.updateRecordByID(data);
        }
    }
});
let gantt: Gantt = new Gantt({
    dataSource: editingData,
    resources: editingResources,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        dependency: 'Predecessor',
        resourceInfo: 'resources'
    },
    resourceFields: {
        id: 'resourceId',
        name: 'resourceName'
    },
    labelSettings: {
        leftLabel: 'TaskName',
        rightLabel: 'resources'
    },
    splitterSettings: {
        position: "50%"
    },
    editSettings: {
        allowEditing: true
    }
});
treeObj.appendTo('#TreeView');
gantt.appendTo('#Gantt');