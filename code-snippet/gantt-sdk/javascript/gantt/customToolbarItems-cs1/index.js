ej.gantt.Gantt.Inject(ej.gantt.Toolbar, ej.gantt.Filter);

const dropDownData = [
    'ClearFilter',
    'Project Kickoff', 'Site Selection', 'Soil Analysis',
    'Approval of Soil Report', 'Cost Estimation',
    'Create Floor Plan', 'Material Listing', 'Approval of Estimate'
];

let autoComplete = new ej.dropdowns.AutoComplete({
    dataSource: dropDownData,
    placeholder: 'Search TaskName',
    change: (args) => {
        const selectedValue = args.value;
        if (args.itemData && selectedValue !== 'ClearFilter') {
            // Filter when a valid task name is selected (exclude ClearFilter).
            ganttChart.treeGrid.grid.filterByColumn('TaskName', 'equal', selectedValue);
        } else {
            // Clear filter when input is cleared or "ClearFilter" is selected/typed.
            ganttChart.clearFiltering();
        }
    }
});

var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '420px',
    allowFiltering: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },    
    toolbar: [
        {
            type: 'Input',
            template: autoComplete,
            align: 'Left',
            tooltipText: 'Search TaskName'
        }
    ]
});

ganttChart.appendTo('#Gantt');