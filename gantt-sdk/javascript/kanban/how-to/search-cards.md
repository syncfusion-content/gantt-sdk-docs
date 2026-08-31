---
layout: post
title: Search Cards in JavaScript Kanban | Syncfusion
description: Learn how to search cards in Syncfusion JavaScript Kanban using queries and external input with practical examples and configuration guidance.
keywords: javascript kanban search cards, syncfusion kanban, search query, card search
canonical: https://help.syncfusion.com/gantt-sdk/javascript/kanban/how-to/search-cards
platform: gantt-sdk
control: Search Cards - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Search Cards in JavaScript Kanban

You can search the cards in Kanban by using the `query` property.

In the following sample, the searching operation starts as soon as you start typing characters in the external text box. It will search the cards based on the `Id` and `Summary` using the `search` query with `contains` operator.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/gantt-sdk/javascript/kanban/search-cards-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/javascript/kanban/search-cards-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/javascript/kanban/search-cards-cs1" %}

