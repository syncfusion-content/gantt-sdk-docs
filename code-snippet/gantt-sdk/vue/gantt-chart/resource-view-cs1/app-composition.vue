<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data"  :viewType= "viewType" :taskFields= "taskFields" :resourceFields= "resourceFields" :treeColumnIndex= "1" :columns= "columns" :splitterSettings= "splitterSettings" :resources= "resourceCollection" :toolbar= "toolbar" :allowResizing= "true" :allowSelection= "true" :highlightWeekends= "true" :projectStartDate= "projectStartDate" :projectEndDate= "projectEndDate"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Toolbar, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
const data = [
        {
            TaskID: 1,
            TaskName: 'Project initiation',
            StartDate: new Date('03/29/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 2,
                    Progress: 30, work: 10, resources: [{ resourceId: 1, resourceUnit: 50 }]
                },
                {
                    TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('03/29/2019'), Duration: 4,
                    resources: [{resourceId: 2, resourceUnit: 70}], Progress: 30, work: 20
                },
                {
                    TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('03/29/2019'), Duration: 1,
                    resources: [{resourceId: 3, resourceUnit: 25}, { resourceId: 1, resourceUnit: 75 }], Progress: 30, work: 10,
                },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('03/29/2019'),
                    Duration: 3, Progress: 30, resources: [{ resourceId: 4, resourceUnit: 50 }, {resourceId: 2, resourceUnit: 70}], work: 30
                },
                {
                    TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/01/2019'), Duration: 3,
                    resources: [{resourceId: 6, resourceUnit: 40}], Progress: 30, work: 40
                },
                {
                    TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/01/2019'),
                    Duration: 2, resources: [{ resourceId: 5, resourceUnit: 75 }], Progress: 30, work: 60,
                }
            ]
        },
        {
            TaskID: 9, TaskName: 'Sign contract', StartDate: new Date('04/01/2019'), Duration: 1,
            Progress: 30,
        }
    ];
const resourceCollection = [
            { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team'},
            { resourceId: 2, resourceName: 'Rose Fuller', resourceGroup: 'Testing Team' },
            { resourceId: 3, resourceName: 'Margaret Buchanan', resourceGroup: 'Approval Team' },
            { resourceId: 4, resourceName: 'Fuller King', resourceGroup: 'Development Team' },
            { resourceId: 5, resourceName: 'Davolio Fuller', resourceGroup: 'Approval Team' },
            { resourceId: 6, resourceName: 'Van Jack', resourceGroup: 'Development Team' },
        ];
const viewType = 'ResourceView';
const taskFields = {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                resourceInfo: 'resources',
                work: 'Work',
                child: 'subtasks',
            };
const resourceFields = {
        id: 'resourceId',
        name: 'resourceName',
        unit: 'Unit',
        group: 'resourceGroup'
    };
const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
const columns = [
        { field: 'TaskID', visible: false },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' }
    ];
const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
const splitterSettings = {
        columnIndex: 3
    };
const projectStartDate = new Date('03/28/2019');
const projectEndDate = new Date('05/18/2019');
provide('gantt',  [ Toolbar, Edit, Selection ]);
</script>