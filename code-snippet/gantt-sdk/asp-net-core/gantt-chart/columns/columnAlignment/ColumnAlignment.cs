using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttDataSourceCollection { get; set; }
        public void OnGet()
        {
            GanttDataSourceCollection = new List<GanttDataSource>()
            {
                new GanttDataSource { TaskId = 1, TaskName = "Project Initiation", StartDate = new DateTime(2023, 1, 1), EndDate = new DateTime(2023, 1, 5), Duration = 5, Progress = 30 },

                new GanttDataSource { TaskId = 2, TaskName = "Site Analysis", StartDate = new DateTime(2023, 1, 6), EndDate = new DateTime(2023, 1, 10), Duration = 4, Progress = 50, ParentId = 1 },

                new GanttDataSource { TaskId = 3, TaskName = "Soil Testing", StartDate = new DateTime(2023, 1, 11), EndDate = new DateTime(2023, 1, 14), Duration = 3, Progress = 40, ParentId = 1 },

                new GanttDataSource { TaskId = 4, TaskName = "Approval Process", StartDate = new DateTime(2023, 1, 15), EndDate = new DateTime(2023, 1, 18), Duration = 3, Progress = 60, ParentId = 1 },

                new GanttDataSource { TaskId = 5, TaskName = "Budget Estimation", StartDate = new DateTime(2023, 1, 19), EndDate = new DateTime(2023, 1, 23), Duration = 4, Progress = 70 },

                new GanttDataSource { TaskId = 6, TaskName = "Floor Plan Design", StartDate = new DateTime(2023, 1, 24), EndDate = new DateTime(2023, 1, 28), Duration = 4, Progress = 80, ParentId = 5 },

                new GanttDataSource { TaskId = 7, TaskName = "Material Listing", StartDate = new DateTime(2023, 1, 29), EndDate = new DateTime(2023, 2, 2), Duration = 4, Progress = 90, ParentId = 5 },

                new GanttDataSource { TaskId = 8, TaskName = "Final Approval", StartDate = new DateTime(2023, 2, 3), EndDate = new DateTime(2023, 2, 6), Duration = 3, Progress = 100, ParentId = 5 }
            };
        }
    }

    public class GanttDataSource
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? Duration { get; set; }
        public int? Progress { get; set; }
        public int? ParentId { get; set; }
    }
}
