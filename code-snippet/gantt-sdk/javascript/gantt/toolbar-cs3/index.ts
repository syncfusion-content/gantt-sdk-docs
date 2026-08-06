import { Gantt, Toolbar, Filter } from '@syncfusion/ej2-gantt';
import { EmitType } from '@syncfusion/ej2-base';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttData } from './datasource.ts';

Gantt.Inject(Toolbar, Filter);

let clickHandler: EmitType<ClickEventArgs> = (args: ClickEventArgs) => {
    if (args.item.text === 'Test') {
        const messageElement = document.getElementById('message');
        if (messageElement) {
            messageElement.textContent = 'Custom toolbar click';
        }
    }
};

let gantt: Gantt = new Gantt({
    dataSource: GanttData,
    height: '450px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    },
    toolbarClick: clickHandler,
    toolbar: ['ExpandAll', 'CollapseAll', { text: 'Test', tooltipText: 'Test', id: 'Test' }]
});

gantt.appendTo('#Gantt');