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
<script setup>
import { ref } from 'vue';
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { GanttData } from './data-source.js';

const gantt = ref(null);
const data = GanttData;
const height = '380px';
const daysPerWeek = 5;
const daysPerMonth = 20;
const daysPerWeekInput = ref(5);
const daysPerMonthInput = ref(20);
const taskFields = {
	id: 'TaskID',
	name: 'TaskName',
	startDate: 'StartDate',
	duration: 'Duration',
	progress: 'Progress',
	durationUnit: 'DurationUnit',
	parentID: 'ParentID'
};
const splitterSettings = { columnIndex: 4 };

const updateProperties = () => {
	if (daysPerWeekInput.value < 1 || daysPerWeekInput.value > 7) {
		alert('Days per Week must be between 1 and 7');
		return;
	}
	if (daysPerMonthInput.value < 1 || daysPerMonthInput.value > 31) {
		alert('Days per Month must be between 1 and 31');
		return;
	}
	gantt.value.ej2Instances.daysPerWeek = daysPerWeekInput.value;
	gantt.value.ej2Instances.daysPerMonth = daysPerMonthInput.value;
};
</script>
