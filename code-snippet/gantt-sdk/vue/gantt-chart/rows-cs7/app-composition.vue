<template>
     <div>
        <ejs-gantt :dataSource="data" :allowRowDragAndDrop='true' :taskFields = "taskFields" :height = "height" :rowDragStartHelper="rowDragStartHelper"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, RowDD, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { ganttData } from "./data-source.js";
const data = ganttData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
};
const rowDragStartHelper = function(args) {
    var record = args.data[0] ? args.data[0] : args.data;
    var taskId = record.ganttProperties.taskId;
    if (taskId <= 4) {
        args.cancel = true;
    }
};
provide('gantt',  [ RowDD, Edit, Selection ]);
</script>