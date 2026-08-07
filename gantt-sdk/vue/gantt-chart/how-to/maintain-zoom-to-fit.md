---
layout: post
title: Maintain Zoom To Fit in Vue Gantt Chart | Syncfusion
description: Learn how to maintain zoom to fit state after edit actions in Syncfusion Vue Gantt Chart.
keywords: vue gantt zoom to fit, maintain zoom, zooming, timeline zoom, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/how-to/maintain-zoom-to-fit
platform: gantt-sdk
control: Maintain Zoom To Fit - Gantt Chart
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Maintaining Zoom-to-Fit Behavior in Vue Gantt Chart

In the Gantt Chart, while performing edit actions or dynamically changing the dataSource, the timeline gets refreshed. When the zoomToFit toolbar item is clicked and you perform editing actions or dynamically change the dataSource, the timeline gets refreshed. So, the timeline will not fit the project anymore.

## Maintain zoomToFit after edit actions

We can maintain `zoomToFit` after editing actions (cell edit, dialog edit, taskbar edit) by using the [fitToProject](https://ej2.syncfusion.com/vue/documentation/api/gantt#fittoproject) method in the `actionComplete` and `taskbarEdited` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/how-to/maintainzoomtofit-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/how-to/maintainzoomtofit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/how-to/maintainzoomtofit-cs1" %}

## Maintain zoomToFit after changing dataSource dynamically

We can maintain `zoomToFit` after changing the dataSource dynamically by calling the [fitToProject](https://ej2.syncfusion.com/vue/documentation/api/gantt#fittoproject) method in the dataBound event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/how-to/maintainzoomtofitdatasource-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/how-to/maintainzoomtofitdatasource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/how-to/maintainzoomtofitdatasource-cs1" %}