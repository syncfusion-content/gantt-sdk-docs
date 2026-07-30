import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    let ganttInstance = null;
    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        indicators: 'Indicators'
    };

    const editSettings = {
        allowEditing: true
    };

    const toolbar = ['Edit'];

    const dataBound = () => {
        const elements = document.querySelectorAll('.e-indicator-span');
        elements.forEach((el) => {
            el.addEventListener('click', (event) => {
                const indicator = event.target;
                const taskbar = indicator.closest('.e-chart-row');

                if (taskbar && ganttInstance) {
                    const rowIndex = Number(taskbar.getAttribute('data-rowindex'));
                    const record = ganttInstance.flatData[rowIndex];
                    console.log(record.ganttProperties);
                    if (record.ganttProperties.taskId) {
                        ganttInstance.openEditDialog(record.ganttProperties.taskId);
                    }
                }
            });
        });
    };

    return (
        <GanttComponent
            id="Gantt"
            height="450px"
            dataSource={data}
            taskFields={taskSettings}
            editSettings={editSettings}
            toolbar={toolbar}
            dataBound={dataBound}
            ref={gantt => ganttInstance = gantt}
        >
            <Inject services={[Toolbar, Edit]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));