<template>
  <div id="app">
       <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings">
          <e-columns>
            <e-column headerText="Open" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="In Review" keyField="Review"></e-column>
            <e-column headerText="Completed" keyField="Close"></e-column>
          </e-columns>
          <e-stackedHeaders>
                <e-stackedHeader text= 'To Do' keyFields= 'Open'></e-stackedHeader>
                <e-stackedHeader text= 'Development Phase' keyFields= 'InProgress, Review'></e-stackedHeader>
                <e-stackedHeader text= 'Done' keyFields= 'Close'></e-stackedHeader>
            </e-stackedHeaders>
        </ejs-kanban>
  </div>
</template>

<script>

import { KanbanComponent, ColumnDirective, ColumnsDirective, StackedHeaderDirective, StackedHeadersDirective } from '@syncfusion/ej2-vue-kanban';
import { extend } from '@syncfusion/ej2-base';
import { kanbanData } from './datasource.js';

export default {
name: "App",
components: {
"ejs-kanban":KanbanComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"e-stackedHeaders":StackedHeadersDirective,
"e-stackedHeader":StackedHeaderDirective
},
  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id"
      }
    };
  },
}
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
</style>