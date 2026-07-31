---
layout: post
title: Filter Menu in Vue Gantt Chart Component | Syncfusion
description: Learn all about the Filter Menu feature in the Syncfusion Vue Gantt Chart component of Essential JS 2.
control: Filter menu
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Filter Menu in Vue Gantt Chart Component

The Gantt Chart component provides menu filtering support for each column. You can enable the filter menu by setting the [allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowfiltering) property to `true`.

The filter menu UI is rendered based on the column type, allowing you to filter records using different operators.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/filtering-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/filtering-cs2" %}

> To enable the filter menu, set [allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowfiltering) to `true`.  
> Setting [columns.allowFiltering](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#allowfiltering) to `false` will prevent the filter menu from rendering for that specific column.
