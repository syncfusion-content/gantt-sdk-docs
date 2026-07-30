var ganttChart = new ej.gantt.Gantt({
  dataSource: GanttData,
  height: '380px',
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  splitterSettings: {
    position: '75%'
  },
  allowSelection: true,
  autoFocusTasks: true,
  treeColumnIndex:1
});
ganttChart.appendTo('#Gantt');

var checkbox = new ej.buttons.CheckBox({ 
  label: 'Enable / Disable Auto-focus Tasks', 
  checked: true,
  change:onCheckBoxChange 
});
checkbox.appendTo('#checkbox');

function onCheckBoxChange(args) {
  ganttChart.autoFocusTasks = args.checked;
}