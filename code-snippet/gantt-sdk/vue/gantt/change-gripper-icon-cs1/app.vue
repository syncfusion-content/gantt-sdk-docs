<template>
<div>
<ejs-gantt id="gantt" :dataSource="data" :taskFields = "taskFields" :editSettings = "editSettings" :height="height"></ejs-gantt>
</div>
</template>

<script>
import { GanttComponent, Edit  } from "@syncfusion/ej2-vue-gantt";
export default {
name: "App",
components: {
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
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            editSettings: {
                allowEditing: true,
                editMode: 'Auto',
                allowTaskbarEditing: true
            },
        };
  },
  provide: {
      gantt: [ Edit ]
  }
};
</script>

<style>
/* change gripper icon */
.e-gantt .e-left-resize-gripper::before, .e-gantt .e-right-resize-gripper::before {
  content: '\e934';
}

.e-gantt .e-left-resize-gripper, .e-gantt .e-right-resize-gripper {
  transform: rotate(90deg);
}
</style>