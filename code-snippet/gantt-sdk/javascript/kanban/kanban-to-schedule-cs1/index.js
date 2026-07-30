var kanbanOptions = {
        dataSource: kanbanData,
        keyField: 'DepartmentName',
        columns: [
            { headerText: 'GENERAL', keyField: 'GENERAL' }
        ],
        externalDropId: ['#Schedule'],
        cardSettings: {
            contentField: 'Name',
            headerField: 'Id',
            selectionType: 'Multiple'
        },
        showEmptyColumn: true,
        dragStop: function (args) {
            if (ej.base.closest(args.event.target, '#Schedule')) {
                kanbanObj.deleteCard(args.data);
                scheduleObj.openEditor(args.data[0], 'Add', true);
                args.cancel = true;
            }
        }
    };
    var kanbanObj = new ej.kanban.Kanban(kanbanOptions);
    kanbanObj.appendTo('#Kanban');
    ej.schedule.Schedule.Inject(ej.schedule.TimelineViews, ej.schedule.TimelineMonth, ej.schedule.Resize, ej.schedule.DragAndDrop);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '650px',
        selectedDate: new Date(2018, 7, 1),
        currentView: 'TimelineDay',
        eventDragArea: "body",
        cssClass: 'schedule-drag-drop',
        workHours: {
            start: '08:00',
            end: '18:00'
        },
        views: [
            { option: 'TimelineDay' },
            { option: 'TimelineMonth' }
        ],
        group: {
            enableCompactView: false,
            resources: ['Departments', 'Consultants']
        },
        resources: [
            {
                field: 'DepartmentID', title: 'Department',
                name: 'Departments', allowMultiple: false,
                dataSource: [
                    { Text: 'GENERAL', Id: 1, Color: '#bbdc00' },
                    { Text: 'DENTAL', Id: 2, Color: '#9e5fff' }
                ],
                textField: 'Text', idField: 'Id', colorField: 'Color'
            },
            {
                field: 'ConsultantID', title: 'Consultant',
                name: 'Consultants', allowMultiple: false,
                dataSource: [
                    { Text: 'Alice', Id: 1, GroupId: 1, Color: '#bbdc00', Designation: 'Cardiologist' },
                    { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Orthodontist' },
                    { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Optometrist' },
                    { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Periodontist' },
                    { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Orthopedic' },
                    { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Endodontist' }
                ],
                textField: 'Text', idField: 'Id', groupIDField: 'GroupId', colorField: 'Color'
            }
        ],
        eventSettings: {
            dataSource: scheduleData,
            fields: {
                subject: { title: 'Patient Name', name: 'Name' },
                startTime: { title: 'From', name: 'StartTime' },
                endTime: { title: 'To', name: 'EndTime' },
                description: { title: 'Reason', name: 'Description' }
            }
        },
        dragStop: scheduleDragStop
    });
    scheduleObj.appendTo('#Schedule');
    function scheduleDragStop(args) {
        if (ej.base.closest(args.event.target, '#Kanban')) {
            scheduleObj.deleteEvent(args.data.Id);
            ej.base.removeClass([scheduleObj.element.querySelector('.e-selected-cell')], 'e-selected-cell');
            kanbanObj.openDialog('Add', args.data);
            args.cancel = true;
        }
    }

