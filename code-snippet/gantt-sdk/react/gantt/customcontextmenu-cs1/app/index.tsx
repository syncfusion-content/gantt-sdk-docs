import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Edit, Selection, ContextMenu, Sort, Resize, EditSettingsModel, IGanttData } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App(){
    let ganttInstance: any;
    const taskFields: any = {
        id: 'TaskId',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'parentId'
    };
    const editSettings: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true
    };
    const contextMenuItems: any = ['AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel', 'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert',
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' },
        { text: 'Hide Column', target: '.e-gridheader', id: 'hidecols' }
    ];
    function contextMenuClick (args: any) {
        let record: IGanttData = args.rowData;
        if (args.item.id === 'collapserow') {
            ganttInstance.collapseByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'expandrow') {
            ganttInstance.expandByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'hidecols') {
            ganttInstance.hideColumn(args.column.headerText);
        }
    };
    function contextMenuOpen (args: any) {
        let record: IGanttData = args.rowData;
        if (args.type !== 'Header') {
            if (!record.hasChildRecords) {
                args.hideItems.push('Collapse the Row');
                args.hideItems.push('Expand the Row');
            } else {
                if(record.expanded){
                    args.hideItems.push("Expand the Row");
                } else {
                    args.hideItems.push("Collapse the Row");
                }
            }
        }
    };
    return (
        <GanttComponent 
            dataSource={data} 
            taskFields={taskFields} 
            editSettings={editSettings} 
            allowSorting={true} 
            allowResizing={true} 
            enableContextMenu={true} 
            contextMenuItems={contextMenuItems} 
            contextMenuClick={contextMenuClick} 
            contextMenuOpen={contextMenuOpen} 
            ref={gantt => ganttInstance = gantt} 
            height = '450px'
        >
            <Inject services={[Edit, ContextMenu, Selection, Sort, Resize]} />
        </GanttComponent>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));