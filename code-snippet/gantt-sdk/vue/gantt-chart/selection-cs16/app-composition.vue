<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :enableHover="true" :taskFields = "taskFields" :height = "height" :selectionSettings="selectionSettings"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Selection } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from "./data-source.js";

const gantt = ref(null);
const data = GanttData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentID'
};
const selectionSettings = {
    mode: 'Row',
    type: 'Multiple',
}
provide('gantt',  [ Selection ]);
</script>