---
layout: post
title: Filter Cards in Angular Kanban | Syncfusion
description: Learn how to filter cards in Syncfusion Angular Kanban using queries and data source conditions with practical examples.
keywords: angular kanban filter cards, syncfusion kanban, card filtering, filter query
canonical: https://help.syncfusion.com/gantt-sdk/angular/kanban/how-to/filter-cards
platform: gantt-sdk
control: Filter Cards - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filter Cards in Angular Kanban

You can filter the collection of cards from the dataSource and display it on the Kanban board by using the [query](https://ej2.syncfusion.com/angular/documentation/api/kanban#query) property.

In the below sample, you can filter the cards based on the `where` query and display the filtered data to the Kanban board.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/filter-cards-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/filter-cards-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/gantt-sdk/angular/kanban/filter-cards-cs1" %}
