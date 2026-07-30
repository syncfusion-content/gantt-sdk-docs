var inputs = {
  booleanedit: ej.buttons.CheckBox,
  dropdownedit: ej.dropdowns.DropDownList,
  datepickeredit: ej.calendars.DatePicker,
  datetimepickeredit: ej.calendars.DateTimePicker,
  maskededit: ej.inputs.MaskedTextBox,
  numericedit: ej.inputs.NumericTextBox,
  stringedit: ej.inputs.TextBox
};

var divElement;

var ganttChart = new ej.gantt.Gantt({
  dataSource: GanttData,
  height: '430px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    mode: 'Dialog'
  },
  editDialogFields: [
    { type: 'General', headerText: 'General' },
    { type: 'Dependency' },
    { type: 'Resources' },
    { type: 'Notes' }
  ],
  addDialogFields: [
    { type: 'General', headerText: 'General' },
    { type: 'Dependency' },
    { type: 'Resources' },
    { type: 'Notes' }
  ],
  columns: [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '100' },
    { field: 'TaskName', headerText: 'Task Name', width: '250' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'EndDate', headerText: 'End Date', width: '150' },
    { field: 'Duration', headerText: 'Duration', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
    { field: 'CustomField', headerText: 'CustomField', width: '150' }
  ],
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ExpandAll', 'CollapseAll'],
  actionBegin: actionBegin,
  actionComplete: actionComplete
});

ganttChart.appendTo('#Gantt');

function actionBegin(args) {
  if (args.requestType === 'beforeOpenEditDialog' || args.requestType === 'beforeOpenAddDialog') {
    var column = ganttChart.columnByField['CustomField'];
    divElement = ganttChart.createElement('div', { className: 'e-edit-form-column' });
    var inputElement = ganttChart.createElement('input', {
      attrs: {
        type: 'text',
        id: ganttChart.controlId + column.field,
        name: column.field,
        title: column.field
      }
    });
    divElement.appendChild(inputElement);
    var input = {
      enabled: true,
      floatLabelType: 'Auto',
      placeholder: 'CustomField',
      value: args.rowData ? args.rowData.CustomField : null
    };
    var inputObj = new inputs[column.editType](input);
    inputObj.appendTo(inputElement);
  }
}

function actionComplete(args) {
  if (args.requestType === 'openEditDialog' || args.requestType === 'openAddDialog') {
    var generalTab = document.getElementById(ganttChart.controlId + 'GeneralTabContainer');
    generalTab.appendChild(divElement);
  }
}