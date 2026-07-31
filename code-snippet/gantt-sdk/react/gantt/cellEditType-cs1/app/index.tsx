import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Edit, Inject, TaskFieldsModel, EditSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App() {
    const numericParams = { params: { min: 1 } };
    const progressParams = { params: { showSpinButton: false } };
    const taskFields: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const editOptions: EditSettingsModel = {
        allowEditing: true
    };

    function durationFormat(field: any, data: any) {
        return data[field];
    }
    return <GanttComponent dataSource={data} taskFields={taskFields} editSettings={editOptions} height='450px'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID'></ColumnDirective>
            <ColumnDirective field='TaskName'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration' editType='numericedit' edit={numericParams} valueAccessor={durationFormat}></ColumnDirective>
            <ColumnDirective field='Progress' editType='numericedit' edit={progressParams}></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[Edit]} />
    </GanttComponent>;

};
ReactDOM.render(<App />, document.getElementById('root'));