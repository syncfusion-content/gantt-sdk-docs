---
layout: post
title: Drag and Drop from Another in Vue Gantt Chart Component | Syncfusion
description: Learn here all about drag and drop from another component in the Syncfusion Vue Gantt Chart component of Essential JS 2 and more.
control: Drag and drop from another
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Drag and drop from another in Vue Gantt Chart Component

In the Gantt Chart, it is possible to drag a record from another component and drop it into the Gantt Chart while updating the Gantt record. Here, an item is dragged from the `TreeView` component to the Gantt Chart, and that item is updated as a resource for the Gantt record. We can achieve this by using the [nodeDragStop](https://ej2.syncfusion.com/vue/documentation/api/treeview#nodedragstop) event of the `TreeView` control.

To learn about Gantt Chart Drag and Drop, you can check on this video:
{% youtube "https://www.youtube.com/watch?v=NeObMFJEhGU" %}

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/how-to/draganddrop-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/how-to/draganddrop-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/how-to/draganddrop-cs1" %}

The following screenshot shows dropping a record from another component into the Gantt Chart, and **Rose Fuller** is added as a resource for the task **Develop floor plan estimation**.

![Dropping Record](../images/dropping.png)
