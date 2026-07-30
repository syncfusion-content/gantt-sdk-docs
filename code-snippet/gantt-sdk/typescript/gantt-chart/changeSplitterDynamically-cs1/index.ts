


import { Gantt, Edit, Selection } from '@syncfusion/ej2-gantt';
import { Button } from '@syncfusion/ej2-buttons';
import { DropDownList, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit, Selection);

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
    }
});

gantt.appendTo('#Gantt');

let splitBtn: Button = new Button();
splitBtn.appendTo('#changeByPosition');

let splittBtn: Button = new Button();
splittBtn.appendTo('#changeByIndex');

document.getElementById('changeByPosition').addEventListener('click', () => {
    gantt.setSplitterPosition('50%', 'position');
});

document.getElementById('changeByIndex').addEventListener('click', () => {
    gantt.setSplitterPosition(1, 'columnIndex');
});

let dropDownMode: DropDownList = new DropDownList({
    dataSource: [
        { id: 'Default', mode: 'Default' },
        { id: 'Grid', mode: 'Grid' },
        { id: 'Chart', mode: 'Chart' },
        ],
    fields: { text: 'mode', value: 'id' },
    value: 'Default',
        change: (e: ChangeEventArgs) => {
        let viewType: string = <string>e.value;
        gantt.setSplitterPosition(viewType, 'view');
    }
});
dropDownMode.appendTo('#view');