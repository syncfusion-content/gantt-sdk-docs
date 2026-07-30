import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Sort, TaskFieldsModel, SplitterSettingsModel, ColumnModel, SortSettingsModel } from '@syncfusion/ej2-react-gantt';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';

function App() {
    const taskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const columns: ColumnModel[] = [
        { field: 'TaskID', headerText: 'Task ID', textAlign: 'Left', width: '120' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Duration', headerText: 'Duration', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ];
    const splitterSettings: SplitterSettingsModel = { columnIndex: 3 };
    const sortSettings: SortSettingsModel = {
        columns: [
            { field: 'TaskID', direction: 'Descending' },
            { field: 'TaskName', direction: 'Ascending' }
        ]
    };
    const columnOptions: object[] = [
        { text: 'Task ID', value: 'TaskID' },
        { text: 'Task Name', value: 'TaskName' },
        { text: 'Start Date', value: 'StartDate' },
        { text: 'Duration', value: 'Duration' },
        { text: 'Progress', value: 'Progress' }
    ];
    const field: object = { text: 'text', value: 'value' };
    let ganttInstance: GanttComponent | null = null;
    let dropDownInstance: DropDownListComponent | null = null;

    function removeSortColumn(): void {
        const selectedField = dropDownInstance.value as string;
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