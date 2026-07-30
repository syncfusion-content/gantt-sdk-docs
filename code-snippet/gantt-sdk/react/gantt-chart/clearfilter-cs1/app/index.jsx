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

    const filterSettings = {
        columns: [
            { field: 'TaskName', matchCase: false, operator: 'startswith', predicate: 'and', value: 'Identify' },
            { field: 'Progress', matchCase: false, operator: 'equal', predicate: 'and', value: 50 }
        ]
    };

    function clearFilter() {
        gantt.clearFiltering();
    }

    return (
        <div>
            <button onClick={clearFilter}>Clear Filter</button>
            <br /><br /><br />
            <GanttComponent
                ref={(g) => (gantt = g)}
                height="370px"
                allowFiltering={true}
                dataSource={data}
                taskFields={taskFields}
                splitterSettings={splitterSettings}
                filterSettings={filterSettings}
            >
                <ColumnsDirective>
                    <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Left" width="100" />
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