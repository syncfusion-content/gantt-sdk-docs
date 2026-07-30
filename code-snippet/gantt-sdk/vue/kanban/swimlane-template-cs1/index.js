
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
        :cardSettings="cardSettings" :swimlaneSettings="swimlaneSettings">
          <e-columns>
            <e-column headerText="To Do" keyField="Open"></e-column>
            <e-column headerText="In Progress" keyField="InProgress"></e-column>
            <e-column headerText="Testing" keyField="Testing"></e-column>
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
        },
        swimlaneSettings: {
            template: function() {
                return {
                    template: Vue.component('swimlaneTemplate', {
                        template: `<div class='swimlane-template e-swimlane-template-table'>
                                        <div class="e-swimlane-row-text"><img :src="image(data)" :alt="data.keyField" />
                                        <span>{{data.textField}}</span></div>
                                    </div>`,
                        data() {
                            return {
                                data: {}
                            };
                        },
                        methods: {
                            image: function(data) {
                                return data.keyField + '.png';
                            }
                        }
                    })
                }
            }
        }
    };
  },

});