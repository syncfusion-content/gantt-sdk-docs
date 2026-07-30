
import Vue from "vue";
import { GanttPlugin, Toolbar, Selection, Edit, Filter,Sort,RowDD,ColumnMenu,Reorder,Resize,UndoRedo } from "@syncfusion/ej2-vue-gantt";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { projectNewData } from './data-source.js';
Vue.use(GanttPlugin);
Vue.use(ButtonPlugin);
;
new Vue({
	el: '#app',
	template: `
     <div>
     <ejs-button id="clearundocollection" cssClass="e-info" v-on:click.native="clearundocollection">ClearUndoCollection</ejs-button>
     <ejs-button id="clearredocollection" cssClass="e-info" v-on:click.native="clearredocollection">ClearRedoCollection</ejs-button>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings"
            :allowSorting="true" :allowResizing="true" :allowReordering="true" :showColumnMenu="true" :enableUndoRedo="true" :allowFiltering="true" 
            :undoRedoActions="undoRedoActions" :allowRowDragAndDrop="true"></ejs-gantt>
    </div>
`,

  data: function() {
      return{
            data: projectNewData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            undoRedoActions: ['Add', 'Edit', 'Delete', 'Search','Sorting','Filtering', 'ZoomIn', 'ZoomOut', 'ZoomToFit','Indent','Outdent', 
    'PreviousTimeSpan', 'NextTimeSpan','ColumnState'],
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Search', 'ZoomIn', 'ZoomOut', 'ZoomToFit','Indent','Outdent', 
            'PrevTimeSpan', 'NextTimeSpan','Undo','Redo'],
             editSettings: {
                allowAdding: true,
                allowEditing: true,
                allowDeleting: true,
                allowTaskbarEditing: true,
                showDeleteConfirmDialog: true
            },
      };
  },
  provide: {
      gantt: [ Toolbar, Selection, Edit, Filter,Sort,RowDD,ColumnMenu,Reorder,Resize,UndoRedo ]
  },
  methods: {
    clearundocollection: function(e){
        var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
        ganttObj.clearUndoCollection();
    },
    clearredocollection: function(e){
        var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
        ganttObj.clearRedoCollection();
    },
}

});
