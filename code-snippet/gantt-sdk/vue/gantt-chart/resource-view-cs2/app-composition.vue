<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :viewType="viewType" :taskFields="taskFields"
            :resourceFields="resourceFields" :treeColumnIndex="1" :columns="columns" :resources="resourceCollection"
            :toolbar="toolbar" :toolbarClick="toolbarClick" :allowSelection="true" :editSettings="editSettings"
            :labelSettings="labelSettings" :highlightWeekends="true" :projectStartDate="projectStartDate"
            :projectEndDate="projectEndDate" :showOverAllocation="true"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, Toolbar, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
const gantt = ref(null);
const data = [
{
        TaskID: 1,
        TaskName: 'Project initiation',
        StartDate: new Date('03/29/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('03/29/2019'), Duration: 3,
                Progress: 30, work: 10, resources: [{ resourceId: 1, resourceUnit: 50 }]
            },
            {
                TaskID: 3, TaskName: 'Perform soil test', StartDate: new Date('04/03/2019'), Duration: 4,
                resources: [{ resourceId: 1, resourceUnit: 70 }], Predecessor: 2, Progress: 30, work: 20
            },
            {
                TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/09/2019'), Duration: 4,
                resources: [{ resourceId: 1, resourceUnit: 25 }], Predecessor: 3, Progress: 30, work: 10,
            },
        ]
    },
    {
        TaskID: 5,
        TaskName: 'Project estimation', StartDate: new Date('03/29/2019'), EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/01/2019'),
                Duration: 5, Progress: 30, resources: [{ resourceId: 2, resourceUnit: 50 }], work: 30
            },
            {
                TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 4,
                resources: [{ resourceId: 2, resourceUnit: 40 }], Predecessor: '6FS-2', Progress: 30, work: 40
            },
            {
                TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/09/2019'),
                Duration: 4, resources: [{ resourceId: 2, resourceUnit: 75 }], Predecessor: '7FS-1', Progress: 30, work: 60,
            }
        ]
    },
    {
        TaskID: 9,
        TaskName: 'Site work',
        StartDate: new Date('04/04/2019'),
        EndDate: new Date('04/21/2019'),
        subtasks: [
            {
                TaskID: 10, TaskName: 'Install temporary power service', StartDate: new Date('04/01/2019'), Duration: 14,
                Progress: 30, resources: [{ resourceId: 3, resourceUnit: 75 }]
            },
            {
                TaskID: 11, TaskName: 'Clear the building site', StartDate: new Date('04/08/2019'),
                Duration: 9, Progress: 30, Predecessor: '10FS-9', resources: [3]
            },
            {
                TaskID: 12, TaskName: 'Sign contract', StartDate: new Date('04/12/2019'),
                Duration: 5, resources: [3], Predecessor: '11FS-5'
            },
        ]
    }
];
const resourceCollection = [
    { resourceId: 1, resourceName: 'Martin Tamer', resourceGroup: 'Planning Team' },
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
    dependency: 'Predecessor',
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
const toolbarClick = (args) => {
    if (args.item.id === 'showhidebar') {
        var ganttObj = gantt.value.ej2Instances;
        ganttObj.showOverAllocation = ganttObj.showOverAllocation ? false : true;
    }
};
const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll',
    { text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar' }];
const labelSettings = {
    rightLabel: 'resources',
    taskLabel: 'Progress'
};
const projectStartDate = new Date('03/28/2019');
const projectEndDate = new Date('05/18/2019');
provide('gantt', [Toolbar, Edit, Selection]);
</script>