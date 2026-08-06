import { createElement } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnMenu, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-gantt';
import { ColumnMenuItemModel, Inject, Sort, SortSettingsModel, SplitterSettings } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    let ganttInstance: any;
    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };
    const columnMenuItems: ColumnMenuItemModel[] =  [{text:'Clear Sorting', id:'ganttclearsorting'}];
    const sortSettings: SortSettingsModel = { columns:[{direction: "Ascending", field: "TaskName"}] };
    function columnMenuClick(args: any){
        if(args.item.id === 'ganttclearsorting'){
            ganttInstance.clearSorting();
        }
    }

   const splitterSettings: SplitterSettings = {
        columnIndex : 5
    };
        return (<div>
        <GanttComponent dataSource={data} taskFields={taskFields} showColumnMenu={true}
        columnMenuItems={columnMenuItems} columnMenuClick={columnMenuClick} sortSettings={sortSettings} allowSorting={true}
        splitterSettings={splitterSettings} height = '450px' ref={gantt =>ganttInstance = gantt}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100' ></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
        </ColumnsDirective>
        <Inject services={[ColumnMenu, Sort]} />
        </GanttComponent></div>)
};
ReactDOM.render(<App />, document.getElementById('root'));