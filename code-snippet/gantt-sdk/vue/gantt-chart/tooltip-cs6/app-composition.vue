<template>
  <div>
    <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields="taskFields" :height="height"
      :editSettings="editSettings" :tooltipSettings="tooltipSettings">
      <template v-slot:editingTooltipTemplate="{data}">
        <div>Duration : {{data.duration}}</div>
      </template>
    </ejs-gantt>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Edit } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
const data = editingData;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    baselineStartDate:"BaselineStartDate",
    baselineEndDate:"BaselineEndDate",
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
};
const editSettings = {
    allowEditing:true,
    allowTaskbarEditing:true
};
const tooltipSettings = {
    showTooltip: true,
    editing: "editingTooltipTemplate"
};
</script>