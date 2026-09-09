---
layout: post
title: Event Markers in Blazor Gantt Chart | Syncfusion
description: Learn how to add and customize event markers in Syncfusion Blazor Gantt Chart to highlight important project milestones on the timeline.
keywords: blazor gantt event markers, timeline markers, milestone events, eventmarkers, highlight events, syncfusion gantt
canonical: https://help.syncfusion.com/gantt-sdk/blazor/gantt-chart/event-markers
platform: gantt-sdk
control: Event Markers - Gantt Chart
documentation: ug
domainurl: https://help.syncfusion.com/gantt-sdk
---

# Event Markers for Milestone Highlights in Blazor Gantt Chart

The Event Markers in the Gantt Chart component are used to highlight the important events in a project. Event markers can be initialized using the [GanttEventMarkers](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttEventMarkers.html) property, and you can define date and label for the event markers using the [Day](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttEventMarker.html#Syncfusion_Blazor_Gantt_GanttEventMarker_Day) and [Label](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttEventMarker.html#Syncfusion_Blazor_Gantt_GanttEventMarker_Label) property. You can also customize it using the [CssClass](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.Gantt.GanttEventMarker.html#Syncfusion_Blazor_Gantt_GanttEventMarker_CssClass) property. The following code example shows how to add event markers in the Gantt Chart component.

Event markers highlight significant project events by displaying vertical timeline indicators that span across the entire Gantt chart. These markers identify critical dates, milestones, deadlines, or important project events that affect multiple tasks or the overall project timeline, providing visual reference points for project-wide activities.

Understanding event markers implementation enables effective visualization of project-critical dates and enhances timeline awareness across all project phases.

Event markers utilize specific properties to define their positioning, appearance, and identification within the project timeline:

**Date positioning**: The `Day` property establishes the exact timeline date where the marker appears. This date value determines marker placement across the entire vertical timeline, ensuring accurate project event representation.

**Descriptive labeling**: The `Label` property provides descriptive text that identifies the marker's purpose or significance. Labels enhance user understanding by clearly indicating what project event the marker represents.

**Visual customization**: The `CssClass` property enables custom styling through CSS class applications. This property allows distinctive visual treatment for different marker types, supporting color coding, styling variations, and brand consistency.

**Label positioning support**: The `Top` property enables vertical alignment customization for event marker labels. This property helps prevent label overlap when multiple event markers are rendered on the same date, improving clarity and readability.

## Event marker configuration

Event markers render as vertical lines positioned at specific dates across the entire Gantt timeline, distinguishing them from data markers which appear within individual task rows. This project-wide visibility ensures critical dates remain prominent regardless of the current view or task focus.

**Timeline integration**: Event markers integrate seamlessly with the Gantt timeline, appearing as vertical indicators that extend from the top to the bottom of the chart area. This comprehensive visibility ensures important dates remain visible during scrolling, zooming, or filtering operations.

**Multiple marker support**: The component supports multiple event markers simultaneously, allowing comprehensive tracking of various project-critical dates within the same timeline view. Each marker maintains independent configuration while sharing the common timeline space.

The following implementation demonstrates event marker integration within a Gantt chart, showcasing timeline-wide event highlighting:

{% tabs %}
{% highlight razor tabtitle="Home.razor" %}

@using Syncfusion.Blazor.Gantt
<SfGantt DataSource="@TaskCollection" Height="450px" Width="700px">
@using Syncfusion.Blazor.Gantt
<SfGantt @ref="GanttInstance" DataSource="@TaskCollection" Height="450px" Width="100%" ProjectStartDate="@(new DateTime(2026, 3, 27))" ProjectEndDate="@(new DateTime(2026, 7, 6))" TreeColumnIndex="1" ScrollToTaskbarOnClick="true">
	<GanttTaskFields Id="TaskId" Name="TaskName" StartDate="StartDate" EndDate="EndDate" Duration="Duration" Progress="Progress" ParentID="ParentId" Dependency="Predecessor">
	</GanttTaskFields>
	<GanttColumns>
		<GanttColumn Field="TaskId" HeaderText="Task Id"></GanttColumn>
		<GanttColumn Field="TaskName" HeaderText="Task Name" ClipMode="Syncfusion.Blazor.Grids.ClipMode.EllipsisWithTooltip"></GanttColumn>
		<GanttColumn Field="StartDate" HeaderText="Start Date"></GanttColumn>
		<GanttColumn Field="EndDate" HeaderText="End Date"></GanttColumn>
		<GanttColumn Field="Duration" HeaderText="Duration"></GanttColumn>
		<GanttColumn Field="Predecessor" HeaderText="Dependency"></GanttColumn>
		<GanttColumn Field="Progress" HeaderText="Progress"></GanttColumn>
	</GanttColumns>
	<GanttEventMarkers>
		<GanttEventMarker Day="@ResearchPhaseDate" Label="Research phase" CssClass="e-custom-event-marker"></GanttEventMarker>
		<GanttEventMarker Day="@ResearchPhaseDate" Label="Demand Analysis" CssClass="e-custom-event-marker" Top="150px"></GanttEventMarker>
		<GanttEventMarker Day="@DesignPhaseDate" Label="Design phase" CssClass="e-custom-event-marker" Top="150px"></GanttEventMarker>
		<GanttEventMarker Day="@DesignPhaseDate" Label="Competitor Analysis" CssClass="e-custom-event-marker" Top="300px"></GanttEventMarker>
	</GanttEventMarkers>
	<GanttSplitterSettings Position="28%"></GanttSplitterSettings>
	<GanttLabelSettings LeftLabel="TaskName" TValue="TaskData"></GanttLabelSettings>
</SfGantt>

@code{
	internal SfGantt<TaskData>? GanttInstance { get; set; }
	internal List<TaskData> TaskCollection { get; set; } = new List<TaskData>();
	public DateTime ResearchPhaseDate { get; set; } = new DateTime(2026, 04, 09);
	public DateTime DesignPhaseDate { get; set; } = new DateTime(2026, 04, 30);

	/// <summary>
	/// Initializes the sample by loading task data for the Gantt chart.
	/// </summary>
	protected override async Task OnInitializedAsync()
	{
		TaskCollection = GetTaskCollection();
		await Task.CompletedTask.ConfigureAwait(true);
	}
    internal sealed class TaskData
    {
        public int TaskId { get; set; }
        public int Id { get; set; }
        public string Text { get; set; } = string.Empty;
        public string TaskName { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string? Duration { get; set; }
        public int Progress { get; set; }
        public int? ParentId { get; set; }
        public string Predecessor { get; set; } = string.Empty;
        public int ID { get; set; }
        public string Value { get; set; } = string.Empty;
    }
    /// <summary>
    /// Generates and returns a collection of Gantt task data.
    /// </summary>
    internal static List<TaskData> GetTaskCollection()
    {
        List<TaskData> Tasks = new List<TaskData>() {
                new TaskData() { TaskId = 1, TaskName = "Product concept ", StartDate = new DateTime(2026, 04, 02), EndDate = new DateTime(2026, 04, 08), Duration = "5 days" },
                new TaskData() { TaskId = 2, TaskName = "Defining the product usage", StartDate = new DateTime(2026, 04, 02), EndDate = new DateTime(2026, 04, 08), Duration = "3", Progress = 30, ParentId = 1 },
                new TaskData() { TaskId = 3, TaskName = "Defining the target audience", StartDate = new DateTime(2026, 04, 02), EndDate = new DateTime(2026, 04, 04), Duration = "3", Progress = 40, ParentId = 1 },
                new TaskData() { TaskId = 4, TaskName = "Prepare product sketch and notes", StartDate = new DateTime(2026, 04, 05), EndDate = new DateTime(2026, 04, 08), Duration = "2", Progress = 30, ParentId = 1, Predecessor = "2" },
                new TaskData() { TaskId = 5, TaskName = "Concept approval", StartDate = new DateTime(2026, 04, 08), EndDate = new DateTime(2026, 04, 08), Duration = "0", Predecessor = "3,4" },
                new TaskData() { TaskId = 6, TaskName = "Market research", StartDate = new DateTime(2026, 04, 09), EndDate = new DateTime(2026, 04, 18), Duration = "4", Progress = 30 },
                new TaskData() { TaskId = 7, TaskName = "Demand analysis", StartDate = new DateTime(2026, 04, 09), EndDate = new DateTime(2026, 04, 12), Duration = "4", Progress = 40, ParentId = 6 },
                new TaskData() { TaskId = 8, TaskName = "Customer strength", StartDate = new DateTime(2026, 04, 09), EndDate = new DateTime(2026, 04, 12), Duration = "4", Progress = 30, ParentId = 7, Predecessor = "5" },
                new TaskData() { TaskId = 9, TaskName = "Market opportunity analysis", StartDate = new DateTime(2026, 04, 09), EndDate = new DateTime(2026, 04, 12), Duration = "4", ParentId = 7, Predecessor = "5" },
                new TaskData() { TaskId = 10, TaskName = "Competitor analysis", StartDate = new DateTime(2026, 04, 15), EndDate = new DateTime(2026, 04, 18), Duration = "4", Progress = 30, ParentId = 6, Predecessor = "7,8" },
                new TaskData() { TaskId = 11, TaskName = "Product strength analysis", StartDate = new DateTime(2026, 04, 15), EndDate = new DateTime(2026, 04, 18), Duration = "4", Progress = 40, ParentId = 6, Predecessor = "9" },
                new TaskData() { TaskId = 12, TaskName = "Research completed", StartDate = new DateTime(2026, 04, 22), EndDate = new DateTime(2026, 04, 22), Duration = "0", Progress = 30, ParentId = 6, Predecessor = "10"},
                new TaskData() { TaskId = 13, TaskName = "Product design and development", StartDate = new DateTime(2026, 04, 19), EndDate = new DateTime(2026, 05, 16), Duration = "20" },
                new TaskData() { TaskId = 14, TaskName = "Functionality design", StartDate = new DateTime(2026, 04, 19), EndDate = new DateTime(2026, 04, 23), Duration = "3", Progress = 30, ParentId = 13, Predecessor = "12" },
                new TaskData() { TaskId = 15, TaskName = "Quality design", StartDate = new DateTime(2026, 04, 19), EndDate = new DateTime(2026, 04, 23), Duration = "3", Progress = 40, ParentId = 13, Predecessor = "12" },
                new TaskData() { TaskId = 16, TaskName = "Define reliability", StartDate = new DateTime(2026, 04, 24), EndDate = new DateTime(2026, 04, 25), Duration = "2", Progress = 30, ParentId = 13, Predecessor = "15" },
                new TaskData() { TaskId = 17, TaskName = "Identifying raw materials", StartDate = new DateTime(2026, 04, 24), EndDate = new DateTime(2026, 04, 25), Duration = "2", ParentId = 13, Predecessor = "15" },
                new TaskData() { TaskId = 18, TaskName = "Define cost plan", StartDate = new DateTime(2026, 04, 26), EndDate = new DateTime(2026, 04, 29), Duration = "2", Progress = 30, ParentId = 13, Predecessor = "17" },
                new TaskData() { TaskId = 19, TaskName = "Define manufacturing cost", StartDate = new DateTime(2026, 04, 26), EndDate = new DateTime(2026, 04, 29), Duration = "2", Progress = 40, ParentId = 18, Predecessor = "17" },
                new TaskData() { TaskId = 20, TaskName = "Define selling cost", StartDate = new DateTime(2026, 04, 26), EndDate = new DateTime(2026, 04, 29), Duration = "2", Progress = 30, ParentId = 18, Predecessor = "17" },
            };
        return Tasks;
    }
}

<style>
.e-gantt .e-gantt-chart .e-custom-event-marker {
    width: 1px;
    border-left: 2px red dotted;

</style>

{% endhighlight %}
{% endtabs %}

N> Multiple event markers may overlap when they are configured without the Top property or when the same Top value is assigned to multiple markers, as they are rendered at the same vertical position.

## See also

* [Display Striplines in Blazor Gantt](https://www.syncfusion.com/forums/175385/display-striplines-in-blazor-gantt)

N> You can refer to our [Blazor Gantt Chart](https://www.syncfusion.com/gantt-sdk/blazor-gantt-chart) feature tour page for its groundbreaking feature representations. You can also explore our [Blazor Gantt Chart example](https://blazor.syncfusion.com/demos/gantt-chart/default-functionalities?theme=fluent2) to know how to render and configure the Gantt.
