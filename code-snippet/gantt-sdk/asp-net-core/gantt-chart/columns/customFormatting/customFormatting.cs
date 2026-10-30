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
                new GanttDataSource { TaskID = 1, TaskName = "Project Initiation", StartDate = new DateTime(2023, 1, 1), EndDate = new DateTime(2023, 1, 5), Duration = 5, Progress = 30.1234 },
                new GanttDataSource { TaskID = 2, TaskName = "Site Analysis", StartDate = new DateTime(2023, 1, 6), EndDate = new DateTime(2023, 1, 10), Duration = 4, Progress = 50.5678 },
                new GanttDataSource { TaskID = 3, TaskName = "Soil Testing", StartDate = new DateTime(2023, 1, 11), EndDate = new DateTime(2023, 1, 14), Duration = 3, Progress = 40.0001 },
                new GanttDataSource { TaskID = 4, TaskName = "Approval Process", StartDate = new DateTime(2023, 1, 15), EndDate = new DateTime(2023, 1, 18), Duration = 3, Progress = 60.9999 },
                new GanttDataSource { TaskID = 5, TaskName = "Budget Estimation", StartDate = new DateTime(2023, 1, 19), EndDate = new DateTime(2023, 1, 23), Duration = 4, Progress = 70.4567 },
                new GanttDataSource { TaskID = 6, TaskName = "Floor Plan Design", StartDate = new DateTime(2023, 1, 24), EndDate = new DateTime(2023, 1, 28), Duration = 4, Progress = 80.8888 },
                new GanttDataSource { TaskID = 7, TaskName = "Material Listing", StartDate = new DateTime(2023, 1, 29), EndDate = new DateTime(2023, 2, 2), Duration = 4, Progress = 90.0000 },
                new GanttDataSource { TaskID = 8, TaskName = "Final Approval", StartDate = new DateTime(2023, 2, 3), EndDate = new DateTime(2023, 2, 6), Duration = 3, Progress = 100.0000 }
            };
        }
    }

    public class GanttDataSource
    {
        public int TaskID { get; set; }
        public string TaskName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? Duration { get; set; }
        public double? Progress { get; set; }
        public int? ParentID { get; set; }
    }
}