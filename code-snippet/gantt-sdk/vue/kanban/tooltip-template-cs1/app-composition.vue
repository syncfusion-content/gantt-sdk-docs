<template>
  <div id="app">
       <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" :enableTooltip='true' :tooltipTemplate="tooltipTemplate">
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
import { extend } from '@syncfusion/ej2-base';
import { kanbanData } from './datasource.js';
import {createApp} from 'vue';

const app = createApp({});

var ToolTipTemplate = app.component('tooltipTemplate', {
  data: () => ({}),
  template: `<div class='e-kanbanTooltipTemp'>
                <table>
                    <tr>
                        <td class="details">
                            <table>
                                <colgroup>
                                    <col style="width:30%">
                                    <col style="width:70%">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <td class="CardHeader">Assignee:</td>
                                        <td>{{data.Assignee}}</td>
                                    </tr>
                                    <tr>
                                        <td class="CardHeader
                                        ">Type:</td>
                                        <td>{{data.Type}}</td>
                                    </tr>
                                    <tr>
                                        <td class="CardHeader
                                        ">Estimate:</td>
                                        <td>{{data.Estimate}}</td>
                                    </tr>
                                    <tr>
                                        <td class="CardHeader
                                        ">Summary:</td>
                                        <td>{{data.Summary}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>`
});

kanbanData = extend([], kanbanData, null, true);
const cardSettings = {
  contentField: "Summary",
  headerField: "Id",
};
const tooltipTemplate = () => {
    return {
        template: ToolTipTemplate
    };
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

.e-kanbanTooltipTemp {
    width: 250px;
    padding: 3px;
}

.e-kanbanTooltipTemp>table {
    width: 100%;
}

.e-kanbanTooltipTemp td {
    vertical-align: top;
}
</style>