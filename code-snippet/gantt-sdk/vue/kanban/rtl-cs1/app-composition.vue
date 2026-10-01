<template>
    <div id="app">
        <ejs-kanban id="kanban" keyField="Status" :dataSource="kanbanData" :cardSettings="cardSettings"
            :swimlaneSettings="swimlaneSettings" locale='ar' :enableRtl='true'>
            <e-columns>
                <e-column headerText="To Do" keyField="Open" minCount="2"></e-column>
                <e-column headerText="In Progress" keyField="InProgress" maxCount="3"></e-column>
                <e-column headerText="Done" keyField="Close"></e-column>
            </e-columns>
        </ejs-kanban>
    </div>
</template>

<script setup>

import { KanbanComponent as EjsKanban, ColumnsDirective as EColumns, ColumnDirective as EColumn } from '@syncfusion/ej2-vue-kanban';
import { extend, L10n } from '@syncfusion/ej2-base';
import { kanbanData } from './datasource.js';

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

kanbanData = extend([], kanbanData, null, true);
const cardSettings = {
    contentField: 'Summary',
    headerField: 'Id'
};
const swimlaneSettings = {
    keyField: 'Assignee'
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/kanban/index.css";
</style>