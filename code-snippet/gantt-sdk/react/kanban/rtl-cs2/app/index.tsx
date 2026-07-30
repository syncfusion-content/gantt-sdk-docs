import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend, L10n } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';

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

function App(){
  let data = extend([], kanbanData, null, true);
  return(
    <KanbanComponent id="kanban" keyField="Status" dataSource={data} locale='ar' enableRtl={true} cardSettings={{ contentField: "Summary", headerField: "Id" }} swimlaneSettings={{ keyField: "Assignee" }}>
        <ColumnsDirective>
          <ColumnDirective headerText="To Do" keyField="Open" minCount={2} />
          <ColumnDirective headerText="In Progress" keyField="InProgress" maxCount={3} />
          <ColumnDirective headerText="Done" keyField="Close" />
        </ColumnsDirective>
    </KanbanComponent>
  );
}
ReactDOM.render(<App />, document.getElementById('kanban'));
