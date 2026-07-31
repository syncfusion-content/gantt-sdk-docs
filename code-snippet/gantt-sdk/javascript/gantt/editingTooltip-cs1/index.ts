import { Gantt, Edit, EditSettingsModel, TooltipSettingsModel } from '@syncfusion/ej2-gantt';
import { GanttData } from './datasource.ts';

Gantt.Inject(Edit);

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
    editSettings: {
        allowTaskbarEditing: true
    } as EditSettingsModel,
    tooltipSettings: {
        showTooltip: true,
        taskbar: (props: any): string => {
            return `<div>
                        <div><b>${props.TaskName}</b></div>
                        <div>Duration : ${props.Duration}</div>
                    </div>`;
        }
    } as TooltipSettingsModel
});

gantt.appendTo('#Gantt');