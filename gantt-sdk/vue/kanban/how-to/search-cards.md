---
layout: post
title: Search cards in Vue Kanban component | Syncfusion
description: Learn here all about Search cards in Syncfusion Vue Kanban component of Syncfusion Essential JS 2 and more.
control: Search cards 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Search cards in Vue Kanban component

You can search the cards in Kanban by using the `query` property.

To learn about Kanban searching cards, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=e_8lVApB19s" %}

In the following sample, the searching operation starts as soon as you start typing characters in the external text box. It will search the cards based on the `Id` and `Summary` using the `search` query with `contains` operator.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/kanban/card-header-cs5/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/kanban/card-header-cs5/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/kanban/card-header-cs5" %}