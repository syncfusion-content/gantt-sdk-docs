import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
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

    const splitterSettings = { position: '75%' };

    // Format options for date and dateTime columns
    const startDateFormatOptions = { type: 'date', format: 'dd/MM/yyyy' };
    const endDateFormatOptions = { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' };

    return (
        <GanttComponent
            id="ganttDefault"
            dataSource={data}
            taskFields={taskFields}
            height="430px"
            treeColumnIndex={1}
            splitterSettings={splitterSettings}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
                <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" />
                <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="150" format={startDateFormatOptions} />
                <ColumnDirective field="EndDate" headerText="End Date" textAlign="Right" width="210" format={endDateFormatOptions} />
                <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
                <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
            </ColumnsDirective>
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));