<template>
  <div id="app">
    <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData" :cardSettings="cardSettings">
      <e-columns>
        <e-column headerText="To Do" keyField="Open" allowToggle="true"></e-column>
        <e-column headerText="In Progress" keyField="InProgress" allowToggle="true"></e-column>
        <e-column headerText="Testing" keyField="Testing" allowToggle="true"></e-column>
        <e-column headerText="Done" keyField="Close" allowToggle="true"></e-column>
      </e-columns>
    </ejs-kanban>
  </div>
</template>

<script setup>

import { KanbanComponent as EjsKanban, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-kanban';
import { extend } from '@syncfusion/ej2-base';
import { kanbanData } from './datasource.js';

kanbanData = extend([], kanbanData, null, true);
const cardSettings = {
  contentField: "Summary",
  headerField: "Id"
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/kanban/index.css";
</style>