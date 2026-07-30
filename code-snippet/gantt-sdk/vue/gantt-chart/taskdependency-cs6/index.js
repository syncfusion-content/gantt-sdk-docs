
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(GanttPlugin);
Vue.use(SwitchPlugin);
;
new Vue({
	el: '#app',
	template: `
    <div>
        <div class="switch-container">
        <label for="switch">Show/Hide DependencyLine</label>
        <ejs-switch id="switch" ref="toggleSwitch" checked=false :change="change"></ejs-switch>
        </div>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
        data: [
            {
                TaskID: 1,
                TaskName: 'Project Initiation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    {  TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 , Predecessor: '4FS' },
                    { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                ]
            },
            {
                TaskID: 5,
                TaskName: 'Project Estimation',
                StartDate: new Date('04/02/2019'),
                EndDate: new Date('04/21/2019'),
                subtasks: [
                    { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                    { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, Predecessor: '6FS' },
                    { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, Predecessor: '7SS'}
                ],
            },
        ],
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                child: 'subtasks',
                dependency: 'Predecessor',
            },
        };
    },
    methods: {
        change: function(args) {
          var ganttDependencyViewContainer = document.querySelector('.e-gantt-dependency-view-container');
          if (args.checked) {
              ganttDependencyViewContainer.style.visibility = 'hidden';
          }
          else {
              ganttDependencyViewContainer.style.visibility = 'visible';
          }
        }
    }
});