<template>
  <div id="app">
    <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData" :cardSettings="cardSettings">
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
import { KanbanComponent as EjsKanban, ColumnDirective as EColumn, ColumnsDirective as EColumns } from '@syncfusion/ej2-vue-kanban';

const kanbanData = [
  { Id: 1, Status: 'Open', Summary: 'Analyze the new requirements gathered from the customer.', Type: 'Story', Priority: 'Low', Tags: 'Analyze,Customer', Estimate: 3.5, Assignee: 'Nancy Davloio', RankId: 1 },
  { Id: 2, Status: 'InProgress', Summary: 'Improve application performance', Type: 'Improvement', Priority: 'Normal', Tags: 'Improvement', Estimate: 6, Assignee: 'Andrew Fuller', RankId: 1 },
  { Id: 3, Status: 'Open', Summary: 'Arrange a web meeting with the customer to get new requirements.', Type: 'Others', Priority: 'Critical', Tags: 'Meeting', Estimate: 5.5, Assignee: 'Janet Leverling', RankId: 2 },
  { Id: 4, Status: 'InProgress', Summary: 'Fix the issues reported in the IE browser.', Type: 'Bug', Priority: 'Release Breaker', Tags: 'IE', Estimate: 2.5, Assignee: 'Janet Leverling', RankId: 2 },
  { Id: 5, Status: 'Testing', Summary: 'Fix the issues reported by the customer.', Type: 'Bug', Priority: 'Low', Tags: 'Customer', Estimate: 3.5, Assignee: 'Steven walker', RankId: 1 }
];

const cardSettings = {
  contentField: "Summary",
  headerField: "Id"
};

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-vue-kanban/styles/tailwind3.css';
</style>