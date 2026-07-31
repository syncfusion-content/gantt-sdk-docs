import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data, resources } from './datasource';

function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        resourceInfo: 'resources',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID'
    };

    const splitterSettings = {
        columnIndex: 4
    };

    const toolbar = ['PdfExport'];

    let ganttInstance;

    function toolbarClick(args) {
        if (args.item.id === 'ganttDefault_pdfexport') {
            ganttInstance.pdfExport({
                fileName: 'new.pdf'
            });
        }
    }

    function pdfQueryCellInfo(args) {
        if (args.column.headerText === 'Resources') {
            args.image = {
                height: 40,
                width: 40,
                base64: args.data.taskData.resourcesImage
            };
        }
        if (args.column.headerText === 'Email ID') {
            args.hyperLink = {
                target: 'mailto:' + args.data.taskData.EmailId,
                displayText: args.data.taskData.EmailId
            };
        }
    }

    return (
        <GanttComponent
            id="ganttDefault"
            height="430px"
            dataSource={data}
            taskFields={taskFields}
            toolbar={toolbar}
            allowPdfExport={true}
            allowResizing={true}
            splitterSettings={splitterSettings}
            resources={resources}
            resourceFields={{ id: 'resourceId', name: 'resourceName' }}
            pdfQueryCellInfo={pdfQueryCellInfo}
            toolbarClick={toolbarClick}
            ref={(g) => (ganttInstance = g)}
        >
            <ColumnsDirective>
                <ColumnDirective field='TaskID' headerText='Task ID' textAlign='Left' width='100' />
                <ColumnDirective field='TaskName' headerText='Task Name' width='150' />
                <ColumnDirective field='resources' headerText='Resources' width='250' />
                <ColumnDirective field='EmailId' headerText='Email ID' width='150' />
            </ColumnsDirective>

            <Inject services={[Toolbar, PdfExport, Selection]} />
        </GanttComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));