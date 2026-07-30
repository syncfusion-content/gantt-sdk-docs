<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :treeColumnIndex="1" :allowSelection="true" :includeWeekend="true" :enableMultiTaskbar="true" :height="height" ></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Selection } from "@syncfusion/ej2-vue-gantt";
import { projectViewMultiTaskData  } from './data-source.js';
const data = projectViewMultiTaskData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    child: 'subtasks',
    expandState: 'isExpand'
};
provide('gantt',  [ Selection ]);
</script>