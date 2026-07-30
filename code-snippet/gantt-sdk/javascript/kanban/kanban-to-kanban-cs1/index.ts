

import { Kanban } from '@syncfusion/ej2-kanban';
import { closest } from '@syncfusion/ej2-base';
import { kanbanAData, kanbanBData } from './datasource.ts';

const kanbanObjA: Kanban = new Kanban({
    dataSource: kanbanAData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    externalDropId: ['#kanbanB'],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id',
        selectionType: 'Multiple'
    },
    showEmptyColumn: true,
    dragStop: (args: DragEventArgs): void => {
        if (closest(args.event.target as Element, '#kanbanB')) {
            kanbanObjA.deleteCard(args.data);
            args.data.forEach((card: Record<string, any>, i: number) => {
                const index: number = kanbanObjB.kanbanData.findIndex((colData: Record<string, any>) =>
                    colData[kanbanObjB.cardSettings.headerField] === card[kanbanObjB.cardSettings.headerField]);
                if (index !== -1) {
                    card[kanbanObjB.cardSettings.headerField] = Math.max(...kanbanObjB.kanbanData.map(
                        (obj: Record<string, string>) => parseInt(obj[kanbanObjB.cardSettings.headerField], 10))) + ++i;
                }
            });
            kanbanObjB.addCard(args.data, args.dropIndex);
            args.cancel = true;
        }
    }
});
kanbanObjA.appendTo('#kanbanA');

const kanbanObjB: Kanban = new Kanban({
    dataSource: kanbanBData,
    keyField: 'Status',
    columns: [
        { headerText: 'Backlog', keyField: 'Open' },
        { headerText: 'Done', keyField: 'Close' }
    ],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    },
    externalDropId: ['#kanbanA'],
    showEmptyColumn: true,
    dragStop: (args: DragEventArgs): void => {
        if (closest(args.event.target as Element, '#kanbanA')) {
            kanbanObjB.deleteCard(args.data);
            args.data.forEach((card: Record<string, any>, i: number) => {
                const index: number = kanbanObjA.kanbanData.findIndex((colData: Record<string, any>) =>
                    colData[kanbanObjA.cardSettings.headerField] === card[kanbanObjA.cardSettings.headerField]);
                if (index !== -1) {
                    card[kanbanObjA.cardSettings.headerField] = Math.max(...kanbanObjA.kanbanData.map(
                        (obj: Record<string, string>) => parseInt(obj[kanbanObjA.cardSettings.headerField], 10))) + ++i;
                }
            });
            kanbanObjA.addCard(args.data, args.dropIndex);
            args.cancel = true;
        }
    }
});
kanbanObjB.appendTo('#kanbanB');


