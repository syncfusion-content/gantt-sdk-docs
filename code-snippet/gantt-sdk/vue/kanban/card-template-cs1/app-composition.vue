<template>
  <div id="app">
       <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings">
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
import { extend } from '@syncfusion/ej2-base';
import { kanbanData } from './datasource.js';

import { createApp } from 'vue';

const app = createApp({});
var cardTemplate1 = app.component('cardTemplate', {
  data: () => ({}),
  template: `<div class='e-card-content'>
    <table class="card-template-wrap">
      <tbody>
        <tr>
          <td class="CardHeader">Id:</td>
          <td>{{data.Id}}</td>
        </tr>
        <tr>
          <td class="CardHeader">Type:</td>
          <td>{{data.Type}}</td>
        </tr>
        <tr>
          <td class="CardHeader">Priority:</td>
          <td>{{data.Priority}}</td>
        </tr>
        <tr>
          <td class="CardHeader">Summary:</td>
          <td>{{data.Summary}}</td>
        </tr>
      </tbody>
    </table>
  </div>`,
});

const kanbanData = extend([], kanbanData, null, true);
const cardSettings = {
  headerField: "Id",
  template: function() {
    return {
      template: cardTemplate1
    }
  }
};

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

.e-kanban .card-template-wrap td {
    background: none !important;
}

.e-kanban .card-template-wrap .CardHeader {
    font-weight: 500;
}
</style>