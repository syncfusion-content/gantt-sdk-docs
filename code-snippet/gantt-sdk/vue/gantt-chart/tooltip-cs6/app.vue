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
<script>

import { GanttComponent, Edit } from "@syncfusion/ej2-vue-gantt";
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
                baselineStartDate:"BaselineStartDate",
                baselineEndDate:"BaselineEndDate",
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            editSettings: {
                allowEditing:true,
                allowTaskbarEditing:true
            },
            tooltipSettings: {
                showTooltip: true,
                editing: "editingTooltipTemplate"
                },
        };
  },
  provide: {
      gantt: [ Edit ]
  },  
};
</script>