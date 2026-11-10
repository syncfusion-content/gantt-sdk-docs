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
                    TaskName = "Project Initiation",
                    StartDate = new DateTime(2019, 4, 2),
                    EndDate = new DateTime(2019, 4, 21),
                    Approved = true
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Identify Site location",
                    StartDate = new DateTime(2019, 4, 2),
                    Duration = 4,
                    Progress = 50,
                    Approved = false,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Perform Soil test",
                    StartDate = new DateTime(2019, 4, 2),
                    Duration = 4,
                    Progress = 50,
                    Approved = true,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 4,
                    TaskName = "Soil test approval",
                    StartDate = new DateTime(2019, 4, 2),
                    Duration = 4,
                    Progress = 50,
                    Approved = false,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 5,
                    TaskName = "Project Estimation",
                    StartDate = new DateTime(2019, 4, 2),
                    EndDate = new DateTime(2019, 4, 21),
                    Approved = true
                },
                new GanttDataSource
                {
                    TaskId = 6,
                    TaskName = "Develop floor plan for estimation",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 3,
                    Progress = 50,
                    Approved = false,
                    ParentId = 5
                },
                new GanttDataSource
                {
                    TaskId = 7,
                    TaskName = "List materials",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 3,
                    Progress = 50,
                    Approved = true,
                    ParentId = 5
                },
                new GanttDataSource
                {
                    TaskId = 8,
                    TaskName = "Estimation approval",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 3,
                    Progress = 50,
                    Approved = true,
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
        public double? Progress { get; set; }
        public bool Approved { get; set; }
        public int? ParentId { get; set; }
    }
}