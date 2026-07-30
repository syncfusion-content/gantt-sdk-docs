import Vue from 'vue';
import { KanbanPlugin } from '@syncfusion/ej2-vue-kanban';
Vue.use(KanbanPlugin);

new Vue({
  el: '#app',
  template: `
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
`,

});