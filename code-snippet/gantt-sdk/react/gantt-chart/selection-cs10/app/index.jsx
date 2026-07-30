import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Selection, Inject, Edit } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const selectionSettings = {
        mode: 'Row',
        type: 'Multiple'
    };
    let message = "";
    function updateMessage() {
        const el = document.getElementById("message");
        if (el) el.innerHTML = message;
    }
    function rowSelecting(args) {
        const task = args.data;
        if (task.TaskID === 2) {
            args.cancel = true;
            message += " - Selection cancelled for TaskID 2";
            updateMessage();
        }
    }
    function rowSelected(args) {
        const task = args.data;
        if (task.Progress && task.Progress > 40) {
            args.row.style.backgroundColor = "rgba(203, 246, 205, 1)";
        }
    }
    function rowDeselected(args) {
        if (args.data && !Array.isArray(args.data)) {
            const task = args.data;
            if (task.Progress && task.Progress <= 40) {
                args.row.style.backgroundColor = "#e1838eff";
            }
        }
    }
    function rowDeselecting(args) {
        if (args.data && !Array.isArray(args.data)) {
            const task = args.data;
            if (task.Progress && task.Progress > 80) {
                args.row.style.backgroundColor = "#f5f54bff";
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