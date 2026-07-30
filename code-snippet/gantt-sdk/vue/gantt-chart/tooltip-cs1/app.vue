<template>
     <div>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height" :eventMarkers="eventMarkers" :renderBaseline="renderBaseline" :treeColumnIndex='1' :baselineColor="baselineColor" :tooltipSettings="tooltipSettings"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Selection, DayMarkers } from "@syncfusion/ej2-vue-gantt";
import { baselineData  } from './data-source.js';
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
                { TaskID: 2, TaskName: 'Identify Site location',BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/02/2019'), StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/04/2019'),BaselineEndDate: new Date('04/09/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/08/2019'),BaselineEndDate: new Date('04/12/2019'), Duration: 4,Predecessor:"2FS", Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation',BaselineStartDate: new Date('04/04/2019'),BaselineEndDate: new Date('04/08/2019'), StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'),BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/02/2019'),BaselineStartDate: new Date('04/02/2019'),BaselineEndDate: new Date('04/08/2019'), Duration: 0,Predecessor:"6SS", Progress: 50 }
            ]
        },
    ],
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                baselineStartDate: "BaselineStartDate",
                baselineEndDate: "BaselineEndDate",
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            eventMarkers: [
            {
                day: '04/10/2019',
                label: 'Project approval and kick-off'
            }
            ],
            renderBaseline:true,
            baselineColor:'red',
            tooltipSettings:{
                showTooltip:true
                },
                height: '450px',
        };
  },
  provide: {
      gantt: [ Selection, DayMarkers ]
  }
};
</script>