---
layout: post
title: Custom Data Source in Vue Gantt Chart Component | Syncfusion
description: Learn how to configure a custom data source in the Syncfusion Vue Gantt Chart and dynamically export it using exportProperties.
control: Custom data source
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Custom data source in Vue Gantt Chart Component

The Excel export feature provides an option to define the data source dynamically before exporting. To export data with a custom data source, define the `dataSource` in the `exportProperties`.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/excel-export-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/excel-export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/excel-export-cs1" %}
