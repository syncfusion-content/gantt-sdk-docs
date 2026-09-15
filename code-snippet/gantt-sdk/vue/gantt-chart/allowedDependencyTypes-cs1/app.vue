<template>
    <div>
        <ejs-gantt ref="gantt" id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height" :columns="columns" :allowedDependencyTypes="allowedDependencyTypes" :allowParentDependency="allowParentDependency"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { data } from './data-source.js';

export default {
    name: "App",
    components: {
        "ejs-gantt": GanttComponent
    },
    data: function() {
        return {
            data: data,
            height: '550px',
            allowedDependencyTypes: ['SF'],
            allowParentDependency: true,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                parentID: 'ParentID'
            },
            columns: [
                { field: 'TaskID', headerText: 'Task ID', width: '100' },
                { field: 'TaskName', headerText: 'Task Name', width: '250' },
                { field: 'StartDate', headerText: 'Start Date', width: '150' },
                { field: 'Duration', headerText: 'Duration', width: '150' },
                { field: 'Progress', headerText: 'Progress', width: '150' }
            ]
        };
    }
};
</script>
