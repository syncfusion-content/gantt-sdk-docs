<template>
    <div>
    <p class="e-text"> The parent container can be resizable by dragging the bottom-right corner.</p>
     <div class='e-ganttresize'>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :width = "width" :editSettings="editSettings"></ejs-gantt>
    </div>
   </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Edit} from "@syncfusion/ej2-vue-gantt";
import { projectNewData  } from './data-source.js';
const data = projectNewData;
const height = '100%';
const width = '100%';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
};
const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
    };
provide('gantt',  [ Edit ]);
</script>
<style>
  .e-ganttresize {
      resize: both;
      overflow: auto;
      border: 1px solid red;
      padding: 10px;
      height: 300px;
      min-height: 250px;
      min-width: 250px;
  }
</style>