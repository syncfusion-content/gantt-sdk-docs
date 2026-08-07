---
layout: post
title: Data Markers in Vue Gantt Chart | Syncfusion
description: Learn how to configure data markers in Syncfusion Vue Gantt Chart to display schedule events and milestones for tasks.
keywords: vue gantt data markers, schedule events, indicators, milestones, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/data-markers
platform: gantt-sdk
control: Data Markers - Gantt Chart
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Task Markers and Milestones with Data Markers in Vue Gantt Chart

Data markers are a set of events used to represent the schedule events for a task. Data markers are defined in data source as array of objects, and this value is mapped to the Gantt control using the [taskFields.indicators](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields#indicators) property. You can represent more than one data marker in a task.

Data markers can be defined using the following properties:

* [date](https://ej2.syncfusion.com/vue/documentation/api/gantt/iIndicator#date): Defines the date of indicator.
* [iconClass](https://ej2.syncfusion.com/vue/documentation/api/gantt/iIndicator#iconclass): Defines the icon class of indicator.
* [name](https://ej2.syncfusion.com/vue/documentation/api/gantt/iIndicator#name): Defines the name of indicator.
* [tooltip](https://ej2.syncfusion.com/vue/documentation/api/gantt/iIndicator#tooltip): Defines the tooltip of indicator.

>Note: Data Marker `tooltip` will be rendered only if tooltip property has value.

The following code example demonstrates how to implement data markers in the Gantt chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/data-markers-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/data-markers-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/data-markers-cs1" %}
