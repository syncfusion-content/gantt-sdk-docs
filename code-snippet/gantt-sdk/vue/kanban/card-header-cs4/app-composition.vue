<template>
  <div id="app">
    <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData" :cardSettings="cardSettings"
      :dataBound="OnDataBound">
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
import { DialogUtility } from '@syncfusion/ej2-popups';
import { kanbanData } from './datasource.js';

kanbanData = extend([], kanbanData, null, true);
const cardSettings = {
  contentField: "Summary",
  headerField: "Id"
};
const OnDataBound = () => {
  var headerEle = document.querySelector('.e-header-row');
  headerEle.addEventListener("dblclick", function (e) {
    var target = closest(e.target, '.e-header-cells');
    DialogUtility.alert({
      title: 'Header',
      content: "Double clicked on " + target.querySelector('.e-header-text').innerText + " header",
      showCloseIcon: true,
      closeOnEscape: true,
      animationSettings: { effect: 'Zoom' }
    });
  });
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/kanban/index.css";
</style>