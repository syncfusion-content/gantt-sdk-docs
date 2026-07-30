---
layout: post
title: Feature Modules in React Gantt Chart | Syncfusion
description: Learn how to inject feature modules in the React Gantt Chart component to enable advanced features and optimize bundle size.
platform: gantt-sdk
control: Module
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Feature Modules in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) uses a modular architecture for bundle size optimization. Basic rendering requires no additional modules. Advanced features like sorting, editing, toolbar, and export require explicit module injection.

This approach loads only the functionality you need, reducing bundle size and improving load times.

## Inject modules

Import and inject modules using the `Inject` component inside your Gantt component:

{% raw %}
```ts
import React from 'react';
import { GanttComponent, Inject, Sort, Filter, Edit, Toolbar } from '@syncfusion/ej2-react-gantt';

export default function App() {
  const taskData = [
    { TaskID: 1, TaskName: 'Design', StartDate: new Date('04/02/2024'), Duration: 5 },
    { TaskID: 2, TaskName: 'Development', StartDate: new Date('04/09/2024'), Duration: 10 },
  ];

  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
  };

  return (
    <GanttComponent 
      dataSource={taskData} 
      taskFields={taskFields}
      allowSorting={true}
      allowFiltering={true}
      toolbar={['Add', 'Edit', 'Delete']}
      editSettings={{ allowAdding: true, allowEditing: true, allowDeleting: true }}
    >
      <Inject services={[Sort, Filter, Edit, Toolbar]} />
    </GanttComponent>
  );
}
```
{% endraw %}

Each module enables specific features. For example, `Sort` enables column sorting, while `Edit` enables task editing through the dialog or inline editing.

## Available modules

**Core data operations:**
- `Sort` - Column sorting with `allowSorting`
- `Filter` - Data filtering with `allowFiltering`
- `Selection` - Row/cell selection with `allowSelection`
- `Edit` - Task editing with `editSettings`

**UI enhancements:**
- `Toolbar` - Toolbar controls with `toolbar` property
- `ContextMenu` - Right-click menus with `enableContextMenu`
- `ColumnMenu` - Column header menus with `showColumnMenu`
- `Reorder` - Column reordering with `allowReordering`
- `Resize` - Column resizing with `allowResizing`
- `Freeze` - Enables column freezing using the `frozenColumns` property.

**Advanced features:**
- `RowDD` - Row drag-and-drop with `allowRowDragAndDrop`
- `DayMarkers` - Event markers and holidays
- `VirtualScroll` - Virtual scrolling with `enableVirtualization`
- `CriticalPath` - Critical path visualization with `enableCriticalPath`
- `UndoRedo` - Undo/redo operations with `enableUndoRedo`

**Export:**
- `ExcelExport` - Excel export with `allowExcelExport`
- `PdfExport` - PDF export with `allowPdfExport`

> **Note:** Always inject modules before using their features. Missing module injection will cause runtime errors.

## Bundle optimization

Modern React build tools (Vite, Webpack, etc.) automatically tree-shake unused code when using ES module imports. To maximize bundle size reduction, follow these practices:

**Import only what you need:**

```ts
// Good - Tree-shakeable
import { GanttComponent, Inject, Sort, Edit } from '@syncfusion/ej2-react-gantt';

// Avoid - Imports everything
import * as GanttComponents from '@syncfusion/ej2-react-gantt';
```

**Only inject required modules:**

{% raw %}
```ts
// Only include modules for features you're actually using
<Inject services={[Sort, Edit]} />
```
{% endraw %}

This ensures your production bundle includes only the Gantt features your application uses. For example, if you don't use Excel export, don't import or inject the `ExcelExport` module.

## See also

- [Event Markers](./event-markers)
- [Virtual Scrolling](./scrolling/virtual-scrolling)
- [Editing Tasks](./managing-tasks/editing-tasks)
- [Overview](./overview)
