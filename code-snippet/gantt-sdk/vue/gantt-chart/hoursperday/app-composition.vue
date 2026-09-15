<template>
	<div>
		<button id="updateHoursPerDay" @click="updateHoursPerDay">Update Hours Per Day</button>
		<ejs-gantt ref="gantt" :dataSource="data" height="450px" :hoursPerDay="8" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate" :taskFields="taskFields" :labelSettings="labelSettings" :calendarSettings="calendarSettings" :columns="columns"></ejs-gantt>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from './data-source.js';

const gantt = ref(null);
const data = GanttData;
const projectStartDate = new Date('04/01/2026');
const projectEndDate = new Date('04/30/2026');
const taskFields = {
	id: 'TaskId',
	name: 'TaskName',
	startDate: 'StartDate',
	duration: 'Duration',
	parentID: 'ParentId'
};
const labelSettings = { leftLabel: 'TaskName' };
const calendarSettings = {
	projectCalendar: {
		workingTime: [{ from: 9, to: 12 }, { from: 13, to: 17 }],
		exceptions: [{
			from: new Date('04/06/2026'),
			to: new Date('04/06/2026'),
			name: 'Extended Working Day',
			isWorking: true,
			workingTime: [{ from: 8, to: 18 }]
		}]
	}
};
const columns = [
	{ field: 'TaskId', headerText: 'ID', width: '80' },
	{ field: 'TaskName', headerText: 'Task Name', width: '250' },
	{ field: 'StartDate', headerText: 'Start Date' },
	{ field: 'Duration', headerText: 'Duration' }
];

const updateHoursPerDay = () => {
	gantt.value.ej2Instances.hoursPerDay = 16;
};
</script>
