---
layout: post
title: Search Cards in ASP.NET Core Kanban | Syncfusion
description: Learn how to search cards in Syncfusion ASP.NET Core Kanban using queries and external input with practical examples and configuration guidance.
keywords: asp-net-core kanban search cards, syncfusion kanban, search query, card search
canonical: https://help.syncfusion.com/gantt-sdk/asp-net-core/kanban/how-to/search-cards
platform: gantt-sdk
control: Search Cards - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Search Cards in ASP.NET Core Kanban

You can search the cards in Kanban by using the `query` property.

In the following sample, the searching operation starts as soon as you start typing characters in the external text box. It will search the cards based on the `Id` and `Summary` using the `search` query with `contains` operator.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/how-to/search-cards/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Datasource.cs" %}
{% include code-snippet/gantt-sdk/asp-net-core/kanban/how-to/search-cards/datasource.cs %}
{% endhighlight %}
{% endtabs %}

Output be like the below.

![kanban](../images/search-cards.PNG)
