import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, RowSelectEventArgs, RowSelectingEventArgs, RowDeselectEventArgs, TaskFieldsModel, SelectionSettingsModel, Selection, Inject, Edit } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const selectionSettings: SelectionSettingsModel = {
        mode: 'Row',
        type: 'Multiple'
    };
    let message = "";
    function updateMessage() {
        const el = document.getElementById("message");
        if (el) el.innerHTML = message;
    }
    function rowSelecting(args: RowSelectingEventArgs): void {
        const task: any = args.data;
        if (task.TaskID === 2) {
            args.cancel = true;
            message += " - Selection cancelled for TaskID 2";
            updateMessage();
        }
    }
    function rowSelected(args: RowSelectEventArgs): void {
        const task: any = args.data;
        if (task.Progress && task.Progress > 40) {
            (args.row as HTMLElement).style.backgroundColor = "rgba(203, 246, 205, 1)";
        }
    }
    function rowDeselected(args: RowDeselectEventArgs): void {
        if (args.data && !Array.isArray(args.data)) {
            const task: any = args.data;
            if (task.Progress && task.Progress <= 40) {
                (args.row as HTMLElement).style.backgroundColor = "#e1838eff";
            }
        }
    }
    function rowDeselecting(args: RowDeselectEventArgs): void {
        if (args.data && !Array.isArray(args.data)) {
            const task: any = args.data;
            if (task.Progress && task.Progress > 80) {
                (args.row as HTMLElement).style.backgroundColor = "#f5f54bff";
            }
        }
    }
    return (
        <div>
            <p id="message"></p>
            <GanttComponent
                id="ganttDefault"
                height="370px"
                dataSource={data}
                taskFields={taskFields}
                rowSelecting={rowSelecting}
                rowSelected={rowSelected}
                rowDeselected={rowDeselected}
                rowDeselecting={rowDeselecting}
                selectionSettings={selectionSettings}
                enableHover={false}
            >
                <Inject services={[Edit, Selection]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));