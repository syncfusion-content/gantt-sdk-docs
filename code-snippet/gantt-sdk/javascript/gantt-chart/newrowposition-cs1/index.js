var menuObj = new ej.navigations.ContextMenu({
  items: [
    { text: 'Bottom' },
    { text: 'Above' },
    { text: 'Below' },
    { text: 'Child' },
    { text: 'Top' }
  ],
  select: function (args) {
    if (args.item.text === "Bottom") {
      ganttChart.editSettings.newRowPosition = "Bottom";
      ganttChart.openAddDialog();
    } else if (args.item.text === "Above") {
      if (ganttChart.selectedRowIndex === -1) {
        alert("Please select any row");
      } else {
        ganttChart.editSettings.newRowPosition = "Above";
        ganttChart.openAddDialog();
      }
    } else if (args.item.text === "Below") {
      if (ganttChart.selectedRowIndex === -1) {
        alert("Please select any row");
      } else {
        ganttChart.editSettings.newRowPosition = "Below";
        ganttChart.openAddDialog();
      }
    } else if (args.item.text === "Child") {
      if (ganttChart.selectedRowIndex === -1) {
        alert("Please select any row");
      } else {
        ganttChart.editSettings.newRowPosition = "Child";
        ganttChart.openAddDialog();
      }
    } else if (args.item.text === "Top") {
      ganttChart.editSettings.newRowPosition = "Top";
      ganttChart.openAddDialog();
    }
  }
});
menuObj.appendTo('#contextmenu');

var ganttChart = new ej.gantt.Gantt({
  dataSource: GanttData,
  height: '430px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  editSettings: {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true
  },
  toolbar: ['Edit', { text: 'Add', tooltipText: 'Add', id: 'Add' }],
  toolbarClick: function (args) {
    if (args.item.id === 'Add') {
      menuObj.open(40, 20);
    }
  }
});
ganttChart.appendTo('#Gantt');