import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, SplitterSettingsModel, Inject, Resize, Reorder, Sort, Filter } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    const taskSettings: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings: SplitterSettingsModel = {
        position: '75%'
    };

    return (
        <div>
            <GanttComponent
                height="430px"
                dataSource={data}
                taskFields={taskSettings}
                treeColumnIndex={1}
                splitterSettings={splitterSettings}
                allowSorting={true}
                allowFiltering={true}
                allowReordering={true}
                allowResizing={true}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="120" allowSorting={false} />
                    <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" allowFiltering={false} />
                    <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="150" allowResizing={false} />
                    <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="150" allowReordering={false} />
                    <ColumnDirective field="Progress" headerText="Progress" textAlign="Right" width="150" />
                </ColumnsDirective>
                <Inject services={[Resize, Reorder, Sort, Filter]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));