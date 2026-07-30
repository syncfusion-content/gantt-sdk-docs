loadCultureFiles();
var formatOptions = { type: 'date', format: 'yyyy-MMM-dd' };

var ganttChart = new ej.gantt.Gantt({
  dataSource: GanttData,
  height: '430px',
  locale: 'es-AR',
  treeColumnIndex: 1,
  splitterSettings: {
    position: '75%'
  },
  taskFields: {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  },
  columns: [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Right', width: 90 },
    { field: 'TaskName', headerText: 'Task Name', textAlign: 'Left', width: 270 },
    {
      field: 'StartDate',
      headerText: 'Start Date',
      textAlign: 'Right',
      width: 150,
      format: { type: 'date', format: 'yyyy-MMM-dd' }
    },
    {
      field: 'EndDate',
      headerText: 'End Date',
      textAlign: 'Right',
      width: 210,
      format: { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' }
    },
    { field: 'Duration', headerText: 'Duration', textAlign: 'Right', width: 90 },
    {
      field: 'Progress',
      headerText: 'Progress',
      textAlign: 'Right',
      width: 120,
      format: 'c2',
      type: 'number'
    }
  ]
});

ganttChart.appendTo('#Gantt');

function loadCultureFiles() {
  var files = ['ca-gregorian.json', 'numbers.json', 'currencies.json', 'timeZoneNames.json'];
  var loadCulture = function (prop) {
    var fetch = new ej.base.Fetch('./' + files[prop], 'GET', false);
    fetch.onSuccess = function (response) {
      if (typeof response === 'object') {
        // If the response is an object, convert it to a JSON string
        var jsonString = JSON.stringify(response);
        ej.base.loadCldr(JSON.parse(jsonString));
      } else if (typeof response === 'string') {
        // If the response is already a JSON string, parse and load it
        ej.base.loadCldr(JSON.parse(response));

      } else {
        console.error('Invalid responsetype received:', response);
      }
      ej.base.setCulture('es-AR');
      ej.base.setCurrencyCode('ARS');
    };
    fetch.send();
  };
  for (var prop = 0; prop < files.length; prop++) {
    loadCulture(prop);
  }
}