import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Edit, Filter, Reorder, Resize, Selection, Sort, Toolbar } from '@syncfusion/ej2-react-gantt';

const data = [
    { TaskID: 1, TaskName: 'Project planning', StartDate: new Date(2024, 0, 1), Duration: 5, Progress: 40, Effort: 32, Budget: 12000 },
    { TaskID: 2, TaskName: 'Requirements gathering', StartDate: new Date(2024, 0, 8), Duration: 4, Progress: 60, Effort: 24, Budget: 8500 },
    { TaskID: 3, TaskName: 'Design', StartDate: new Date(2024, 0, 12), Duration: 6, Progress: 25, Effort: 40, Budget: 14500 },
    { TaskID: 4, TaskName: 'Implementation', StartDate: new Date(2024, 0, 22), Duration: 8, Progress: 10, Effort: 64, Budget: 26000 },
    { TaskID: 5, TaskName: 'Testing', StartDate: new Date(2024, 1, 1), Duration: 5, Progress: 0, Effort: 36, Budget: 11000 }
];

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress'
    };
    const editSettings = { allowEditing: true, mode: 'Auto' };

    return (
        <GanttComponent id="Gantt" dataSource={data} taskFields={taskFields} height="450px"
            allowSorting={true} allowFiltering={true} allowResizing={true} allowReordering={true}
            toolbar={['Edit', 'Update', 'Cancel']} editSettings={editSettings}>
            <ColumnsDirective>
                <ColumnDirective headerText="Task Information">
                    <ColumnsDirective>
                        <ColumnDirective field="TaskName" headerText="Task Name" width="220" allowEditing={true} />
                        <ColumnDirective headerText="Progress Details">
                            <ColumnsDirective>
                                <ColumnDirective field="Progress" headerText="Progress" width="120" type="number" format="N0" allowEditing={true} />
                                <ColumnDirective field="Effort" headerText="Effort (hours)" width="130" type="number" format="N0" allowSorting={false} allowFiltering={false} allowEditing={false} visible={false} />
                            </ColumnsDirective>
                        </ColumnDirective>
                    </ColumnsDirective>
                </ColumnDirective>
                <ColumnDirective headerText="Schedule">
                    <ColumnsDirective>
                        <ColumnDirective headerText="Timeline">
                            <ColumnsDirective>
                                <ColumnDirective field="StartDate" headerText="Start Date" width="140" format="yMd" allowEditing={true} />
                                <ColumnDirective field="Duration" headerText="Duration" width="110" type="number" format="N0" allowFiltering={false} allowEditing={false} />
                            </ColumnsDirective>
                        </ColumnDirective>
                    </ColumnsDirective>
                </ColumnDirective>
                <ColumnDirective field="Budget" headerText="Budget" width="130" type="number" format="C2" allowEditing={true} />
            </ColumnsDirective>
            <Inject services={[Edit, Filter, Reorder, Resize, Selection, Sort, Toolbar]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
