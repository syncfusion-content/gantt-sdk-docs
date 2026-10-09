import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection, Filter, Toolbar } from '@syncfusion/ej2-react-gantt';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { data } from './datasource';

function App() {
    let ganttInstance = null;
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };
    const selectionModes = [
        { id: 'self', type: 'self' },
        { id: 'hierarchy', type: 'hierarchy' },
        { id: 'filteredHierarchy', type: 'filteredHierarchy' }
    ];
    const changeMode = (args) => {
        if (ganttInstance) {
            ganttInstance.hierarchyCheckboxMode = args.value;
            ganttInstance.refresh();
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', paddingBottom: '10px' }}>
                <label style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>Hierarchy Checkbox Mode:</label>
                <DropDownListComponent
                    width="150"
                    dataSource={selectionModes}
                    fields={{ text: 'type', value: 'id' }}
                    value="hierarchy"
                    change={changeMode}
                />
            </div>
            <GanttComponent
                id="ganttDefault"
                ref={(g) => (ganttInstance = g)}
                dataSource={data}
                height="370px"
                taskFields={taskFields}
                toolbar={['Search']}
                filterSettings={{ type: 'Menu' }}
                allowFiltering={true}
                allowSelection={true}
                hierarchyCheckboxMode="hierarchy"
            >
                <ColumnsDirective>
                    <ColumnDirective field="CheckBox" headerText="" showCheckbox={true} width="70" allowFiltering={false} />
                    <ColumnDirective field="TaskID" width="110" visible={false} />
                    <ColumnDirective field="TaskName" width="190" />
                    <ColumnDirective field="StartDate" />
                    <ColumnDirective field="EndDate" />
                    <ColumnDirective field="Duration" />
                    <ColumnDirective field="Progress" />
                </ColumnsDirective>
                <Inject services={[Selection, Filter, Toolbar]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));