<template>
  <div id="app">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6">
        <h4>Kanban</h4>
       <ejs-kanban id="kanban" ref="kanbanObj" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" :externalDropId='externalKanbanDropId' :dragStop="kanbanDragStop">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
        </div>
      <div class="col-sm-6">
        <h4>TreeView</h4>
            <ejs-treeview id='treeView' ref="treeViewObj" :nodeTemplate="treeTemplate" :fields='treeViewFields' :allowDragAndDrop=true :nodeDragStop="onItemDragStop"></ejs-treeview>
        </div>
    </div>
  </div>
</div>
</template>

<script setup>

import { KanbanComponent as EjsKanban, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-kanban';
import { extend, closest } from '@syncfusion/ej2-base';
import { kanbanData, treeViewData } from './datasource.js';

import { TreeViewComponent as EjsTreeview} from "@syncfusion/ej2-vue-navigations";
import { createApp, ref } from "vue";

const app = createApp();
const treeViewObj = ref(null);
const kanbanObj = ref(null);

 var treeVue = app.component("tree-template", {
  data: () => ({}),
  template: '<div id="treelist"><div id="treeviewlist">{{data.Id}} - {{data.Status}}</div></div>'
});

kanbanData = extend([], kanbanData, null, true);
const cardSettings = {
  contentField: "Summary",
  headerField: "Id"
};
const externalKanbanDropId = ['#treeView'];
const treeViewFields = { dataSource: treeViewData, id: 'Id', text: 'Status' };
const treeTemplate = function(e) {
    return { template: treeVue }
}

const kanbanDragStop = function (args) {
    let treeViewElement = closest(args.event.target, '#treeView');
    let kanbanObj = kanbanObj.value.ej2Instances;
    let treeObj = treeViewObj.value.ej2Instances;
    if (treeViewElement) {
      kanbanObj.deleteCard(args.data);
      treeObj.addNodes(args.data);
      args.cancel = true;
    }
};

const onItemDragStop = function (args) {
  let kanbanElement = closest(args.event.target, '#kanban');
  let kanbanObj = kanbanObj.value.ej2Instances;
  let treeObj = treeViewObj.value.ej2Instances;
  if (kanbanElement) {
    let treeData =
      treeObj.fields.dataSource;
    const filteredData =
      treeData.filter((item) => item.Id === parseInt(args.draggedNodeData.id, 10));
    treeObj.removeNodes([args.draggedNodeData.id]);
    kanbanObj.openDialog('Add', filteredData[0]);
    args.cancel = true;
  }
};

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-kanban/styles/tailwind3.css';
.row {
  display: flex;
}
</style>