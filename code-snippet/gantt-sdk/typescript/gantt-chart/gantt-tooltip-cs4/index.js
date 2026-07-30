window.imagedate = function () {
    const getImage = Math.floor(Math.random() * 5) + 1;
    return getImage + '.svg';
};

window.bgColor = function(value, date) {
    if (value === 'S') {
      return '#7BD3EA';
    }
    const parsedDate = new Date(date);
    for (let i = 0; i < ganttChart.holidays.length; i++) {
      const holiday = ganttChart.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to);
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        return '#97E7E1';
      }
    }
    return '#E0FBE2';
}

window.holidayValue = function(value, date) {
    const parsedDate = new Date(date);
    for (let i = 0; i < ganttChart.holidays.length; i++) {
      const holiday = ganttChart.holidays[i];
      const fromDate = new Date(holiday.from);
      const toDate = new Date(holiday.to);
      if (parsedDate >= fromDate && parsedDate <= toDate) {
        const options = { weekday: 'short' };
        return parsedDate
          .toLocaleDateString('en-US', options)
          .toLocaleUpperCase();
      }
    }
    return value;
}

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    allowSorting: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
    },
    splitterSettings: {
        columnIndex: 1
    },
    treeColumnIndex: 1,
    allowSelection: true,
    gridLines: "Both",
    showColumnMenu: false,
    highlightWeekends: true,
    timelineSettings: {
        topTier: {
            unit: 'Week',
            format: 'dd/MM/yyyy'
        },
        bottomTier: {
            unit: 'Day',
            count: 1
        },
        timelineUnitSize: 100
    },
    holidays: [{
        from: "04/04/2019",
        to: "04/05/2019",
        label: " Public holidays",
        cssClass: "e-custom-holiday"

    },
    {
        from: "04/12/2019",
        to: "04/12/2019",
        label: " Public holiday",
        cssClass: "e-custom-holiday"

    }],
    columns: [
        { field: 'TaskID', headerText: 'Task ID', visible: false },
        { field: 'TaskName', headerText: 'Task Name', width: 300 },
        { field: 'StartDate', headerText: 'Start Date' },
        { field: 'Duration', headerText: 'Duration' },
        { field: 'Progress', headerText: 'Progress' },
    ],
    labelSettings: {
        leftLabel: 'TaskName',
        taskLabel: 'Progress'
    },
    timelineTemplate: "#TimelineTemplates",
    height: '550px',
    allowUnscheduledTasks: true,
    projectStartDate: new Date('03/25/2019'),
    projectEndDate: new Date('05/30/2019'),
});
ganttChart.appendTo('#Gantt');