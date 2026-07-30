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

<script>

import { KanbanComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-kanban";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { extend } from "@syncfusion/ej2-base";
import { kanbanData } from "./datasource.js";


export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-kanban":KanbanComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: function () {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id"
      },
    };
  },
  mounted: function () {
    this.kanbanObj = this.$refs.KanbanObj.ej2Instances;
  },
  methods: {
    particularColumnClick: function () {
      this.kanbanObj.columns[1].allowToggle = true;
    },
    columnClick: function () {
      this.kanbanObj.columns = [
        { headerText: "To Do", keyField: "Open" },
        { headerText: "Done", keyField: "Close" },
      ];
    },
  },
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