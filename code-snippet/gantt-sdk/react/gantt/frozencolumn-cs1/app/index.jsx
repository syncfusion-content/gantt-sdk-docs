import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Freeze } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {

    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        endDate: 'EndDate',
        dependency: 'Predecessor',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const labelSettings = {
        taskLabel: 'Progress'
    };

    const splitterSettings = {
        position: '65%'
    };

    const gridLines = 'Both';

    return (
        <GanttComponent
            height="430px"
            dataSource={GanttData}
            taskFields={taskSettings}
            labelSettings={labelSettings}
            frozenColumns={2}
            treeColumnIndex={1}
            splitterSettings={splitterSettings}
            gridLines={gridLines}
            allowSelection={false}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
                <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="290" />
                <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
                <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
                <ColumnDirective field="EndDate" headerText="End Date" textAlign="Right" width="120" />
                <ColumnDirective field="Progress" headerText="Progress" textAlign="Left" width="120" />
                <ColumnDirective field="Predecessor" headerText="Predecessor" textAlign="Left" width="120" />
            </ColumnsDirective>
            <Inject services={[ Freeze ]} />
        </GanttComponent>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));