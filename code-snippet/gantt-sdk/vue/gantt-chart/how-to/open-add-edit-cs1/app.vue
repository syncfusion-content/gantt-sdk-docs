<template>
     <div>
        <ejs-button id="editDialog" cssClass="e-info" v-on:click.native="edit">edit</ejs-button>
        <br><br>
       <ejs-button id="addDialog" cssClass="e-info" v-on:click.native="add">add</ejs-button>
       <br><br>
       <ejs-gantt ref='gantt' id="GanttContainer" :dataSource="data" :taskFields= "taskFields" :height="height" :editDialogFields="editDialogFields" :editSettings="editSettings" :resourceNameMapping= "resourceNameMapping" :resourceIDMapping="resourceIdMapping" :resources= "resources"></ejs-gantt>
    </div>
</template>
<script>
import { GanttComponent, Edit, Selection } from "@syncfusion/ej2-vue-gantt";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { editingData , editingResources } from './data-source.js';
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-gantt":GanttComponent
},
  data: function() {
      return{
            data: editingData,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks',
                notes: 'info',
                resourceInfo: 'resources'
            },
            editDialogFields: [
                { type: 'General', headerText: 'General' },
                { type: 'Dependency' },
                { type: 'Resources' },
                { type: 'Notes' }
            ],
            height: '450px',
            resourceNameMapping: 'resourceName',
            resourceIdMapping: 'resourceId',
            resources: editingResources,
            editSettings: {
                allowEditing: true,
                allowTaskbarEditing: true
            }
      };
  },
  provide: {
      gantt: [ Edit,Selection ]
  },
  methods: {
      edit: function(e){
          var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
    ganttObj.editModule.dialogModule.openEditDialog();
      },
      add: function(e){
          var ganttObj = document.getElementById('GanttContainer').ej2_instances[0];
    ganttObj.editModule.dialogModule.openAddDialog();
      }
  }
}
</script>