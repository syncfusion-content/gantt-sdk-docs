import { Gantt, Filter } from '@syncfusion/ej2-gantt';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './datasource.ts';

Gantt.Inject(Filter);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    allowFiltering: true
});

gantt.appendTo('#Gantt');

let dropDownMode: DropDownList = new DropDownList({
    dataSource: [
        { id: 'Parent', mode: 'Parent' },
        { id: 'Child', mode: 'Child' },
        { id: 'Both', mode: 'Both' },
        { id: 'None', mode: 'None' },
    ],
    fields: { text: 'mode', value: 'id' },
    value: 'Parent',
    change: (e: ChangeEventArgs) => {
        let mode: any = <string>e.value;
        gantt.filterSettings.hierarchyMode = mode;
        gantt.clearFiltering();
    }
});
dropDownMode.appendTo('#mode');