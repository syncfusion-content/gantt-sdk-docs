
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
        :cardSettings="cardSettings" :enableTooltip=true>
          <e-columns>
            <e-column headerText="To Do" keyField="Open" minCount="6"></e-column>
            <e-column headerText="In Progress" keyField="InProgress" maxCount="5"></e-column>
            <e-column headerText="Testing" keyField="Testing" maxCount="4" minCount="3"></e-column>
            <e-column headerText="Done" keyField="Close"></e-column>
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
      }
    };
  },

});