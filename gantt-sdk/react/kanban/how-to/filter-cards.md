---
layout: post
title: Filter Cards in React Kanban | Syncfusion
description: Learn how to filter cards in Syncfusion React Kanban using queries and data source conditions with practical examples.
keywords: react kanban filter cards, syncfusion kanban, filter query, data filtering
canonical: https://help.syncfusion.com/gantt-sdk/react/kanban/how-to/filter-cards
platform: gantt-sdk
control: Filter Cards - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filter Cards in React Kanban

You can filter the collection of cards from the dataSource and display it on the Kanban board by using the [query](https://ej2.syncfusion.com/react/documentation/api/kanban/#query) property.

In the below sample, you can filter the cards based on the ‘where’ query and display the filtered data to the Kanban board.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/auto-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/auto-cs6" %}