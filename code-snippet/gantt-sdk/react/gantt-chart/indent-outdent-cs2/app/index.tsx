import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Edit, Selection, Toolbar, ToolbarItem } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    const taskFields: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const editOptions: object = {
        allowEditing: true,
        mode: 'Auto'
    };
    const toolbarOptions: ToolbarItem[] = ['Indent', 'Outdent'];
    let ganttInstance: any;
    function indent() {
        ganttInstance.selectRow(2);
        ganttInstance.indent();
    };
    function outdent() {
        ganttInstance.selectRow(2);
        ganttInstance.outdent();
    };

    return (<div>
        <div style={{ margin: '8px' }}>
            <ButtonComponent onClick={indent} style={{ marginRight: '5px' }}>Indent</ButtonComponent>
            <ButtonComponent onClick={outdent}>Outdent</ButtonComponent>
        </div>
        <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true} editSettings={editOptions} toolbar={toolbarOptions} height='450px' ref={gantt => ganttInstance = gantt}>
            <Inject services={[Edit, Selection, Toolbar]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));