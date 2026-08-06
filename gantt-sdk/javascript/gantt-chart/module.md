---
layout: post
title: Modules in JavaScript Gantt Chart | Syncfusion
description: Learn how to enable advanced JavaScript Gantt Chart features through module injection for sorting, editing, toolbar, filtering, and export to optimize bundle size.
keywords: javascript gantt modules, feature modules, optional modules, providers, dependency injection, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/javascript/gantt-chart/module
platform: gantt-sdk
control: Modules - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Feature Modules in JavaScript Gantt Chart

The modules that are available in Gantt are as follows.

| Module | Description |
|------|-------------|
| [Sort](../api/gantt/sort)| Inject this module to use sorting feature.|
| [Filter](../api/gantt/filter)| Inject this module to use filtering feature.|
| [Reorder](https://ej2.syncfusion.com/vue/documentation/api/grid/reorder) | Inject this module to use reorder feature.|
| [ExcelExport](https://ej2.syncfusion.com/documentation/api/gantt#excelexportmodule) | Inject this module to use excel export feature.|
| [PdfExport](https://ej2.syncfusion.com/documentation/api/gantt#pdfexportmodule)| Inject this module to use PDF export feature.|
| [RowDD](../api/gantt/rowDD)| Inject this module to use row drag and drop feature.|
| `Resize`| Inject this module to use resize feature.|
| [Toolbar](../api/gantt#toolbar)| Inject this module to use toolbar feature.|
| [Edit](../api/gantt/edit)| Inject this module is use editing feature.|
| [Selection](../api/gantt/selection)| Inject this module to use selection feature.|
| [DayMarkers](../api/gantt/dayMarkers)| Inject this module to use event markers.|
| [ContextMenu](../api/gantt/contextMenu)| Inject this module to use context menu feature.|
| [ColumnMenu](../api/gantt/columnMenu)| Inject this module to use column menu feature.|
| [VirtualScroll](https://ej2.syncfusion.com/documentation/api/gantt#virtualscrollmodule)| Inject this module to use virtual scroll feature.|
| [CriticalPath](https://ej2.syncfusion.com/documentation/api/gantt#criticalpathmodule) | Inject this module to use critical path feature.|

These modules should be injected into the Gantt using the **Gantt.Inject** method.
