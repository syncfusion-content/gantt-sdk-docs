<template>
    <div>
    <p><b>Gantt</b></p>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height"
    :resourceFields= "resourceFields" :resources= "resources" :labelSettings= "labelSettings" :editSettings= "editSettings"></ejs-gantt>
    <p><b>List</b></p>
    <ejs-treeview id='treeview' :fields="fields" :allowDragAndDrop='true' :nodeDragStop="nodeDragStop"></ejs-treeview>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";
import { editingData, editingResources } from './data-source.js';
import { closest,addClass } from '@syncfusion/ej2-base';
const gantt = ref(null);
const data = editingData;
const resources = editingResources;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    resourceInfo: 'resources',
    child: 'subtasks'
};
const fields = { dataSource: editingResources, id: 'resourceId', text: 'resourceName' };
const resourceFields = {
    id: 'resourceId',
    name: 'resourceName'
};
const labelSettings = {
    rightLabel: 'resources'
};
const editSettings = {
    allowEditing: true
};
const nodeDragStop = function (args) {
     args.cancel = true;
    var ganttChart = gantt.value.ej2Instances;
    var chartEle = closest(args.target, '.e-chart-row');
    var gridEle = closest(args.target, '.e-row');
    if(gridEle) {
    var index = ganttChart.treeGrid.getRows().indexOf(gridEle);
    ganttChart.selectRow(index);
    }
    if(chartEle){
        var index = chartEle.rowIndex;
        ganttChart.selectRow(index);
    }
    var record= args.draggedNodeData;
    var selectedData = ganttChart.flatData[ganttChart.selectedRowIndex];
    var selectedDataResource = selectedData.taskData.resources;
    var resources = [];
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
        ganttChart.updateRecordByID(data); 
    }
}
provide('gantt',  [Edit, Selection]);
</script>