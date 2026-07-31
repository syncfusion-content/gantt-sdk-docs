---
layout: post
title: Configure Custom Fields in React Gantt Chart Component | Syncfusion
description: Learn how to configure custom fields in the Syncfusion React Gantt Chart component’s add/edit dialogs for enhanced task data management.
platform: gantt-sdk
control: Custom fields
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Configure custom fields in React Gantt Chart Component

The [React Gantt Chart](https://www.syncfusion.com/react-components/react-gantt-chart) component allows you to enhance task data management by adding custom fields to the add/edit dialogs, seamlessly integrating them into the General tab using the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/gantt#actionbegin) and [actionComplete](https://ej2.syncfusion.com/react/documentation/api/gantt#actioncomplete) events. For example, adding a priority dropdown to the General tab enables users to assign task priorities during creation or editing. Inject `Edit` service and enable `editSettings.allowAdding` and `editSettings.allowEditing` to support dialog modifications. Configure valid [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt#taskfields) mappings or custom data properties (e.g., priority) to persist custom field values in the data source. Use `actionBegin` to define custom field properties (e.g., textbox, dropdown) before the dialog opens, and `actionComplete` to handle field data after user input. This feature supports various field types, such as dropdowns or numerics, and integrates with task scheduling, dependencies, and critical path, ensuring custom fields align with project workflows. Ensure the dialog module is configured to render custom fields accurately, enhancing flexibility in task management.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/gantt/how-to-customfield-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/gantt/how-to-customfield-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/gantt/how-to-customfield-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/gantt/how-to-customfield-cs1" %}

## See also

- [How to configure add/edit dialogs?](https://ej2.syncfusion.com/react/documentation/gantt/managing-tasks/managing-tasks#customize-control-in-addedit-dialog)
- [How to manage task dependencies?](https://ej2.syncfusion.com/react/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/react/documentation/gantt/critical-path)
