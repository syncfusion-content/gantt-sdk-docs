<template>
    <div>
        <div style="margin-bottom: 10px">
            <label>Days Per Week: </label>
            <input id="daysPerWeek" v-model.number="daysPerWeekInput" type="number" min="1" max="7" />
            <label style="margin-left: 10px">Days Per Month: </label>
            <input id="daysPerMonth" v-model.number="daysPerMonthInput" type="number" min="1" max="31" />
            <button id="updateButton" style="margin-left: 10px" @click="updateProperties">Update</button>
        </div>
        <ejs-gantt ref="gantt" :dataSource="data" :height="height" :daysPerWeek="daysPerWeek" :daysPerMonth="daysPerMonth" :taskFields="taskFields" :splitterSettings="splitterSettings"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from './data-source.js';
export default {
    name: "App",
    components: { "ejs-gantt": GanttComponent },
    data: function() {
        return {
            data: GanttData, height: '380px', daysPerWeek: 5, daysPerMonth: 20,
            daysPerWeekInput: 5, daysPerMonthInput: 20,
            taskFields: { id: 'TaskID', name: 'TaskName', startDate: 'StartDate', duration: 'Duration', progress: 'Progress', durationUnit: 'DurationUnit', parentID: 'ParentID' },
            splitterSettings: { columnIndex: 4 }
        };
    },
    methods: {
        updateProperties: function() {
            if (this.daysPerWeekInput < 1 || this.daysPerWeekInput > 7) { alert('Days per Week must be between 1 and 7'); return; }
            if (this.daysPerMonthInput < 1 || this.daysPerMonthInput > 31) { alert('Days per Month must be between 1 and 31'); return; }
            this.$refs.gantt.ej2Instances.daysPerWeek = this.daysPerWeekInput;
            this.$refs.gantt.ej2Instances.daysPerMonth = this.daysPerMonthInput;
        }
    }
};
</script>
