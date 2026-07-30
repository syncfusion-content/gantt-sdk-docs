
import Vue from "vue";
import { GanttPlugin, Selection } from "@syncfusion/ej2-vue-gantt";
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields"   :height="height" :includeWeekend="true" :timelineSettings="timelineSettings" :timezone="timezone" :durationUnit="durationUnit" :dateFormat="dateFormat"
        >
        </ejs-gantt>
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
                {  TaskID: 2, TaskName: 'Site location', StartDate: new Date('04/02/2019'),Duration: 4, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'),Duration: 4, Progress: 50  },
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
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
            ]
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
                dependency: 'Predecessor',
                child: 'subtasks'
            },
             timelineSettings: {
                timelineUnitSize: 65,
                topTier: {
                    unit: "Day",
                    format: "MMM dd, yyyy",
                },
                bottomTier: {
                    unit: "Hour",
                    format: "hh:mm a",
                },
            },
            dateFormat: "hh:mm a",
            selectionSettings: {
                mode: 'Both',
            },
            durationUnit: "Hour",
            timezone: "UTC"
        };
    },
    provide: {
      gantt: [ Selection ]
    }

});