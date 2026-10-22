using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttData { get; set; }

        public void OnGet()
        {
            GanttData = new List<GanttDataSource>()
            {
                new GanttDataSource() { TaskId = 1, TaskName = "Project initiation", StartDate = new DateTime(2019, 4, 2), Duration = 12, Progress = 50 },
                new GanttDataSource() { TaskId = 2, TaskName = "Identify site location", StartDate = new DateTime(2019, 4, 2), Duration = 4, Progress = 50, ParentId = 1 },
                new GanttDataSource() { TaskId = 3, TaskName = "Perform soil test", StartDate = new DateTime(2019, 4, 2), Duration = 4, Progress = 50, ParentId = 1, Predecessor = "2" },
                new GanttDataSource() { TaskId = 4, TaskName = "Soil test approval", StartDate = new DateTime(2019, 4, 2), Duration = 4, Progress = 50, ParentId = 1, Predecessor = "3" },
                new GanttDataSource() { TaskId = 5, TaskName = "Project estimation", StartDate = new DateTime(2019, 4, 2), Duration = 6, Progress = 40 },
                new GanttDataSource() { TaskId = 6, TaskName = "Develop floor plan for estimation", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 50, ParentId = 5 },
                new GanttDataSource() { TaskId = 7, TaskName = "List materials", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 50, ParentId = 5, Predecessor = "6" }
            };
        }
    }

    public class GanttDataSource
    {
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public DateTime StartDate { get; set; }
        public int? Duration { get; set; }
        public int Progress { get; set; }
        public string Predecessor { get; set; }
        public int? ParentId { get; set; }
    }
}
