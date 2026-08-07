---
layout: post
title: Modules in Vue Gantt Chart | Syncfusion
description: Learn about available modules in Syncfusion Vue Gantt Chart for feature injection and component customization.
keywords: vue gantt modules, feature injection, module configuration, gantt features, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/vue/gantt-chart/module
platform: gantt-sdk
control: Modules - Gantt Chart
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Feature Modules with Dependency Injection in Vue Gantt Chart

The modules that are available in Gantt are as follows.

| Module | Description |
|------|-------------|
| [Sort](https://ej2.syncfusion.com/vue/documentation/api/gantt/sort)| Inject this module to use sorting feature.|
| [Filter](https://ej2.syncfusion.com/vue/documentation/api/gantt/filter)| Inject this module to use filtering feature.|
| `Reorder` | Inject this module to use reorder feature.|
| `ExcelExport` | Inject this module to use excel export feature.|
| `PdfExport`| Inject this module to use PDF export feature.|
| [RowDD](https://ej2.syncfusion.com/vue/documentation/api/gantt/rowDD)| Inject this module to use row drag and drop feature.|
| `Resize`| Inject this module to use resize feature.|
| [Toolbar](https://ej2.syncfusion.com/vue/documentation/api/gantt#toolbar)| Inject this module to use toolbar feature.|
| [Edit](https://ej2.syncfusion.com/vue/documentation/api/gantt/edit)| Inject this module is use editing feature.|
| [Selection](https://ej2.syncfusion.com/vue/documentation/api/gantt/selection)| Inject this module to use selection feature.|
| [DayMarkers](https://ej2.syncfusion.com/vue/documentation/api/gantt/dayMarkers)| Inject this module to use event markers.|
| [ContextMenu](https://ej2.syncfusion.com/vue/documentation/api/gantt/contextmenu)| Inject this module to use context menu feature.|
| `ColumnMenu`| Inject this module to use column menu feature.|
| `VirtualScroll`| Inject this module to use virtual scroll feature.|
| `CriticalPath` | Inject this module to use critical path feature.|

These modules should be injected into the Gantt using the **Gantt.Inject** method.
