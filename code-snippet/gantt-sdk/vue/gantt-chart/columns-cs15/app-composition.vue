<template>
    <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :height="height"
            :splitterSettings="splitterSettings">
            <e-columns>
                <e-column field='TaskName' :headerTemplate='projectName' width=150></e-column>
                <e-column field='StartDate' :headerTemplate='dateTemplate' width=150></e-column>
                <e-column field='Duration' :headerTemplate='durationTemplate' width=150></e-column>
                <e-column field='Progress' :headerTemplate='progressTemplate' width=150></e-column>
            </e-columns>
        </ejs-gantt>
    </div>
</template>
<script setup>
import { createApp } from "vue";
import { GanttComponent as EjsGantt, ColumnDirective as EColumn, ColumnsDirective as EColumns} from "@syncfusion/ej2-vue-gantt";
import { editingData } from './data-source.js';
const data = editingData;
const app = createApp();
const projectName = function () {
    return {
        template: app.component('columnTemplate', {
            template: `<div class="image">
                    <img :src="image" width=20 height=20 class="e-image"/> Task Name
                </div>`,
            data: function () {
                return {
                    data: {}
                }
            },
            computed: {
                image: function () {
                    return "Taskname.png";
                }
            }
        })
    }
}
const dateTemplate = function () {
    return {
        template: app.component('columnTemplate', {
            template: `<div class="image">
                    <img :src="image" width=20 height=20 class="e-image"/> Start Date
                </div>`,
            data: function () {
                return {
                    data: {}
                }
            },
            computed: {
                image: function () {
                    return "Startdate.png";
                }
            }
        })
    }
}
const durationTemplate = function () {
    return {
        template: app.component('columnTemplate', {
            template: `<div class="image">
                    <img :src="image" width=20 height=20 class="e-image"/> Duration
                </div>`,
            data: function () {
                return {
                    data: {}
                }
            },
            computed: {
                image: function () {
                    return "Duration.png";
                }
            }
        })
    }
}
const progressTemplate = function () {
    return {
        template: app.component('columnTemplate', {
            template: `<div class="image">
                    <img :src="image" width=20 height=20 class="e-image"/> Progress
                </div>`,
            data: function () {
                return {
                    data: {}
                }
            },
            computed: {
                image: function () {
                    return "progress.png";
                }
            }
        })
    }
}
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks',
};
const height = '450px';
const splitterSettings = {
    columnIndex: 4
};
const columns = [
    { field: 'TaskName', headerTemplate: '#projectName', width: '150' },
    { field: 'StartDate', headerTemplate: '#dateTemplate', width: '150' },
    { field: 'Duration', headerTemplate: '#durationTemplate', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerTemplate: '#progressTemplate', headerText: 'Progress', width: '150' },
];
</script>