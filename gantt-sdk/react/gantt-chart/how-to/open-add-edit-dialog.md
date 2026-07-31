---
layout: post
title: Open Add and Edit Dialogs in React Gantt Chart Component | Syncfusion
description: Learn how to open add and edit dialogs programmatically in the Syncfusion React Gantt Chart component for efficient task creation and modification.
platform: gantt-sdk
control: Add edit dialog
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Open Add and Edit Dialogs in React Gantt Chart Component

The add and edit dialogs in the [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component enable efficient task creation and modification, streamlining project management workflows. The [openAddDialog](https://ej2.syncfusion.com/react/documentation/api/gantt#openadddialog) method opens a dialog to add a new task, populating fields like id, name, or startDate based on [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt#taskfields) mappings. The [openEditDialog](https://ej2.syncfusion.com/react/documentation/api/gantt#openeditdialog) method opens a dialog to modify the currently selected task, ideal for updating task details like duration or dependencies. For example, clicking a button to open the add dialog allows users to create a new task, while selecting a task and opening the edit dialog enables quick updates. These dialogs, requiring `EditService` injection and `editSettings.allowAdding` and `editSettings.allowEditing` enabled, integrate with resources, dependencies, and critical path calculations, supporting validation and events like `actionBegin` for customized workflows. To use `openEditDialog` effectively, select a row through user interaction or by setting [selectedRowIndex](https://ej2.syncfusion.com/react/documentation/api/gantt#selectedrowindex), ensuring the dialog opens with the correct task data. Configure valid `taskFields` mappings to ensure dialog fields display and save data accurately, and enhance dialogs with custom fields using events like `actionBegin` or `actionComplete` for tailored workflows.

The following code example shows how to open add and dialog on separate button click actions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/openEditAddDialog-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/openEditAddDialog-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/openEditAddDialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/openEditAddDialog-cs1" %}

## See also

- [How to configure task editing?](https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/task-bar-editing)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/react/documentation/gantt/critical-path)
