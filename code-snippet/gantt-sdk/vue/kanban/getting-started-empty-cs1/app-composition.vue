<template>
  <div id='app'>
    <ejs-kanban id="kanban" keyField="Status">
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
import { KanbanComponent as EjsKanban, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-kanban';
</script>
<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/kanban/index.css";
</style>