
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { editingData  } from './data-source.js';
import taskbarTemplate from './taskbartemplate.vue';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields="taskFields" :height="height"
      :tooltipSettings="tooltipSettings">
      <template v-slot:taskbarTooltipTemplate="{data}">
        <div>TaskID: {{data.TaskID}}</div>
      </template>
    </ejs-gantt>
  </div>
`,

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
            tooltipSettings: {
                showTooltip: true,
                taskbar: "taskbarTooltipTemplate"
            },
        };
  },

});