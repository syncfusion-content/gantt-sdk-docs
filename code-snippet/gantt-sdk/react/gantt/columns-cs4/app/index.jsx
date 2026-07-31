import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Resize } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {
    var gantt = null;

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings = {
        position: '75%'
    };

    const dataBound = () => {
        gantt.treeGrid.autoFitColumns(['TaskName']);
    };

    return (
        <div>
            <GanttComponent
                ref={(g)=> gantt = g}
                dataSource={GanttData}
                taskFields={taskFields}
                splitterSettings={splitterSettings}
                height="430px"
                allowResizing={true}
                dataBound={dataBound}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width={90} />
                    <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width={270} />
                    <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" format="yMd" width={120} />
                    <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width={90} />
                    <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width={120} />
                </ColumnsDirective>
                <Inject services={[Resize]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));