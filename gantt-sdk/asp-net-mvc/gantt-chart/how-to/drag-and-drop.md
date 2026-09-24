---
layout: post
title: Drag and Drop in ASP.NET MVC Gantt Chart | Syncfusion
description: Learn how to drag and drop records from other components to Syncfusion ASP.NET MVC Gantt Chart for seamless task management integration.
keywords: asp.net mvc gantt drag drop, drag and drop tasks, record dragging, drop to gantt, external drag drop, syncfusion gantt chart
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/gantt-chart/how-to/drag-and-drop
platform: gantt-sdk
control: How-to - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Drag and Drop from Another Component in ASP.NET MVC Gantt Chart

In Gantt, it is possible to drag a record from another component and drop it in Gantt chart with updating the Gantt record. Here, dragging an item from `TreeView` component to Gantt and that item is updated as a resource for the Gantt record, we can achieve this, by using [`nodeDragStop`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Navigations.TreeView.html#Syncfusion_EJ2_Navigations_TreeView_NodeDragStop) event of `TreeView` control.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/draganddrop/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Draganddrop.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/gantt-chart/how-to/draganddrop/draganddrop.cs %}
{% endhighlight %}
{% endtabs %}

The following screenshot shows dropping record from another component in to Gantt, and **Rose Fuller** is added as resource for the task **Develop floor plan estimation**.

![Dropping Record](../images/dropping.png)
