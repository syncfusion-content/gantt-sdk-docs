---
layout: post
title: Persistence in Vue Kanban component | Syncfusion
description: Learn here all about Persistence in Syncfusion Vue Kanban component of Syncfusion Essential JS 2 and more.
control: Persistence 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Persistence in Vue Kanban component

State persistence refers to the Kanban state maintained in the browser's [`localStorage`](https://www.w3schools.com/html/html5_webstorage.asp#) even if the browser is refreshed or if you move to the next page within the browser.

State persistence stores Kanban datasource, column and swimlane expand/collapse state in the local storage when the [`enablePersistence`](https://ej2.syncfusion.com/vue/documentation/api/kanban/#enablepersistence) is defined as true.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/kanban/persistence-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/kanban/persistence-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/kanban/persistence-cs1" %}