
/**
 * Exporting Blob data
 */

let excelExpComplete = (args) => {
    //This event will be triggered when excel exporting.
        args.promise.then((e) => {
    //In this `then` function, we can get blob data through the arguments after promise resolved.
            exportBlob(e.blobData);
});
};
let pdfExpComplete = (args) => {
//This event will be triggered when pdf exporting.
    args.promise.then((e) => {
    //In this `then` function, we can get blob data through the arguments after promise resolved.
    exportBlob(e.blobData);
});
};


let exportBlob = (blob) => {
let a = document.createElement('a');
document.body.appendChild(a);
a.style.display = 'none';
let url = window.URL.createObjectURL(blob);
a.href = url;
a.download = 'Export';
a.click();
window.URL.revokeObjectURL(url);
document.body.removeChild(a);
}
const clickHandler = (args) => {
if (args.item.id === 'GanttExport_pdfexport') {
    gantt.pdfExport(null,null,null,true);
}
if (args.item.id === 'GanttExport_excelexport') {
    gantt.excelExport(null, null, null, true);
}
};

 
 var gantt = new ej.gantt.Gantt({
     dataSource: GanttData,
     height: '450px',
     taskFields: {
         id: 'TaskID',
         name: 'TaskName',
         startDate: 'StartDate',
         duration: 'Duration',
         progress: 'Progress',
         parentID: 'ParentID'
     },
     allowPdfExport: true,
     allowExcelExport: true,
     excelExportComplete: excelExpComplete,
     pdfExportComplete: pdfExpComplete,
     toolbar: ['PdfExport','ExcelExport'],
     toolbarClick: clickHandler
    
 });
 gantt.appendTo('#GanttExport');