<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height"  :toolbar="toolbar"  :columns="columns" :updateOffsetOnTaskbarEdit ="false"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Toolbar } from "@syncfusion/ej2-vue-gantt";
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data:  [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/04/2019'), Duration: 4,Predecessor:"2FS+2days", Progress: 50 },
                { TaskID: 5, TaskName: 'Clear the building site', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '4FF+960m'}
            ]
        },
        {
            TaskID: 6,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 7, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 9, TaskName: 'Estimation approval', StartDate: new Date('04/06/2019'), Duration: 0,Predecessor:"7SS+16h", Progress: 50 }
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
             columns: [
                { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
                { field: 'Predecessor', headerText: 'Depedency', width: '150'},
                { field: 'TaskName', headerText: 'Task Name', width: '150' },
                { field: 'StartDate', headerText: 'Start Date', width: '150' },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150'}
            ], 
            toolbar: ['Add', 'Cancel', 'CollapseAll', 'Delete', 'Edit', 'ExpandAll', 'NextTimeSpan', 'PrevTimeSpan', 'Search', 'Update', 'Indent', 'Outdent'],
        };
    },
    provide: {
      gantt: [Toolbar ]
  }
};
</script>