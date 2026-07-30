---
layout: post
title: Ej1 api migration in TypeScript Kanban control | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion TypeScript Kanban control of Syncfusion Essential JS 2 and more.
platform: gantt-sdk
control: Ej1 api migration 
publishingplatform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Ej1 api migration in TypeScript Kanban control

This article describes the API migration process of Kanban component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Columns

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property** : *columns*</br></br> var kanbanObj = new </br>ej.Kanban($("#Kanban"), </br> { columns : [] }); | **Property** : *columns*</br></br> let obj: Kanban = new</br> Kanban({ columns : [] }) </br> obj.appendTo("#Kanban"); |
| Header Text | **Property** : *headerText* </br> </br> var kanbanObj = new </br>ej.Kanban($("#Kanban"), </br>{ columns: [{ </br>headerText : "Backlog"}]</br> }); | **Property** : *headerText* </br> </br> let obj: Kanban = new </br>Kanban({ columns: [{ </br>headerText : "Backlog"}] </br>}); </br>obj.appendTo("#Kanban"); |
| Key Field | **Property** : *key* </br></br> var kanbanObj = new </br>ej.Kanban($("#Kanban"), </br>{ columns: [{</br> key : "Open"</br>}]}); | **Property**: *keyField* </br></br>let obj: Kanban = new </br>Kanban({ columns: [{</br> keyField : "Open" </br>}] });</br> obj.appendTo("#Kanban"); |
| Initial Collapsed</br>Columns | **Property**: *isCollapsed*</br></br> var kanbanObj = new </br>ej.Kanban($("#Kanban"),</br> { columns: [{</br>headerText: "Backlog", </br>key: "Open", </br>isCollapsed : true</br>}]}); | **Property**: *isExpanded* </br></br>let obj: Kanban = new </br>Kanban({ columns:[{</br>headerText: "Backlog", </br>keyField: "Open", </br>isExpanded : true</br>}] });</br> obj.appendTo("#kanban"); |
| Cell Add card button | **Property**: *showAddButton* </br> </br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> columns: [{</br>headerText: "Backlog",</br> key: "Open", </br>showAddButton : true</br>}] }); | **Property**: *showAddButton* </br> </br>let obj: Kanban = new </br>Kanban({ columns: [{</br>headerText: "Backlog",</br> keyField: "Open", </br>showAddButton : true</br>}] });</br> obj.appendTo("#kanban"); |
| Column card count | **Property**: *enableTotalCount* </br> </br> var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> enableTotalCount : true</br>}); | **Property**: *showItemCount* </br> </br> let obj: Kanban = new </br>Kanban({ columns: [{</br> headerText: "Backlog",</br>keyField: "Open",</br>showItemCount : true</br>}]});</br>obj.appendTo("#kanban"); |
| Template | **Property**: *headerTemplate* </br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>columns: [{</br>headerText: "Backlog", </br>key: "Open", </br>headerTemplate : "#template"</br>}]}); | **Property**: *template*</br></br> let obj: Kanban = new </br>Kanban({ columns: [{</br> template : #headerTemplate</br>}]});</br>obj.appendTo("#kanban"); |
| Allow Drop | **Property**: *allowDrop* </br> </br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>columns: [{ </br>headerText: "Backlog",</br> key: "Open",</br>allowDrop: false</br>}]}); | **Not Available** |
| Allow Drag | **Property**: *allowDrag* </br> </br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>columns: [{ </br>headerText: "Backlog",</br> key: "Open",</br>allowDrag : false</br>}]}); | **Not Available** |
| Total Count text | **Property**: *totalCount* </br> </br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>enableTotalCount: true,</br> columns: [{</br> headerText: "Backlog",</br> key: "Open", </br>totalCount : </br>{text: "Backlog Count"}</br>}]}); | **Not Available** |
| Width | **Property**: *width*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>enableTotalCount: true,</br> columns: [{</br> headerText: "Backlog",</br> key: "Open", </br>width : 200</br>}]}); | **Not Available** |
| Visible | **Property**: *visible*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>enableTotalCount: true, </br>columns: [{ </br>headerText: "Backlog",</br> key: "Open", </br>visible : false</br>}]}); | **Not Available** |
| Add/Delete Columns | **Method**: *columns(column, key,</br> [action])*</br></br>**Add** :</br>var kanbanObj = </br>$("#Kanban").data("ejKanban");</br>kanbanObj.columns</br>("Review", "Review", "add");</br></br>**Delete:** </br>var kanbanObj = </br>$("#Kanban").data("ejKanban");</br>kanbanObj.columns</br>("Review", "Review", "remove");</br> | **Method**: *addColumn(columnOptions,</br> index)*</br></br>let obj: Kanban = new </br>Kanban({});</br>obj.appendTo("#kanban");</br>obj.addColumn({ </br>headerText: "Review",</br> keyField: "Review"</br>}, 2);</br></br>**Method**: *deleteColumn(index)* </br></br>let obj: Kanban = new </br>Kanban({});</br>obj.appendTo("#kanban");</br>obj.deleteColumn(2); |
| Show Columns | **Method**: *showColumns(headerText)* </br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.</br>showColumns("Testing"); | **Method**: *showColumn(key)* </br></br>let obj: Kanban = </br>new Kanban({});</br>obj.appendTo("#kanban");</br>obj.showColumn</br>("Testing"); |
| Hide Column | **Method**: *hideColumns(headerText)* </br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.</br>hideColumns("Testing"); | **Method**: *hideColumn(key)*</br></br>let obj: Kanban = </br>new Kanban({});</br>obj.appendTo("#kanban");</br>obj.hideColumn("Testing"); |
| Get Visible</br>Column Names | **Method**: *getVisibleColumnNames()*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.</br>getVisibleColumnNames(); | **Not Applicable** |
| Get Column</br>By Header Text | **Method**: *getColumnByHeaderText</br>(headerText)*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.</br>getColumnByHeaderText</br>("Testing"); | **Not Applicable** |
| Get Column Data | **Not Applicable** | **Method**: *getColumnData()*</br></br>let obj: Kanban = </br>new Kanban({});</br>obj.appendTo("#kanban");</br>obj.getColumnData(); |
| Triggers after</br>cell is click | **Event**: *cellClick*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>cellClick : function (args) {}}); | **Not Applicable** |

## Cards

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Card unique field | **Property** : </br>*fields.primaryKey*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> fields: { primaryKey: "Id"</br> } }); | **Property** : </br>*cardSettings.headerField*</br>let obj: Kanban =</br> new Kanban({ </br>cardSettings: { </br>headerField: "Id"</br>} });</br>obj.appendTo("#kanban"); |
| Content | **Property:** </br>*fields.content* </br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> fields: { </br>content: "Summary" </br>}}); | **Property:** </br>*cardSettings.contentField*</br></br>let obj: Kanban = </br>new Kanban({ </br>cardSettings: { </br>contentField: "Id"</br>} });</br>obj.appendTo("#kanban") |
| Tag | **Property:** </br>*fields.tag* </br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> fields: { </br>tag: "Tags"</br> }}); | **Property:** </br>*cardSettings.tagsField* </br></br> let obj: Kanban = new Kanban({ </br>cardSettings: { </br>tagsField: "Tags"</br>} }); </br>obj.appendTo("#kanban"); |
| Left border color | **Property:** </br>*fields.color*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>fields: { </br>color: "Type" </br>}, cardSettings: {</br>colorMapping: {</br> "#cb2027": "Issue,Story",</br> "#67ab47": "Improvement" </br>} }}); | **Property:** </br>*cardSettings.grabberField*</br>let obj: Kanban = new </br>Kanban({ cardSettings: { </br>grabberField: "color"</br>} });</br>obj.appendTo("#kanban"); |
| Header | **Property:** </br>*fields.title*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> fields: { </br>title: "Assignee"</br> }});</br> | Card Unique mapping</br> field is displayed </br>on card header. |
| Image | **Property:** </br>*fields.imageUrl*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>fields: { </br>imageUrl: "ImgUrl" </br>}}); | Not Applicable |
| CSS class | **Not Applicable** | **Property** : </br>*cardSettings.</br>footerCssField*</br></br>let obj: Kanban = new</br> Kanban({ </br>cardSettings:{ </br>footerCssField:</br>"classNames"} });</br>obj.appendTo("#kanban"); |
| Template | **Property:** </br>*cardSettings.template*</br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> cardSettings: {</br>template: "#cardTemplate"</br>}}); | **Property:** </br>*cardSettings.template*</br></br>let obj: Kanban = new </br>Kanban({ </br>cardSettings:{ </br>template: "#cardTemplate"</br>}});</br>obj.appendTo("#kanban"); |
| Toggle Card | **Method**: *toggleCard</br>($div or id)*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.</br>toggleCard("2"); | **Not Applicable** |
| Get Card Details | **Not Applicable** | **Method**: </br>*getCardDetails(target)*</br></br>let obj: Kanban = new</br> Kanban({});</br>obj.appendTo("#kanban");</br>obj.getCardDetails(</br>obj.element</br>.querySelector(".e-card")); |
| Get Selected Cards | **Not Applicable** | **Method**: </br>*getSelectedCards()*</br></br>let obj: Kanban = new </br>Kanban({});</br>obj.appendTo("#kanban");</br>obj.getSelectedCards(); |
| Card Click | **Event**: *cardClick*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>cardClick: </br>function (args) {}}); | **Event**: *cardClick* </br></br>let obj: Kanban = new </br>Kanban({ </br>cardClick: </br>function(args){} }); |
| Card Double Click | **Event**: *cardDoubleClick*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>cardDoubleClick:</br> function (args) {}}); | **Event**: *cardDoubleClick* </br></br>let obj: Kanban = new </br>Kanban({ </br>cardDoubleClick:</br>function(args){} }); |
| Triggers when start</br>the drag | **Event**: *cardDragStart*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> cardDragStart:</br> function (args) {}}); | **Event**: *dragStart*</br></br>let obj: Kanban = new</br> Kanban({ </br>dragStart:</br> function(args){}}); |
| Triggers when card</br>is dragged | **Event**: *cardDrag*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>cardDrag:</br> function (args) {}}); | **Event**: *drag* </br></br>let obj: Kanban = new</br> Kanban({ </br>drag:</br> function(args){} }); |
| Triggers when card</br>dragging stops | **Event**: *cardDragStop*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>cardDragStop:</br>function (args) {}}); | **Event**: *dragStop*</br></br>let obj: Kanban = new</br>Kanban({ </br>dragStop:</br> function(args){} }); |
| Triggers after save</br>the data when dropped | **Event**: *cardDrop*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>cardDrop:</br> function (args) {}}); | **Not Applicable** |
| Triggers after</br>cell is click | **Event**: *cellClick*</br></br>var kanbanObj = new</br> ej.Kanban($("#Kanban"), { </br>cellClick:</br> function (args) {}}); | **Not Applicable** |
| Triggers each</br>card rendered | **Event**: *queryCellInfo*</br></br>var kanbanObj = new</br> ej.Kanban($("#Kanban"), { </br>queryCellInfo:</br> function (args) {}}); | **Event**: *cardRendered*</br></br>let obj: Kanban = new </br>Kanban({</br>cardRendered:</br>function(args){} }); |

## DataSource

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| DataSource | **Property**: *dataSource* </br></br>var kanbanObj = new</br> ej.Kanban($("#Kanban"), { </br>dataSource: data});</br></br>**Method**: </br>*dataSource(datasource)*</br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.dataSource</br>(newDataSource); | **Property**: *dataSource* </br>let obj: Kanban = new</br>Kanban({</br>datasource: data</br>});</br></br>**Method**: </br>*dataSource(datasource)*</br>let obj: Kanban = new Kanban({});</br>obj.appendTo("#kanban");</br>obj.dataSource(newDataSource); |
| Triggers before</br>data load | **Event**: *load*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>load: function (args) {}}); | **Event**: *dataBinding*</br></br>let obj: Kanban = new </br>Kanban({ </br>dataBinding: </br>function(args){}}); |
| Triggers after</br>data bounded | **Event**: *dataBound*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>dataBound: function (args) {}}); | **Event**: *dataBound*</br></br>let obj: Kanban = new Kanban({</br>dataBound: function(args){} </br>}); |

**Common:**

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Drag And Drop | **Property**: *allowDragAndDrop*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>allowDragAndDrop: true</br> }); | **Property**: *allowDragAndDrop*</br></br>let obj: Kanban = new </br>Kanban({ </br>allowDragAndDrop: true </br>}); </br>obj.appendTo("#kanban"); |
| Key Field | **Property**: *keyField*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>keyField: "Status"}); | **Property** : *keyField*</br></br>let obj: Kanban = new Kanban({ </br>keyField: "Status"</br> }); </br>obj.appendTo("#kanban"); |
| Title | **Property**: *allowTitle*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>allowTitle: true}); | **Not Applicable** |
| CssClass | **Property**: *cssClass*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>cssClass: "gradient-green"}); | **Property**: *cssClass*</br></br>let obj: Kanban = new </br>Kanban({</br>cssClass : "custom-class" });</br> obj.appendTo("#kanban"); |
| Print | **Property**: *allowPrinting*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>allowPrinting: true});</br></br>**Method**: *print()*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.print(); | **Not Applicable** |
| Touch | **Property**: *enableTouch*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>enableTouch: true}); | **Not Applicable** |
| Locale | **Property**: *locale*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>locale: "de-DE"}); | **Property**: *locale*</br></br>let obj: Kanban = new </br>Kanban({ </br>locale: "de-DE"});</br> obj.appendTo("#kanban"); |
| Query | **Property**: *query*</br></br>var kanbanObj = new</br> ej.Kanban($("#Kanban"), { </br>query: ej.Query().</br>select(["Status", "Id", </br>"Summary"])}); | **Property** : *query*</br></br>let obj: Kanban = new Kanban({ </br>query: new Query().select("")});</br>obj.appendTo("#kanban"); |
| Refresh | **Method**: </br>*refresh([templateRefresh])*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.refresh(); | **Method**: *refresh()*</br></br>let obj: Kanban = new Kanban({});</br>obj.appendTo("#kanban");</br>obj.refresh(); |
| Refresh Template | **Method**: </br>*refreshTemplate()*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.</br>refreshTemplate(); | **Not Applicable** |
| Destroy | **Method**: *destroy()*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.destroy(); | **Method**: *destroy()*</br></br>let obj: Kanban = new Kanban({});</br>obj.appendTo("#kanban");</br>obj.destroy(); |
| Get Header Table | **Method**: *getHeaderTable()*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.getHeaderTable(); | **Not Applicable** |
| Show Spinner | **Not Applicable** | **Method**: *showSpinner()*</br></br>let obj: Kanban = new Kanban({});</br>obj.appendTo("#kanban");</br>obj.showSpinner(); |
| Hide Spinner | **Not Applicable** | **Method**: *hideSpinner()*</br></br>let obj: Kanban = new Kanban({});</br>obj.appendTo("#kanban");</br>obj.hideSpinner(); |
| Triggers before</br>every action | **Event**: *actionBegin*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>actionBegin: function (args) {}});</br> | **Event:** *actionBegin*</br></br>let obj: Kanban = new Kanban({</br>actionBegin: function(args){} }); |
| Triggers on successfully</br>completion of actions | **Event**: *actionComplete*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>actionComplete:</br> function (args) {}});| **Event**: *actionComplete*</br></br>let obj: Kanban = new Kanban({</br>actionComplete: function(args){} }); |
| Triggers on</br>action failure | **Event**: </br>*actionFailure*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>actionFailure:</br>function (args) {}}); | **Event**: *actionFailure*</br></br>let obj: Kanban = new Kanban({</br> actionFailure: function(args){} }); |
| Triggers after</br>Kanban rendered | **Event**: *create*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>create: function (args) {}}); | **Event**: *created*</br></br>let obj: Kanban = new Kanban({ </br>created: function(args){} }); |
| Triggers when</br>header click | **Event**: *headerClick*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>headerClick: function (args) {}}); | **Not Applicable** |
| Triggers when destroy | **Event**: *destroy*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>destroy: function (args) {}}); | **Event**: *destroy*</br></br>let obj: Kanban = new Kanban({ </br>destroy: function(args){} }); |

**Swimlane:**

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *swimlaneKey*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>fields: {</br>swimlaneKey: "Assignee"}}); | **Property**: *keyField*</br></br>let obj: Kanban = new Kanban({</br>swimlaneSettings: { </br>keyField: "Assignee"} });</br>obj.appendTo("#kanban"); |
| Header | **Property**: *headers*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), { </br>headers: [{ </br>text: "Andrew",</br> key: "Andrew Fuller"}]}); | **Property**: *textField*</br></br>let obj: Kanban = new Kanban({</br> swimlaneSettings: { </br>textField: "AssigneeName"} });</br>obj.appendTo("#kanban"); |
| Drag And Drop | **Property**: *allowDragAndDrop*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> swimlaneSettings: { </br>allowDragAndDrop: true }}); | **Property**: *allowDragAndDrop*</br></br>let obj: Kanban = new Kanban({</br> swimlaneSettings: { </br>allowDragAndDrop: true } });</br>obj.appendTo("#kanban"); |
| Card Count | **Property**: *showCount*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), { </br>swimlaneSettings: { </br>showCount: true }}); |**Property**: *showItemCount*</br></br>let obj: Kanban = new Kanban({ </br>swimlaneSettings: { </br>showItemCount: true } });</br>obj.appendTo("#kanban"); |
| Empty Row | **Property**: </br>*showEmptySwimlane*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> swimlaneSettings: { </br>showEmptySwimlane: true}}); | **Property**: *showEmptyRow*</br></br>let obj: Kanban = new</br> Kanban({ </br>swimlaneSettings: { </br>showEmptyRow: true} });</br>obj.appendTo("#kanban"); |
| Sorting | **Not Available** | **Property**: </br>*sortDirection*</br></br>let obj: Kanban = new </br>Kanban({ </br>swimlaneSettings: {</br> sortDirection: </br>"Descending"} });</br> obj.appendTo("#kanban"); |
| Expand All | **Method**: *expandAll()*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanSwimlane</br>.expandAll(); | **Not Applicable** |
| Collapse All | **Method**: *collapseAll()*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanSwimlane</br>.collapseAll(); | **Not Applicable** |
| Toggle | **Method**: *toggle($div or key)*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanSwimlane</br>.toggle($(".e-slexpandcollapse")</br>.eq(1)); | **Not Applicable** |
| Get Swimlane Data | **Not Applicable** | **Method**: </br>*getSwimlaneData(keyField)*</br></br>let obj: Kanban = new</br> Kanban({});</br>obj.appendTo("#kanban");</br>obj.</br>getSwimlaneData("Janet"); |
| Triggers before swimlane</br>icon click event | **Event**: *swimlaneClick*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>swimlaneClick:</br> function (args) {}}); | **Not Applicable** |

## Stacked Headers

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Multiple stacked headers | **Property**: *stackedHeaderColumns*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>stackedHeaderRows: [{</br>stackedHeaderColumns: [{</br> headerText: "Status",</br>column: "Backlog,</br>In Progress, Testing, </br>Done"}] },</br> { stackedHeaderColumns: [{</br> headerText: "Unresolved",</br>column: "Backlog,</br>In Progress"}]}]}); | Not Applicable |
| Single Stacked Header | **Property**: *stackedHeaderColumns*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> stackedHeaderRows: [{</br>stackedHeaderColumns: [{</br>headerText: "Unresolved",</br>column: "Backlog,</br>In Progress"}]}]}); | **Property**: </br>*stackedHeaders*</br>let obj: Kanban = new</br>Kanban({</br>stackedHeaders: [{</br>text: "To Do",</br>keyField: "Open,</br>InProgress"}]});</br>obj.appendTo("#kanban"); |

## WIP Validation

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Constraints Type | **Property:** </br>*constraints.type*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>columns: [{</br>headerText: "Backlog",</br>key: "Open",</br>constraints: { </br>type: "swimlane", max: 5}}]}); | **Property**: </br>*constraintType*</br></br>var kanban = new</br>ej.Kanban($("#kanban"), {</br>constraintType:</br>"swimlane" }); |
| Maximum card Count</br>at particular</br>column/swimlane | **Property**: </br>*constraints.max*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>columns: [{</br>headerText: "Backlog",</br>key: "Open",</br>constraints: {</br>type: "swimlane",</br>max: 5}}]}); | **Property**: </br>*maxCount*</br></br>let obj: Kanban = new Kanban({</br> columns:[{</br>headerText: "Backlog",</br>keyField: "Open",</br>maxCount: 5}] });</br>obj.appendTo("#kanban"); |
| Minimum card Count</br>at particular column | **Property**:</br>*constraints.min*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>columns: [{</br>headerText: "Backlog",</br> key: "Open",</br>constraints: {</br>type: "swimlane",</br>min: 2} }]}); | **Property**: *minCount*</br>let obj: Kanban = new</br>Kanban({</br>columns:[{</br>headerText: "Backlog",</br>keyField: "Open",</br>minCount: 2}] });</br>obj.appendTo("#kanban"); |

## Keyboard

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| KeyBoard | **Property**: </br>*allowKeyboardNavigation*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>allowKeyboardNavigation:</br> true}); | **Property**: </br>*allowKeyboard*</br></br>let obj: Kanban = new</br>Kanban({ </br>allowKeyboard: true });</br>obj.appendTo("#kanban"); |
| Settings | **Property**: </br>*keySettings*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>keySettings: {</br> focus: "e",</br> insertCard: "45"</br>} }); | **Not Applicable** |

## Toggle Columns

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: </br>*allowToggleColumn*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> allowToggleColumn</br>: true}); | **Property**: </br>*allowToggle*</br></br>let obj: Kanban = new</br> Kanban({</br>columns:[{ </br>allowToggle: true</br>}]});</br>obj.appendTo("#kanban"); |
| Toggle | **Method**: *toggleColumn</br>(headerText or $div)*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.toggleColumn</br>("Backlog"); | **Not Applicable** |

## Dialog Editing

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Fields | **Property**: *editItems*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>editSettings: {</br>editItems: [] }}); | **Property**: *fields*</br></br>let obj: Kanban = new</br> Kanban({</br> dialogSettings: {</br>fields: []}});</br>obj.appendTo("#kanban"); |
| Dialog Model | **Not Available** | **Property**: *model*</br></br>let obj: Kanban = new</br>Kanban({</br> dialogSettings: {</br>model: {</br> width: 250 }}});</br>obj.appendTo("#kanban"); |
| Template | **Property**: *dialogTemplate*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br> editSettings: {</br>dialogTemplate: "#template" }}); | **Property**: *template*</br></br>let obj: Kanban = new Kanban({</br> dialogSettings: {</br>template: </br>"#dialogTemplate"}});</br>obj.appendTo("#kanban"); |
| Enable Editing | **Property**: *allowEditing*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> editSettings: {</br>allowEditing: true }}); | **In default allowed for editing.** |
| Enable Adding | **Property**: *allowAdding*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br> editSettings: {</br>allowAdding: true }}); | **Adding applicable using column</br> show add button or</br>public method.** |
| Edit Mode | **Property:** *editMode*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br> editSettings: {</br>editMode: ej.Kanban</br>.EditMode.Dialog }}); | **Not Applicable** |
| External Form template | **Property**:</br>*externalFormTemplate*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>editSettings: {</br>externalFormTemplate:</br>ej.Kanban.EditMode.Dialog</br>}}); | **Not Applicable** |
| External Form Position | **Property**: </br>*externalFormPosition*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>editSettings: {</br>externalFormPosition:</br>ej.Kanban.FormPosition.Bottom</br>}}); | **Not Applicable** |
| Add Card | **Method**:</br>KanbanEdit.addCard</br>([primaryKey], [card])</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanEdit</br>.addCard("2",</br>{ Id: 2, Status: Open}); | **Method**:</br></br>*addCard(cardData)*</br></br>let obj: Kanban = new Kanban({});</br>obj.appendTo("#kanban");</br>obj.addCard({ Id: 2,</br>Status: Open}); |
| Update Card | **Method**: *updateCard(key, data)*</br></br>var kanbanObj = $("#Kanban").</br>data("ejKanban");</br>kanbanObj.KanbanEdit</br>.updateCard(2, { Id: 2,</br>Status: Open}); | **Method**: *updateCard(cardData)*</br></br>let obj: Kanban = new</br>Kanban({});</br>obj.appendTo("#kanban");</br>obj.updateCard({ Id: 2,</br>Status: Open}); |
| Delete Card | **Method**: </br>*KanbanEdit.deleteCard(key)*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanEdit</br>.deleteCard(2); | **Method**: deleteCard()</br></br>let obj: Kanban = new Kanban({});</br>obj.appendTo("#kanban");</br>obj.deleteCard(2); |
| Cancel Edit | **Method**: </br>*KanbanEdit.cancelEdit()*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanEdit</br>.cancelEdit(); | **Not Available** |
| End Edit | **Method**: </br>*KanbanEdit.endEdit()*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanEdit</br>.endEdit(); | **Not Available** |
| Start Edit | **Method**: </br>*KanbanEdit.startEdit</br>($div or key)*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanEdit</br>.startEdit(2); | **Method**: </br>*openDialog(action, data)*</br></br>let obj: Kanban = new</br> Kanban({});</br>obj.appendTo("#kanban");</br>obj.openDialog("Add"); |
| Set Validation | **Method**: KanbanEdit</br>.setValidationToField(name, rules)</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanEdit</br>.setValidationToField</br>("Summary", { required: true }); | **Not Available** |
| Close Dialog | **Not Applicable** | **Method**: *closeDialog()*</br>let obj: Kanban = new Kanban({});</br>obj.appendTo("#kanban");</br>obj.closeDialog(); |
| Triggers before</br>dialog Open | **Not Applicable** | **Event**: *dialogOpen*</br></br>let obj: Kanban = new</br> Kanban({</br>dialogOpen: function(args){} }); |
| Triggers when</br>dialog close | **Not Applicable** | **Event**: *dialogClose*</br></br>let obj: Kanban = new</br>Kanban({ </br>dialogClose: </br>function(args){} }); |
| Triggers after</br>the card is edited | **Event**: *endEdit*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), { </br>endEdit: </br>function (args) {}}); | **Not Applicable** |
| Triggers after</br>the card is deleted | **Event**: *endDelete*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), { </br>endDelete: </br>function (args) {}}); | **Not Applicable** |
| Triggers before</br>task is edited | **Event**: *beginEdit* </br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), { </br>beginEdit:</br>function (args) {}}); | **Not Applicable** |

## Dialog Editing Fields

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Fields | **Property**: </br>*editItems*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br> editSettings: { </br>editItems: [] }}); | **Property**: *fields*</br>let obj: Kanban = new</br>Kanban({</br> dialogSettings: {</br>fields: []}});</br>obj.appendTo("#kanban"); |
| Mapping key | **Property**: *field*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br> editSettings: {</br> editItems: [{ </br>field: "Id"}] }});| **Property**: *key*</br></br>let obj: Kanban = new</br> Kanban({</br> dialogSettings: {</br> fields: [{ </br>key: "Id"}]}});</br>obj.appendTo("#kanban"); |
| Label | **Not Applicable** | **Property**: *text*</br></br>let obj: Kanban = new Kanban({</br>dialogSettings: {</br> fields: [{ </br>text: "ID",</br>key: "Id"}]}});</br>obj.appendTo("#kanban"); |
| Type | **Property**: *editType*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br> editSettings: {</br> editItems: [{ </br>editType: ej.Kanban</br>.EditingType.String}]</br> }}); | **Property**: *type*</br></br>let obj: Kanban = new</br>Kanban({</br> dialogSettings: {</br> fields: [{</br>type: "TextBox",</br> key: "Id"}]}});</br>obj.appendTo("#kanban"); |
| Validation Rules | **Property**: *validationRules*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br> editSettings: {</br>editItems: [{</br>validationRules: {</br>required: true}}] }}); | **Property**: *validationRules*</br></br>let obj: Kanban = new Kanban({</br>dialogSettings: {</br> fields: [{</br>validationRules: {</br>required: true}}]}});</br>obj.appendTo("#kanban"); |
| Params | **Property**: *editParams*</br></br>var kanbanObj = new</br> ej.Kanban($("#Kanban"), {</br> editSettings: {</br> editItems: [{</br>editParams: {</br> decimalPlaces: 2}}]</br>}}); | **Not Applicable** |
| Default value | **Property**: *defaultValue*</br></br>var kanbanObj = new ej.Kanban(</br>$("#Kanban"), {</br> editSettings: {</br>editItems: [{</br>defaultValue: "Open"}] }}); | **Not Applicable** |

## Tooltip

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: </br>*tooltipSettings.enable*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br> tooltipSettings: {</br>enable: true</br>}}); | **Property**:</br>*enableTooltip*</br></br>let obj: Kanban = new</br> Kanban({</br>enableTooltip: true});</br>obj.appendTo("#kanban"); |
| Template | **Property:** </br>*tooltipSettings.template*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>tooltipSettings: {</br>template: </br>"#tooltipTemplate"</br>}}); | **Property**: *tooltipTemplate*</br></br>let obj: Kanban = new Kanban({</br>tooltipTemplate:</br>"#tooltipTemplate"});</br>obj.appendTo("#kanban"); |

## Context Menu

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *enable*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>contextMenuSettings: {</br>enable: true }}); | **Not Applicable** |
| Menu Items | **Property**: *menuItems*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br> contextMenuSettings: {</br>enable: true,</br>menuItems: ["Move Right"] }}); | **Not Applicable** |
| Disable default Items | **Property**: *disableDefaultItems*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>contextMenuSettings: {</br>enable: true,</br>disableDefaultItems:</br>[ej.Kanban.MenuItem.MoveLeft]</br> }}); | **Not Applicable** |
| Custom Menu Items | **Property**: *customMenuItems*</br></br>**Text**: var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>contextMenuSettings: {</br>enable: true,</br>customMenuItems: [{</br> text: "Menu1" }] }});</br></br>**Target**:</br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>contextMenuSettings: {</br>enable: true,</br> customMenuItems: [{</br> target: ej.Kanban</br>.Target.Header }] }});</br></br>**Template:**</br>var kanbanObj = new</br> ej.Kanban($("#Kanban"), {</br>contextMenuSettings: {</br>enable: true,</br>customMenuItems: [{</br>text: "Hide Column",</br>template: "#template"</br>}] }}); | **Not Applicable** |
| Triggers when context</br>menu item click | **Event**: *contextClick*</br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>contextClick:</br>function (args) {}}); | **Not Applicable** |
| Triggers when context</br>menu open | **Event**: *contextOpen*</br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>contextOpen:</br>function (args) {}}); | **Not Applicable** |

## WorkFlows

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *workFlows*</br></br>var kanbanObj = new </br>ej.Kanban($("#Kanban"), {</br>workFlows: [{}]}); | **Not Applicable** |
| Key | **Property**: *key*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>workFlows: [{</br>key: "Order"}]}); | **Not Applicable** |
| Allowed Transition | **Property**: *allowedTransition*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br> workFlows: [{</br>key: "Order", </br>allowedTransitions: "Served"</br>}]}); | **Not Applicable** |

## Filtering

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *filterSettings*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>filterSettings: []}); | **Not Applicable** |
| Enable | **Property**: *allowFiltering*</br></br>$("#Kanban").ejKanban({</br>allowFiltering: true}); | **Not Applicable** |
| Text | **Property**: *text*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>filterSettings: [{</br>text: "Janet Issues"</br>}]}); | **Not Applicable** |
| Query | **Property**: *query*</br></br>$("#Kanban").ejKanban({</br>filterSettings: [{</br>query: new ej.Query()</br>.where("Assignee",</br>"equal", "Janet")}]}); | **Not Applicable** |
| Description | **Property**: *description*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>filterSettings: [{</br>description:"Display Issues"</br>}]}); | **Not Applicable** |
| Filter Cards | **Method**: filterCards(query)</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanFilter</br>.filterCards(new ej.Query().</br>where("Assignee", "equal",</br> "Janet")); | **Not Applicable** |
| Clear | **Method**: clearFilter()</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanFilter</br>.clearFilter(); | **Not Applicable** |

## Searching

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: </br>*searchSettings*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>searchSettings: []}); | **Not Applicable** |
| Enable | **Property**: </br>*allowSearching*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>allowSearching: true</br>}); | **Not Applicable** |
| Fields | **Property**: *fields*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>searchSettings: [{</br>fields: ["Summary"]}]}); | **Not Applicable** |
| Key | **Property**: *key*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>searchSettings: [{ </br>key: "Task 1"}]}); | **Not Applicable** |
| Operator | **Property**: *operator*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>searchSettings: [{</br>operator: "contains"}]}); | **Not Applicable** |
| Ignore Case | **Property**: *ignoreCase*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>searchSettings: [{ </br>ignoreCase: true}]}); | **Not Applicable** |
| Search Cards | **Method**: </br>*searchCards(searchString)*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanFilter</br>.searchCards("Analyze"); | **Not Applicable** |
| Clear | **Method**: *clearSearch()*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanFilter</br>.clearSearch(); | **Not Applicable** |

## External Drag And Drop

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: </br>*allowExternalDragAndDrop*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>allowExternalDragAndDrop</br>: true}); | **Not Applicable** |
| Target | **Property**: </br>*externalDropTarget*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>cardSettings: {</br>externalDropTarget:</br>"#DroppedKanban" }}); | **Not Applicable** |

## Scrolling

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *allowScrolling*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br> allowScrolling: true}); | **Not Applicable** |
| height | **Property**: *height*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>allowScrolling: true, </br>scrollSettings: { </br>height: 400 }}); | **Property**: *height*</br></br>let obj: Kanban = new Kanban({</br>height: 400});</br>obj.appendTo("#kanban"); |
| width | **Property**: *width*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>allowScrolling: true,</br>scrollSettings: { </br>width: 400 }}); | **Property**: *width*</br></br>let obj: Kanban = new Kanban({</br>width: 400});</br>obj.appendTo("#kanban"); |
| Freeze Swimlane | **Property**: *allowFreezeSwimlane*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>allowScrolling: true,</br>scrollSettings: {</br>allowFreezeSwimlane: true</br>}}); | **Not Applicable** |
| Get Scroll Object | **Method**: </br>*getScrollObject()*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.getScrollObject(); | **Not Applicable** |

## Card Selection and Hover

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Enable | **Property**: *allowSelection*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>allowSelection: true}); | **Property**: *cardSettings.</br>selectionType*</br></br>let obj: Kanban = new</br>Kanban({ cardSettings: {</br>selectionType: "Single"} });</br>obj.appendTo("#kanban"); |
| Type | **Property**: *selectionType*</br></br>var kanbanObj = new</br> ej.Kanban($("#Kanban"), { </br>selectionType: "single"}); | It is covered under </br>**selectionType** property. |
| Hover | **Property**: *allowHover*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>allowHover: true}); | **Not Applicable** |
| Clear | **Method**: *clear()*</br></br>var kanbanObj = $("#Kanban")</br>.data("ejKanban");</br>kanbanObj.KanbanSelection</br>.clear(); | **Not Applicable** |
| Triggers before</br>card selected | **Event**: *beforeCardSelect*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>beforeCardSelect:</br>function (args) {}});</br></br>**Event**: *cardSelecting* </br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>cardSelecting:</br>function (args) {}}); | **Not Applicable** |
| Triggers after</br>card selected | **Event**: *cardSelect*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>cardSelect: function</br>(args) {}}); | **Not Applicable** |

## Toolbar

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Custom Toolbar | **Property**: </br>*customToolbarItems.template*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>customToolbarItems: {</br>template: "#Delete"</br>}}); | **Not Applicable** |
| Triggers toolbar</br>item click | **Event**: *toolbarClick*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>toolbarClick: function </br>(args) {}}); | **Not Applicable** |

## Responsive

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *isResponsive*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>isResponsive: true}); | **Not Applicable** |
| Minimum width | **Property**: *minWidth*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>isResponsive: true,</br>minWidth: 400}); | **Not Applicable** |

## State Persistence

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Persistence | **Not Applicable** | **Property**:</br>*enablePersistence*</br></br>let obj: Kanban = new Kanban({</br>enablePersistence: true</br>});</br>obj.appendTo("#kanban"); |

## Right to Left - RTL

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| default | **Property**: *enableRTL*</br></br>var kanbanObj = new</br>ej.Kanban($("#Kanban"), {</br>enableRTL: true}) | **Property**: *enableRtl*</br></br>let obj: Kanban = new Kanban({</br>enableRtl: true});</br>obj.appendTo("#kanban"); |