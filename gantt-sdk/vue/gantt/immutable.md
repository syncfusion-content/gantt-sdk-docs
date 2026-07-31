---
layout: post
title: Immutable in Vue Gantt Chart component | Syncfusion
description: Learn here all about Immutable in Syncfusion Vue Gantt Chart component of Syncfusion Essential JS 2 and more.
control: Immutable
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Immutable in Vue Gantt Chart component

The immutable mode optimizes the Gantt re-rendering performance by using the object reference and [deep compare](https://dmitripavlutin.com/how-to-compare-objects-in-javascript#4-deep-equality) concept. When performing the Gantt actions, it will only re-render the modified or newly added rows and prevent the re-rendering of the unchanged rows.

To enable this feature, you have to set the [enableImmutableMode](https://ej2.syncfusion.com/vue/documentation/api/gantt#enableimmutablemode) property as **true**.

> This feature uses the primary key value for data comparison. So, you need to provide the [isPrimaryKey](https://ej2.syncfusion.com/vue/documentation/api/gantt/column#isprimarykey) column.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/immutable-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt/immutable-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt/immutable-cs1" %}

## Limitations

The following features are not supported in the immutable mode:

- Column reorder
- Virtualization
