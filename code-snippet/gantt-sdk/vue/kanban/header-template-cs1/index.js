
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
        :cardSettings="cardSettings" cssClass="kanban-header-template">
          <e-columns>
            <e-column headerText="To Do" keyField="Open" :template="columnsTemplate"></e-column>
            <e-column headerText="In Progress" keyField="InProgress" :template="columnsTemplate"></e-column>
            <e-column headerText="Testing" keyField="Testing" :template="columnsTemplate"></e-column>
            <e-column headerText="Done" keyField="Close" :template="columnsTemplate"></e-column>
          </e-columns>
        </ejs-kanban>
  </div>
`,

  data: function() {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id"
      },
      columnsTemplate: function () {
        return {
          template: Vue.component('columnsTemplate', {
            template: `<div class="header-template-wrap">
                          <div :class="getClassName(data)"></div>
                          <div class="header-text">{{data.headerText}}</div>
                        </div>`,
            data() {
              return {
                data: {}
              };
            },
            methods: {
              getClassName: function(data) {
                return "header-icon e-icons " + data.keyField;
              }
            }
          })
        }
      },
    };
  },

});