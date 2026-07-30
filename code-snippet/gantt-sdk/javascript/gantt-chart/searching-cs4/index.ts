import { Gantt, Filter, Toolbar, TaskFieldsModel, SplitterSettingsModel, ColumnModel } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Filter, Toolbar);

const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

const splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
};

const columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: 100 },
    { field: 'TaskName', headerText: 'Task Name', width: 400 },
    { field: 'StartDate', headerText: 'Start Date', width: 150 },
    { field: 'Duration', headerText: 'Duration', width: 150 },
    { field: 'Progress', headerText: 'Progress', width: 150 }
];

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    taskFields: taskFields,
    splitterSettings: splitterSettings,
    toolbar: ['Search'],
    columns: columns,
    created: () => {
        const id: string = gantt.element.id + '_searchbar';
        const element: HTMLElement | null = document.getElementById(id);
        if (element) {
            element.addEventListener('keyup', (event: Event) => {
                const target = event.target as HTMLInputElement;
                gantt.search(target.value);
            });
        }
    }
});

gantt.appendTo('#Gantt');