import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Filter } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';

function App() {
    let ganttInstance: GanttComponent | null = null;
    let fieldDropDown: DropDownListComponent | null = null;
    let typeDropDown: DropDownListComponent | null = null;

    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings: any = { columnIndex: 2 };
    const columns: any[] = [
        { field: 'TaskID', headerText: 'Task ID', width: '120' },
        { field: 'TaskName', headerText: 'Task Name', width: '250' },
        { field: 'StartDate', headerText: 'Start Date', width: '150' },
        { field: 'Progress', headerText: 'Progress', width: '150' }
    ];

    const fieldData = columns.map(col => col.field);
    const typeData = ['Menu', 'Excel'];

    const onFieldChange = () => {
        if (typeDropDown) {
            typeDropDown.enabled = true;
            typeDropDown.refresh();
        }
    };

    const onTypeChange = (args: any) => {
        const selectedField = fieldDropDown.value as string;
        const selectedType = args.value as string;

        const col = columns.find(c => c.field === selectedField);
        if (col) {
            col.filter = { type: selectedType };
            ganttInstance.refresh();
        }
    };

    return (
        <div>
            <div className="container" style={{ marginBottom: 20, display: 'flex', gap: 40 }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <label style={{ fontWeight: 'bold' }}>Select Column:</label>
                    <DropDownListComponent
                        dataSource={fieldData}
                        placeholder="Select column"
                        change={onFieldChange}
                        ref={(d: any) => (fieldDropDown = d)}
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <label style={{ fontWeight: 'bold' }}>Select Filter Type:</label>
                    <DropDownListComponent
                        dataSource={typeData}
                        enabled={false}   // starts disabled
                        placeholder="Select filter type"
                        change={onTypeChange}
                        ref={(d: any) => (typeDropDown = d)}
                    />
                </div>
            </div>

            <GanttComponent
                ref={(g: any) => (ganttInstance = g)}
                height="430px"
                allowFiltering={true}
                dataSource={data}
                taskFields={taskFields}
                columns={columns}
                splitterSettings={splitterSettings}
            >
                <Inject services={[Filter]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));