
import Vue from "vue";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { extend } from "@syncfusion/ej2-base";
import { Query } from "@syncfusion/ej2-data";
import { kanbanData } from "./datasource.js";
Vue.use(KanbanPlugin);
Vue.use(DropDownListPlugin);
;
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-dropdownlist
      ref="PriorityDrop"
      id="priority_filter"
      :dataSource="priorityData"
      :change="change"
      value="None"
      placeholder="Select a priority"
    ></ejs-dropdownlist>
    <ejs-kanban
      ref="KanbanObj"
      id="kanban"
      keyField="Status"
      :dataSource="kanbanData"
      :cardSettings="cardSettings"
    >
      <e-columns>
        <e-column headerText="To Do" keyField="Open"></e-column>
        <e-column headerText="In Progress" keyField="InProgress"></e-column>
        <e-column headerText="Testing" keyField="Testing"></e-column>
        <e-column headerText="Done" keyField="Close"></e-column>
      </e-columns>
    </ejs-kanban>
  </div>
`,

  data: function () {
    return {
      kanbanData: extend([], kanbanData, null, true),
      cardSettings: {
        contentField: "Summary",
        headerField: "Id",
      },
      priorityData: ["None", "High", "Normal", "Low"],
    };
  },
  mounted: function () {
    this.kanbanObj = this.$refs.KanbanObj.ej2Instances;
    this.priorityObj = this.$refs.PriorityDrop.ej2Instances;
  },
  methods: {
    change: function (args) {
      let filterQuery = new Query();
      if (args.value !== "None") {
        filterQuery = new Query().where("Priority", "equal", args.value);
      }
      this.kanbanObj.query = filterQuery;
    },
  },

});