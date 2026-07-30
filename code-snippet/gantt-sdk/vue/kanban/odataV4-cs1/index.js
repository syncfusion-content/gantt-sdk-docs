
import Vue from "vue";
import { KanbanPlugin } from '@syncfusion/ej2-vue-kanban';
import { DataManager, ODataV4Adaptor } from "@syncfusion/ej2-data";
import { extend } from '@syncfusion/ej2-base';
Vue.use(KanbanPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
       <ejs-kanban id="kanban" keyField="ContactTitle" :dataSource="kanbanData"
        :cardSettings="cardSettings" allowDragAndDrop="false" :dialogOpen="dialogOpen">
          <e-columns>
            <e-column headerText="Order Administrator" keyField="Order Administrator"></e-column>
            <e-column headerText="Sales Representative" keyField="Sales Representative"></e-column>
            <e-column headerText="Export Administrator" keyField="Export Administrator"></e-column>
          </e-columns>
        </ejs-kanban>
  </div>
`,

  data: function() {
    let SERVICE_URI = "https://services.odata.org/v4/northwind/northwind.svc/Suppliers";
    return {
        kanbanData: new DataManager({
            url: SERVICE_URI,
            adaptor: new ODataV4Adaptor(),
            crossDomain: true
        });
        cardSettings: {
            contentField: "ContactName",
            headerField: "SupplierID",
        }
    };
  },
  methods: {
    dialogOpen: function (args) {
        args.cancel = true;
    }
  }

});