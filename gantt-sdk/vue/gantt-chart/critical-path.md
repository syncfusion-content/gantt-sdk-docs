---
layout: post
title: Critical Path in Vue Gantt Chart | Syncfusion
description: Learn about critical path feature in Syncfusion Vue Gantt Chart to identify and track critical tasks affecting project completion.
keywords: vue gantt critical path, task dependencies, project duration, delay impact, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/critical-path
platform: gantt-sdk
control: Critical Path - Gantt Chart
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Critical Path Identification in Vue Gantt Chart

The critical path in a project is indicated by a single task or a series of tasks. If a task in critical path is delayed, the entire project will be delayed. A task is considered to be critical if any delay to this task would affect the project end date.

The critical path can be enabled in Gantt by using the built-in toolbar button or [enableCriticalPath](https://ej2.syncfusion.com/vue/documentation/api/gantt#enablecriticalpath) property.

The following code example shows how to display the critical path in the Gantt Chart component:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/criticalpath-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/criticalpath-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/criticalpath-cs1" %}

## Customize taskbar in critical path

The taskbar in critical path can be customized by using [queryTaskbarInfo](https://ej2.syncfusion.com/vue/documentation/api/gantt#querytaskbarinfo) event and [isCritical](https://ej2.syncfusion.com/vue/documentation/api/gantt/iGanttData#iscritical) property of row [data](https://ej2.syncfusion.com/vue/documentation/api/gantt/iQueryTaskbarInfoEventArgs#data) in the event argument.

The following code example shows how to customize the critical path taskbar in the Gantt Chart component:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/customizeCriticalPath-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/customizeCriticalPath-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/customizeCriticalPath-cs1" %}
