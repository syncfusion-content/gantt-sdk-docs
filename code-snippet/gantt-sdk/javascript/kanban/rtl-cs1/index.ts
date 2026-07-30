

import { Kanban } from '@syncfusion/ej2-kanban';
import { L10n, enableRtl} from '@syncfusion/ej2-base';
import { kanbanData } from './datasource.ts';

L10n.load({
    'ar': {
        'kanban': {
            'items': 'العناصر',
            'min': 'أنا',
            'max': 'ماكس',
            'cardsSelected': 'تم تحديد البطاقات',
            'addTitle': 'إضافة بطاقة جديدة',
            'editTitle': 'تحرير تفاصيل البطاقة',
            'deleteTitle': 'حذف البطاقة',
            'deleteContent': 'هل أنت متأكد أنك تريد حذف هذه البطاقة؟',
            'save': 'حفظ',
            'delete': 'حذف',
            'cancel': 'إلغاء',
            'yes': 'نعم',
            'no': 'لا',
            'close': 'قريب',
            'noCard': 'لا توجد بطاقات لعرضها',
            'unassigned': 'غير معين'
        }
    }
});

let kanbanObj: Kanban = new Kanban({
    dataSource: kanbanData,
    keyField: 'Status',
    enableRtl: true,
    locale: 'ar',
    columns: [
        { headerText: 'Backlog', keyField: 'Open', showItemCount: true, minCount: 2 },
        { headerText: 'In Progress', keyField: 'InProgress', showItemCount: true, maxCount: 3 },
        { headerText: 'Done', keyField: 'Close', showItemCount: true }
    ],
    cardSettings: {
        contentField: 'Summary',
        headerField: 'Id'
    },
    swimlaneSettings: {
        keyField: 'Assignee'
    }
});
kanbanObj.appendTo('#Kanban');


