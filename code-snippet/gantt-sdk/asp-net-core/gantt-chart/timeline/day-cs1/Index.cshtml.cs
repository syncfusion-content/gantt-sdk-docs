using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttData { get; set; }

        public void OnGet()
        {
            GanttData = new List<GanttDataSource>()
            {
            new GanttDataSource() { TaskId = 1, TaskName = "Project Initiation", StartDate = new DateTime(2019, 4, 2), EndDate = new DateTime(2019, 4, 21), IsParent = true },
            new GanttDataSource() { TaskId = 2, TaskName = "Identify Site location", StartDate = new DateTime(2019, 4, 2), Duration = 2, Progress = 50, ParentId = 1, IsParent = false },
            new GanttDataSource() { TaskId = 3, TaskName = "Perform Soil test", StartDate = new DateTime(2019, 4, 2), Duration = 2, Progress = 50, ParentId = 1, Resources = new List<int> { 2, 3, 5 }, IsParent = false },
            new GanttDataSource() { TaskId = 4, TaskName = "Soil test approval", StartDate = new DateTime(2019, 4, 2), Duration = 2, Progress = 50, Predecessor = "2FS", ParentId = 1, IsParent = false }
            };
        }
    }

    public class GanttDataSource
    {
        public int TaskId { get; set; }
        public string? TaskName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? Duration { get; set; }
        public int? Progress { get; set; }
        public string? Predecessor { get; set; }
        public int? ParentId { get; set; }
        public List<int>? Resources { get; set; }
        public bool? IsParent { get; set; }
    }
}
