<template>
  <div id="app">
       <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" cssClass="kanban-header-template">
          <e-columns>
            <e-column headerText="To Do" keyField="Open" :template="columnsTemplate"></e-column>
            <e-column headerText="In Progress" keyField="InProgress" :template="columnsTemplate"></e-column>
            <e-column headerText="Testing" keyField="Testing" :template="columnsTemplate"></e-column>
            <e-column headerText="Done" keyField="Close" :template="columnsTemplate"></e-column>
          </e-columns>
        </ejs-kanban>
  </div>
</template>

<script setup>

import { KanbanComponent as EjsKanban, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-kanban';
import { extend } from '@syncfusion/ej2-base';
import { kanbanData } from './datasource.js';
import { createApp } from 'vue';

const app = createApp({});
var clTemplate= app.component('kanbanComponent', {
  data: () => ({}),
  template: `<div class="header-template-wrap">
    <div :class="getClassName(data)"></div>
    <div class="header-text">{{data.headerText}}</div>
  </div>`,
  methods: {
    getClassName(data) {
      return "header-icon e-icons " + data.keyField;
    }
  }
});

kanbanData = extend([], kanbanData, null, true);
const cardSettings = {
  contentField: "Summary",
  headerField: "Id"
};
const columnsTemplate = function () {
  return {
    template: clTemplate
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

  .kanban-header-template.e-kanban .header-template-wrap {
    display: inline-flex;
    font-size: 15px;
    font-weight: 400;
  }
  
  .kanban-header-template.e-kanban .header-template-wrap .header-icon {
    font-family: 'Kanban priority icons';
    margin-top: 3px;
    width: 10%;
  }
  
  .kanban-header-template.e-kanban .header-template-wrap .header-text {
    margin-left: 15px;
  }
  
  .e-kanban.e-rtl .header-template-wrap .header-text {
    margin-right: 15px;
  }
  
  .kanban-header-template.e-kanban .card-header {
    padding-left: 12px;
  }
  
  .kanban-header-template.e-kanban .Open::before {
    content: '\e700';
    color: #0251cc;
    font-size: 16px;
  }
  
  .kanban-header-template.e-kanban .InProgress::before {
    content: '\e703';
    color: #ea9713;
    font-size: 16px;
  }
  
  .kanban-header-template.e-kanban .Review::before {
    content: '\e701';
    color: #8e4399;
    font-size: 16px;
  }
  
  .kanban-header-template.e-kanban .Close::before {
    content: '\e702';
    color: #63ba3c;
    font-size: 16px;
  }
  
  @font-face {
    font-family: 'Kanban priority icons';
    src:
      url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  [class^="sf-icon-"],
  [class*=" sf-icon-"] {
    font-family: 'Kanban priority icons' !important;
    speak: none;
    font-size: 55px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
</style>