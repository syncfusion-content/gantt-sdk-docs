
import Vue from "vue";
import { KanbanPlugin } from "@syncfusion/ej2-vue-kanban";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { extend } from "@syncfusion/ej2-base";
import { kanbanData } from "./datasource.js";
Vue.use(KanbanPlugin);
Vue.use(ButtonPlugin);
;
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-button
      id="particular_column"
      class="e-btn"
      v-on:click.native="particularColumnClick"
      >Enable Allow Toggle</ejs-button
    >
    <ejs-button id="column" class="e-btn" v-on:click.native="columnClick"
      >Change Columns</ejs-button
    >
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
    };
  },
  mounted: function () {
    this.kanbanObj = this.$refs.KanbanObj.ej2Instances;
  },
  methods: {
    particularColumnClick: function () {
      this.kanbanObj.columns[1].allowToggle = true;
    },
    columnClick: function () {
      this.kanbanObj.columns = [
        { headerText: "To Do", keyField: "Open" },
        { headerText: "Done", keyField: "Close" },
      ];
    },
  },

});