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

<script>

import { KanbanComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-kanban";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { extend } from "@syncfusion/ej2-base";
import { Query } from "@syncfusion/ej2-data";
import { kanbanData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-kanban":KanbanComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: function () {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      },
      priorityData: ["None", "High", "Normal", "Low"],
    };
  },
  mounted: function () {
    this.kanbanObj = this.$refs.KanbanObj.ej2Instances;
    this.priorityObj = this.$refs.PriorityDrop.ej2Instances;
  },
  methods: {
    change: function (args) {
      let filterQuery = new Query();
      if (args.value !== "None") {
        filterQuery = new Query().where("Priority", "equal", args.value);
      }
      this.kanbanObj.query = filterQuery;
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