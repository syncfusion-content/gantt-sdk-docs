---
layout: post
title: Drag and Drop from Another Component in Vue Gantt Chart | Syncfusion
description: Learn how to drag and drop records from another component into Syncfusion Vue Gantt Chart.
keywords: vue gantt drag drop, drag from another component, inter-component drag, drag and drop, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/how-to/drag-and-drop-from-another
platform: gantt-sdk
control: Drag and Drop from Another - Gantt Chart
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Drag and Drop from Another Component in Vue Gantt Chart

In the Gantt Chart, it is possible to drag a record from another component and drop it into the Gantt Chart while updating the Gantt record. Here, an item is dragged from the `TreeView` component to the Gantt Chart, and that item is updated as a resource for the Gantt record. We can achieve this by using the [nodeDragStop](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodedragstop) event of the `TreeView` control.

To learn about Gantt Chart Drag and Drop, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=NeObMFJEhGU" %}

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/how-to/draganddrop-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/how-to/draganddrop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/how-to/draganddrop-cs1" %}

The following screenshot shows dropping a record from another component into the Gantt Chart, and **Rose Fuller** is added as a resource for the task **Develop floor plan estimation**.

![Dropping Record](../images/dropping.png)
