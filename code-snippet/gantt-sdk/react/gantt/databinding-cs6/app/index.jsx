import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject } from '@syncfusion/ej2-react-gantt';
import { Toolbar, ExcelExport, Selection } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {

    let ganttRef = null;

    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        endDate: 'EndDate',
        progress: 'Progress',
        segments: 'Segments',
        child: 'subtasks'

    };

    return (
        <GanttComponent
            height="450px"
            dataSource={GanttData}
            taskFields={taskSettings}
            ref={(g) => { ganttRef = g; }}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" width="100" />
                <ColumnDirective field="TaskName" headerText="Task Name" width="150" />
                <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                <ColumnDirective field="Duration" headerText="Duration" width="150" />
                <ColumnDirective field="Progress" headerText="Progress" width="150" />
            </ColumnsDirective>

            <Inject services={[Toolbar, ExcelExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));