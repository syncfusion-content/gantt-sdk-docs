import { Gantt, Edit } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit);

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    editSettings: {
        allowEditing: true
    },
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    columns: [
        { field: 'TaskID' },
        { field: 'TaskName' },
        { field: 'StartDate' },
        { 
            field: 'Duration',
            editType: 'numericedit',
            edit: { params: { min: 1 } },
            valueAccessor: (field: string, data: any) => {
                return data[field];
            }
        },
        { 
            field: 'Progress',
            editType: 'numericedit',
            edit: { params: { showSpinButton: false } }
        }
    ]
});

gantt.appendTo('#Gantt');