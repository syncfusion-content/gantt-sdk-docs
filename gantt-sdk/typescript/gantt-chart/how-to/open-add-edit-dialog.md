---
layout: post
title: Open Add and Edit Dialogs in TypeScript Gantt Control | Syncfusion
description: Learn how to open add and edit dialogs programmatically in the Syncfusion TypeScript Gantt Chart control for efficient task creation and modification.
platform: gantt-sdk
control: Open add edit dialog
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Open Add and Edit Dialogs in TypeScript Gantt Chart Control

The add and edit dialogs in the [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control enable efficient task creation and modification, streamlining project management workflows. The [openAddDialog](../../api/gantt#openadddialog) method opens a dialog to add a new task, populating fields like id, name, or startDate based on [taskFields](../../api/gantt#taskfields) mappings. The [openEditDialog](../../api/gantt#openeditdialog) method opens a dialog to modify the currently selected task, ideal for updating task details like duration or dependencies. For example, clicking a button to open the add dialog allows users to create a new task, while selecting a task and opening the edit dialog enables quick updates. These dialogs, requiring `EditService` injection and `editSettings.allowAdding` and `editSettings.allowEditing` enabled, integrate with resources, dependencies, and critical path calculations, supporting validation and events like `actionBegin` for customized workflows. To use `openEditDialog` effectively, select a row through user interaction or by setting [selectedRowIndex](../../api/gantt#selectedrowindex), ensuring the dialog opens with the correct task data. Configure valid `taskFields` mappings to ensure dialog fields display and save data accurately, and enhance dialogs with custom fields using events like `actionBegin` or `actionComplete` for tailored workflows.

The following code example shows how to open add and dialog on separate button click actions.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt/openEditAddDialog-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/openEditAddDialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/openEditAddDialog-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt/openEditAddDialog-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt/openEditAddDialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt/openEditAddDialog-cs1" %}
{% endif %}

## See also

- [How to configure task editing?](../../gantt/managing-tasks/task-bar-editing)
- [How to manage task dependencies?](../../gantt/task-dependency)
- [How to configure critical path?](../../gantt/critical-path)
