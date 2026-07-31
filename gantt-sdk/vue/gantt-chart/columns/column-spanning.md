---
layout: post
title: Column spanning in Vue Gantt Chart Component | Syncfusion
description: Learn all about column spanning in the Syncfusion Vue Gantt Chart Component of Essential JS 2 and more.
control: Column spanning
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Column spanning in Vue Gantt Chart Component

The Gantt Chart component provides an option to span adjacent cells. To span cells, define the [colSpan](https://ej2.syncfusion.com/vue/documentation/api/gantt/queryCellInfoEventArgs#colspan) property inside the [queryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt/queryCellInfoEventArgs) event.

In the following example, the **Work 1** cells are spanned.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/columns-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/columns-cs12" %}
