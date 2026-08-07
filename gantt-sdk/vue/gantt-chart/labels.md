---
layout: post
title: Task Labels in Vue Gantt Chart | Syncfusion
description: Learn how to configure and customize task labels in Syncfusion Vue Gantt Chart to display task information and custom templates.
keywords: vue gantt task labels, label settings, left label, right label, task label template, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/labels
platform: gantt-sdk
control: Task Labels - Gantt Chart
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Task Label Positions and Template Support in Vue Gantt Chart

## Task labels

The Gantt Chart component maps any data source fields to task labels using the [labelSettings.leftLabel](https://ej2.syncfusion.com/vue/documentation/api/gantt/labelSettings#leftlabel), [labelSettings.rightLabel](https://ej2.syncfusion.com/vue/documentation/api/gantt/labelSettings#rightlabel), and [labelSettings.taskLabel](https://ej2.syncfusion.com/vue/documentation/api/gantt/labelSettings#tasklabel) properties. You can customize the task labels with templates.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/appearance-customization-cs4" %}