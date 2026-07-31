<template>
  <div>
    <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields="taskFields" :height="height"
      :tooltipSettings="tooltipSettings">
      <template v-slot:taskbarTooltipTemplate="{data}">
        <div>TaskID: {{data.TaskID}}</div>
      </template>
    </ejs-gantt>
  </div>
</template>
<script setup>
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
import taskbarTemplate from './taskbartemplate.vue';
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
const tooltipSettings = {
    showTooltip: true,
    taskbar: "taskbarTooltipTemplate"
};
</script>