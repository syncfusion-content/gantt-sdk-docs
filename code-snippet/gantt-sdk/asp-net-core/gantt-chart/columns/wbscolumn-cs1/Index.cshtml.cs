using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttData { get; set; }

        public void OnGet()
        {
            GanttData = new List<GanttDataSource>()
            {
            new GanttDataSource { TaskId = 1, TaskName = "Product concept", StartDate = new DateTime(2024, 4, 2), EndDate = new DateTime(2024, 4, 21) },
            new GanttDataSource { TaskId = 2, TaskName = "Defining the product and its usage", StartDate = new DateTime(2024, 4, 2), Duration = 3, Progress = 30, ParentId = 1 },
            new GanttDataSource { TaskId = 3, TaskName = "Defining target audience", StartDate = new DateTime(2024, 4, 2), Duration = 3, ParentId = 1 },
            new GanttDataSource { TaskId = 4, TaskName = "Prepare product sketch and notes", StartDate = new DateTime(2024, 4, 2), Duration = 2, Progress = 30, Predecessor = "2FS+1", ParentId = 1 },
            new GanttDataSource { TaskId = 5, TaskName = "Manufacturing cost", StartDate = new DateTime(2024, 4, 4), Duration = 2, Progress = 30, ParentId = 4 },
            new GanttDataSource { TaskId = 6, TaskName = "Selling cost", StartDate = new DateTime(2024, 4, 4), Duration = 2, ParentId = 4 },
            new GanttDataSource { TaskId = 7, TaskName = "Selling Items", StartDate = new DateTime(2024, 4, 4), Duration = 2, ParentId = 6 },
            new GanttDataSource { TaskId = 8, TaskName = "Market research", StartDate = new DateTime(2024, 4, 2), EndDate = new DateTime(2024, 4, 21) },
            new GanttDataSource { TaskId = 9, TaskName = "Demand analysis", StartDate = new DateTime(2024, 4, 4), EndDate = new DateTime(2024, 4, 21), ParentId = 8 },
            new GanttDataSource { TaskId = 10, TaskName = "Customer strength", StartDate = new DateTime(2024, 4, 4), Duration = 4, Progress = 30, Predecessor = "5", ParentId = 9 },
            new GanttDataSource { TaskId = 11, TaskName = "Market opportunity analysis", StartDate = new DateTime(2024, 4, 4), Duration = 4, Predecessor = "5", ParentId = 9 },
            new GanttDataSource { TaskId = 12, TaskName = "Competitor analysis", StartDate = new DateTime(2024, 4, 4), Duration = 4, Progress = 30, Predecessor = "7, 8", ParentId = 8 },
            new GanttDataSource { TaskId = 13, TaskName = "Product strength analsysis", StartDate = new DateTime(2024, 4, 4), Duration = 4, Predecessor = "9", ParentId = 8 },
            new GanttDataSource { TaskId = 14, TaskName = "Research complete", StartDate = new DateTime(2024, 4, 4), Duration = 0, Predecessor = "10", ParentId = 8, Indicators = new List<IndicatorModel>() { new IndicatorModel { Date = new DateTime(2024, 4, 27), Name = "Research completed", Tooltip = "Research completed", IconClass = "description e-icons" } } },
            new GanttDataSource { TaskId = 15, TaskName = "Product design and development", StartDate = new DateTime(2024, 4, 4), EndDate = new DateTime(2024, 4, 21) },
            new GanttDataSource { TaskId = 16, TaskName = "Functionality design", StartDate = new DateTime(2024, 4, 4), Duration = 3, Progress = 30, Predecessor = "12", ParentId = 15 },
            new GanttDataSource { TaskId = 17, TaskName = "Quality design", StartDate = new DateTime(2024, 4, 4), Duration = 3, Predecessor = "12", ParentId = 15 },
            new GanttDataSource { TaskId = 18, TaskName = "Define reliability", StartDate = new DateTime(2024, 4, 4), Duration = 2, Progress = 30, Predecessor = "15", ParentId = 15 },
            new GanttDataSource { TaskId = 19, TaskName = "Identifying raw materials", StartDate = new DateTime(2024, 4, 4), Duration = 2, Predecessor = "14", ParentId = 15 },
            new GanttDataSource { TaskId = 20, TaskName = "Define cost plan", StartDate = new DateTime(2024, 4, 4), EndDate = new DateTime(2024, 4, 21), ParentId = 15 },
            new GanttDataSource { TaskId = 21, TaskName = "Manufacturing cost", StartDate = new DateTime(2024, 4, 4), Duration = 2, Progress = 30, Predecessor = "17", ParentId = 20 },
            new GanttDataSource { TaskId = 22, TaskName = "Selling cost", StartDate = new DateTime(2024, 4, 4), Duration = 2, Predecessor = "17", ParentId = 20 },
            new GanttDataSource { TaskId = 23, TaskName = "Development of the final design", StartDate = new DateTime(2024, 4, 4), EndDate = new DateTime(2024, 4, 21), ParentId = 15 },
            new GanttDataSource { TaskId = 24, TaskName = "Defining dimensions and package volume", StartDate = new DateTime(2024, 4, 4), Duration = 2, Progress = 30, Predecessor = "19, 20", ParentId = 23 },
            new GanttDataSource { TaskId = 25, TaskName = "Develop design to meet industry standards", StartDate = new DateTime(2024, 4, 4), Duration = 2, Predecessor = "22", ParentId = 23 },
            new GanttDataSource { TaskId = 26, TaskName = "Include all the details", StartDate = new DateTime(2024, 4, 4), Duration = 3, Predecessor = "23", ParentId = 23 },
            new GanttDataSource { TaskId = 27, TaskName = "CAD computer-aided design", StartDate = new DateTime(2024, 4, 4), Duration = 3, Progress = 30, Predecessor = "24", ParentId = 15 },
            new GanttDataSource { TaskId = 28, TaskName = "CAM computer-aided manufacturing", StartDate = new DateTime(2024, 4, 4), Duration = 3, Predecessor = "25", ParentId = 15 },
            new GanttDataSource { TaskId = 29, TaskName = "Design complete", StartDate = new DateTime(2024, 4, 4), Duration = 0, Predecessor = "26", ParentId = 15 },
            new GanttDataSource { TaskId = 30, TaskName = "Prototype testing", StartDate = new DateTime(2024, 4, 4), Duration = 4, Progress = 30, Predecessor = "27" },
            new GanttDataSource { TaskId = 31, TaskName = "Include feedback", StartDate = new DateTime(2024, 4, 4), Duration = 4, Predecessor = "28", Indicators = new List<IndicatorModel>() { new IndicatorModel { Date = new DateTime(2024, 5, 31), Name = "Production phase", Tooltip = "Production phase completed", IconClass = "okIcon e-icons" } } },
            new GanttDataSource { TaskId = 32, TaskName = "Manufacturing", StartDate = new DateTime(2024, 4, 4), Duration = 5, Progress = 30, Predecessor = "28,29" },
            new GanttDataSource { TaskId = 33, TaskName = "Assembling materials to finsihed goods", StartDate = new DateTime(2024, 4, 4), Duration = 5, Predecessor = "30" },
            new GanttDataSource { TaskId = 34, TaskName = "Feedback and testing", StartDate = new DateTime(2024, 4, 4), EndDate = new DateTime(2024, 4, 21) },
            new GanttDataSource { TaskId = 35, TaskName = "Internal testing and feedback", StartDate = new DateTime(2024, 4, 4), Duration = 3, Progress = 45, Predecessor = "31", ParentId = 34 },
            new GanttDataSource { TaskId = 36, TaskName = "Customer testing and feedback", StartDate = new DateTime(2024, 4, 4), Duration = 3, Progress = 50, Predecessor = "33", ParentId = 34 },
            new GanttDataSource { TaskId = 37, TaskName = "Final product development", StartDate = new DateTime(2024, 4, 4), EndDate = new DateTime(2024, 4, 21) },
            new GanttDataSource { TaskId = 38, TaskName = "Important improvements", StartDate = new DateTime(2024, 4, 4), Duration = 4, Progress = 30, Predecessor = "34", ParentId = 37 },
            new GanttDataSource { TaskId = 39, TaskName = "Address any unforeseen issues", StartDate = new DateTime(2024, 4, 4), Duration = 4, Progress = 30, Predecessor = "36", ParentId = 37, Indicators = new List<IndicatorModel>() { new IndicatorModel { Date = new DateTime(2024, 6, 28), Name = "Sales and marketing", Tooltip = "Sales and marketing", IconClass = "description e-icons" } } },
            };
        }
    }

    public class IndicatorModel
    {
        [JsonPropertyName("date")]
        public DateTime? Date { get; set; }
        [JsonPropertyName("name")]
        public string Name { get; set; }
        [JsonPropertyName("tooltip")]
        public string Tooltip { get; set; }
        [JsonPropertyName("iconClass")]
        public string IconClass { get; set; }
    }

    public class GanttDataSource
    {
        public int? TaskId { get; set; }
        public string TaskName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? Duration { get; set; }
        public int? Progress { get; set; }
        public string Predecessor { get; set; }
        public int? ParentId { get; set; }
        public List<IndicatorModel> Indicators { get; set; }
    }
}
