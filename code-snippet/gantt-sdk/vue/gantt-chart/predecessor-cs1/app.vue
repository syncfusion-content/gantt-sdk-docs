<template>
    <div>
        <div class="switch-container">
            <label>Auto Update Predecessor Offset</label>
            <SwitchComponent :checked="autoUpdatePredecessorOffset" @change="onToggleChange" />
        </div>

        <GanttComponent ref="ganttRef" id="Gantt" :dataSource="data" height="420px" :taskFields="taskFields"
            :editSettings="editSettings" :columns="columns" :eventMarkers="eventMarkers" :holidays="holidays"
            :autoUpdatePredecessorOffset="autoUpdatePredecessorOffset" />
    </div>
</template>

<script>
import { ref } from 'vue';
import { GanttComponent } from '@syncfusion/ej2-vue-gantt';
import { SwitchComponent } from '@syncfusion/ej2-vue-buttons';
import { GanttData } from './data-source.js';

export default {
    name: "App",

    components: {
        GanttComponent,
        SwitchComponent
    },

    data() {
        return {
            ganttRef: ref(null),
            data: GanttData,
            autoUpdatePredecessorOffset: true,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                baselineStartDate: 'BaselineStartDate',
                baselineEndDate: 'BaselineEndDate',
                child: 'subtasks'
            },
            editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
            eventMarkers: [
                {
                    day: "04/10/2019",
                    cssClass: "e-custom-event-marker",
                    label: "Project approval and kick-off"
                }
            ],
            holidays: [
                {
                    from: "04/04/2019",
                    to: "04/05/2019",
                    label: "Public holidays",
                    cssClass: "e-custom-holiday"
                },
                {
                    from: "04/12/2019",
                    to: "04/12/2019",
                    label: "Public holiday",
                    cssClass: "e-custom-holiday"
                }
            ],
            columns: [
                { field: "TaskID", headerText: "Task ID", width: "100" },
                { field: "Predecessor", headerText: "Dependency", width: "150" },
                { field: "TaskName", headerText: "Task Name", width: "150" },
                { field: "StartDate", headerText: "Start Date", width: "150" },
                { field: "Duration", headerText: "Duration", width: "150" },
                { field: "Progress", headerText: "Progress", width: "150" }
            ]
        };
    },

    methods: {
        onToggleChange(args) {
            this.autoUpdatePredecessorOffset = args.checked;
            if (this.$refs.ganttRef) {
                this.$refs.ganttRef.ej2Instances.autoUpdatePredecessorOffset = args.checked;
            }
        }
    }
};
</script>

<style>
.switch-container {
    margin-bottom: 12px;
}
</style>