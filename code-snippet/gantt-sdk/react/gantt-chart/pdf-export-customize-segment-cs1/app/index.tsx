import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { TaskFieldsModel, EditSettingsModel, PdfQueryTaskbarInfoEventArgs, IQueryTaskbarInfoEventArgs, Inject, Toolbar, PdfExport, Edit } from '@syncfusion/ej2-react-gantt';
import { GanttData } from './datasource';

function App() {

    const taskFields: TaskFieldsModel = {
        id: "TaskID",
        name: "TaskName",
        startDate: "StartDate",
        endDate: "EndDate",
        duration: "Duration",
        progress: "Progress",
        parentID: "ParentID",
        segments: "Segments"
    };

    const editSettings: EditSettingsModel = {
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };

    function toolbarClick(args: any): void {
        if (args.item.id === 'ganttDefault_pdfexport') {
            (ganttRef as any).pdfExport();
        }
    }

    function queryTaskbarInfo(args: IQueryTaskbarInfoEventArgs): void {
        const taskData: any = args.data.taskData;
        if (taskData.Segments) {
            const segmentIndex = (args.taskbarElement as any).dataset.segmentIndex;
            if (Number(segmentIndex) === 1) {
                args.taskbarBgColor = 'red';
                args.taskbarBorderColor = 'black';
                args.progressBarBgColor = 'green';
            }
        }
    }

    function pdfQueryTaskbarInfo(args: PdfQueryTaskbarInfoEventArgs): void {
        const taskbar = args.taskbar;
        if (taskbar.taskSegmentStyles && taskbar.taskSegmentStyles.length > 1) {
            taskbar.taskSegmentStyles[1].taskColor = { r: 255, g: 0, b: 0 };
            taskbar.taskSegmentStyles[1].progressColor = { r: 0, g: 128, b: 0 };
            taskbar.taskSegmentStyles[1].taskBorderColor = { r: 0, g: 0, b: 0 };
        }
    }

    let ganttRef: GanttComponent;

    return (
        <GanttComponent
            ref={(g) => ganttRef = g as any}
            id="ganttDefault"
            height="450px"
            dataSource={GanttData}
            taskFields={taskFields}
            editSettings={editSettings}
            toolbar={['PdfExport']}
            gridLines="Both"
            toolbarClick={toolbarClick}
            queryTaskbarInfo={queryTaskbarInfo}
            pdfQueryTaskbarInfo={pdfQueryTaskbarInfo}
            allowPdfExport={true}
        >
            <ColumnsDirective>
                <ColumnDirective field="TaskID" headerText="Task ID" />
                <ColumnDirective field="TaskName" headerText="Task Name" />
                <ColumnDirective field="StartDate" headerText="Start Date" />
                <ColumnDirective field="EndDate" headerText="End Date" />
            </ColumnsDirective>
            <Inject services={[Toolbar, PdfExport, Edit]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));