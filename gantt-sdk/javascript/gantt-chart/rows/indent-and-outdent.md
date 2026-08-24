---
layout: post
title: Indent and Outdent in JavaScript Gantt Chart | Syncfusion
description: Learn to manage task hierarchy in Syncfusion JavaScript Gantt Chart using indent and outdent features to adjust row levels and create nested task structures.
keywords: javascript gantt indent, gantt outdent, task hierarchy, nested tasks, tree hierarchy, task nesting, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/rows/indent-and-outdent
platform: gantt-sdk
control: Indent and Outdent - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Indenting and Outdenting Rows for Hierarchy in JavaScript Gantt Chart

The [JavaScript Gantt Chart](https://www.syncfusion.com/javascript-ui-controls/js-gantt-chart) control provides built-in support for indenting and outdenting rows, allowing hierarchy levels to be adjusted within the Gantt chart.

- **Indent** – Moves a selected row one level deeper, making it the last child of its previous row.
- **Outdent** – Shifts a row one level up, placing it as a sibling to its parent.

To enable indent and outdent functionality, set [editSettings.allowEditing](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editSettings#allowediting) to **true**, inject `Edit` and `Selection` module of the control, and use either the **built-in context menu** or [ToolbarItem](https://ej2.syncfusion.com/javascript/documentation/api/gantt/toolbarItem) to perform indent and outdent actions.

The following sample demonstrates how to enable indent and outdent functionalities in the Gantt using the [toolbar](https://ej2.syncfusion.com/javascript/documentation/api/gantt#toolbar) property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/indent-outdent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/indent-outdent/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/indent-outdent" %}

## Indent and outdent a row programmatically

You can programmatically adjust a row's hierarchy in the JavaScript Gantt Chart control using the [indent](https://ej2.syncfusion.com/javascript/documentation/api/gantt#indent) and [outdent](https://ej2.syncfusion.com/javascript/documentation/api/gantt#outdent) methods. Before performing these actions, select the target row by calling the [selectRow](https://ej2.syncfusion.com/javascript/documentation/api/gantt#selectrow) method with the appropriate row index.

The following sample demonstrates how to programmatically select row index **2** and perform indent or outdent actions using an external button click.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/indent-outdent-externally/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/indent-outdent-externally/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/indent-outdent-externally" %}

## Retrieve Indent and outdent details

You can retrieve indent and outdent details using the [actionComplete](https://ej2.syncfusion.com/javascript/documentation/api/gantt#actioncomplete) event, where the `args.requestType` value will be either **indented** or **outdented**, indicating the type of action performed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/indent-outdent-events/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/indent-outdent-events/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/indent-outdent-events" %}

## Limitation

- The indent and outdent feature does not support selecting and modifying multiple rows simultaneously.
