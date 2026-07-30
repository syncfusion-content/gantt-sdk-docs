---
layout: post
title: Dynamically change columns in Vue Kanban component | Syncfusion
description: Learn here all about Dynamically change columns in Syncfusion Vue Kanban component of Syncfusion Essential JS 2 and more.
control: Dynamically change columns 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Dynamically change columns in Vue Kanban component

You can dynamically change the Kanban columns by using the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/kanban/#columns) property.

In the below sample, you can dynamically change the [`allowToggle`](https://ej2.syncfusion.com/vue/documentation/api/kanban/columnsModel/#allowtoggle) property at the particular column when you click on the button. You can also change the initially created columns to the new Kanban columns by using the [`columns`](https://ej2.syncfusion.com/vue/documentation/api/kanban/#columns) property when you click on the button.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/kanban/card-header-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/kanban/card-header-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/kanban/card-header-cs2" %}