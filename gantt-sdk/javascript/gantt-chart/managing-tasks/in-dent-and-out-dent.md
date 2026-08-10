---
layout: post
title: Indent and Outdent in JavaScript Gantt Chart | Syncfusion
description: Learn to indent and outdent tasks in Syncfusion JavaScript Gantt Chart to organize task hierarchy and manage project structure effectively.
keywords: javascript gantt indent, outdent, task hierarchy, promote task, demote task, hierarchy management, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/managing-tasks/in-dent-and-out-dent
platform: gantt-sdk
control: Indent Outdent - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Indent and Outdent in JavaScript Gantt Chart

Indent and Outdent of a task are used to update the level of task in the hierarchical order of the task. It can be performed by enabling the [editSettings.allowEditing](https://ej2.syncfusion.com/javascript/documentation/api/gantt/editSettings#allowediting) property.

`Indent` - Selected task can be indented to the level of task to the hierarchical order. It can be performed by using in-built context menu or toolbar items. It can also be invoked by using the `indent` method dynamically on any action like external button click. The following code example shows how to enable indent option in the Gantt chart.

`Outdent` - Selected task can be outdented to the level of task from the hierarchical order. It can be performed by using in-built context menu or toolbar items. It can also be invoked by using the `outdent` method dynamically on any action like external button click. The following code example shows how to enable outdent option in the Gantt chart.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/indent-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/gantt-chart/indent-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/gantt-chart/indent-cs1" %}

