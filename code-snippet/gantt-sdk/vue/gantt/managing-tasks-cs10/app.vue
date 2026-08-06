<template>
     <div>
     <ejs-button id="indent" cssClass="e-info" v-on:click="indent">Indent</ejs-button>
     <ejs-button id="outdent" cssClass="e-info" v-on:click="outdent">Outdent</ejs-button>
     <br>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns = "columns" :editSettings= "editSettings" :toolbar="toolbar"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Edit, Selection, Toolbar } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-gantt":GanttComponent
},

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
                    { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
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
                child: 'subtasks'
            },
            columns: [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
                { field: 'TaskName', headerText: 'Task Name', width: '250' },
                { field: 'StartDate', headerText: 'Start Date', width: '150' },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150' },
            ],
            editSettings: {
                allowEditing: true
            },
            toolbar: ['Indent','Outdent'],
      };
  },
  provide: {
      gantt: [ Edit, Selection, Toolbar ]
  },
   methods: {
      indent: function(e){
          var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
          ganttChart.indent();
      },
      outdent: function(e){
          var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
          ganttChart.outdent();
      },
  },
};
</script>