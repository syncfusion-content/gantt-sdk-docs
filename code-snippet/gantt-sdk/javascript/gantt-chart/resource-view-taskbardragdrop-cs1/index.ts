import {
    Gantt,
    Edit,
    Selection,
    Toolbar,
    Resize,
    RowDD,
    TaskFieldsModel,
    ResourceFieldsModel,
    EditSettingsModel,
    LabelSettingsModel
} from '@syncfusion/ej2-gantt';
import { data, resources } from './datasource.ts';

Gantt.Inject(RowDD, Edit, Toolbar, Selection, Resize);

let taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    resourceInfo: 'resources',
    work: 'work',
    expandState: 'isExpand',
    parentID: 'ParentID'
};

let resourceFields: ResourceFieldsModel = {
    id: 'resourceId',
    name: 'resourceName',
    unit: 'resourceUnit',
    group: 'resourceGroup'
};

let editSettings: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
};

let labelSettings: LabelSettingsModel = {
    rightLabel: 'resources',
    taskLabel: 'TaskName'
};

let gantt: Gantt = new Gantt({
    dataSource: data,
    resources: resources,
    height: '450px',
    viewType: 'ResourceView',
    highlightWeekends: true,
    treeColumnIndex: 1,
    allowSelection: true,
    allowResizing: true,
    allowTaskbarDragAndDrop: true,
    showOverAllocation: true,
    enableMultiTaskbar: true,
    projectStartDate: new Date('03/25/2019'),
    projectEndDate: new Date('07/28/2019'),
    taskFields: taskSettings,
    resourceFields: resourceFields,
    editSettings: editSettings,
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName', headerText: 'Name', width: 250 },
        { field: 'work', headerText: 'Work' },
        { field: 'Progress' },
        { field: 'resourceGroup', headerText: 'Group' },
        { field: 'StartDate' },
        { field: 'Duration' }
    ],
    toolbar: ['ExpandAll', 'CollapseAll'],
    labelSettings: labelSettings
});

gantt.appendTo('#Gantt');