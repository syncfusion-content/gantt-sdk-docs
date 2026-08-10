---
layout: post
title: Filter Menu in Vue Gantt Chart | Syncfusion
description: Learn how to use filter menu in Syncfusion Vue Gantt Chart for column-wise filtering with different operators.
keywords: vue gantt filter menu, column filter, filter operators, menu filtering, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/filtering/filter-menu
platform: gantt-sdk
control: Filter Menu - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Using Filter Menu for Data Filtering in Vue Gantt Chart

The Gantt Chart component provides menu filtering support for each column. You can enable the filter menu by setting the [allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowfiltering) property to `true`.

The filter menu UI is rendered based on the column type, allowing you to filter records using different operators.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/filtering-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/filtering-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/filtering-cs2" %}

> To enable the filter menu, set [allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowfiltering) to `true`.  
> Setting [columns.allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#allowfiltering) to `false` will prevent the filter menu from rendering for that specific column.
