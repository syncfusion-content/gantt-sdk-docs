---
layout: post
title: Filter cards in Vue Kanban component | Syncfusion
description: Learn here all about Filter cards in Syncfusion Vue Kanban component of Syncfusion Essential JS 2 and more.
control: Filter cards 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filter cards in Vue Kanban component

You can filter the collection of cards from the dataSource and display it on the Kanban board by using the [`query`](https://ej2.syncfusion.com/vue/documentation/api/kanban/#query) property.

To learn about Kanban filtering cards, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=e_8lVApB19s" %}

In the below sample, you can filter the cards based on the ‘where’ query and display the filtered data to the Kanban board.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/kanban/card-header-cs3/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/kanban/card-header-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/kanban/card-header-cs3" %}