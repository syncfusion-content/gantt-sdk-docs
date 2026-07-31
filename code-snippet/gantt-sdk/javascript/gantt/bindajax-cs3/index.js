var gantt = new ej.gantt.Gantt({
    height: '450px',
    treeColumnIndex: 1,
    taskFields: {
      id: 'TaskId',
      name: 'TaskName',
      startDate: 'StartDate',
      progress: 'Progress',
      duration: 'Duration',
      dependency: 'Predecessor',
      child: 'SubTasks'
    },
    projectStartDate: new Date('02/24/2019'),
    projectEndDate: new Date('07/20/2019')
});
    
gantt.appendTo('#Gantt');

let button = document.createElement('button');
button.textContent = 'Bind Data';
gantt.element.parentNode.insertBefore(button, gantt.element);
button.addEventListener("click", function(e){
    let ajax = new ej.base.Ajax("https://services.syncfusion.com/js/production/api/GanttData","GET");
    gantt.showSpinner();
    ajax.send();
    ajax.onSuccess = function (data) {
        gantt.hideSpinner();
        gantt.dataSource = (JSON.parse(data)).Items;
    };
});












