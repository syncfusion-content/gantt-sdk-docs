<template>
     <div>
      <ejs-button id="dynamicDrag" cssClass="e-info" v-on:click="dynamicDrag">Drop records as child</ejs-button>
        <br><br>
        <ejs-gantt ref='gantt' :dataSource="data" :allowRowDragAndDrop='true' :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, RowDD, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { ganttData } from "./data-source.js";
const gantt = ref(null);
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
const dynamicDrag = function(e) {
    gantt.value.reorderRows([1,2,3], 4, 'child');
};
provide('gantt',  [ RowDD, Edit, Selection ]);
</script>