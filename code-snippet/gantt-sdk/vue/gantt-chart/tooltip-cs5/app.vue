<template>
  <div>
    <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields="taskFields" :height="height"
      :tooltipSettings="tooltipSettings">
      <template v-slot:connectorLineTooltipTemplate="{data}">
        <div>Offset : {{data.offsetString}}</div>
      </template>
    </ejs-gantt>
  </div>
</template>
<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data: editingData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            tooltipSettings: {
                showTooltip: true,
                connectorLine: "connectorLineTooltipTemplate"
            }
        };
    },
};
</script>