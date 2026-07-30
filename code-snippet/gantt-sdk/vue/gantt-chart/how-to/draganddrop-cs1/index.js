
import Vue from "vue";
import { GanttPlugin, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
import { editingData, editingResources } from './data-source.js';
import { closest,addClass } from '@syncfusion/ej2-base';
Vue.use(GanttPlugin);
Vue.use(TreeViewPlugin);
;
new Vue({
	el: '#app',
	template: `
    <div>
    <p><b>Gantt</b></p>
    <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height"
    :resourceFields= "resourceFields" :resources= "resources" :labelSettings= "labelSettings" :editSettings= "editSettings"></ejs-gantt>
    <p><b>List</b></p>
    <ejs-treeview id='treeview' :fields="fields" :allowDragAndDrop='true' :nodeDragStop="nodeDragStop"></ejs-treeview>
    </div>
`,

  data: function() {
      return{
            data: editingData,
            resources: editingResources,
            fields: { dataSource: editingResources, id: 'resourceId', text: 'resourceName' },
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                resourceInfo: 'resources',
                child: 'subtasks'
            },
            splitterSettings:{
                position: "30%"
            },
            labelSettings: {
                rightLabel: 'resources'
            },
            editSettings: {
                allowEditing: true
            },
            resourceFields: {
                id: 'resourceId',
                name: 'resourceName'
            },
        };
    },
    provide: {
      gantt: [Edit, Selection]
    },
    methods: {
        nodeDragStop: function (args) {
            args.cancel = true;
            var ganttChart = document.getElementById('GanttContainer').ej2_instances[0];
            var chartEle = closest(args.target, '.e-chart-row');
            var gridEle = closest(args.target, '.e-row');
            if(gridEle) {
            var index = ganttChart.treeGrid.getRows().indexOf(gridEle);
            ganttChart.selectRow(index);
            }
            if(chartEle){
                var index = chartEle.rowIndex;
                ganttChart.selectRow(index);
            }
            var record= args.draggedNodeData;
            var selectedData = ganttChart.flatData[ganttChart.selectedRowIndex];
            var selectedDataResource = selectedData.taskData.resources;
            var resources = [];
            if (selectedDataResource) {
                for (var i = 0; i < selectedDataResource.length; i++) {
                resources.push(selectedDataResource[i].resourceId);
                }
            }
            resources.push(parseInt(record.id));
            if (chartEle || gridEle) {
                var data = {
                    TaskID: selectedData.taskData.TaskID,
                    resources: resources
                };
                ganttChart.updateRecordByID(data);
            }
        }
    }

});