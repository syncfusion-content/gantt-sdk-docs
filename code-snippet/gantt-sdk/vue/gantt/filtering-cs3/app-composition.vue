<template>
     <div>
     <table>
            <tr>
                <td style="width: 70%">
                    <ejs-dropdownlist id="filter-type" value='Parent' :dataSource="dataSource" :fields = "fields" :change ="change"> Filter Hierarchy </ejs-dropdownlist>
                </td>
            </tr>
        </table>
         <br> <br>  
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height="height" :columns="columns" :splitterSettings = "splitterSettings" :allowFiltering= "true"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Filter, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { projectNewData } from './data-source.js';
const gantt = ref(null);
const data = projectNewData;
const height = '450px';
const columns = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '250' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
];
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const splitterSettings = {
    columnIndex:3
};
const dataSource = [
    { id: 'Parent', mode: 'Parent' },
    { id: 'Child', mode: 'Child' },
    { id: 'Both', mode: 'Both' },
    { id: 'None', mode: 'None' },
];
const fields = { text: 'mode', value: 'id' };
const change = function (e) {
    var ganttChart = gantt.value.ej2Instances;
    var mode = e.value;
    ganttChart.filterSettings.hierarchyMode = mode;
    ganttChart.clearFiltering();
};
provide('gantt',  [ Filter ]);
</script>