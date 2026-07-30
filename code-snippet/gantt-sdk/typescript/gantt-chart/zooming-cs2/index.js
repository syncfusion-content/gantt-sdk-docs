var customZoomingLevels = [{
    topTier: { unit: 'Month', format: 'MMM, yy', count: 1 },
    bottomTier: { unit: 'Week', format: 'dd', count: 1 }, timelineUnitSize: 33, level: 0,
    timelineViewMode: 'Month', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
{
    topTier: { unit: 'Month', format: 'MMM, yyyy', count: 1 },
    bottomTier: { unit: 'Week', format: 'dd MMM', count: 1 }, timelineUnitSize: 66, level: 1,
    timelineViewMode: 'Month', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
{
    topTier: { unit: 'Month', format: 'MMM, yyyy', count: 1 },
    bottomTier: { unit: 'Week', format: 'dd MMM', count: 1 }, timelineUnitSize: 99, level: 2,
    timelineViewMode: 'Month', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
{
    topTier: { unit: 'Week', format: 'MMM dd, yyyy', count: 1 },
    bottomTier: { unit: 'Day', format: 'd', count: 1 }, timelineUnitSize: 33, level: 3,
    timelineViewMode: 'Week', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
{
    topTier: { unit: 'Week', format: 'MMM dd, yyyy', count: 1 },
    bottomTier: { unit: 'Day', format: 'd', count: 1 }, timelineUnitSize: 66, level: 4,
    timelineViewMode: 'Week', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
{
    topTier: { unit: 'Day', format: 'E dd yyyy', count: 1 },
    bottomTier: { unit: 'Hour', format: 'hh a', count: 12 }, timelineUnitSize: 66, level: 5,
    timelineViewMode: 'Day', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
{
    topTier: { unit: 'Day', format: 'E dd yyyy', count: 1 },
    bottomTier: { unit: 'Hour', format: 'hh a', count: 6 }, timelineUnitSize: 99, level: 6,
    timelineViewMode: 'Day', weekStartDay: 0, updateTimescaleView: true, weekendBackground: null, showTooltip: true
},
];

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'parentID'
    },
    toolbar: ['ZoomIn', 'ZoomOut', 'ZoomToFit'],
    dataBound: function () {
        ganttChart.zoomingLevels = customZoomingLevels;
    },
    projectStartDate: new Date('03/24/2019'),
    projectEndDate: new Date('04/28/2019')
});
ganttChart.appendTo('#Gantt');