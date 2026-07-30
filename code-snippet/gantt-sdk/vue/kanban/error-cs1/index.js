
import Vue from "vue";
import { KanbanPlugin } from '@syncfusion/ej2-vue-kanban';
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";

Vue.use(KanbanPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
       <ejs-kanban id="kanban" ref="kanbanObj" keyField="Status" :dataSource="kanbanData"
        :cardSettings="cardSettings" :actionFailure='actionFailure'>
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
        kanbanData: new DataManager({
            url: 'http://some.com/invalidUrl',
            adaptor: new ODataAdaptor()
        }),
        cardSettings: {
            contentField: "Summary",
            headerField: "Id"
        },
    };
  },
  methods: {
    actionFailure: function() {
       let span = document.createElement('span');
       this.$refs.kanbanObj.ej2Instance.element.parentNode.insertBefore(span,this.$refs.kanbanObj.ej2Instance.element);
       span.style.color = '#FF0000'
       span.innerHTML = 'Server exception: 404 Not found';
    }
  }

});