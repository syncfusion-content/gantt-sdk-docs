---
layout: post
title: Search Cards in React Kanban | Syncfusion
description: Learn how to search cards in Syncfusion React Kanban using queries and external input with practical examples and configuration guidance.
keywords: react kanban search cards, syncfusion kanban, search query, card search
canonical: https://help.syncfusion.com/gantt-sdk/react/kanban/how-to/search-cards
platform: gantt-sdk
control: Search Cards - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Search Cards in React Kanban

The Kanban component enables searching cards in the `dataSource`. You can search the cards in Kanban by using the [query](https://ej2.syncfusion.com/react/documentation/api/kanban/#query) property.

In the following sample, the searching operation starts as soon as you start typing characters in the external text box. It will search the cards based on the `Id` and `Summary` using the `search` query with `contains` operator.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/auto-cs9" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs10/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs10/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt-sdk/react/kanban/auto-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/react/kanban/auto-cs10" %}