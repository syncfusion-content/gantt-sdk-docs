<template>
  <div id="app">
       <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" allowDragAndDrop="false" :dialogOpen="dialogOpen" :query='query'>
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Testing" keyField="Testing"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
  </div>
</template>

<script>

import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-vue-kanban';
import { DataManager, ODataAdaptor, Query } from "@syncfusion/ej2-data";

export default {
name: "App",
components: {
"ejs-kanban":KanbanComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
},
  data: function() {
    let SERVICE_URI = "https://services.syncfusion.com/vue/production/api/Kanban";
    return {
        kanbanData: new DataManager({
            url: SERVICE_URI,
            adaptor: new ODataAdaptor(),
            crossDomain: true
        }),
        cardSettings: {
            contentField: "Summary",
            headerField: "Id"
        },
        query: new Query().addParams('ej2kanban', 'true')
    };
  },
  methods: {
    dialogOpen: function (args) {
        args.cancel = true;
    }
  }
}
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
</style>