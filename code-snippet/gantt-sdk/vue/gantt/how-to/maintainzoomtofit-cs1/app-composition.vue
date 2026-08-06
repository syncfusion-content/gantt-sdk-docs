<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings" :actionComplete="actionComplete" :taskbarEdited="taskbarEdited"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Toolbar, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source.js';
const gantt = ref(null);
const data = projectNewData;
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
const toolbar = ['Edit','ZoomToFit'];
const editSettings = {
  allowEditing: true,
  allowTaskbarEditing: true
};
const actionComplete = function(args) {
  if ((args.action === "CellEditing" || args.action === "DialogEditing") && args.requestType === "save") {
    var obj = gantt.value.ej2Instances;
    obj.dataSource = projectNewData;
    obj.fitToProject();
  }
};
const taskbarEdited = function(args) {
  if (args) {
    var obj = gantt.value.ej2Instances;
    obj.dataSource = projectNewData;
    obj.fitToProject();
  }
};
provide('gantt',  [Toolbar, Edit, Selection ]);
</script>