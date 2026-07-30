<template>
     <div>
        <ejs-button id="ClearfilterRecord" cssClass="e-info" v-on:click.native="filter">Clear Filter</ejs-button>
    <br><br><br>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :columns="columns" :splitterSettings = "splitterSettings" :filterSettings="filterSettings" :allowFiltering= "true"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Filter } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { projectNewData } from './data-source.js';
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
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
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
           columns: [
            { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
            { field: 'TaskName', headerText: 'Task Name', width: '250' },
            { field: 'StartDate', headerText: 'Start Date', width: '150' },
            { field: 'Duration', headerText: 'Duration', width: '150' },
            { field: 'Progress', headerText: 'Progress', width: '150' },
        ],
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        },
        splitterSettings:{
            columnIndex:3
            },
        filterSettings: {
            columns: [{ field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Identify' },
            { field: 'Progress', matchCase: false, operator: 'equal', predicate: 'and', value: 50 }]
        }
      };
  },
  provide: {
      gantt: [ Filter ]
  },
   methods: {
      filter: function(e){
            var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
            ganttObj.clearFiltering();
        }
    }
};
</script>