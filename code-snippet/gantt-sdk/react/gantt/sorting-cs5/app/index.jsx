import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Sort, TaskFieldsModel, SplitterSettingsModel, ColumnModel, SortSettingsModel } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';

function App() {
    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const columns = [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '120' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ];
    const splitterSettings = { columnIndex: 3 };
    const sortSettings = {
        columns: [
            { field: 'TaskID', direction: 'Descending' },
            { field: 'TaskName', direction: 'Ascending' }
        ]
    };
    const columnOptions = [
        { text: 'Task ID', value: 'TaskID' },
        { text: 'Task Name', value: 'TaskName' },
        { text: 'Start Date', value: 'StartDate' },
        { text: 'Duration', value: 'Duration' },
        { text: 'Progress', value: 'Progress' }
    ];
    const field = { text: 'text', value: 'value' };
    let ganttInstance = null;
    let dropDownInstance = null;

    function removeSortColumn() {
        const selectedField = dropDownInstance.value;
        ganttInstance.removeSortColumn(selectedField);
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <label style={{ marginRight: '10px', fontWeight: 'bold' }}>
                    Column name:
                </label>
                <DropDownListComponent width="120" dataSource={columnOptions} fields={field} index={0}
                    ref={(d) => (dropDownInstance = d)} />
                <ButtonComponent id="button" cssClass="e-outline" onClick={removeSortColumn}>
                    Remove sort column
                </ButtonComponent>
            </div>
            <GanttComponent id="ganttDefault" height="430px" dataSource={data} taskFields={taskSettings} columns={columns} splitterSettings={splitterSettings} sortSettings={sortSettings} allowSorting={true} ref={(g) => (ganttInstance = g)} >
                <Inject services={[Sort]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));