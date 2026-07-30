<template>
  <div id="app">
<ejs-button v-on:click="btnClick">Load Data</ejs-button>
   <ejs-kanban ref="kanbanObj" id="kanban" keyField="ShipCountry"
    :cardSettings="cardSettings">
      <e-columns>
        <e-column headerText="Denmark" keyField="Denmark"></e-column>
        <e-column headerText="Brazil" keyField="Brazil"></e-column>
        <e-column headerText="Switzerland" keyField="Switzerland"></e-column>
        <e-column headerText="Germany" keyField="Germany"></e-column>
      </e-columns>
    </ejs-kanban>
  </div>
</template>

<script setup>

import { KanbanComponent as EjsKanban, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-kanban';
import { ButtonComponent as EjsButton} from "@syncfusion/ej2-vue-buttons";
import { Ajax } from '@syncfusion/ej2-base';
import { ref } from 'vue';
const cardSettings = {
  contentField: "ShippedDate",
  headerField: "OrderID"
};

const kanbanObj = ref(null);
const btnClick = () => {
        var kanbanData = kanbanObj.value.ej2Instances;
        var ajax = new Ajax("https://services.syncfusion.com/vue/production/api/Orders", "GET");
        ajax.send();
        ajax.onSuccess = function (result) {
            kanbanData.dataSource = JSON.parse(result);
        };
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