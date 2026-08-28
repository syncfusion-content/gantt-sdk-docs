---
layout: post
title: Validation in ASP.NET Core Kanban | Syncfusion
description: Learn how to implement data validation and constraints in Syncfusion ASP.NET Core Kanban for data integrity.
keywords: asp-net-core kanban validation, syncfusion kanban, data validation, constraints
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/kanban/validation
platform: gantt-sdk
control: WIP Validation - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# WIP Validation and Work-in-Progress Limits in ASP.NET Core Kanban

Validate particular column using the [`minCount`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Kanban.KanbanColumn.html#Syncfusion_EJ2_Kanban_KanbanColumn_MinCount) or [`maxCount`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Kanban.KanbanColumn.html#Syncfusion_EJ2_Kanban_KanbanColumn_MaxCount) properties. The corresponding columns gets different appearance when validation fails. In default layout, [`constraintType`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_ConstraintType) property accept only `column` type. In swimlane layout, accept both `column` and `swimlane` constraint type.

There are two types of constraints:

1. Column
2. Swimlane

N> By default, the column count validation is performed based on Kanban **Columns**.

## Minimum card limit

The [`minCount`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Kanban.KanbanColumn.html#Syncfusion_EJ2_Kanban_KanbanColumn_MinCount) property is used to specify the minimum cards hold on particular column or swimlane cell. If the column or swimlane total card count falls short of the minimum count value, it shows the column or cell background color with validation fails.

## Maximum card limit

The [`maxCount`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Kanban.KanbanColumn.html#Syncfusion_EJ2_Kanban_KanbanColumn_MaxCount) property is used to specify the maximum cards hold on particular column or swimlane cell. If the column or swimlane cell total card count exceeds the maximum count value, it shows the column or cell background color with validation fails.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/validation/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/validation/datasource.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](./images/validation.PNG)
