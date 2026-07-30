<template>
  <div id="app">
    <ejs-dropdownlist
      ref="PriorityDrop"
      id="priority_filter"
      :dataSource="priorityData"
      :change="change"
      value="None"
      placeholder="Select a priority"
    ></ejs-dropdownlist>
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

import { KanbanComponent as EjsKanban, ColumnsDirective as EColumns, ColumnDirective as EColumn} from "@syncfusion/ej2-vue-kanban";
import { DropDownListComponent as EjsDropdownlist} from "@syncfusion/ej2-vue-dropdowns";
import { extend } from "@syncfusion/ej2-base";
import { Query } from "@syncfusion/ej2-data";
import { kanbanData } from "./datasource.js";
import { onMounted as mounted, ref } from "vue";

const priorityData = ["None", "High", "Normal", "Low"];
kanbanData = extend([], kanbanData, null, true);
const cardSettings = {
  contentField: "Summary",
  headerField: "Id"
};
let KanbanObj = ref(null);
let PriorityDrop = ref(null);
let priorityObj = ref(null);
let kanbanObj = ref(null);
const change = (args) => {
  let filterQuery = new Query();
  if (args.value !== "None") {
    filterQuery = new Query().where("Priority", "equal", args.value);
  }
  kanbanObj.query = filterQuery;
};

mounted(() => {
  kanbanObj = KanbanObj.value.ej2Instances;
  priorityObj = PriorityDrop.value.ej2Instances;
});

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