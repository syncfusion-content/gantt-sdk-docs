import { Gantt, Filter, TaskFieldsModel, SplitterSettingsModel, FilterSettingsModel, ColumnModel } from '@syncfusion/ej2-gantt';
import { FilterEventArgs } from '@syncfusion/ej2-grids';
import { GanttData } from './datasource.ts';

Gantt.Inject(Filter);

const taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
};

const splitterSettings: SplitterSettingsModel = {
    columnIndex: 2
};

const filterSettings: FilterSettingsModel = {
    type: 'Menu'
};

const columns: ColumnModel[] = [
    { field: 'TaskID', headerText: 'Task ID', width: '120' },
    { field: 'TaskName', headerText: 'Task Name', width: '250' },
    { field: 'StartDate', headerText: 'Start Date', width: '150' },
    { field: 'Progress', headerText: 'Progress', width: '150' },
    { field: 'Approved', headerText: 'Approved', width: '100', type: 'boolean' }
];

function updateMessage(text: string): void {
    const msgElement: HTMLElement | null = document.getElementById('message');
    if (msgElement) {
        msgElement.textContent = text;
    }
}

function actionBegin(args: FilterEventArgs): void {
    let msg: string = '';

    if (args.requestType === 'filterBeforeOpen') {
        const a: any = args;

        if (a.columnType === 'number') {
            a.filterModel.customFilterOperators.numberOperator = [
                { value: 'equal', text: 'Equal' },
                { value: 'notequal', text: 'Not Equal' }
            ];
            msg = 'Custom number filter operators applied.';
        } else if (a.columnType === 'string') {
            a.filterModel.customFilterOperators.stringOperator = [
                { value: 'contains', text: 'Contains' },
                { value: 'startswith', text: 'Starts With' }
            ];
            msg = 'Custom string filter operators applied.';
        }
    }

    const b: any = args;
    if (args.requestType === 'filtering' && b.currentFilteringColumn === 'StartDate') {
        (args as any).cancel = true;
        msg = 'Filtering is not allowed for StartDate column';
    } else if (!msg) {
        msg = args.requestType + ' action is triggered in actionBegin';
    }

    updateMessage(msg);
}

function actionComplete(args: FilterEventArgs): void {
    let msg: string = '';

    if (args.requestType === 'filterAfterOpen') {
        msg = 'Applied custom CSS for filter dialog';

        const a: any = args;
        const content: HTMLElement | null = a.filterModel.dlgDiv.querySelector('.e-dlg-content');
        const footer: HTMLElement | null = a.filterModel.dlgDiv.querySelector('.e-footer-content');

        if (content) { content.style.background = '#eeeaea'; }
        if (footer) { footer.style.background = '#30b0ce'; }
    }

    if (args.requestType === 'filtering') {
        msg = args.requestType + ' action is triggered in actionComplete';
    }

    updateMessage(msg);
}

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '370px',
    allowFiltering: true,
    taskFields: taskSettings,
    columns: columns,
    splitterSettings: splitterSettings,
    filterSettings: filterSettings,
    actionBegin: actionBegin,
    actionComplete: actionComplete
});

gantt.appendTo('#Gantt');