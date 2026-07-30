<template>
  <div id="app">
    <ejs-button
      id="particular_column"
      class="e-btn"
      v-on:click="particularColumnClick"
      >Enable Allow Toggle</ejs-button
    >
    <ejs-button id="column" class="e-btn" v-on:click="columnClick"
      >Change Columns</ejs-button
    >
    <ejs-kanban
      ref="KanbanObj"
      id="kanban"
      keyField="Status"
      :dataSource="kanbanData"
      :cardSettings="cardSettings"
    >
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
/* eslint-disable */
import { KanbanComponent as EjsKanban, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-kanban";
import { ButtonComponent as EjsButton} from "@syncfusion/ej2-vue-buttons";
import { extend } from "@syncfusion/ej2-base";
import { kanbanData } from "./datasource.js";
import { ref, onMounted } from "vue";

const KanbanObj = ref(null);
kanbanData = extend([], kanbanData, null, true);
const cardSettings =  {
contentField: "Summary",
headerField: "Id"
};

onMounted = () => {
  const KanbanObj = KanbanObj.value.ej2Instances;
};

const particularColumnClick = () => {
  KanbanObj.value.columns[1].allowToggle = true;
};
const columnClick = () => {
  KanbanObj.value.columns = [
  { headerText: "To Do", keyField: "Open" },
  { headerText: "Done", keyField: "Close" },
  ];
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-kanban/styles/tailwind3.css";
</style>