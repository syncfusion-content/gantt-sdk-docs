---
layout: post
title: Indent And Outdent in Vue Gantt Chart Component | Syncfusion
description: Learn here all about indent and outdent in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: In dent and out dent 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Indent And Outdent in Vue Gantt Chart Component

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