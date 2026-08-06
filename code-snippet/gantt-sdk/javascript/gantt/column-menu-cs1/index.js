var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '450px',
    allowSorting: true,
    allowFiltering: true,
    allowResizing: true,
    showColumnMenu: true,
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columnMenuItems: [
        'SortAscending',
        'SortDescending',
        'Group',
        'Ungroup',
        'Filter',
        {
            text: 'Sub Menu',
            items: [
                { text: 'Option 1', id: 'option1' },
                { text: 'Option 2', id: 'option2' },
                { text: 'Option 3', id: 'option3' },
                {
                    text: 'Nested Sub Menu',
                    items: [
                        { text: 'Nested Option 1', id: 'nestedoption1' },
                        { text: 'Nested Option 2', id: 'nestedoption2' }
                    ]
                }
            ]
        }
    ],
    columnMenuClick: function (args) {
        if (args.item.id === 'option1') {
        }
    }
});

ganttChart.appendTo('#Gantt');