---
layout: post
title: Eventmarkers in Vue Gantt Chart component | Syncfusion
description: Learn here all about Eventmarkers in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Eventmarkers 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Event markers in Vue Gantt Chart component

The event markers in the Gantt Chart component is used to highlight the important events in a project. Event markers can be initialized by using the [eventMarkers](https://ej2.syncfusion.com/vue/documentation/api/gantt#eventmarkers) property, and you can define date and label for the event markers using the [day](https://ej2.syncfusion.com/vue/documentation/api/gantt/eventMarker#day) and [label](https://ej2.syncfusion.com/vue/documentation/api/gantt/eventMarker#label) properties. You can also customize it using the [cssClass](https://ej2.syncfusion.com/vue/documentation/api/gantt/eventMarker#cssclass) properties. The following code example shows how to add event markers in the Gantt Chart component.

To highlight the days, inject the [DayMarkers](https://ej2.syncfusion.com/vue/documentation/api/gantt#daymarkersmodule) module in the `provide` section.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/eventmarkers-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/eventmarkers-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/eventmarkers-cs1" %}