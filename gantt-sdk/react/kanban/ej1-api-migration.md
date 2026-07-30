---
layout: post
title: Ej1 api migration in React Kanban component | Syncfusion
description: Learn here all about Ej1 api migration in Syncfusion React Kanban component of Syncfusion Essential JS 2 and more.
control: Ej1 api migration 
platform: gantt-sdk
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Ej1 api migration in React Kanban component

This article describes the API migration process of Kanban component from Essential<sup style="font-size:70%">&reg;</sup> JS 1 to Essential<sup style="font-size:70%">&reg;</sup> JS 2.

## Columns

{% raw %}

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property** : *columns*</br></br> `<EJ.Kanban><columns>`</br>`</columns></EJ.Kanban>` | **Property** : *columns*</br></br>`<KanbanComponent><ColumnsDirective>`</br>`</ColumnsDirective></KanbanComponent>`</br> |
| Header Text | **Property** : *headerText* </br> </br> `<EJ.Kanban><columns>` </br>`<column headerText="Backlog">`</br>`</column>`</br>`</columns></EJ.Kanban>` | **Property** : *headerText* </br></br>`<KanbanComponent>`</br>`<ColumnsDirective>`</br>`<ColumnDirective`</br>`headerText="Backlog"/>`</br>`</ColumnsDirective>`</br>`</KanbanComponent>`</br> |
| Key Field | **Property** : *key* </br></br> `<EJ.Kanban><columns>`</br>`<column key="Open">`</br>`</column>`</br>`</columns></EJ.Kanban>` | **Property**: *keyField* </br></br>`<KanbanComponent>`</br>`<ColumnsDirective>`</br>`<ColumnDirective`</br>`keyField='Open'/>`</br>`</ColumnsDirective>`</br>`</KanbanComponent>`</br> |
| Initial Collapsed</br>Columns | **Property**: *isCollapsed*</br></br>`<EJ.Kanban><columns>`</br>`<column key="Open"`</br>`headerText="Backlog"`</br>`[isCollapsed]="true">`</br>`</column>`</br>`</columns></EJ.Kanban>` |**Property**: *isExpanded* </br></br>`<KanbanComponent>`</br>`<ColumnsDirective>`</br>`<ColumnDirective`</br>`keyField='Open'`</br>`allowToggle='true'`</br> `[isExpanded]='true'/>`</br>`</ColumnsDirective>`</br>`</KanbanComponent>`</br> |
| Cell Add card button | **Property**: *showAddButton* </br></br>`<EJ.Kanban><columns>`</br>`<column key="Open"`</br>`headerText="Backlog"`</br>`[showAddButton]="true">`</br>`</column>`</br>`</columns></EJ.Kanban>` |**Property**: *showAddButton* </br></br>`<KanbanComponent>`</br>`<ColumnsDirective>`</br>`<ColumnDirective`</br>`headerText='To do'`</br>`keyField='Open'`</br>`[showAddButton]='true'/>`</br>`</ColumnsDirective>`</br>`</KanbanComponent>`</br> |
| Column card count | **Property**: *enableTotalCount* </br></br>`<EJ.Kanban [enableTotalCount]="true">`</br></br>`</EJ.Kanban>` | **Property**: *showItemCount* </br> </br>`<KanbanComponent>`</br>`<ColumnsDirective>`</br>`<ColumnDirective`</br>`headerText='To do'`</br>`keyField='Open'`</br>`[showItemCount]='true'/>`</br>`</ColumnsDirective>`</br>`</KanbanComponent>`</br> |
| Template | **Property**: *headerTemplate* </br></br>`<EJ.Kanban><columns>`</br>`<column key="Open"`</br>`headerText="Backlog"`</br>`headerTemplate="#template">`</br>`</column>`</br>`</columns></EJ.Kanban>` |**Property**: *template*</br></br>`<KanbanComponent>`</br>`<ColumnsDirective>`</br>`<ColumnDirective`</br>`headerText='To do'`</br>`keyField='Open'`</br>`template='#headerTemplate'/>`</br>`</ColumnsDirective>`</br>`</KanbanComponent>`</br> |
| Allow Drop | **Property**: *allowDrop* </br> </br>`<EJ.Kanban><columns>`</br>`<column key="Open"`</br>`headerText="Backlog"`</br>`[allowDrop]="false">`</br>`</column>`</br>`</columns></EJ.Kanban>` | **Property**: *allowDrop* </br></br>`<KanbanComponent>`</br>`<ColumnsDirective>`</br>`<ColumnDirective`</br>`headerText='To do'`</br>`keyField='Open'`</br>`[allowDrop]="false"/>`</br>`</ColumnsDirective>`</br>`</KanbanComponent>`</br> |
| Allow Drag | **Property**: *allowDrag* </br> </br>`<EJ.Kanban><columns>`</br>`<column key="Open"`</br>`headerText="Backlog"`</br>`[allowDrag]="false">`</br>`</column>`</br>`</columns></EJ.Kanban>` | **Property**: *allowDrag* </br></br>`<KanbanComponent>`</br>`<ColumnsDirective>`</br>`<ColumnDirective`</br>`headerText='To do'`</br>`keyField='Open'`</br>`[allowDrag]="false"/>`</br>`</ColumnsDirective>`</br>`</KanbanComponent>`</br> |
| Total Count text | **Property**: *totalCount* </br> </br>`<EJ.Kanban><columns>`</br>`<column key="Open"`</br>`headerText="Backlog"`</br>`totalCount-text="Backlog Count">`</br>`</column>`</br>`</columns></EJ.Kanban>` | **Not Available** |
| Width | **Property**: *width*</br></br>`<EJ.Kanban><columns>`</br>`<column key="Open"`</br>`headerText="Backlog"`</br>`width="200">`</br>`</column>`</br>`</columns></EJ.Kanban>` | **Not Available** |
| Visible | **Property**: *visible*</br></br>`<EJ.Kanban><columns>`</br>`<column key="Open"`</br>`headerText="Backlog"`</br>`visible={false}>`</br>`</column>`</br>`</columns></EJ.Kanban>` | **Not Available** |
| Add/Delete Columns | **Method**: *columns(column, key,</br> [action])*</br></br>**Add** :</br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.columns</br>("Review", "Review", "add");</br></br>**Delete:** </br>kanbanObj.columns</br>("Review", "Review", "remove");</br> | **Method**: *addColumn(columnOptions,</br> index)*</br></br>`<KanbanComponent`</br>`ref={ kanban => this.`</br>`kanbanInstance = kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.addColumn({ </br>headerText: "Review",</br> keyField: "Review"</br>}, 2);</br></br>**Method**: *deleteColumn(index)* </br></br>this.kanbanInstance.deleteColumn(2); |
| Show Columns | **Method**: *showColumns(headerText)* </br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.</br>showColumns("Testing");</br></br> | **Method**: *showColumn(key)* </br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.showColumn</br>("Testing");</br> |
| Hide Columns | **Method**: *hideColumns(headerText)* </br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.</br>hideColumns("Testing");</br></br> | **Method**: *hideColumns(key)* </br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance =`</br> `kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.hideColumn</br>("Testing");</br> |
| Get Visible</br>Column Names | **Method**: *getVisibleColumnNames()*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.</br>getVisibleColumnNames();</br></br> | **Not Applicable** |
| Get Column</br>By Header Text | **Method**: *getColumnByHeaderText</br>(headerText)*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.</br>getColumnByHeaderText</br>("Testing");</br> | **Not Applicable** |
| Get Column Data | **Not Applicable** | **Method**: *getColumnData()*</br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.getColumnData();</br>
| Triggers after</br>cell is click | **Event**: *cellClick*</br></br>`<EJ.Kanban`</br>`cellClick={cellClick}>`</br>`</EJ.Kanban>`</br>function cellClick(args){}</br> | **Not Applicable** |

## Cards

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Card unique field | **Property** : </br>*fields.primaryKey*</br></br>`<EJ.Kanban`</br>`fields-primaryKey="Id">`</br>`</EJ.Kanban>` | **Property** : </br>*cardSettings.headerField*</br>`<KanbanComponent`</br>`cardSettings={{`</br>`headerField: "Id"}}>`</br>`</KanbanComponent>`</br> |
| Content | **Property:** </br>*fields.content* </br></br>`<EJ.Kanban`</br>`fields-content`</br>`="Summary">`</br>`</EJ.Kanban>` | **Property** : </br>*cardSettings.contentField*</br>`<KanbanComponent`</br>`cardSettings={{`</br>`contentField: 'Summary'>`</br>`</KanbanComponent>`</br> |
| Tag | **Property:** </br>*fields.tag* </br></br>`<EJ.Kanban`</br>`fields-tag="Tags">`</br>`</EJ.Kanban>` | **Property** : </br>*cardSettings.tagsField*</br>`<KanbanComponent`</br>`cardSettings={{`</br>`tagsField: 'Tags'>`</br>`</KanbanComponent>`</br> |
| Left border color | **Property:** </br>*fields.color*</br></br>`<EJ.Kanban fields-color="Type" cardSettings-colorMapping={colormap}>`</br>`</EJ.Kanban>`</br>var colormap = {</br>"#cb2027": "Bug,Story",</br>"#67ab47": "Improvement",</br>"#fbae19": "Epic",</br>"#6a5da8": "Others"</br> };</br> | **Property:** </br>*cardSettings.grabberField*</br>`<KanbanComponent`</br>`cardSettings={{`</br>`grabberField: "color">`</br>`</KanbanComponent>`</br> |
| Header | **Property:** </br>*fields.title*</br></br>`<EJ.Kanban`</br> `fields-title="Assignee"`</br>`</EJ.Kanban>` | Card Unique mapping</br> field is displayed </br>on card header. |
| Image | **Property:** </br>*fields.imageUrl*</br></br>`<EJ.Kanban`</br> `fields-imageUrl="ImgUrl"`</br>`</EJ.Kanban>`</br> | Not Applicable |
| CSS class | **Not Applicable** | **Property** : </br>*cardSettings.</br>footerCssField*</br></br>`<KanbanComponent`</br>`cardSettings={{`</br>`footerCssField: "classNames">`</br>`</KanbanComponent>`</br> |
| Template | **Property:** </br>*cardSettings.template*</br></br>`<EJ.Kanban`</br>`cardSettings-template`</br>`="#template"`</br>`</EJ.Kanban>` | **Property:** </br>*cardSettings.template*</br></br>`<KanbanComponent`</br>`cardSettings={{`</br>`template:`</br>`this.cardTemplate.bind(this)>`</br>`</KanbanComponent>`</br> |
| Toggle Card | **Method**: *toggleCard</br>($div or id)*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.</br>toggleCard("2");</br></br> | **Not Applicable** |
| Get Card Details | **Not Applicable** | **Method**: </br>*getCardDetails(target)*</br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance =`</br> `kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.getCardDetails(</br>obj.element</br>.querySelector(".e-card")); |
| Get Selected Cards | **Not Applicable** | **Method**: </br>*getSelectedCards()*</br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance =`</br> `kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.getSelectedCards(); |
| Card Click | **Event**: *cardClick*</br></br>`<EJ.Kanban`</br>`cardClick={cardClick}>`</br>`</EJ.Kanban>`</br>function cardClick(args){}</br> | **Event**: *cardClick* </br></br>`<KanbanComponent`</br>`cardClick={this.cardClick.bind(this)}`</br>`</KanbanComponent>`</br>private cardClick() {}</br> |
| Card Double Click | **Event**: *cardDoubleClick*</br></br>`<EJ.Kanban`</br>`cardDoubleClick={cardDoubleClick}>`</br>`</EJ.Kanban>`</br>function cardDoubleClick(args){}</br> | **Event**: *cardDoubleClick* </br></br> `<KanbanComponent`</br>`cardDoubleClick={this.cardDoubleClick.bind(this)}`</br>`</KanbanComponent>`</br>private cardDoubleClick() {}</br> |
| Triggers when start</br>the drag | **Event**: *cardDragStart*</br></br>`<EJ.Kanban`</br>`cardDragStart={cardDragStart}>`</br>`</EJ.Kanban>`</br>function cardDragStart(args){}</br> | **Event**: *dragStart*</br></br>`<KanbanComponent`</br>`dragStart={this.dragStart.bind(this)}`</br>`</KanbanComponent>`</br>private dragStart() {}</br> |
| Triggers when card</br>is dragged | **Event**: *cardDrag*</br></br>`<EJ.Kanban`</br>`cardDrag={cardDrag}>`</br>`</EJ.Kanban>`</br>function cardDrag(args){}</br> | **Event**: *drag* </br></br>`<KanbanComponent`</br>`drag={this.drag.bind(this)}`</br>`</KanbanComponent>`</br>private drag() {}</br> |
| Triggers when card</br>dragging stops | **Event**: *cardDragStop*</br></br>`<EJ.Kanban`</br>`cardDragStop={cardDragStop}>`</br>`</EJ.Kanban>`</br>function cardDragStop(args){}</br> | **Event**: *dragStop*</br></br>`<KanbanComponent`</br>`dragStop={this.dragStop.bind(this)}`</br>`</KanbanComponent>`</br>private dragStop() {}</br> |
| Triggers after save</br>the data when dropped | **Event**: *cardDrop*</br></br>`<EJ.Kanban`</br>`cardDrop={cardDrop}>`</br>`</EJ.Kanban>`</br>function cardDrop(args){}</br> | **Not Applicable** |
| Triggers after</br>cell is click | **Event**: *cellClick*</br></br>`<EJ.Kanban`</br>`cellClick={cellClick}>`</br>`</EJ.Kanban>`</br>function cellClick(args){}</br> | **Not Applicable** |
| Triggers each</br>card rendered | **Event**: *queryCellInfo*</br></br>`<EJ.Kanban`</br>`queryCellInfo={queryCellInfo}>`</br>`</EJ.Kanban>`</br>function queryCellInfo(args){}</br> | **Event**: *cardRendered*</br></br>`<KanbanComponent`</br>`cardRendered={this.cardRendered.bind(this)}`</br>`</KanbanComponent>`</br>private cardRendered() {}</br> |

## DataSource

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Card unique field | **Property** : </br>*fields.primaryKey*</br></br>`<EJ.Kanban`</br>`fields-primaryKey="Id">`</br>`</EJ.Kanban>` | **Property** : </br>*cardSettings.headerField*</br>`<KanbanComponent`</br>`cardSettings={{`</br>`headerField: "Id"}}>`</br>`</KanbanComponent>`</br> |
| DataSource | **Property**: *dataSource* </br></br>`<EJ.Kanban`</br>`dataSource={window.kanbanData}>`</br>`</EJ.Kanban>`</br> **Method**: </br>*dataSource(datasource)*</br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.</br>dataSource</br>(newDataSource);</br></br> | **Property**: *dataSource* </br></br>`<KanbanComponent`</br>`dataSource={this.data}>`</br>`</KanbanComponent>`</br>**Method**: </br>*dataSource(datasource)*</br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.dataSource(newDataSource);</br> |
| Triggers before</br>data load | **Event**: *load*</br></br>`<EJ.Kanban`</br>`load={load}>`</br>`</EJ.Kanban>`</br>function load(args){}</br> | **Event**: *dataBinding*</br></br>`<KanbanComponent`</br>`dataBinding={this.dataBinding.bind(this)}`</br>`</KanbanComponent>`</br>private dataBinding() {}</br> |
| Triggers after</br>data bounded | **Event**: *dataBound*</br></br>`<EJ.Kanban`</br>`dataBound={dataBound}>`</br>`</EJ.Kanban>`</br>function dataBound(args){}</br> | **Event**: *dataBound*</br></br>`<KanbanComponent`</br>`dataBound={this.dataBound.bind(this)}`</br>`</KanbanComponent>`</br>private dataBound() {}</br> |

## Common

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Drag And Drop | **Property**: *allowDragAndDrop*</br></br>`<EJ.Kanban`</br>`allowDragAndDrop={true}>`</br>`</EJ.Kanban>` | **Property**: *allowDragAndDrop*</br></br>`<KanbanComponent`</br>`allowDragAndDrop={true}>`</br>`</KanbanComponent>`</br> |
| Key Field | **Property**: *keyField*</br></br>`<EJ.Kanban`</br>`keyField="Status">`</br>`</EJ.Kanban>` | **Property** : *keyField*</br></br>`<KanbanComponent`</br>`keyField="Status">`</br>`</KanbanComponent>`</br> |
| Title | **Property**: *allowTitle*</br></br>`<EJ.Kanban`</br>`allowTitle={true}>`</br>`</EJ.Kanban>` | **Not Applicable** |
| CssClass | **Property**: *cssClass*</br></br>`<EJ.Kanban`</br>`cssClass="gradient-green">`</br>`</EJ.Kanban>` | **Property**: *cssClass*</br></br>`<KanbanComponent`</br>`cssClass= "custom-class">`</br>`</KanbanComponent>`</br> |
| Print | **Property**: *allowPrinting*</br></br>`<EJ.Kanban`</br>`allowPrinting={true}>`</br>`</EJ.Kanban>`</br></br>**Method**: *print()*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.</br>print(); | **Not Applicable** |
| Touch | **Property**: *enableTouch*</br></br>`<EJ.Kanban`</br>`enableTouch={true}>`</br>`</EJ.Kanban>`</br></br>| **Not Applicable** |
| Locale | **Property**: *locale*</br></br>`<EJ.Kanban`</br>`locale="de-DE">`</br>`</EJ.Kanban>` | **Property**: *locale*</br></br>`<KanbanComponent`</br>`locale="de-DE">`</br>`</KanbanComponent>`</br> |
| Query | **Property**: *query*</br></br>`<EJ.Kanban`</br>`query={query}>`</br>`</EJ.Kanban>`</br>var query =</br>ej.Query().select("") | **Property** : *query*</br></br>`<KanbanComponent`</br>`query={query}>`</br>`</KanbanComponent>`</br>var query=</br> new Query().select("")});</br> |
| Refresh | **Method**: </br>*refresh([templateRefresh])*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.refresh();</br> | **Method**: *refresh()*</br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.refresh();</br> |
| Refresh Template | **Method**: </br>*refreshTemplate()*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.refreshTemplate(); | **Not Applicable** |
| Destroy | **Method**: *destroy()*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.destroy(); | **Method**: *destroy()*</br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.destroy();</br> |
| Get Header Table | **Method**: *getHeaderTable()*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.getHeaderTable(); | **Not Applicable** |
| Show Spinner | **Not Applicable** | **Method**: *showSpinner()*</br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.showSpinner();</br> |
| Hide Spinner | **Not Applicable** | **Method**: *hideSpinner()*</br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.hideSpinner();</br> |
| Triggers before</br>every action | **Event**: *actionBegin*</br></br>`<EJ.Kanban`</br>`actionBegin={actionBegin}>`</br>`</EJ.Kanban>`</br>function actionBegin(args){}</br> | **Event:** *actionBegin*</br></br>`<KanbanComponent`</br>`actionBegin={this.actionBegin.bind(this)}`</br>`</KanbanComponent>`</br>private actionBegin(event) {}</br> |
| Triggers on successfully</br>completion of actions | **Event**: *actionComplete*</br></br>`<EJ.Kanban`</br>`actionComplete={actionComplete}>`</br>`</EJ.Kanban>`</br>function actionComplete(args){}</br> | **Event**: *actionComplete*</br></br>`<KanbanComponent`</br>`actionComplete={this.actionComplete.bind(this)}`</br>`</KanbanComponent>`</br>private actionComplete(event) {}</br> |
| Triggers on</br>action failure | **Event**: </br>*actionFailure*</br></br>`<EJ.Kanban`</br>`actionFailure={actionFailure}>`</br>`</EJ.Kanban>`</br>function actionFailure(args){}</br> | **Event**: *actionFailure*</br></br>`<KanbanComponent`</br>`actionFailure={this.actionFailure.bind(this)}`</br>`</KanbanComponent>`</br>private actionFailure(event) {}</br> |
| Triggers after</br>Kanban rendered | **Event**: *create*</br></br>`<EJ.Kanban`</br>`create={create}>`</br>`</EJ.Kanban>`</br>function create(args){}</br> | **Event**: *created*</br></br>`<KanbanComponent`</br>`created={this.created.bind(this)}`</br>`</KanbanComponent>`</br>private created(event) {}</br> |
| Triggers when</br>header click | **Event**: *headerClick*</br></br>`<EJ.Kanban`</br>`headerClick={headerClick}>`</br>`</EJ.Kanban>`</br>function headerClick(args){}</br> | **Not Applicable** |
| Triggers when destroy | **Event**: *destroy*</br></br>`<EJ.Kanban`</br>`destroy={destroy}>`</br>`</EJ.Kanban>`</br>function destroy(args){}</br> | **Event**: *destroy*</br></br>`<KanbanComponent`</br>`destroy={this.destroy.bind(this)}`</br>`</KanbanComponent>`</br>private destroy(event) {}</br> |

## Swimlane

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *swimlaneKey*</br></br>`<EJ.Kanban`</br>`fields-swimlaneKey="Assignee">`</br>`</EJ.Kanban>` | **Property**: *keyField*</br></br>`<KanbanComponent`</br>`swimlaneSettings={{`</br>`keyField: "Assignee" }} >`</br>`</KanbanComponent>`</br> |
| Header | **Property**: *headers*</br></br>`<EJ.Kanban`</br>`headers={headers}>`</br>`</EJ.Kanban>`</br>`var headers =` </br>`[{ </br>text: "Andrew",`</br>`key: "Andrew Fuller"}];`</br> } </br>} | **Property**: *textField*</br></br>`<KanbanComponent`</br>`swimlaneSettings={{`</br>`textField: "AssigneeName" }} >`</br>`</KanbanComponent>`</br> |
| Drag And Drop | **Property**: *allowDragAndDrop*</br></br>`<EJ.Kanban`</br>`swimlaneSettings={{allowDragAndDrop: true}}>`</br>`</EJ.Kanban>` | **Property**: *allowDragAndDrop*</br></br>`<KanbanComponent`</br>`swimlaneSettings={{`</br>`allowDragAndDrop: true}} >`</br>`</KanbanComponent>`</br> |
| Card Count | **Property**: *showCount*</br></br>`<EJ.Kanban`</br>`swimlaneSettings={{showCount: true}}>`</br>`</EJ.Kanban>` | **Property**: *showItemCount*</br></br>`<KanbanComponent`</br>`swimlaneSettings={{`</br>`showItemCount: true}} >`</br>`</KanbanComponent>`</br> |
| Empty Row | **Property**: </br>*showEmptySwimlane*</br></br>`<EJ.Kanban`</br>`swimlaneSettings={{showEmptySwimlane: true}}>`</br>`</EJ.Kanban>` | **Property**: *showEmptyRow*</br></br>`<KanbanComponent`</br>`swimlaneSettings={{`</br>`showEmptyRow: true}} >`</br>`</KanbanComponent>`</br> |
| Sorting | **Not Available** | **Property**: </br>*sortDirection*</br></br>`<KanbanComponent`</br>`swimlaneSettings={{`</br>`sortDirection:`</br>`"Descending"}} >`</br>`</KanbanComponent>`</br> |
| Expand All | **Method**: *expandAll()*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanSwimlane</br>.expandAll(); |**Not Applicable** |
| Collapse All | **Method**: *collapseAll()*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanSwimlane</br>.collapseAll(); |**Not Applicable** |
| Toggle | **Method**: *toggle($div or key)*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.</br>KanbanSwimlane</br>.toggle($(".e-slexpandcollapse")</br>.eq(1)); | **Not Applicable** |
| Get Swimlane Data | **Not Applicable** | **Method**: </br>*getSwimlaneData(keyField)*</br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.getSwimlaneData("Janet");</br> |
| Triggers before swimlane</br>icon click event | **Event**: *swimlaneClick*</br></br>`<EJ.Kanban`</br>`swimlaneClick={swimlaneClick}>`</br>`</EJ.Kanban>`</br>function swimlaneClick(args){}</br> | **Not Applicable** |

## Stacked Headers

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Multiple stacked headers | **Property**: *stackedHeaderColumns*</br></br>`<EJ.Kanban`</br>`stackedHeaderRows={stackedHeaderRow}>`</br>`</EJ.Kanban>`</br>var stackedHeaderRow = </br>[{ stackedHeaderColumns: [{ </br> headerText: "Status",</br>column: "Backlog,</br>In Progress, Testing, </br>Done"}] },</br> { stackedHeaderColumns: [{</br> headerText: "Unresolved",</br>column: "Backlog,</br>In Progress"}]}]}}; | **Not Applicable** |
| Single Stacked Header | **Property**: *stackedHeaderColumns*</br></br>`<EJ.Kanban`</br>`stackedHeaderRows={stackedHeaderRow}>`</br>`</EJ.Kanban>`</br>var stackedHeaderRow = </br>[{ stackedHeaderColumns: [{ </br> headerText: "Status",</br>column: "Backlog,</br>In Progress, Testing, </br>Done"}] },</br> { stackedHeaderColumns: [{</br>headerText: "Unresolved",</br>column: "Backlog,</br>In Progress"}]}]}}; | **Property**: </br>*stackedHeaders*</br>`<KanbanComponent>`</br>`<StackedHeadersDirective>`</br>`<StackedHeaderDirective`</br>`text='To Do'`</br>`keyFields='Open,`</br>`InProgress'>`</br>`</StackedHeaderDirective>`</br>`</KanbanComponent>`</br> |

## WIP Validation

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Constraints Type | **Property:** </br>*constraints.type*</br></br>`<EJ.Kanban>`</br>`<columns>`</br>`<column`</br>`headerText="Backlog"`</br>`key="Open"`</br>`constraints-type`</br>`="swimlane" />`</br>`</EJ.Kanban>` | **Property**: </br>*constraintType*</br></br>`<KanbanComponent`</br>`constraintType="swimlane">`</br>`</KanbanComponent>`</br> |
| Maximum card Count</br>at particular</br>column/swimlane | **Property**: </br>*constraints.max*</br></br>`<EJ.Kanban>`</br>`<columns>`</br>`<column`</br>`headerText="Backlog"`</br>`key="Open"`</br>`constraints-type`</br>`="swimlane"`</br> `constraints-max`</br>`="5" />`</br>`</columns></EJ.Kanban>` | **Property**: </br>*maxCount*</br></br>`<KanbanComponent>`</br>`<ColumnsDirective>`</br>`<ColumnDirective`</br>`headerText='Backlog`</br>`keyField='Open'`</br>`maxCount='5'/>`</br>`</ColumnsDirective>`</br>`</KanbanComponent>`</br> |
| Minimum card Count</br>at particular column | **Property**:</br>*constraints.min*</br></br>`<EJ.Kanban>`</br>`<columns>`</br>`<column`</br>`headerText="Backlog"`</br>`key="Open"`</br>`constraints-type`</br>`="swimlane"`</br> `constraints-min`</br>`="5" />`</br>`</columns></EJ.Kanban>` | **Property**: *minCount*</br>`<KanbanComponent>`</br>`<ColumnsDirective>`</br>`<ColumnDirective`</br>`headerText='Backlog`</br>`keyField='Open'`</br>`minCount='5'/>`</br>`</ColumnsDirective>`</br>`</KanbanComponent>`</br> |

## Keyboard

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| KeyBoard | **Property**: </br>*allowKeyboardNavigation*</br></br>`<EJ.Kanban`</br>`allowKeyboardNavigation={true}>`</br>`</EJ.Kanban>` | **Property**: *allowDragAndDrop*</br></br>`<KanbanComponent`</br>`allowKeyboard={true}>`</br>`</KanbanComponent>`</br> |
| Settings | **Property**: </br>*keySettings*</br></br>`<EJ.Kanban`</br>`keySettings={keySettings}>`</br>`</EJ.Kanban>`</br>var keySettings = {</br> focus: "e",</br> insertCard: "45"</br>} | **Not Applicable** |

## Toggle Columns

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: </br>*allowToggleColumn*</br></br>`<EJ.Kanban`</br>`allowToggleColumn={true}>`</br>`</EJ.Kanban>` | **Property**: </br>*allowToggle*</br></br>`<KanbanComponent>`</br>`<ColumnsDirective>`</br>`<ColumnDirective`</br>`allowToggle={true}`</br>`/>`</br>`</ColumnsDirective>`</br>`</KanbanComponent>`</br> |
| Toggle | **Method**: *toggleColumn</br>(headerText or $div)*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.</br>toggleColumn</br>("Backlog"); |**Not Applicable** |

## Dialog Editing

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Fields | **Property**: *editItems*</br></br>`<EJ.Kanban`</br>`editSettings-editItems`</br>`={editItems}>`</br>`</EJ.Kanban>`</br>var editItems = []</br> | **Property**: *fields*</br></br>`<KanbanComponent`</br>`dialogSettings={{`</br>`fields: this.fields`</br>`}}>`</br>`</KanbanComponent>`</br>private fields:</br>DialogFieldsModel[] = [] |
| Dialog Model | **Not Available** | **Property**: *model*</br></br>`<KanbanComponent`</br>`dialogSettings={{`</br>`model: {model}`</br>`}}>`</br>`</KanbanComponent>`</br>private model:</br>DialogModel[] = { width: 250 } |
| Template | **Property**: *dialogTemplate*</br></br>`<EJ.Kanban`</br>`editSettings-dialogTemplate="#template"`</br>`</EJ.Kanban>`</br> | **Property**: *template*</br></br>`<KanbanComponent`</br>`dialogSettings={{`</br>`template:`</br>`this.dialogTemplate }}>`</br>`</KanbanComponent>` |
| Enable Editing | **Property**: *allowEditing*</br></br>`<EJ.Kanban`</br>`editSettings-allowEditing`</br>`={true}>`</br>`</EJ.Kanban>` | **In default allowed for editing.** |
| Enable Adding | **Property**: *allowAdding*</br></br>`<EJ.Kanban`</br>`editSettings-allowAdding`</br>`={true}>`</br>`</EJ.Kanban>` | **Adding applicable using column</br> show add button or</br>public method.** |
| Edit Mode | **Property:** *editMode*</br></br>`<EJ.Kanban`</br>`editSettings-editMode`</br>`="dialogtemplate">`</br>`</EJ.Kanban>` | **Not Applicable** |
| External Form template | **Property**:</br>*externalFormTemplate*</br></br>`<EJ.Kanban`</br>`editSettings-externalFormTemplate`</br>`="#template">`</br>`</EJ.Kanban>` | **Not Applicable** |
| External Form Position | **Property**: </br>*externalFormPosition*</br></br>`<EJ.Kanban`</br>`editSettings-externalFormPosition`</br>`="bottom">`</br>`</EJ.Kanban>` | **Not Applicable** |
| Add Card | **Method**:</br>KanbanEdit.addCard</br>([primaryKey], [card])</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanEdit</br>.addCard("2",</br>{ Id: 2, Status: Open});</br> | **Method**:</br></br>*addCard(cardData)*</br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.addCard({ Id: 2,</br>Status: Open});</br> |
| Update Card | **Method**: *updateCard(key, data)*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanEdit</br>.updateCard(2, { Id: 2,</br>Status: Open});</br> | **Method**: *updateCard(cardData)*</br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.updateCard({ Id: 2,</br>Status: Open});</br> |
| Delete Card | **Method**: </br>*KanbanEdit.deleteCard(key)*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanEdit</br>.deleteCard(2);</br> |**Method**: deleteCard()</br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.deleteCard(2);</br> |
| Cancel Edit | **Method**: </br>*KanbanEdit.cancelEdit()*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanEdit</br>.cancelEdit(); | **Not Available** |
| End Edit | **Method**: </br>*KanbanEdit.endEdit()*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanEdit</br>.endEdit(); | **Not Available** |
| Start Edit | **Method**: </br>*KanbanEdit.startEdit</br>($div or key)*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanEdit</br>.startEdit(2); | **Method**: </br>*openDialog(action, data)*</br></br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.openDialog("Add")</br> |
| Set Validation | **Method**: KanbanEdit</br>.setValidationToField(name, rules)</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanEdit</br>.setValidationToField</br>("Summary", { required: true }); | **Not Available** |
| Close Dialog | **Not Applicable** | **Method**: *closeDialog()*</br>`<KanbanComponent`</br>`ref={ kanban =>`</br>`this.kanbanInstance`</br>`= kanban}>`</br>`</KanbanComponent>`</br>this.kanbanInstance</br>.closeDialog(); |
| Triggers before</br>dialog Open | **Not Applicable** | **Event**: *dialogOpen*</br></br>`<KanbanComponent`</br>`dialogOpen={this.dialogOpen.bind(this)}`</br>`</KanbanComponent>`</br>private dialogOpen(event) {}</br> |
| Triggers when</br>dialog close | **Not Applicable** | **Event**: *dialogClose*</br></br>`<KanbanComponent`</br>`dialogClose={this.dialogClose.bind(this)}`</br>`</KanbanComponent>`</br>private dialogClose(event) {}</br> |
| Triggers after</br>the card is edited | **Event**: *endEdit*</br></br>`<EJ.Kanban`</br>`endEdit={endEdit}>`</br>`</EJ.Kanban>`</br>function endEdit(args){}</br> | **Not Applicable** |
| Triggers after</br>the card is deleted | **Event**: *endDelete*</br></br>`<EJ.Kanban`</br>`endDelete={endDelete}>`</br>`</EJ.Kanban>`</br>function endDelete(args){}</br> | **Not Applicable** |
| Triggers before</br>task is edited | **Event**: *beginEdit* </br></br>`<EJ.Kanban`</br>`beginEdit={beginEdit}>`</br>`</EJ.Kanban>`</br>function beginEdit(args){}</br> | **Not Applicable** |

## Dialog Editing Fields

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Fields | **Property**: </br>*editItems*</br></br>`<EJ.Kanban`</br>`editSettings-editItems`</br>`={editItems}>`</br>`</EJ.Kanban>`</br>var editItems = []</br> | **Property**: *fields*</br></br>`<KanbanComponent`</br>`dialogSettings={{`</br>`fields: this.fields`</br>`}}>`</br>`</KanbanComponent>`</br>private fields:</br>DialogFieldsModel[] = [] |
| Mapping key | **Property**: *field*</br></br>`<EJ.Kanban`</br>`editSettings-editItems`</br>`={editItems}>`</br>`</EJ.Kanban>`</br>var editItems = [{ </br>field: "Id"}]</br> | **Property**: *key*</br></br>`<KanbanComponent`</br>`dialogSettings={{`</br>`fields: this.fields`</br>`}}>`</br>`</KanbanComponent>`</br>private fields:</br>DialogFieldsModel[] = [{ </br>key: "Id"}] |
| Label | **Not Applicable** | **Property**: *text*</br></br>`<KanbanComponent`</br>`dialogSettings={{`</br>`fields: this.fields`</br>`}}>`</br>`</KanbanComponent>`</br>private fields:</br>DialogFieldsModel[] = [{ </br>text: "ID",</br>key: "Id"}] |
| Type | **Property**: *editType*</br></br>`<EJ.Kanban`</br>`editSettings-editItems`</br>`={editItems}>`</br>`</EJ.Kanban>`</br>var editItems = [{ </br>editType: ej.Kanban</br>.EditingType.String}]</br> | **Property**: *type*</br></br>`<KanbanComponent`</br>`dialogSettings={{`</br>`fields: this.fields`</br>`}}>`</br>`</KanbanComponent>`</br>private fields:</br>DialogFieldsModel[] = [{</br>type: "TextBox",</br> key: "Id"}] |
| Validation Rules | **Property**: *validationRules*</br></br>`<EJ.Kanban`</br>`editSettings-editItems`</br>`={editItems}>`</br>`</EJ.Kanban>`</br>var editItems = [{ </br>validationRules: {</br>required: true} </br>}]</br> | **Property**: *validationRules*</br></br>`<KanbanComponent`</br>`dialogSettings={{`</br>`fields: this.fields`</br>`}}>`</br>`</KanbanComponent>`</br>private fields:</br>DialogFieldsModel[] = [{ </br>validationRules: {</br>required: true}] |
| Params | **Property**: *editParams*</br></br>`<EJ.Kanban`</br>`editSettings-editItems`</br>`={editItems}>`</br>`</EJ.Kanban>`</br>var editItems = [{ </br>editParams: {</br> decimalPlaces: 2}</br>}]</br> | **Not Applicable** |
| Default value | **Property**: *defaultValue*</br></br>`<EJ.Kanban`</br>`editSettings-editItems`</br>`={editItems}>`</br>`</EJ.Kanban>`</br>var editItems = [{ </br>defaultValue: "Open"</br>}]</br> | **Not Applicable** |

## Tooltip

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: </br>*tooltipSettings.enable*</br></br>`<EJ.Kanban`</br>`tooltipSettings-enable={true}`</br>`>`</br>`</EJ.Kanban>` | **Property**:</br>*enableTooltip*</br></br>`<KanbanComponent`</br>`enableTooltip=`</br>`{true}>`</br>`</KanbanComponent>` |
| Template | **Property:** </br>*tooltipSettings.template*</br></br>`<EJ.Kanban`</br>`tooltipSettings-template=#tooltipTemplate`</br>`>`</br>`</EJ.Kanban>` | **Property**: *tooltipTemplate*</br></br>`<KanbanComponent`</br>`tooltipTemplate=`</br>`{this.template.bind(this)}>`</br>`</KanbanComponent>` |

## Context Menu

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *enable*</br></br>`<EJ.Kanban`</br>`contextMenuSettings-enable={true}`</br>`>`</br>`</EJ.Kanban>` | **Not Applicable** |
| Menu Items | **Property**: *menuItems*</br></br>`<EJ.Kanban`</br>`contextMenuSettings-enable={true}`</br>`contextMenuSettings-menuItems`</br>`={menuItem}>`</br>`</EJ.Kanban>`</br>var menuItem = ["Move Right"]; | **Not Applicable** |
| Disable default Items | **Property**: *disableDefaultItems*</br></br>`<EJ.Kanban`</br>`contextMenuSettings-enable={true}`</br>`contextMenuSettings-disableDefaultItems`</br>`={disableDefaultItems}>`</br>`</EJ.Kanban>`</br>var disableDefaultItems =</br> [ej.Kanban.MenuItem.MoveLeft]; | **Not Applicable** |
| Custom Menu Items | **Property**: *customMenuItems*</br></br>**Text**:`<EJ.Kanban`</br>`contextMenuSettings-enable={true}`</br>`contextMenuSettings-custommenuitems`</br>`={customMenuItems}>`</br>`</EJ.Kanban>`</br>var customMenuItems =</br> [{ text: "Menu1" </br>}];</br></br>**Target**:</br>`<EJ.Kanban`</br>`contextMenuSettings-enable={true}`</br>`contextMenuSettings-custommenuitems`</br>`={customMenuItems}>`</br>`</EJ.Kanban>`</br>var customMenuItems =</br> [{ target: ej.Kanban</br>.Target.Header </br>}];</br></br>**Template:**</br>`<EJ.Kanban`</br>`contextMenuSettings-enable={true}`</br>`contextMenuSettings-custommenuitems`</br>`={customMenuItems}>`</br>`</EJ.Kanban>`</br>var customMenuItems =</br> [{ text: "Hide Column",</br>template: "#template"</br>}]; | **Not Applicable** |
| Triggers when context</br>menu item click | **Event**: *contextClick*</br>`<EJ.Kanban`</br>`contextClick={contextClick}>`</br>`</EJ.Kanban>`</br>function contextClick(args){}</br> | **Not Applicable** |
| Triggers when context</br>menu open | **Event**: *contextOpen*</br>`<EJ.Kanban`</br>`contextOpen={contextOpen}>`</br>`</EJ.Kanban>`</br>function contextOpen(args){}</br> | **Not Applicable** |

## WorkFlows

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *workFlows*</br></br>`<EJ.Kanban`</br>`workflows={workflow}/>`</br>`</EJ.Kanban>`</br>var workflow =[] | **Not Applicable** |
| Key | **Property**: *key*</br></br>`<EJ.Kanban`</br>`workflows={workflow}/>`</br>`</EJ.Kanban>`</br>var workflow =[{</br>key: "Order"}] | **Not Applicable** |
| Allowed Transition | **Property**: *allowedTransition*</br></br>`<EJ.Kanban`</br>`workflows={workflow}/>`</br>`</EJ.Kanban>`</br>var workflow =[{</br>key: "Order", </br>allowedTransitions: "Served"</br>}] | **Not Applicable** |

## Filtering

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *filterSettings*</br></br>`<EJ.Kanban`</br>`filterSettings={filter}/>`</br>`</EJ.Kanban>`</br>var filter = [] | **Not Applicable** |
| Enable | **Property**: *allowFiltering*</br></br>`<EJ.Kanban`</br>`allowFiltering={true}/>`</br>`</EJ.Kanban>`</br> | **Not Applicable** |
| Text | **Property**: *text*</br></br>`<EJ.Kanban`</br>`filterSettings={filter}/>`</br>`</EJ.Kanban>`</br>var filter = [{</br>text: "Janet Issues"</br>}] | **Not Applicable** |
| Query | **Property**: *query*</br></br>`<EJ.Kanban`</br>`filterSettings={filter}/>`</br>`</EJ.Kanban>`</br>var filter = [{</br>query: new ej.Query()</br>.where("Assignee",</br>"equal", "Janet")}]</br>}] | **Not Applicable** |
| Description | **Property**: *description*</br></br>`<EJ.Kanban`</br>`filterSettings={filter}/>`</br>`</EJ.Kanban>`</br>var filter = [{</br>description:"Display Issues"</br>}]</br>}] | **Not Applicable** |
| Filter Cards | **Method**: filterCards(query)</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanFilter</br>.filterCards(new ej.Query().</br>where("Assignee", "equal",</br> "Janet")); | **Not Applicable** |
| Clear | **Method**: clearFilter()</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanFilter</br>.clearFilter(); | **Not Applicable** |

## Searching

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: </br>*searchSettings*</br></br>`<EJ.Kanban`</br>`searchSettings={searchSettings}/>`</br>`</EJ.Kanban>`</br>var searchSettings = [] | **Not Applicable** |
| Enable | **Property**: </br>*allowSearching*</br></br>`<EJ.Kanban`</br>`allowSearching={true}/>`</br>`</EJ.Kanban>`</br> | **Not Applicable** |
| Fields | **Property**: *fields*</br></br>`<EJ.Kanban`</br>`searchSettings={searchSettings}/>`</br>`</EJ.Kanban>`</br>var searchSettings = [{</br>fields: ["Summary"]}] | **Not Applicable** |
| Key | **Property**: *key*</br></br>`<EJ.Kanban`</br>`searchSettings={searchSettings}/>`</br>`</EJ.Kanban>`</br>var searchSettings = [{</br>key: "Task 1"}] | **Not Applicable** |
| Operator | **Property**: *operator*</br></br>`<EJ.Kanban`</br>`searchSettings={searchSettings}/>`</br>`</EJ.Kanban>`</br>var searchSettings = [{</br>operator: "contains"}] | **Not Applicable** |
| Ignore Case | **Property**: *ignoreCase*</br></br>`<EJ.Kanban`</br>`searchSettings={searchSettings}/>`</br>`</EJ.Kanban>`</br>var searchSettings = [{</br>ignoreCase: true}] | **Not Applicable** |
| Search Cards | **Method**: </br>*searchCards(searchString)*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanFilter</br>.searchCards("Analyze"); | **Not Applicable** |
| Clear | **Method**: *clearSearch()*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanFilter</br>.clearSearch(); | **Not Applicable** |

## External Drag And Drop

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: </br>*allowExternalDragAndDrop*</br></br>`<EJ.Kanban`</br>`allowExternalDragAndDrop={true}/>`</br>`</EJ.Kanban>`</br> | **Not Applicable** |
| Target | **Property**: </br>*externalDropTarget*</br></br>`<EJ.Kanban`</br> `cardSettings-externalDropTarget`</br>`="#DroppedKanban">`</br>`</EJ.Kanban>`</br> | **Not Applicable** |

## Scrolling

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *allowScrolling*</br></br>`<EJ.Kanban`</br>`allowScrolling={true}/>`</br>`</EJ.Kanban>`</br> | **Not Applicable** |
| height | **Property**: *height*</br></br>`<EJ.Kanban`</br>`allowScrolling={true}`</br>`scrollSettings={scrollSetting}/>`</br>`</EJ.Kanban>`</br>var scrollSetting={ </br>height: 400 } </br> | **Property**: *height*</br></br>`<KanbanComponent`</br>`height="400">`</br>`</KanbanComponent>`</br> |
| width | **Property**: *width*</br></br>`<EJ.Kanban`</br>`allowScrolling={true}`</br>`scrollSettings={scrollSetting}/>`</br>`</EJ.Kanban>`</br>var scrollSetting={ </br>width: 400 } </br> | **Property**: *width*</br></br>`<KanbanComponent`</br>`width="400">`</br>`</KanbanComponent>`</br> |
| Freeze Swimlane | **Property**: *allowFreezeSwimlane*</br></br>`<EJ.Kanban`</br>`allowScrolling={true}`</br>`scrollSettings={scrollSetting}/>`</br>`</EJ.Kanban>`</br>var scrollSetting={ </br>allowFreezeSwimlane: true } </br> | **Not Applicable** |
| Get Scroll Object | **Method**: </br>*getScrollObject()*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.getScrollObject(); | **Not Applicable** |

## Card Selection and Hover

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Enable | **Property**: *allowSelection*</br></br>`<EJ.Kanban`</br>`allowSelection={true}/>`</br>`</EJ.Kanban>`</br> | **Property**: *cardSettings.</br>selectionType*</br></br>`<KanbanComponent`</br>`cardSettings={{`</br>`selectionType: "Single"`</br>`</KanbanComponent>`</br> |
| Type | **Property**: *selectionType*</br></br>`<EJ.Kanban`</br>`selectionType="single"/>`</br>`</EJ.Kanban>`</br> | It is covered under </br>**selectionType** property. |
| Hover | **Property**: *allowHover*</br></br>`<EJ.Kanban`</br>`allowHover={true}/>`</br>`</EJ.Kanban>`</br> | **Not Applicable** |
| Clear | **Method**: *clear()*</br></br>`<EJ.Kanban>`</br>`</EJ.Kanban>`</br>var kanbanObj =</br> $(".e-kanban").</br>ejKanban("instance");</br>kanbanObj.KanbanSelection</br>.clear(); | **Not Applicable** |
| Triggers before</br>card selected | **Event**: *beforeCardSelect*</br></br>`<EJ.Kanban`</br>`beforeCardSelect={beforeCardSelect}>`</br>`</EJ.Kanban>`</br>function beforeCardSelect(args){}</br>**Event**: *cardSelecting* </br>`<EJ.Kanban`</br>`cardSelecting={cardSelecting}>`</br>`</EJ.Kanban>`</br>function cardSelecting(args){}</br> | **Not Applicable** |
| Triggers after</br>card selected | **Event**: *cardSelect*</br></br>`<EJ.Kanban`</br>`cardSelect={cardSelect}>`</br>`</EJ.Kanban>`</br>function cardSelect(args){}</br> | **Not Applicable** |

## Toolbar

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Custom Toolbar | **Property**: </br>*customToolbarItems.template*</br></br>`<EJ.Kanban`</br>`customToolbarItems-template="#Delete"/>`</br>`</EJ.Kanban>`</br> | **Not Applicable** |
| Triggers toolbar</br>item click | **Event**: *toolbarClick*</br></br>`<EJ.Kanban`</br>`toolbarClick={toolbarClick}>`</br>`</EJ.Kanban>`</br>function toolbarClick(args){}</br> | **Not Applicable** |

## Responsive

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Default | **Property**: *isResponsive*</br></br>`<EJ.Kanban`</br>`isResponsive={true}/>`</br>`</EJ.Kanban>`</br> | **Not Applicable** |
| Minimum width | **Property**: *minWidth*</br></br>`<EJ.Kanban`</br>`isResponsive={true}`</br>`minWidth='400'/>`</br>`</EJ.Kanban>`</br> | **Not Applicable** |

## State Persistence

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| Persistence | **Not Applicable** | **Property**:</br>*enablePersistence*</br></br>`<KanbanComponent`</br>`enablePersistence={true}`</br>`</KanbanComponent>`</br> |

## Right to Left - RTL

| **Behavior** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 1** | **API in Essential<sup style="font-size:70%">&reg;</sup> JS 2** |
| --- | --- | --- |
| default | **Property**: *enableRTL*</br></br>`<EJ.Kanban`</br>`enableRTL={true}/>`</br>`</EJ.Kanban>`</br> |**Property**: *enableRtl*</br></br>`<KanbanComponent`</br>`enableRtl={true}`</br>`</KanbanComponent>`</br> |

{% endraw %}