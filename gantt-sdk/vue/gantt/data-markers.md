---
layout: post
title: Data markers in Vue Gantt Chart component | Syncfusion
description: Learn here all about Data markers in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Data markers
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Data markers in Vue Gantt Chart component

Data markers are a set of events used to represent the schedule events for a task. Data markers are defined in data source as array of objects, and this value is mapped to the Gantt control using the [taskFields.indicators](https://ej2.syncfusion.com/vue/documentation/api/gantt/taskFields#indicators) property. You can represent more than one data marker in a task.

Data markers can be defined using the following properties:

- [date](https://ej2.syncfusion.com/vue/documentation/api/gantt/iIndicator#date): Defines the date of indicator.
- [iconClass](https://ej2.syncfusion.com/vue/documentation/api/gantt/iIndicator#iconclass): Defines the icon class of indicator.
- [name](https://ej2.syncfusion.com/vue/documentation/api/gantt/iIndicator#name): Defines the name of indicator.
- [tooltip](https://ej2.syncfusion.com/vue/documentation/api/gantt/iIndicator#tooltip): Defines the tooltip of indicator.

> Note: Data Marker `tooltip` will be rendered only if tooltip property has value.

The following code example demonstrates how to implement data markers in the Gantt chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/data-markers-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/data-markers-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/data-markers-cs1" %}
