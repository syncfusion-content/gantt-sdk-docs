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
            GanttData = new List<GanttDataSource>
            {
            new GanttDataSource { TaskId = 1, TaskName = "Project Initiation", Progress = 100, Status = "Completed" },
            new GanttDataSource { TaskId = 2, TaskName = "Kickoff Meeting", StartDate = new DateTime(2025, 3, 3), Duration = 1, Progress = 100, Status = "Completed", ParentId = 1 },
            new GanttDataSource { TaskId = 3, TaskName = "Requirements Gathering", StartDate = new DateTime(2025, 3, 4), Duration = 3, Progress = 100, Status = "Completed", ParentId = 1 },
            new GanttDataSource { TaskId = 4, TaskName = "System Design", Progress = 100, Status = "In Progress" },
            new GanttDataSource { TaskId = 5, TaskName = "Architecture Design", StartDate = new DateTime(2025, 3, 7), Duration = 4, Progress = 90, Status = "In Progress", ParentId = 4 },
            new GanttDataSource { TaskId = 6, TaskName = "Database Design", StartDate = new DateTime(2025, 3, 12), Duration = 3, Progress = 70, Status = "In Progress", ParentId = 4 },
            new GanttDataSource { TaskId = 7, TaskName = "Development Phase", Progress = 82, Status = "In Progress" },
            new GanttDataSource { TaskId = 8, TaskName = "Backend Development", StartDate = new DateTime(2025, 3, 15), Duration = 5, Progress = 70, Status = "In Progress", ParentId = 7 },
            new GanttDataSource { TaskId = 9, TaskName = "Frontend Development", StartDate = new DateTime(2025, 3, 20), Duration = 5, Progress = 55, Status = "In Progress", ParentId = 7 },
            new GanttDataSource { TaskId = 10, TaskName = "API Integration", StartDate = new DateTime(2025, 3, 25), Duration = 4, Progress = 60, Status = "In Progress", ParentId = 7 },
            new GanttDataSource { TaskId = 11, TaskName = "Testing Cycle", Progress = 48, Status = "In Progress" },
            new GanttDataSource { TaskId = 12, TaskName = "Test Planning", StartDate = new DateTime(2025, 3, 29), Duration = 3, Progress = 90, Status = "In Progress", ParentId = 11 },
            new GanttDataSource { TaskId = 13, TaskName = "Test Execution", StartDate = new DateTime(2025, 4, 1), Duration = 4, Progress = 60, Status = "In Progress", ParentId = 11 },
            new GanttDataSource { TaskId = 14, TaskName = "Bug Fixing", StartDate = new DateTime(2025, 4, 5), Duration = 4, Progress = 30, Status = "In Progress", ParentId = 11 },
            new GanttDataSource { TaskId = 15, TaskName = "Deployment & Go-Live", Progress = 0, Status = "Not Started" },
            new GanttDataSource { TaskId = 16, TaskName = "Final Release", StartDate = new DateTime(2025, 4, 9), Duration = 3, Progress = 0, Status = "Not Started", ParentId = 15 }
            };
        }
    }

    public class GanttDataSource
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public DateTime? StartDate { get; set; }
        public int? Duration { get; set; }
        public int? Progress { get; set; }
        public string Status { get; set; }
        public int? ParentId { get; set; }
    }
}
