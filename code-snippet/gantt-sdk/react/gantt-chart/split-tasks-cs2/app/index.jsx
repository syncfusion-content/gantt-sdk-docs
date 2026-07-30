import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    GanttComponent,
    Inject,
    Edit,
    Toolbar,
    Selection,
    ContextMenu,
} from '@syncfusion/ej2-react-gantt';
import { ganttData } from './datasource';

function App() {
    let message = '';
    const taskSettings = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        segments: 'Segments'
    };
    const editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    };
    const toolbarItems = [
        'Add', 'Edit', 'Update', 'Delete',
        'Cancel', 'ExpandAll', 'CollapseAll'
    ];

    function onTaskbarClick(args) {
        const element = args.taskbarElement;
        const indexAttr = element.getAttribute('data-segment-index');

        if (indexAttr === null || indexAttr === undefined) {
            message = 'Task clicked (not a segment)';
            document.getElementById('message').innerText = message;
            return;
        }

        const index = Number(indexAttr);
        const segments = args.data.ganttProperties.segments;
        const segment = segments[index];
        message = `Segment ${segment.segmentIndex} clicked`;

        document.getElementById('message').innerText = message;
    }
    return (
        <div>
            <div id="message" style={{ textAlign: 'center', color: 'red', paddingBottom: '20px' }}>

            </div>

            <GanttComponent
                height="450px"
                dataSource={ganttData}
                taskFields={taskSettings}
                editSettings={editSettings}
                toolbar={toolbarItems}
                enableContextMenu={true}
                onTaskbarClick={onTaskbarClick}
            >
                <Inject services={[Edit, Toolbar, Selection, ContextMenu]} />
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));