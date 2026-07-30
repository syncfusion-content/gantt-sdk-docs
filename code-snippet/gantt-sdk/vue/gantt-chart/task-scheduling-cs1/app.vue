<template>
    <div>
    <ejs-gantt ref = 'gantt' id = "GanttContainer" :dataSource = "data" :taskFields = "taskFields" :treeColumnIndex = "1" :height = "height" :editSettings = "editSettings" :toolbar = "toolbar" :taskMode= "taskMode" > </ejs-gantt>
        </div>
        </template>
        <script>

import { GanttComponent, Edit, Selection, Toolbar } from "@syncfusion/ej2-vue-gantt";
export default {
name: "App",
components: {
"ejs-gantt":GanttComponent
},
  data: function () {
        return {
            data: [
    {
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('03/29/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 2,
                Progress: 30, Work: 16, resources: [{ resourceId: 1, Unit: 70 }, 6]
            },
            {
                TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4,
                resources: [2, 3, 5], Work: 96
            },
            {
                TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 1,
                Work: 16, resources: [8, { resourceId: 9, Unit: 50 }], Progress: 30
            },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
                Duration: 3, Progress: 30, resources: [{ resourceId: 4, Unit: 50 }], Work: 30
            },
            {
                TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3,
                Work: 48, resources: [4, 8]
            },
            {
                TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'),
                Duration: 2, Work: 60, resources: [12, { resourceId: 5, Unit: 70 }]
            }
        ]
    },
    {
        TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/01/2019'), Duration: 1,
        Progress: 30, resources: [12], Work: 24
    }
],
            height: '450px',
            taskMode: 'Auto',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                endDate: 'EndDate',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            editSettings: {
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll', 'Search'],
        };
    },
    provide: {
        gantt: [Edit, Selection, Toolbar]
    }
};
</script>