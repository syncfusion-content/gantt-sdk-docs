---
layout: post
title: Filter Cards in ASP.NET Core Kanban | Syncfusion
description: Learn how to filter cards in Syncfusion ASP.NET Core Kanban using queries and data source conditions with practical examples.
keywords: asp-net-core kanban filter cards, syncfusion kanban, filter query, data filtering
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/kanban/how-to/filter-cards
platform: gantt-sdk
control: Filter Cards - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filter Cards in ASP.NET Core Kanban

You can filter the collection of cards from the dataSource and display it on the Kanban board by using the [query](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Kanban.Kanban.html#Syncfusion_EJ2_Kanban_Kanban_Query) property.

In the below sample, you can filter the cards based on the ‘where’ query and display the filtered data to the Kanban board.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/how-to/filter-cards/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/how-to/filter-cards/datasource.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](../images/filter-cards.PNG)
