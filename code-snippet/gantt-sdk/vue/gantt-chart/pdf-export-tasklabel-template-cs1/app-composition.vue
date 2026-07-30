<template>
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :pdfQueryTaskbarInfo="pdfQueryTaskbarInfo" :height="height"
    :rowHeight="rowHeight" :taskbarHeight="taskbarHeight"  :splitterSettings="splitterSettings" :allowResizing='true' :resourceFields="resourceFields"
    :labelSettings="labelSettings" :projectStartDate="projectStartDate" :projectEndDate="projectEndDate" :resources="resources">
   
    <template v-slot:leftLabelTemplate="{data}">
          <div>
            <template>{{data.TaskName}} [ {{ data.Progress }} % ]</template>
          </div>
        </template>

        <template v-slot:rightLabelTemplate="{data}">
          <div v-if="data.ganttProperties.resourceInfo">
            <span v-for="resource in data.ganttProperties.resourceInfo">
              <img :src="'https://ej2.syncfusion.com/vue/demos/src/gantt/images/' + resource.resourceName + '.png'"
              style="height: 40px;"/>
              <span style="margin-left:5px;margin-right:5px">{{ resource.resourceName }}</span>
            </span>
          </div>
        </template>
      
      <e-columns>
        <e-column field='TaskID' headerText='Task ID' textAlign='Left' width='100'></e-column>
        <e-column field='TaskName' headerText='Task Name' width='150'></e-column>
      </e-columns>
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
  child: 'subtasks',
};
const toolbar = ['PdfExport'];
const toolbarClick = (args) => {
    if (args.item.id === 'GanttContainer_pdfexport') {
        var exportProperties = {
          fileName:"new.pdf"
        };
        var ganttChart = gantt.value.ej2Instances;
        ganttChart.pdfExport(exportProperties);
    }
};
const pdfQueryTaskbarInfo = (args) => {
      args.labelSettings.leftLabel.value = args.data.ganttProperties.taskName + '[' + args.data.ganttProperties.progress + ']';
      if (args.data.ganttProperties.resourceNames) {
            args.labelSettings.rightLabel.value = args.data.ganttProperties.resourceNames;
            args.labelSettings.rightLabel.image = [{
                  base64: (args).data.taskData.resourcesImage, width: 20, height: 20
             }]

        }
     args.labelSettings.taskLabel.value = args.data.ganttProperties.progress + '%' 
};
const rowHeight = 55;
const splitterSettings = {
     columnIndex:3
  };
const resourceFields = {
  id: 'resourceId',
  name: 'resourceName',
};
const resources = editingResources;
const projectStartDate = new Date('03/24/2019');
const projectEndDate = new Date('04/30/2019');
const labelSettings = {
    leftLabel: "leftLabelTemplate",
    rightLabel: "rightLabelTemplate",
    taskLabel: '${Progress}%'
};
provide('gantt', [Toolbar, PdfExport]);
</script>