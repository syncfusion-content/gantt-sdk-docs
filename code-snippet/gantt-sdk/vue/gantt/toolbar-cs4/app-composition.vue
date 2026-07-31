<template>
     <div>
     <ejs-button id="enable" cssClass="e-info" v-on:click="enable">Enable</ejs-button>
     <ejs-button id="disable" cssClass="e-info" v-on:click="disable">Disable</ejs-button>
     <br>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowFiltering='true'></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Toolbar, Filter  } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { editingData } from './data-source.js';
const gantt = ref(null);
const data = editingData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
};
const toolbarClick = (args) => {
    if (args.item.text === 'QuickFilter') {
        var ganttChart = gantt.value.ej2Instances;
        ganttChart.filterByColumn('TaskName', 'startswith', 'Identify');
    }
    if (args.item.text === 'ClearFilter') {
        var ganttChart = gantt.value.ej2Instances;
        ganttChart.clearFiltering();
    }
};
const toolbar = ['QuickFilter', 'ClearFilter'];
provide('gantt',  [ Toolbar, Filter ]);
const enable = (e) => {
    var ganttChart = gantt.value.ej2Instances;
    ganttChart.toolbarModule.enableItems([ganttChart.element.id + '_QuickFilter', ganttChart.element.id + '_ClearFilter'], true);// enable toolbar items.
};
const disable = (e) => {
    var ganttChart = gantt.value.ej2Instances;
    ganttChart.toolbarModule.enableItems([ganttChart.element.id + '_QuickFilter', ganttChart.element.id + '_ClearFilter'], false);// disable toolbar items.
};
</script>