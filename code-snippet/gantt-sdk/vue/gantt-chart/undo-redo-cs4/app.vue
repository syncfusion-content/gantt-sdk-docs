<template>
     <div>
        <ejs-button id="getundocollection" cssClass="e-info" v-on:click="getundocollection">GetUndoCollection</ejs-button>
        <ejs-button id="getredocollection" cssClass="e-info" v-on:click="getredocollection">GetRedoCollection</ejs-button>
        <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :allowSorting='true' :allowFiltering='true' :enableUndoRedo='true' :allowRowDragAndDrop='true' :undoRedoActions="undoRedoActions" :allowReordering='true' :showColumnMenu='true' :allowResizing='true' :taskFields = "taskFields" :height = "height" :toolbar="toolbar" :editSettings= "editSettings"></ejs-gantt>
    </div>
</template>
<script>

import { GanttComponent, Toolbar, Selection, Edit, Filter,Sort,RowDD,ColumnMenu,Reorder,Resize,UndoRedo } from "@syncfusion/ej2-vue-gantt";
import { projectNewData } from './data-source.js';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-gantt":GanttComponent
},
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
            toolbar: ['Add', 'Edit', 'Update', 'Delete', 'Search', 'ZoomIn', 'ZoomOut', 'ZoomToFit','Indent','Outdent', 
            'PrevTimeSpan', 'NextTimeSpan','Undo','Redo'],
            undoRedoActions: ['Add', 'Edit', 'Delete', 'Search','Sorting','Filtering', 'ZoomIn', 'ZoomOut', 'ZoomToFit','Indent','Outdent', 
    'PreviousTimeSpan', 'NextTimeSpan','ColumnState'],
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
      getundocollection: function(e){
          var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
          console.log(ganttObj.getUndoActions());
      },
      getredocollection: function(e){
          var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
          console.log(ganttObj.getRedoActions());
      },
  }
};
</script>