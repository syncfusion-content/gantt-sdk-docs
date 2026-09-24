---
layout: post
title: Dynamically Change Columns in ASP.NET MVC Kanban | Syncfusion
description: Learn how to dynamically change columns in Syncfusion ASP.NET MVC Kanban with practical examples and configuration guidance.
keywords: ASP.NET MVC kanban dynamically change columns, syncfusion kanban, update columns at runtime, column toggle
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/kanban/how-to/dynamically-change-columns
platform: gantt-sdk
control: Dynamically Change Columns - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Modify Columns Programmatically in ASP.NET MVC Kanban

You can dynamically change the Kanban columns by using the [`columns`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_Columns) property.

In the below sample, you can dynamically change the [`allowToggle`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanColumn.html#Syncfusion_EJ2_Kanban_KanbanColumn_AllowToggle) property at the particular column when you click on the button. You can also change the initially created columns to the new Kanban columns by using the [`columns`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_Columns) property when you click on the button.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/cards/dynamic-columns/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/cards/dynamic-columns/datasource.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](../images/dynamic-columns.PNG)
