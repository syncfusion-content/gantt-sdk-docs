<template>
  <div id="app">
       <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" allowDragAndDrop="false" :dialogOpen="dialogOpen">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Testing" keyField="Testing"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
          </e-columns>
        </ejs-kanban>
  </div>
</template>

<script setup>

import { KanbanComponent as EjsKanban, ColumnDirective as EColumn, ColumnsDirective as EColumns} from '@syncfusion/ej2-vue-kanban';
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";

class TaskIdAdaptor extends ODataAdaptor {
    processResponse() {
        let i = 0;
        // calling base class processResponse function
        let original = super.processResponse.apply(this, arguments);
        // adding Task Id
        original.forEach((item) => item['Id'] = 'Task - ' + ++i);
        return original;
    }
}

let SERVICE_URI = "https://services.syncfusion.com/vue/production/api/Kanban";
let kanbanData = new DataManager({
    url: SERVICE_URI,
    adaptor: new TaskIdAdaptor
});
const cardSettings = {
    contentField: "Summary",
    headerField: "Id"
};

const dialogOpen = (args) => {
    args.cancel = true;
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
</style>