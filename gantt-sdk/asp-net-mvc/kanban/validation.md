---
layout: post
title: Validation in ASP.NET MVC Kanban | Syncfusion
description: Learn how to implement data validation and constraints in Syncfusion ASP.NET MVC Kanban for data integrity.
keywords: asp-net-mvc kanban validation, syncfusion kanban, data validation, constraints
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/kanban/validation
platform: gantt-sdk
control: WIP Validation - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# WIP Validation and Work-in-Progress Limits in ASP.NET MVC Kanban

Validate particular column using the [`MinCount`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanColumn.html#Syncfusion_EJ2_Kanban_KanbanColumn_MinCount) or [`MaxCount`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanColumn.html#Syncfusion_EJ2_Kanban_KanbanColumn_MaxCount) properties. The corresponding columns gets different appearance when validation fails. In default layout, [`ConstraintType`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_ConstraintType) property accept only `Column` type. In swimlane layout, accept both `Column` and `Swimlane` constraint type.

There are two types of constraints:

1. Column
2. Swimlane

N> By default, the column count validation is performed based on Kanban **Columns**.

## Minimum card limit

The [`MinCount`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanColumn.html#Syncfusion_EJ2_Kanban_KanbanColumn_MinCount) property is used to specify the minimum cards hold on particular column or swimlane cell. If the column or swimlane total card count falls short of the minimum count value, it shows the column or cell background color with validation fails.

## Maximum card limit

The [`MaxCount`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Kanban.KanbanColumn.html#Syncfusion_EJ2_Kanban_KanbanColumn_MaxCount) property is used to specify the maximum cards hold on particular column or swimlane cell. If the column or swimlane cell total card count exceeds the maximum count value, it shows the column or cell background color with validation fails.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/validation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/validation/datasource.cs %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/validation/controller.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/validation.PNG)
