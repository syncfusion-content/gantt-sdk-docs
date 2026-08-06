
import Vue from "vue";
import { GanttPlugin, Edit } from "@syncfusion/ej2-vue-gantt";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { projectNewData } from './data-source.js';
Vue.use(GanttPlugin);
Vue.use(ButtonPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
        <ejs-button id="addRow" cssClass="e-info" v-on:click.native="add">Add Row</ejs-button>
        <br><br><br>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height"  :editSettings= "editSettings"></ejs-gantt>
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
            isParent:true,
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 50,isParent:false },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 70, resources: [2, 3, 5],isParent:false   },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 3, Predecessor:"2FS", Progress: 80,isParent:false  },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            isParent:true,
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 50, resources: [4],isParent:false  },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 50, DurationUnit:'day', resources: [4, 8],isParent:false  },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 4,Predecessor:"6SS", DurationUnit:'minute', Progress: 70, resources: [12, 5],isParent:false  }
            ]
        },
    ],
            height: '450px',
            taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },
        editSettings:{
            allowAdding:true
            },
      };
  },
  provide: {
      gantt: [ Edit ]
  },
  methods: {
        add: function(e){
            var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
            var record= {
               TaskID: 9,
               TaskName: 'Identify Site location',
               StartDate: new Date('04/02/2019'),
               Duration: 3,
               Progress: 50
               };
            ganttObj.editModule.addRecord(record,'Below',2);
        }
  },

});