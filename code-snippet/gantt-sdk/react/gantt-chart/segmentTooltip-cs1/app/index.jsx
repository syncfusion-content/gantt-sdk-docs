import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        segments: 'Segments'
    };
    const tooltipSettings = { showTooltip: true, showSegmentTooltip: true };

    return (
        <GanttComponent
            dataSource={data}
            taskFields={taskFields}
            tooltipSettings={tooltipSettings}
            projectStartDate={new Date('04/05/2026')}
            projectEndDate={new Date('04/10/2026')}
            height="450px">
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
