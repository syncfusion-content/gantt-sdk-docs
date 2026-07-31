import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, SplitterSettings } from '@syncfusion/ej2-react-gantt';
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

    const splitterSettings: SplitterSettings = {
        position: '75%'
    };

    return (
        <div>
            <GanttComponent
                dataSource={GanttData}
                taskFields={taskFields}
                splitterSettings={splitterSettings}
                treeColumnIndex={1}
                height="430px"
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" />
                    <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" />
                    <ColumnDirective field="Verified" headerText="Verified" displayAsCheckBox={true} type="boolean" textAlign="Center" width="100" />
                    <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" />
                    <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
                    <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="120" />
                </ColumnsDirective>
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
