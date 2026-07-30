
import Vue from "vue";
import { KanbanPlugin } from '@syncfusion/ej2-vue-kanban';
import { extend, closest } from '@syncfusion/ej2-base';
import { kanbanData, treeViewData } from './datasource.js';
Vue.use(KanbanPlugin);
import { TreeViewPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(TreeViewPlugin);

 var treeVue = Vue.component("tree-template", {
        template: '<div id="treelist"><div id="treeviewlist">{{data.Id}} - {{data.Status}}</div></div>',
        data() {
            return {
                data: {}
            };
        }
    });

new Vue({
	el: '#app',
	template: `
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
`,

  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id"
      },
      externalKanbanDropId: ['#treeView'],
      treeViewFields: { dataSource: treeViewData, id: 'Id', text: 'Status' },
      treeTemplate: function(e) {
          return { template: treeVue }
      }
    };
  },
   methods: {
      kanbanDragStop: function (args) {
          let treeViewElement = closest(args.event.target as Element, '#treeView');
          let kanbanObj = this.$refs.kanbanObj.ej2Instances;
          let treeObj = this.$refs.treeViewObj.ej2Instances;
          if (treeViewElement) {
            kanbanObj.deleteCard(args.data);
            treeObj.addNodes(args.data);
            args.cancel = true;
          }
      },
      onItemDragStop: function (args) {
        let kanbanElement = closest(args.event.target as Element, '#kanban');
        let kanbanObj = this.$refs.kanbanObj.ej2Instances;
        let treeObj = this.$refs.treeViewObj.ej2Instances;
        if (kanbanElement) {
          let treeData =
            treeObj.fields.dataSource as { [key: string]: Object }[];
          const filteredData =
            treeData.filter((item) => item.Id === parseInt(args.draggedNodeData.id as string, 10));
          treeObj.removeNodes([args.draggedNodeData.id] as string[]);
          kanbanObj.openDialog('Add', filteredData[0]);
          args.cancel = true;
        }
      }
   }

});