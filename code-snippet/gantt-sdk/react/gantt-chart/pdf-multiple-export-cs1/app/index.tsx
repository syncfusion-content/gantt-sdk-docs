import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection, TaskFieldsModel, ToolbarItem } from '@syncfusion/ej2-react-gantt';
import { editingData1, editingData2 } from './datasource';

function App() {

    const fTaskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const sTaskSettings: TaskFieldsModel = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const toolbar: ToolbarItem[] = ['PdfExport'];

    const projectStartDate = new Date('03/31/2019');
    const projectEndDate = new Date('04/14/2019');

    let gantt1: GanttComponent | null = null;
    let gantt2: GanttComponent | null = null;

    const toolbarClick = (args: any): void => {
        if (args.item.id === 'ganttDefault1_pdfexport') {
            const firstPromise: Promise<any> = gantt1!.pdfExport({}, true);
            firstPromise.then((firstData: any) => {
                gantt2.pdfExport({}, false, firstData);
            });
        }
    };

    return (
        <div>
            <p><b>First Gantt:</b></p>

            <GanttComponent
                id="ganttDefault1"
                dataSource={editingData1}
                taskFields={fTaskSettings}
                toolbar={toolbar}
                height="280px"
                treeColumnIndex={1}
                allowPdfExport={true}
                projectStartDate={projectStartDate}
                projectEndDate={projectEndDate}
                toolbarClick={toolbarClick}
                ref={(g) => (gantt1 = g)}
            >
                <Inject services={[Toolbar, PdfExport, Selection]} />

                <ColumnsDirective>
                    <ColumnDirective field="TaskID" />
                    <ColumnDirective field="TaskName" />
                    <ColumnDirective field="StartDate" />
                    <ColumnDirective field="Duration" />
                    <ColumnDirective field="Progress" />
                </ColumnsDirective>
            </GanttComponent>

            <p><b>Second Gantt:</b></p>

            <GanttComponent
                id="ganttDefault2"
                dataSource={editingData2}
                taskFields={sTaskSettings}
                height="250px"
                allowPdfExport={true}
                treeColumnIndex={1}
                ref={(g) => (gantt2 = g)}
            >
                <Inject services={[PdfExport, Selection]} />

                <ColumnsDirective>
                    <ColumnDirective field="TaskID" />
                    <ColumnDirective field="TaskName" />
                    <ColumnDirective field="StartDate" />
                    <ColumnDirective field="Duration" />
                    <ColumnDirective field="Progress" />
                </ColumnsDirective>
            </GanttComponent>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));