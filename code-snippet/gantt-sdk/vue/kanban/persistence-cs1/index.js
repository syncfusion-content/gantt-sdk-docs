
import Vue from "vue";
import { KanbanPlugin } from '@syncfusion/ej2-vue-kanban';
import { extend } from '@syncfusion/ej2-base';
import { kanbanData } from './datasource.js';
Vue.use(KanbanPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
       <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" enablePersistence="true" :swimlaneSettings="swimlaneSettings">
          <e-columns>
            <e-column headerText="To Do" keyField="Open" allowToggle="true"></e-column>
            <e-column headerText="In Progress" keyField="InProgress" allowToggle="true"></e-column>
            <e-column headerText="Testing" keyField="Testing" allowToggle="true"></e-column>
            <e-column headerText="Done" keyField="Close" allowToggle="true"></e-column>
          </e-columns>
        </ejs-kanban>
  </div>
`,

  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      },
      swimlaneSettings: {
        keyField: "Assignee"
      }
    };
  },

});