import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Sort, Filter, Resize, ColumnMenu, ColumnMenuClickEventArgs } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const columnMenuItems = [
        'SortAscending',
        'SortDescending',
        'Group',
        'Ungroup',
        'Filter',
        {
            text: 'Sub Menu',
            items: [
                { text: 'Option 1', id: 'option1' },
                { text: 'Option 2', id: 'option2' },
                { text: 'Option 3', id: 'option3' },
                {
                    text: 'Nested Sub Menu',
                    items: [
                        { text: 'Nested Option 1', id: 'nestedoption1' },
                        { text: 'Nested Option 2', id: 'nestedoption2' },
                    ],
                },
            ],
        },
    ];
    const columnMenuClick = ((args: ColumnMenuClickEventArgs) => {
        if (args.item.id === 'option1') {
            // custom function
        }
    });
    return <GanttComponent dataSource={data} taskFields={taskFields}
        allowSorting={true} allowFiltering={true} allowResizing={true} showColumnMenu={true} columnMenuItems={columnMenuItems} contextMenuClick={columnMenuClick} height='450px'>
        <Inject services={[Sort, Filter, Resize, ColumnMenu]} />
    </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));