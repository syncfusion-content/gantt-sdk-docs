<template>
     <div>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :resources="resources" :resourceFields="resourceFields" :taskFields = "taskFields" :height = "height" :editSettings= "editSettings">
          <e-columns>
            <e-column field="TaskID"></e-column>
            <e-column
              field="TaskName"
              editType="dropdownedit"
              :edit="dpParams"
            ></e-column>
            <e-column field="StartDate"></e-column>
            <e-column field="Duration"></e-column>
            <e-column field="Progress"></e-column>
      </e-columns></ejs-gantt>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, ColumnDirective as EColumn, ColumnsDirective as EColumns, ContextMenu, Edit, Selection, Toolbar} from "@syncfusion/ej2-vue-gantt";
import { DropDownListComponent, DropDownList } from '@syncfusion/ej2-dropdowns';
import { editingData, editingResources} from './data-source.js';
const gantt = ref(null);

let elem;
let dropdownlistObj;
const data = editingData;
const resources = editingResources;
const height = '450px';
const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    resourceInfo: 'resources',
    work: 'work',
    child: 'subtasks'
};
const resourceFields = {
    id: 'resourceId',
    name: 'resourceName'
};
const editSettings = {
    allowEditing: true
};
const dpParams = {
    create: () => {
        elem = document.createElement('input');
        return elem;
    },
    read: () => {
        return dropdownlistObj.text;
    },
    destroy: () => {
        dropdownlistObj.destroy();
    },
    write: () => {
        var ganttChart = gantt.value.ej2Instances;
        dropdownlistObj = new DropDownList({
            dataSource: ganttChart.treeGrid.grid.dataSource,
            fields: { value: 'TaskName' },
            floatLabelType: 'Auto'
        });
        dropdownlistObj.appendTo(elem);
    }
};
provide('gantt',  [ ContextMenu, Edit, Selection, Toolbar]);
</script>