
import Vue from "vue";
import { GanttPlugin, Toolbar, PdfExport, Edit} from "@syncfusion/ej2-vue-gantt";
import { ganttData } from './data-source.js';
import { PdfColor } from '@syncfusion/ej2-pdf-export';
Vue.use(GanttPlugin);
;
new Vue({
	el: '#app',
	template: `
  <div>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields="taskFields" :gridLines="gridLines" :toolbar="toolbar" :toolbarClick="toolbarClick" :allowPdfExport='true' :pdfQueryTaskbarInfo="pdfQueryTaskbarInfo" 
    :height="height" :editSettings= "editSettings" :queryTaskbarInfo="queryTaskbarInfo">
      <e-columns>
        <e-column field='TaskID' headerText='Task ID'></e-column>
        <e-column field='TaskName' headerText='Task Name'></e-column>
        <e-column field='StartDate' headerText='Start Date'></e-column>
        <e-column field='EndDate' headerText='End Date'></e-column>
      </e-columns>
    </ejs-gantt>
  </div>
`,

  data: function() {
    return {
      data: ganttData,
      taskFields: {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        child: "subtasks",
        segments: "Segments"
      },
      editSettings: {
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
      },
      height: '450px',
      gridLines : 'Both',
      toolbar: ['PdfExport'],
      toolbarClick: (args) => {
        if (args.item.id === 'GanttContainer_pdfexport') {
          var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
          ganttChart.pdfExport();
        }
      },
      pdfQueryTaskbarInfo: (args) => {
        if (args.taskbar.taskSegmentStyles) {
          args.taskbar.taskSegmentStyles[1].taskColor = new PdfColor(255, 0, 0);
          args.taskbar.taskSegmentStyles[1].progressColor = new PdfColor(0, 128, 0);
          args.taskbar.taskSegmentStyles[1].taskBorderColor = new PdfColor(0, 0, 0);
        }
      },
      queryTaskbarInfo: (args) => {
        if (args.data.taskData.Segments) {
          var segmentIndex = args.taskbarElement.dataset.segmentIndex;
          if (Number(segmentIndex) === 1) {
            args.taskbarBgColor = 'red';
            args.taskbarBorderColor = 'black';
            args.progressBarBgColor = "green";
          }
        }
      }
    }
  },

  provide: {
    gantt: [Toolbar, PdfExport, Edit]
  }

});