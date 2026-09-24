---
layout: post
title: Filter Cards in TypeScript Kanban | Syncfusion
description: Learn how to filter cards in Syncfusion TypeScript Kanban using queries and data source conditions with practical examples.
keywords: typescript kanban filter cards, syncfusion kanban, filter query, data filtering
canonical: https://help.syncfusion.com/gantt-sdk/typescript/kanban/how-to/filter-cards
platform: gantt-sdk
control: Filter Cards - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filter cards in TypeScript Kanban

You can filter the collection of cards from the dataSource and display it on the Kanban board by using the [`query`](https://ej2.syncfusion.com/documentation/api/kanban#query) property.

In the below sample, you can filter the cards based on the ‘where’ query and display the filtered data to the Kanban board.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/gantt-sdk/typescript/kanban/filter-cards-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/typescript/kanban/filter-cards-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/typescript/kanban/filter-cards-cs1" %}

