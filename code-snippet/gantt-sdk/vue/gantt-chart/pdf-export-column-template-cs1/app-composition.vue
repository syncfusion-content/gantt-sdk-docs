<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :pdfQueryCellInfo="pdfQueryCellInfo" :height="height"
      :rowHeight="rowHeight" :splitterSettings="splitterSettings" :allowResizing='true' :resourceFields="resourceFields"
      :resources="resources">
      <e-columns>
        <e-column field='TaskID' headerText='Task ID' textAlign='Left' width='100'></e-column>
        <e-column field='TaskName' headerText='Task Name' width='150'></e-column>
        <e-column field='resources' headerText='Resources' width='250' :template="'cTemplate'"></e-column>
        <e-column field='EmailId' headerText='Email ID' width='150'></e-column>

      </e-columns>
      <template v-slot:cTemplate="{data}">
        <div class="columnTemplate" v-if="data.ganttProperties.resourceNames">
          <img
            :src="'https://ej2.syncfusion.com/vue/demos/source/gantt/images/' + data.ganttProperties.resourceNames + '.png'"
            height="40px" />
          <div style="display:inline-block;width:100%;position:relative;left:30px">
            {{data.ganttProperties.resourceNames}}</div>
        </div>
      </template>
    </ejs-gantt>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GanttComponent as EjsGantt, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, PdfExport, Selection ,PdfQueryCellInfoEventArgs } from "@syncfusion/ej2-vue-gantt";
import { editingData , editingResources } from './data-source.js';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
const gantt = ref(null);
const data = editingData;
const height = '450px';
const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  resourceInfo: 'resources',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  child: 'subtasks',
};
const toolbar = ['PdfExport'];
const toolbarClick = (args) => {
  if (args.item.id === 'GanttContainer_pdfexport') {
    var exportProperties = {
      fileName: "new.pdf"
    };
    var ganttChart = gantt.value.ej2Instances;
    ganttChart.pdfExport(exportProperties);
  }
};
const pdfQueryCellInfo = (args) => {
  if (args.column.headerText === 'Resources') {
    {
      args.image = { height: 40, width: 40, base64: (args).data.taskData.resourcesImage };
    }
  }
  if (args.column.headerText === 'Email ID') {
    args.hyperLink = {
      target: 'mailto:' + (args).data.taskData.EmailId,
      displayText: (args).data.taskData.EmailId
    };
  }
};
const rowHeight = 50;
const splitterSettings = {
  columnIndex: 3
};
const resourceFields = {
  id: 'resourceId',
  name: 'resourceName',
};
const resources = editingResources;
provide('gantt', [Toolbar, PdfExport]);
</script>