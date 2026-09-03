import { Gantt, Selection, filter, toolbar } from '@syncfusion/ej2-gantt';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './datasource.ts';

Gantt.Inject(Selection, filter, toolbar);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    },
    selectionSettings: {
        mode: 'Cell',
        type: 'Multiple',
        toogle: false
    },
    toolbar: ['Search'],
    filterSettings: {
        type: 'Menu'
    },
    allowFiltering: true,
    allowSelection: true,
    columns: [
                { field: 'CheckBox', headerText: '', showCheckbox: true, width: 70, allowFiltering: false},
                { field: 'TaskID', width: 110, visible: false },
                { field: 'TaskName', width: 190 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' }
            ],
    hierarchyCheckboxMode: 'hierarchy',
});

gantt.appendTo('#Gantt');

let selectionModeList: DropDownList = new DropDownList({
        dataSource: [
            { id: 'self', type: 'self' },
            { id: 'hierarchy', type: 'hierarchy' },
            { id: 'filteredHierarchy', type: 'filteredHierarchy' }
        ],
        width: '125px',
        popupWidth: '100px',
        value: 'hierarchy',
        change: (e: ChangeEventArgs) => {
            let mode: any = <string>e.value;
            gantt.hierarchyCheckboxMode = mode;
            gantt.refresh();
        },
        fields: { text: 'type', value: 'id' }
    });
    selectionModeList.appendTo('#mode');