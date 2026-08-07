---
layout: post
title: Column Spanning in Vue Gantt Chart | Syncfusion
description: Learn how to span adjacent cells in Syncfusion Vue Gantt Chart columns using column spanning feature.
keywords: vue gantt column spanning, cell spanning, colspan, column layout, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/columns/column-spanning
platform: gantt-sdk
control: Column Spanning - Gantt Chart
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column Spanning with Cell Merge Support in Vue Gantt Chart

The Gantt Chart component provides an option to span adjacent cells. To span cells, define the [colSpan](https://ej2.syncfusion.com/vue/documentation/api/gantt/queryCellInfoEventArgs#colspan) property inside the [queryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt/queryCellInfoEventArgs) event.

In the following example, the **Work 1** cells are spanned.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/columns-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/columns-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/columns-cs12" %}