ej.gantt.Gantt.Inject(ej.gantt.Edit);
var treeObj = new ej.navigations.TreeView({
    fields: { dataSource: editingResources, id: 'resourceId', text: 'resourceName' },
    allowDragAndDrop: true,
    height: "200px",
    nodeDragStop: function (args) {
        args.cancel = true;
        var chartEle = ej.base.closest(args.target, '.e-chart-row');
        var gridEle = ej.base.closest(args.target, '.e-row');
        if(gridEle) {
          var index = ganttChart.treeGrid.getRows().indexOf(gridEle);
          ganttChart.selectRow(index);
        }
        if (chartEle) {
            var index = chartEle.rowIndex;
            ganttChart.selectRow(index);
        }
        var record= args.draggedNodeData;
        var selectedData = ganttChart.flatData[ganttChart.selectedRowIndex];
        var selectedDataResource = selectedData.taskData.resources;
        var resources = [];
        if (selectedDataResource) {
            for (var i = 0; i < selectedDataResource.length; i++) {
              resources.push(selectedDataResource[i].resourceId);
            }
        }
        resources.push(parseInt(record.id));
        if (chartEle || gridEle) {
            var data = {
                TaskID: selectedData.taskData.TaskID,
                resources: resources
            };
            ganttChart.updateRecordByID(data);    
        }
    }
});
var ganttChart = new ej.gantt.Gantt({
        dataSource: editingData,
        resources: editingResources,
		height:'450px',
		taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
			duration: 'Duration',
            progress: 'Progress',
			parentID: 'ParentID',
            dependency: 'Predecessor',
            resourceInfo: 'resources'
        },
        editSettings: {
           allowEditing: true
        },
        resourceFields: {
            id: 'resourceId',
            name: 'resourceName'
        },
		splitterSettings:{
		  position: "30%"
		},
        labelSettings: {
            rightLabel: 'resources'
        }
});
ganttChart.appendTo('#Gantt');
treeObj.appendTo('#TreeView');