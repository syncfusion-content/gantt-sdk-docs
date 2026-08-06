
import Vue from "vue";
import { GanttPlugin , Toolbar, PdfExport, Selection,PdfQueryCellInfoEventArgs} from "@syncfusion/ej2-vue-gantt";
import { editingData , editingResources } from './data-source.js';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :pdfQueryTaskbarInfo="pdfQueryTaskbarInfo" :height="height"
      :rowHeight="rowHeight" :taskbarHeight="taskbarHeight" :splitterSettings="splitterSettings" :taskbarTemplate="'taskbarTemplate'" :parentTaskbarTemplate="'parentTaskbarTemplate'"
      :milestoneTemplate="'milestoneTemplate'" :allowResizing='true' :resourceFields="resourceFields"
      :resources="resources">

      <template v-slot:taskbarTemplate="{data}">
        <div class="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar" style="height:100%;border-radius:5px;">
        <div class="image">
        <img
        :src="'https://ej2.syncfusion.com/vue/demos/source/gantt/images/' + data.ganttProperties.resourceNames + '.png'"
        height="40px" />
    </div> 
        <span class="e-task-label"
            style="position:absolute;top:8px;left:30px;font-size:12px;text-overflow:ellipsis;height:90%;overflow:hidden;">{{data.TaskName}}</span>
        </div>
      </template>

      <template v-slot:parentTaskbarTemplate="{data}">
        <div class="e-gantt-parent-taskbar-inner-div e-gantt-parent-taskbar" style="height:100%;border-radius:5px;">
          <span class="e-task-label"
            style="position:absolute;top:5px;font-size:12px;text-overflow:ellipsis;height:90%;overflow:hidden;">{{data.TaskName}}</span>
        </div>
      </template>
      <template v-slot:milestoneTemplate="{ data }">
      <div class="e-gantt-milestone" style="position:relative;">
        <div class="e-milestone-top"
             style="border-right-width: 26px; margin-top: -9px; border-left-width: 26px; border-bottom-width: 26px;"></div>
        <div class="e-milestone-bottom"
             style="top: 26px; border-right-width: 26px; border-left-width: 26px; border-top-width: 26px;"></div>
        <div class="image" style="position: absolute; top: 40%; left: 80%; transform: translate(-50%, -50%);">
          <img :src="'https://ej2.syncfusion.com/vue/demos/source/gantt/images/' + data.ganttProperties.resourceNames + '.png'"
               height="30px" />
        </div>
      </div>
    </template>

      <e-columns>
        <e-column field='TaskID' headerText='Task ID' textAlign='Left' width='100'></e-column>
        <e-column field='TaskName' headerText='Task Name' width='150'></e-column>
      </e-columns>
    </ejs-gantt>
  </div>
`,

  data: function() {
      return{
            data: editingData,
            taskFields: {
             id: 'TaskID',
            name: 'TaskName',
            resourceInfo: 'resources',
            startDate: 'StartDate',
            duration: 'Duration',
            child: 'subtasks',
            },
            rowHeight: 45,
            taskbarHeight: 35,
        splitterSettings:{
            columnIndex:3
            },
            height:'450px',
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName',
        },
        toolbar: ['PdfExport'],
        toolbarClick: (args) => {
                if (args.item.id === 'GanttContainer_pdfexport') {
                    var exportProperties: PdfExportProperties = {
                      fileName:"new.pdf"
                    };
                    var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
                    ganttChart.pdfExport(exportProperties);
                }
            },
            pdfQueryTaskbarInfo: (args) => {
              if (!args.data.hasChildRecords) {
                if (args.data.ganttProperties.resourceNames) {
                    args.taskbarTemplate.image = [{
                            width: 20, base64: args.data.taskData.resourcesImage, height: 20
                        }];
                }
                args.taskbarTemplate.value = args.data.TaskName;
            }
            if (args.data.hasChildRecords) {
                if (args.data.ganttProperties.resourceNames) {
                    args.taskbarTemplate.image = [{
                            width: 20, base64: args.data.taskData.resourcesImage, height: 20
                        }];
                }
                args.taskbarTemplate.value = args.data.TaskName;
            }
            if (args.data.ganttProperties.duration === 0) {
                if (args.data.ganttProperties.resourceNames) {
                    args.taskbarTemplate.image = [{
                            width: 20, base64: args.data.taskData.resourcesImage, height: 20,
                        }];
                }
                args.taskbarTemplate.value = args.data.TaskName
            }
        },
        resources: editingResources
      }
  },
  provide: {
    gantt: [Toolbar, PdfExport]
}

});