<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar= "toolbar" :resourceFields= "resourceFields"
            :resources= "resources"  :actionBegin= "actionBegin" :columns = "columns" :editSettings= "editSettings"></ejs-gantt>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, Edit, Selection, Toolbar  } from "@syncfusion/ej2-vue-gantt";
const data = [
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
];
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    dependency: 'Predecessor',
    progress: 'Progress',
    child: 'subtasks',
    resourceInfo: 'resources'
};
const resourceFields = {
    id: 'resourceId',
    name: 'resourceName'
};
const resources = [
    { resourceId: 1, resourceName: 'Martin Tamer' },
    { resourceId: 2, resourceName: 'Rose Fuller' },
    { resourceId: 3, resourceName: 'Margaret Buchanan' },
    { resourceId: 4, resourceName: 'Fuller King' },
    { resourceId: 5, resourceName: 'Davolio Fuller' },
    { resourceId: 6, resourceName: 'Van Jack' },
    { resourceId: 7, resourceName: 'Fuller Buchanan' },
    { resourceId: 8, resourceName: 'Jack Davolio' },
    { resourceId: 9, resourceName: 'Tamer Vinet' },
    { resourceId: 10, resourceName: 'Vinet Fuller' },
    { resourceId: 11, resourceName: 'Bergs Anton' },
    { resourceId: 12, resourceName: 'Construction Supervisor' }
];
const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel'];
const columns = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '250', validationRules: { required: true } },
    { field: 'StartDate',editType: 'datetimepickeredit', edit: { params: { format: 'M/d/y hh:mm a' } },
    format: { format: 'M/d/y hh:mm a', type: 'dateTime' }, validationRules: { required: true, date: true } },
    { field: 'Duration', headerText: 'Duration', width: '150', validationRules: { required: true } },
    { field: 'Progress', headerText: 'Progress', width: '150', validationRules: { required: true } },
];
const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
};
const actionBegin = (args) => {
    if (args.requestType == "beforeOpenEditDialog" ||args.requestType == "beforeOpenAddDialog") {
        args.Dependency.columns[3].validationRules = { required: true }
        args.Resources.columns[2].allowEditing = true
        args.Resources.columns[2].validationRules = { required: true }
    }
}
provide('gantt',  [ Edit, Selection, Toolbar ]);
</script>