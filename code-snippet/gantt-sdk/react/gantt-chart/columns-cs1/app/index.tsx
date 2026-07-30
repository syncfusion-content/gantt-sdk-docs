import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Selection, Inject } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
    const taskFields: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        verified: 'Verified'
    };

    const splitterSettings: object = { position: '75%' };

    return (
        <GanttComponent
            id="ganttDefault"
            dataSource={GanttData}
            taskFields={taskFields}
            height="450px"
            treeColumnIndex={1}
            splitterSettings={splitterSettings}
        >
            <ColumnsDirective>
                <ColumnDirective type="checkbox" width="90" />
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" type="number" />
                <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" type="string" />
                <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="150" format="yMd" type="date" />
                <ColumnDirective field="EndDate" headerText="End Date" textAlign="Right" width="150" format="dd/MM/yyyy hh:mm" type="dateTime" />
                <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" type="number" />
                <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" type="number" />
                <ColumnDirective field="Verified" headerText="Verified" width="100" type="boolean" displayAsCheckBox={true} />
            </ColumnsDirective>
            <Inject services={[Selection]} />

        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));