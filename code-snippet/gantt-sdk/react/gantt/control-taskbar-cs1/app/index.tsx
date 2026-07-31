import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, QueryTaskbarInfoEventArgs, QueryCellInfoEventArgs, ColumnsDirective, ColumnDirective, TaskFieldsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        notes: 'Info'
    };

    const queryTaskbarInfo = (args: QueryTaskbarInfoEventArgs): void => {
        const task = args.data;
        if (task.TaskID >= 7 && task.TaskID <= 10) {
            (args.taskbarElement as HTMLElement).style.visibility = 'hidden';
        }
    };

    const queryCellInfo = (args: QueryCellInfoEventArgs): void => {
        const task = args.data;
        if (args.column.field === 'Info' && (!task.Info || task.Info.trim() === '')) {
            const notesIcon = (args.cell as HTMLElement).querySelector('.e-notes-info');
            if (notesIcon instanceof HTMLElement) {
                notesIcon.style.visibility = 'hidden';
            }
        }
    };

    return (
        <GanttComponent
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            queryTaskbarInfo={queryTaskbarInfo}
            queryCellInfo={queryCellInfo}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" width="80" />
                <ColumnDirective field="TaskName" headerText="Task Name" />
                <ColumnDirective field="StartDate" />
                <ColumnDirective field="Duration" />
                <ColumnDirective field="Progress" />
                <ColumnDirective field="Info" headerText="Notes" />
            </ColumnsDirective>
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));