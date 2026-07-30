<template>
     <div>
        <ejs-gantt ref='gantt' :dataSource="data" id="GanttContainer" :taskFields = "taskFields" :height = "height"></ejs-gantt>
    </div>
</template>
<script setup>

import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
const data = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/GanttData',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});
const height = '450px';
const taskFields = {
    id: 'TaskId',
    name: 'TaskName',
    startDate: 'StartDate',
    progress: 'Progress',
    duration: 'Duration',
    dependency: 'Predecessor',
    child: 'SubTasks'
};
</script>