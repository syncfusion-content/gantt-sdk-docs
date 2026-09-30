---
layout: post
title: State Persistence in Angular Kanban | Syncfusion
description: Learn how to enable state persistence in Syncfusion Angular Kanban to retain board state across page reloads and sessions.
keywords: angular kanban persistence, syncfusion kanban, state persistence, local storage
canonical: https://help.syncfusion.com/gantt-sdk/angular/kanban/persistence
platform: gantt-sdk
control: Persistence - Kanban
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# State Persistence in Angular Kanban

State persistence refers to the Kanban state maintained in the browser's [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) even if the browser is refreshed or if you move to the next page within the browser.

State persistence stores Kanban datasource, column and swimlane expand/collapse state in the local storage when the [`enablePersistence`](https://ej2.syncfusion.com/angular/documentation/api/kanban#enablepersistence) is defined as true.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/persistence-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt-sdk/angular/kanban/persistence-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/gantt-sdk/angular/kanban/persistence-cs1" %}
