<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
      :rowHeight="rowHeight" :taskbarTemplate="'taskbarTemplate'" :parentTaskbarTemplate="'parentTaskbarTemplate'"
      :milestoneTemplate="'milestoneTemplate'">
      <template v-slot:taskbarTemplate="{ data }">
        <div class="e-gantt-child-taskbar e-custom-moments" style="height:100%;border-radius:5px;">
          <span class="e-task-label"
            style="position:absolute;top:5px;font-size:12px;text-overflow:ellipsis;height:90%;overflow:hidden;">{{ data.TaskName }}</span>
        </div>
      </template>
      <template v-slot:parentTaskbarTemplate="{ data }">
        <div class="e-gantt-child-taskbar e-custom-parent" style="height:100%;border-radius:5px;">
          <span class="e-task-label"
            style="position:absolute;top:5px;font-size:12px;text-overflow:ellipsis;height:90%;overflow:hidden;">{{ data.TaskName }}</span>
        </div>
      </template>
      <template v-slot:milestoneTemplate="{ data }">
        <div class="e-gantt-milestone" style="position:absolute;">
          <div class="e-milestone-top"
            style="border-right-width:26px; margin-top: -9px;border-left-width:26px;border-bottom-width:26px;"></div>
          <div class="e-milestone-bottom"
            style="top:26px;border-right-width:26px; border-left-width:26px; border-top-width:26px;"></div>
        </div>
      </template>
    </ejs-gantt>
  </div>
</template>
<script setup>

import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
const data = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
    isParent: true,
    subtasks: [
      { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 0, Progress: 50, isParent: false },
      { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50, resources: [2, 3, 5], isParent: false },
      { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Predecessor: "2FS", Progress: 50, isParent: false },
    ]
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
    isParent: true,
    subtasks: [
      { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [4], isParent: false },
      { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50, resources: [4, 8], isParent: false },
      { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: "6SS", Progress: 50, resources: [12, 5], isParent: false }
    ]
  },
];
const height = '450px';
const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  child: 'subtasks'
};
const rowHeight = 75;
</script>

<style>
.e-custom-parent {
  background-color: #6d619b;
  border: 1px solid #3f51b5;
}

.e-custom-moments {
  background-color: #7ab748;
  border: 1px solid #3f51b5;
}

.e-custom-performance {
  background-color: #ad7a66;
  border: 1px solid #3f51b5;
}

#taskbarTemplate .e-milestone-top {
  border-bottom-color: #7ab748 !important;
  border-bottom: 1px solid #3f51b5;
}

#taskbarTemplate .e-milestone-bottom {
  border-top-color: #7ab748 !important;
  border-top: 1px solid #3f51b5;
}
</style>