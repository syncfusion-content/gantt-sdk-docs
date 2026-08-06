<template>
  <div id="app">
    <ejs-gantt ref="gantt" :dataSource="data" id="GanttContainer" :taskFields="taskFields" :height="height" :editSettings="editSettings"
      :editDialogFields="editDialogFields" :addDialogFields= "addDialogFields" :toolbar= "toolbar" :actionBegin="actionBegin" :actionComplete="actionComplete" >
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" textAlign="Left" width="100"></e-column>
        <e-column field="TaskName" headerText="Task Name" width="150"></e-column>
        <e-column field="StartDate" headerText="Start Date" width="150"></e-column>
        <e-column field="EndDate" headerText="End Date" width="150"></e-column>
        <e-column field="Duration" headerText="Duration" width="150"></e-column>
        <e-column field="Progress" headerText="Progress" width="150"></e-column>
        <e-column field="CustomField" headerText="CustomField" width="150"></e-column>
      </e-columns>
    </ejs-gantt>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { GanttComponent as EjsGantt, ColumnDirective as EColumn, ColumnsDirective as EColumns, Edit, Toolbar, Selection } from "@syncfusion/ej2-vue-gantt";
import { CheckBox } from "@syncfusion/ej2-buttons";
import { TextBox, NumericTextBox, MaskedTextBox } from "@syncfusion/ej2-inputs";
import { DatePicker, DateTimePicker } from "@syncfusion/ej2-calendars";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { editingData } from './data-source.js';


var divElement;
var inputs = {
  booleanedit: CheckBox,
  dropdownedit: DropDownList,
  datepickeredit: DatePicker,
  datetimepickeredit: DateTimePicker,
  maskededit: MaskedTextBox,
  numericedit: NumericTextBox,
  stringedit: TextBox
};
const data = editingData;
const height = '450px';
const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  endDate: 'EndDate',
  duration: 'Duration',
  progress: 'Progress',
  child: 'subtasks'
};
const editing = {
  allowAdding: true,
  allowEditing: true,
  allowDeleting: true,
  mode: 'Auto'
};
const toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
const editDialogFields = [
  { type: 'General', headerText: 'General' },
  { type: 'Dependency' },
  { type: 'Resources' },
  { type: 'Notes' }
];
const addDialogFields = [
  { type: 'General', headerText: 'General' },
  { type: 'Dependency' },
  { type: 'Resources' },
  { type: 'Notes' }
];
const actionBegin = function(args) {
  if (args.requestType === 'beforeOpenEditDialog' || args.requestType === 'beforeOpenAddDialog') {
    var column = this.columnByField['CustomField'];
    divElement = this.createElement('div', {
      className: 'e-edit-form-column'
    });
    var inputElement;
    inputElement = this.createElement('input', {
      attrs: {
        type: 'text',
        id: this.controlId + '' + column.field,
        name: column.field,
        title: column.field
      }
    });
    divElement.appendChild(inputElement);
    var input = {
      enabled: true,
      floatLabelType: 'Auto',
      placeholder: 'CustomField',
      value: args.rowData.CustomField
    };
    var inputObj = new inputs[column.editType](input);
    inputObj.appendTo(inputElement);
  }
};
const actionComplete = function(args) {
  if (args.requestType === 'openEditDialog' || args.requestType === 'openAddDialog') {
    var generalTab = document.getElementById(this.controlId + 'GeneralTabContainer');
    generalTab.appendChild(divElement);
  }
};
provide('gantt', [Edit, Toolbar, Selection]);
</script>