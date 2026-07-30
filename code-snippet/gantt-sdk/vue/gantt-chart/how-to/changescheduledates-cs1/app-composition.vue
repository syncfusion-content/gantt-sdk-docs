<template>
     <div>
        <ejs-button id="changedate" cssClass="e-info" v-on:click.native="change">Change Date</ejs-button>
         <br><br><br>
        <ejs-gantt id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { editingData  } from './data-source.js';
import { ref } from "vue";
const gantt = ref(null);

const data = editingData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const change = function(e){
    var ganttObj = gantt.value.ej2Instances;
    ganttObj.updateProjectDates(new Date('03/10/2019'),new Date('06/20/2019'),true);
}
</script>