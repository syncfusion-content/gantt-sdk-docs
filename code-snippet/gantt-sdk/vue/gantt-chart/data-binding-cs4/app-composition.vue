<template>
     <div>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height" :actionFailure= "actionFailure"></ejs-gantt>
    </div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { DataManager } from '@syncfusion/ej2-data';
import { ref } from 'vue';
const gantt = ref(null);
const data = new DataManager({
    url: 'http://some.com/invalidUrl',
});
const height = '450px';
const taskFields = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    progress: 'Progress',
    duration: 'Duration',
    dependency: 'Predecessor',
    parentID: 'parentID'
};
const actionFailure = function(args){
    let gantt = gantt.value.ej2Instances; // Gantt instance
    let span = document.createElement('span');
    this.element.parentNode.insertBefore(span, gantt.element);
    span.style.color = '#FF0000'
    span.innerHTML = 'Server exception: 404 Not found';
};
</script>