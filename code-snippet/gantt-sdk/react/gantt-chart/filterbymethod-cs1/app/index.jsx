import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';

function App() {
    let gantt = null;

    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings = {
        columnIndex: 3
    };

    function onSingleValueFilter() {
        gantt.clearFiltering();
        gantt.filterByColumn('TaskName', 'startswith', 'Iden', 'and');
    }

    function onMultipleValueFilter() {
        gantt.clearFiltering();
        gantt.filterByColumn('TaskID', 'equal', [2, 3, 4], 'or');
    }

    return (
        <div>
            <button className="filter-btn" onClick={onSingleValueFilter}>Filter with single value</button>
            <button onClick={onMultipleValueFilter}>Filter with multiple values</button>
            <br /><br /><br />

            <GanttComponent
                ref={(g) => (gantt = g)}
                height="430px"
                allowFiltering={true}
                dataSource={data}
                taskFields={taskFields}
                splitterSettings={splitterSettings}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="120" />
                    <ColumnDirective field="TaskName" headerText="Task Name" width="250" />
                    <ColumnDirective field="StartDate" headerText="Start Date" width="150" />
                    <ColumnDirective field="Duration" headerText="Duration" width="150" />
                    <ColumnDirective field="Progress" headerText="Progress" width="150" />
                </ColumnsDirective>

                <Inject services={[Filter]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));