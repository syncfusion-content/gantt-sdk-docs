import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { data } from './datasource';

function App() {
    let ganttRef = null;

    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        indicators: 'Indicators'
    };

    const hideIndicators = () => {
        if (ganttRef) {
            const nodes = ganttRef.element.querySelectorAll('.e-indicator-span');
            nodes.forEach((box) => {
                box.style.display = 'none';
            });
        }
    };

    const showIndicators = () => {
        if (ganttRef) {
            const nodes = ganttRef.element.querySelectorAll('.e-indicator-span');
            nodes.forEach((box) => {
                box.style.display = '';
            });
        }
    };

    return (
        <div>
            <div style={{ marginBottom: '16px' }}>
                <ButtonComponent id="hideBtn" onClick={hideIndicators} style={{ marginRight: '8px' }}>Hide data markers</ButtonComponent>
                <ButtonComponent id="showBtn" onClick={showIndicators}>Show data markers</ButtonComponent>
            </div>
            <GanttComponent
                id="ganttDefault"
                height="430px"
                dataSource={data}
                taskFields={taskSettings}
                ref={gantt => ganttRef = gantt}
            >
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
