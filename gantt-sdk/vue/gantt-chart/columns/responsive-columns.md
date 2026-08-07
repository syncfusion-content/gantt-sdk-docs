---
layout: post
title: Responsive Columns in Vue Gantt Chart | Syncfusion
description: Learn how to configure responsive columns in Syncfusion Vue Gantt Chart with media queries for adaptive layouts.
keywords: vue gantt responsive columns, media queries, column visibility, responsive design, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/columns/responsive-columns
platform: gantt-sdk
control: Responsive Columns - Gantt Chart
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Responsive Columns in Vue Gantt Chart

You can toggle column visibility based on media queries using the [hideAtMedia](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#hideatmedia) property. The [hideAtMedia](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#hideatmedia) property accepts valid [CSS Media Queries](http://cssmediaqueries.com/what-are-css-media-queries.html), allowing columns to be hidden dynamically depending on the device size or viewport width.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/columns-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/columns-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/columns-cs18" %}
