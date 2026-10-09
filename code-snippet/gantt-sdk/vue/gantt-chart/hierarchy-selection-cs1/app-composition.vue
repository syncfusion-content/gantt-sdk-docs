<template>
	<div>
		<div style="display: flex; align-items: center; gap: 12px; font-size: 15px; padding-bottom: 10px">
			<label style="font-weight: 600; white-space: nowrap">Hierarchy Checkbox Mode:</label>
			<select v-model="selectedMode" style="width: 150px" @change="changeMode">
				<option v-for="mode in selectionModes" :key="mode.id" :value="mode.id">{{ mode.type }}</option>
			</select>
		</div>
		<ejs-gantt ref="gantt" id="ganttDefault" :dataSource="data" height="370px" :taskFields="taskFields" :toolbar="['Search']" :filterSettings="{ type: 'Menu' }" :allowFiltering="true" :allowSelection="true" hierarchyCheckboxMode="hierarchy" :columns="columns"></ejs-gantt>
	</div>
</template>
<script setup>
import { ref } from 'vue';
import { GanttComponent as EjsGantt } from "@syncfusion/ej2-vue-gantt";
import { data } from './data-source.js';

const gantt = ref(null);
const selectedMode = ref('hierarchy');
const selectionModes = [
	{ id: 'self', type: 'self' },
	{ id: 'hierarchy', type: 'hierarchy' },
	{ id: 'filteredHierarchy', type: 'filteredHierarchy' }
];
const taskFields = {
	id: 'TaskID',
	name: 'TaskName',
	startDate: 'StartDate',
	endDate: 'EndDate',
	duration: 'Duration',
	progress: 'Progress',
	dependency: 'Predecessor',
	parentID: 'ParentID'
};
const columns = [
	{ field: 'CheckBox', headerText: '', showCheckbox: true, width: '70', allowFiltering: false },
	{ field: 'TaskID', width: '110', visible: false },
	{ field: 'TaskName', width: '190' },
	{ field: 'StartDate' },
	{ field: 'EndDate' },
	{ field: 'Duration' },
	{ field: 'Progress' }
];

const changeMode = () => {
	gantt.value.ej2Instances.hierarchyCheckboxMode = selectedMode.value;
	gantt.value.ej2Instances.refresh();
};
</script>
