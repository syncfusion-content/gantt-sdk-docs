import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, RowDataBoundEventArgs, SplitterSettings } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
    const taskFields: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks',
        verified: 'verified'
    };

    const splitterSettings: SplitterSettings = {
        position: '75%'
    };

    const rowDataBound = (args: RowDataBoundEventArgs) => {
        if (args.row && args.row.getAttribute('aria-rowindex') === '3') {
            args.row.children[3].innerHTML = '';
        }
    };

    return (
        <div>
            <GanttComponent
                dataSource={GanttData}
                taskFields={taskFields}
                treeColumnIndex={1}
                splitterSettings={splitterSettings}
                height="430px"
                rowDataBound={rowDataBound}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width={90} />
                    <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width={270} />
                    <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width={90} />
                    <ColumnDirective field="verified" headerText="Verified" displayAsCheckBox={true} type="boolean" textAlign="Center" />
                    <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width={120} />
                </ColumnsDirective>
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
