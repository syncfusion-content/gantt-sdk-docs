var ganttChart = new ej.gantt.Gantt({
    dataSource: GanttData,
    height: '370px',
    taskFields: {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID: 'ParentID',
        dependency: 'Predecessor'
    },
    splitterSettings: {
        columnIndex: 2
    },
    treeColumnIndex: 1,
    dataBound: dataBound,
    splitterResizing: splitterResizing,
    splitterResized: splitterResized
});
ganttChart.appendTo('#Gantt');

function dataBound () {
    const splitterBar = document.querySelector('.e-split-bar');
    if (splitterBar) {
        splitterBar.addEventListener('mouseover', () => {
            splitterBar.style.background = 'grey';
            const resizeHandler = splitterBar.querySelector('.e-resize-handler');
            if (resizeHandler) {
                resizeHandler.style.visibility = 'hidden';
            }
        });
        splitterBar.addEventListener('mouseleave', () => {
            splitterBar.style.background = '#dee2e6';
            const resizeHandler = splitterBar.querySelector('.e-resize-handler');
            if (resizeHandler) {
                resizeHandler.style.visibility = 'visible';
            }
        });
    }
}

function splitterResizing () {
    const splitterBar = document.querySelector('.e-split-bar');
    if (splitterBar) {
        splitterBar.style.background = 'grey';
        const resizeHandler = splitterBar.querySelector('.e-resize-handler');
        if (resizeHandler) {
            resizeHandler.style.visibility = 'hidden';
        }
    }
}

function splitterResized () {
    const splitterBar = document.querySelector('.e-split-bar');
    if (splitterBar) {
        splitterBar.style.background = '#dee2e6';
        const resizeHandler = splitterBar.querySelector('.e-resize-handler');
        if (resizeHandler) {
            resizeHandler.style.visibility = 'visible';
        }
    }
}