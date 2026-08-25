---
layout: post
title: Filter Cards in ASP.NET MVC Kanban | Syncfusion
description: Learn how to filter cards in Syncfusion ASP.NET MVC Kanban using queries and data source conditions with practical examples.
keywords: asp-net-mvc kanban filter cards, syncfusion kanban, filter query, data filtering
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-mvc/kanban/how-to/filter-cards
platform: gantt-sdk
control: Filter Cards - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filter Cards in ASP.NET MVC Kanban

You can filter the collection of cards from the dataSource and display it on the Kanban board by using the [`query`](../../api/kanban#query) property.

In the below sample, you can filter the cards based on the ‘where’ query and display the filtered data to the Kanban board.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/cards/filter-cards/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-mvc/kanban/cards/filter-cards/datasource.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](../images/filter-cards.PNG)
