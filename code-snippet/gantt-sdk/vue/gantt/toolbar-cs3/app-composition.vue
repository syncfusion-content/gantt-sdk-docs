<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns="columns" :toolbarClick="toolbarClick" :toolbar="toolbar" :allowFiltering='true'></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Toolbar, Filter  } from "@syncfusion/ej2-vue-gantt";
import { EmitType } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { editingData } from './data-source.js';
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
const columns = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '250' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
];
const toolbarClick = (args) => {
    if (args.item.id === 'toolbarfilter') {
        var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
        ganttObj.filterByColumn('TaskName', 'startswith', 'Identify');
    }
};
const toolbar = [{text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'toolbarfilter',align:'Right', prefixIcon: 'e-quickfilter' }];
provide('gantt',  [ Toolbar, Filter  ]);
</script>