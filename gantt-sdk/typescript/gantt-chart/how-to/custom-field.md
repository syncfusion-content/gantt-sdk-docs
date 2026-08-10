---
layout: post
title: Custom Fields in TypeScript Gantt Chart | Syncfusion
description: Learn how to configure custom fields custom fields in Syncfusion TypeScript Gantt Charts add/edit dialogs to manage additional project data.
keywords: TypeScript gantt custom fields, custom columns, add dialog, edit dialog, custom properties, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/TypeScript/gantt-chart/how-to/custom-field
platform: gantt-sdk
control: Custom Fields - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Adding Custom Fields to Edit Dialogs in TypeScript Gantt Chart

The [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control allows you to enhance task data management by adding custom fields to the add/edit dialogs, seamlessly integrating them into the General tab using the [actionBegin](https://ej2.syncfusion.com/documentation/api/gantt#actionbegin) and [actionComplete](https://ej2.syncfusion.com/documentation/api/gantt#actioncomplete) events. For example, adding a priority dropdown to the General tab enables users to assign task priorities during creation or editing. Inject `Edit` and enable `editSettings.allowAdding` and `editSettings.allowEditing` to support dialog modifications. Configure valid [taskFields](https://ej2.syncfusion.com/documentation/api/gantt#taskfields) mappings or custom data properties (e.g., priority) to persist custom field values in the data source. Use `actionBegin` to define custom field properties (e.g., textbox, dropdown) before the dialog opens, and `actionComplete` to handle field data after user input. This feature supports various field types, such as dropdowns or numerics, and integrates with task scheduling, dependencies, and critical path, ensuring custom fields align with project workflows. Ensure the dialog module is configured to render custom fields accurately, enhancing flexibility in task management.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/customfield-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/customfield-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/customfield-cs1" %}

## See also

- [How to configure add/edit dialogs?](https://ej2.syncfusion.com/documentation/gantt/managing-tasks/managing-tasks#customize-control-in-addedit-dialog)
- [How to manage task dependencies?](https://ej2.syncfusion.com/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/documentation/gantt/critical-path)
