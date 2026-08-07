---
layout: post
title: Custom Data Source in Excel Export in Vue Gantt Chart | Syncfusion
description: Learn how to configure custom data source in Excel export for Vue Gantt Chart using exportProperties.
keywords: vue gantt custom data source, export properties, dynamic data source, excel export, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/excel-export/custom-data-source
platform: gantt-sdk
control: Custom Data Source - Gantt Chart
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Configuring Advanced Excel Export Options in Vue Gantt Chart

The Excel export feature provides an option to define the data source dynamically before exporting. To export data with a custom data source, define the `dataSource` in the `exportProperties`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs1" %}