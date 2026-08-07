---
layout: post
title: Immutable Mode in Vue Gantt Chart | Syncfusion
description: Learn about immutable mode in Syncfusion Vue Gantt Chart for optimized re-rendering performance and efficient state management.
keywords: vue gantt immutable mode, performance optimization, re-rendering, object reference, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/immutable
platform: gantt-sdk
control: Immutable Mode - Gantt Chart
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Performance Optimization with Immutable Mode in Vue Gantt Chart

The immutable mode optimizes the Gantt re-rendering performance by using the object reference and [deep compare](https://dmitripavlutin.com/how-to-compare-objects-in-javascript#4-deep-equality) concept. When performing the Gantt actions, it will only re-render the modified or newly added rows and prevent the re-rendering of the unchanged rows.

To enable this feature, you have to set the [enableImmutableMode](https://ej2.syncfusion.com/vue/documentation/api/gantt#enableimmutablemode) property as **true**.

> This feature uses the primary key value for data comparison. So, you need to provide the [isPrimaryKey](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#isprimarykey) column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/immutable-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/immutable-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/immutable-cs1" %}
## Limitations

The following features are not supported in the immutable mode:

* Column reorder
* Virtualization