---
layout: post
title: Indent and Outdent in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to indent and outdent tasks in Syncfusion ASP.NET MVC Gantt Chart to create hierarchical task structures and parent-child relationships.
keywords: asp.net mvc gantt indent outdent, task hierarchy, parent child tasks, indent tasks, outdent tasks, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/managing-tasks/in-dent-and-out-dent
platform: gantt-sdk
control: Managing Tasks - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Indent and Outdent in ASP.NET MVC Gantt Chart

Indent and Outdent of a task are used to update the level of the task in hierarchical order of the task. It can be performed bu enabling the [`editSettings.allowEditing`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Gantt.GanttEditSettingsBuilder.html#Syncfusion_EJ2_Gantt_GanttEditSettingsBuilder_AllowEditing_System_Boolean_) property.

`Indent` - The selected task can be indented to the level of task in the hierarchical order using the in-built context menu or toolbar items. It can also be invoked using the `indent` method dynamically on any action like external button click. The following code example shows how to enable indent option in the Gantt chart.

`Outdent` - The selected task can be outdented to the level of task from the hierarchical order using the in-built context menu or toolbar items. It can also be invoked using the `outdent` method dynamically on any action like external button click. The following code example shows how to enable outdent option in the Gantt chart.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/indent-outdent/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Indentoutdent.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/editing/indent-outdent/indentoutdent.cs %}
{% endhighlight %}
{% endtabs %}
