---
layout: post
title: Header double click in Vue Kanban component | Syncfusion
description: Learn here all about Header double click in Syncfusion Vue Kanban component of Syncfusion Essential JS 2 and more.
control: Header double click 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Header double click in Vue Kanban component

You can bind the header double click event by using the [`dataBound`](https://ej2.syncfusion.com/vue/documentation/api/kanban/#dataBound) event at the initial rendering. You can get the column header text when you double click on the headers.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/kanban/card-header-cs4/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/kanban/card-header-cs4/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/kanban/card-header-cs4" %}