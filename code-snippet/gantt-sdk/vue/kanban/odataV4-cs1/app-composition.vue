<template>
  <div id="app">
    <ejs-kanban id="kanban" keyField="ContactTitle" :dataSource="kanbanData" :cardSettings="cardSettings"
      allowDragAndDrop="false" :dialogOpen="dialogOpen">
      <e-columns>
        <e-column headerText="Order Administrator" keyField="Order Administrator"></e-column>
        <e-column headerText="Sales Representative" keyField="Sales Representative"></e-column>
        <e-column headerText="Export Administrator" keyField="Export Administrator"></e-column>
      </e-columns>
    </ejs-kanban>
  </div>
</template>

<script setup>

import { KanbanComponent as EjsKanban, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-kanban';
import { DataManager, ODataV4Adaptor } from "@syncfusion/ej2-data";

let SERVICE_URI = "https://services.odata.org/v4/northwind/northwind.svc/Suppliers";
let kanbanData = new DataManager({
  url: SERVICE_URI,
  adaptor: new ODataV4Adaptor(),
  crossDomain: true
});
const cardSettings = {
  contentField: "ContactName",
  headerField: "SupplierID"
};

const dialogOpen = function (args) {
  args.cancel = true;
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/kanban/index.css";
</style>