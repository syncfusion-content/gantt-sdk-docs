var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height:'450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    }
});
ganttChart.appendTo('#Gantt');

var splitBtn= new ej.buttons.Button();
splitBtn.appendTo('#changeByPosition');

var splittBtn= new ej.buttons.Button();
splittBtn.appendTo('#changeByIndex');

document.getElementById('changeByPosition').addEventListener('click', function() {
    ganttChart.setSplitterPosition('50%', 'position');   
});

document.getElementById('changeByIndex').addEventListener('click', function() {
   ganttChart.setSplitterPosition(1, 'columnIndex');
});

var dropDownMode = new ej.dropdowns.DropDownList({
    dataSource: [
        { id: 'Default', mode: 'Default' },
        { id: 'Grid', mode: 'Grid' },
        { id: 'Chart', mode: 'Chart' },
        ],
    fields: { text: 'mode', value: 'id' },
    value: 'Default',
    change: function (e) {
        var viewType = e.value;
        ganttChart.setSplitterPosition(viewType, 'view');
    }
});

dropDownMode.appendTo('#view');