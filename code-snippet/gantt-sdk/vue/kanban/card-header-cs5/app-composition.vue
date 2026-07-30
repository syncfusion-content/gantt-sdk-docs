<template>
  <div id="app">
    <table>
      <tbody>
        <td style="width: 200px">
          <ejs-textbox
            ref="SearchText"
            id="search_text"
            placeholder="Enter search text"
            showClearButton="true"
          ></ejs-textbox>
        </td>
        <td>
          <ejs-button
            id="reset_filter"
            class="e-btn"
            v-on:click="resetClick"
            >Reset</ejs-button
          >
        </td>
      </tbody>
    </table>
    <ejs-kanban
      id="kanban"
      ref="kanbanObj"
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

import { KanbanComponent as EjsKanban, ColumnsDirective as EColumns, ColumnDirective as EColumns} from "@syncfusion/ej2-vue-kanban";
import { ButtonComponent as EjsButton} from "@syncfusion/ej2-vue-buttons";
import { TextBoxComponent as EjsTextbox} from "@syncfusion/ej2-vue-inputs";
import { extend } from "@syncfusion/ej2-base";
import { Query } from "@syncfusion/ej2-data";
import { kanbanData } from "./datasource.js";
import { onMounted as mounted, ref } from "vue";

kanbanData = extend([], kanbanData, null, true);
const cardSettings = {
  contentField: "Summary",
  headerField: "Id"
};
let kanbanObj = ref(null);
const resetClick = () => {
  textObj.value = "";
  reset();
};
const textObj = ref(null);
let SearchText = ref(null);

mounted = () => {
  kanbanObj = kanbanObj.value.ej2Instances;
  textObj = SearchText.value.ej2Instances;
  document.getElementById("search_text").addEventListener("keyup", (e) => {
    let searchValue = e.target.value;
    let searchQuery = new Query();
    if (searchValue !== "") {
      searchQuery = new Query().search(
        searchValue,
        ["Id", "Summary"],
        "contains",
        true
      );
    }
    kanbanObj.query = searchQuery;
  });
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