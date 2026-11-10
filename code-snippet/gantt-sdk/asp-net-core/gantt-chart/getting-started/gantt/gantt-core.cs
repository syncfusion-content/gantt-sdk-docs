using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttDataSourceCollection { get; set; }

        public void OnGet()
        {
            GanttDataSourceCollection = GetTaskCollection();
        }

        private List<GanttDataSource> GetTaskCollection()
        {
            return new List<GanttDataSource>()
            {
                new GanttDataSource
                {
                    TaskId = 1,
                    TaskName = "Project initiation",
                    StartDate = new DateTime(2024, 4, 1),
                    EndDate = new DateTime(2024, 4, 15)
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Identify site location",
                    StartDate = new DateTime(2024, 4, 1),
                    Duration = 4,
                    Progress = 50,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Perform soil test",
                    StartDate = new DateTime(2024, 4, 1),
                    Duration = 4,
                    Progress = 50,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 4,
                    TaskName = "Soil test approval",
                    StartDate = new DateTime(2024, 4, 1),
                    Duration = 3,
                    Progress = 50,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 5,
                    TaskName = "Project estimation",
                    StartDate = new DateTime(2024, 4, 15),
                    EndDate = new DateTime(2024, 4, 25)
                },
                new GanttDataSource
                {
                    TaskId = 6,
                    TaskName = "Develop floor plan",
                    StartDate = new DateTime(2024, 4, 15),
                    Duration = 5,
                    Progress = 50,
                    ParentId = 5
                },
                new GanttDataSource
                {
                    TaskId = 7,
                    TaskName = "List materials",
                    StartDate = new DateTime(2024, 4, 15),
                    Duration = 5,
                    Progress = 50,
                    ParentId = 5
                }
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
