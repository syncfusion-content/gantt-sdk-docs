import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Edit, EditSettingsModel, Selection } from '@syncfusion/ej2-react-gantt';
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
    const editOptions: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true
    };
    let ganttInstance: any;
    function clickHandler() {
        let data: any = {
            TaskID: 10,
            TaskName: 'New Added Task',
            StartDate: new Date('04/02/2019'),
            Duration: 4,
            Progress: 50
        };
        ganttInstance.editModule.addRecord(data, 'Below', 2);
    }
    return (<div>
        <ButtonComponent onClick={clickHandler}>Add Row</ButtonComponent>
        <GanttComponent dataSource={data} ref={gantt => ganttInstance = gantt} taskFields={taskFields} allowSelection={true} editSettings={editOptions} height='450px'>
            <Inject services={[Edit, Selection]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));