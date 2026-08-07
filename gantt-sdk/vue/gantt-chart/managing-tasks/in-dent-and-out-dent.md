---
layout: post
title: Indent and Outdent in Vue Gantt Chart | Syncfusion
description: Learn how to indent and outdent tasks in Syncfusion Vue Gantt Chart to organize task hierarchy.
keywords: vue gantt indent outdent, task hierarchy, task level, hierarchical order, task organization, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/managing-tasks/indent-and-outdent
platform: gantt-sdk
control: Indent and Outdent - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Indent and Outdent in Vue Gantt Chart

Indent and Outdent of a task are used to update the level of the task in hierarchical order of the task. It can be performed by enabling the [editSettings.allowEditing](https://ej2.syncfusion.com/vue/documentation/api/gantt/editSettings#allowediting) property.

`Indent` - Selected task can be indented to the level of the task in the hierarchical order. It can be performed by using in-built context menu or toolbar items. It can also be invoked by using the `indent` method dynamically on any action like external button click. The following code example shows how to enable indent option in the Gantt Chart.

`Outdent` - Selected task can be outdented from the hierarchical order. It can be performed by using in-built context menu or toolbar items. It can also be invoked by using the `outdent` method dynamically on any action like external button click. The following code example shows how to enable outdent option in the Gantt Chart.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs10/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs10/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/managing-tasks-cs10" %}
