---
layout: post
title: Excel Export in Vue Gantt Chart | Syncfusion
description: Learn how to export Vue Gantt Chart data to Excel and CSV formats using client-side exporting.
keywords: vue gantt excel export, csv export, export data, excel format, client-side export, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/excel-export/excel-export
platform: gantt-sdk
control: Excel Export - Gantt Chart
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Exporting Data to Excel in Vue Gantt Chart

The Gantt Chart component supports client‑side exporting, allowing you to export its data to Excel and CSV formats. Use the [excelExport](https://ej2.syncfusion.com/vue/documentation/api/gantt#excelexport) and [csvExport](https://ej2.syncfusion.com/vue/documentation/api/gantt#csvexport) methods to perform exporting. To enable Excel export, set the [allowExcelExport](https://ej2.syncfusion.com/vue/documentation/api/gantt#allowexcelexport) property to `true`.

To learn how to configure Excel export in the Gantt Chart component, you can follow the steps explained in this video:
{% youtube "https://www.youtube.com/watch?v=UOx3TGsL48c" %}

To export data to Excel or CSV, you must inject the `ExcelExport` module in the Gantt Chart component.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/gantt-sdk/vue/gantt-chart/excel-export-cs2" %}
