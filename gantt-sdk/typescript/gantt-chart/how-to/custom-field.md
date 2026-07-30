---
layout: post
title: Configure Custom Fields in TypeScript Gantt Chart | Syncfusion
description: Learn how to configure custom fields in the Syncfusion TypeScript  Gantt Chart control's add/edit dialogs for enhanced task data management.
platform: gantt-sdk
control: Custom fields
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Configure custom fields in TypeScript Gantt Chart Control

The [TypeScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control allows you to enhance task data management by adding custom fields to the add/edit dialogs, seamlessly integrating them into the General tab using the [actionBegin](../../api/gantt#actionbegin) and [actionComplete](../../api/gantt#actioncomplete) events. For example, adding a priority dropdown to the General tab enables users to assign task priorities during creation or editing. Inject `Edit` and enable `editSettings.allowAdding` and `editSettings.allowEditing` to support dialog modifications. Configure valid [taskFields](../../api/gantt#taskfields) mappings or custom data properties (e.g., priority) to persist custom field values in the data source. Use `actionBegin` to define custom field properties (e.g., textbox, dropdown) before the dialog opens, and `actionComplete` to handle field data after user input. This feature supports various field types, such as dropdowns or numerics, and integrates with task scheduling, dependencies, and critical path, ensuring custom fields align with project workflows. Ensure the dialog module is configured to render custom fields accurately, enhancing flexibility in task management.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/customfield-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/customfield-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/customfield-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/customfield-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/gantt-chart/customfield-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/gantt-chart/customfield-cs1" %}
{% endif %}

## See also
- [How to configure add/edit dialogs?](../../gantt/managing-tasks/managing-tasks#customize-control-in-addedit-dialog)
- [How to manage task dependencies?](../../gantt/task-dependency)
- [How to configure critical path?](../../gantt/critical-path)