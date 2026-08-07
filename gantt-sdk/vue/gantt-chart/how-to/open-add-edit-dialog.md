---
layout: post
title: Open Add Edit Dialog in Vue Gantt Chart | Syncfusion
description: Learn how to programmatically open add and edit dialogs in Syncfusion Vue Gantt Chart.
keywords: vue gantt add edit dialog, open dialog, add dialog, edit dialog, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/how-to/open-add-edit-dialog
platform: gantt-sdk
control: Open Add Edit Dialog - Gantt Chart
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Opening Add and Edit Dialogs Programmatically in Vue Gantt Chart

In the Gantt Chart component, add and edit dialogs can be opened dynamically by using [openAddDialog](https://ej2.syncfusion.com/vue/documentation/api/gantt#openadddialog) and [openEditDialog](https://ej2.syncfusion.com/vue/documentation/api/gantt#openeditdialog) methods. The following code example shows how to open add and edit dialog on separate button click actions.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/how-to/open-add-edit-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/how-to/open-add-edit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/how-to/open-add-edit-cs1" %}

> NOTE: You should select any one of the rows in the Gantt Chart to open the edit dialog.