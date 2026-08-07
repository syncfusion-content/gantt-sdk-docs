---
layout: post
title: Custom Field in Vue Gantt Chart | Syncfusion
description: Learn how to add custom fields to Syncfusion Vue Gantt Chart add/edit dialogs, customize dialog rendering, and handle events to display and manage field values.
keywords: vue gantt custom field, custom column, add custom field, custom dialog, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/how-to/custom-field
platform: gantt-sdk
control: Custom Field - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Adding Custom Fields to Edit Dialogs in Vue Gantt Chart

Generally, in the Gantt Chart, custom fields are displayed in the Custom tab of the Add/Edit dialogs. However, they can be included in the General tab of the Add/Edit dialog box using the `actionBegin` and `actionComplete` events. These events are used to append the custom field to the dialog box. The following code snippets demonstrate the solution.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/how-to/customfields-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/how-to/customfields-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/how-to/customfields-cs1" %}
