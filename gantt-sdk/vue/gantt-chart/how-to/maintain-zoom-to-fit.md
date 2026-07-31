---
layout: post
title: Maintain Zoom To Fit In Vue Gantt Chart Component | Syncfusion
description: Learn here all about Maintain zoom to fit in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Maintain zoom to fit
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Maintain Zoom To Fit In Vue Gantt Chart Component

In the Gantt Chart, while performing edit actions or dynamically changing the dataSource, the timeline gets refreshed. When the zoomToFit toolbar item is clicked and you perform editing actions or dynamically change the dataSource, the timeline gets refreshed. So, the timeline will not fit the project anymore.

## Maintain zoomToFit after edit actions

We can maintain `zoomToFit` after editing actions (cell edit, dialog edit, taskbar edit) by using the [fitToProject](https://ej2.syncfusion.com/vue/documentation/api/gantt#fittoproject) method in the `actionComplete` and `taskbarEdited` event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/how-to/maintainzoomtofit-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/how-to/maintainzoomtofit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/how-to/maintainzoomtofit-cs1" %}

## Maintain zoomToFit after changing dataSource dynamically

We can maintain `zoomToFit` after changing the dataSource dynamically by calling the [fitToProject](https://ej2.syncfusion.com/vue/documentation/api/gantt#fittoproject) method in the dataBound event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/how-to/maintainzoomtofitdatasource-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/how-to/maintainzoomtofitdatasource-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/how-to/maintainzoomtofitdatasource-cs1" %}
