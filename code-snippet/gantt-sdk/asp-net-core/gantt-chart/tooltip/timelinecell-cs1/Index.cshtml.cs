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
                    EndDate = new DateTime(2019, 4, 21)
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Identify Site location",
                    StartDate = new DateTime(2019, 4, 2),
                    Duration = 0,
                    Progress = 30,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Perform Soil test",
                    StartDate = new DateTime(2019, 4, 2),
                    Duration = 4,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 4,
                    TaskName = "Soil test approval",
                    StartDate = new DateTime(2019, 4, 2),
                    Duration = 0,
                    Progress = 30,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 5,
                    TaskName = "Project Estimation",
                    StartDate = new DateTime(2019, 4, 2),
                    EndDate = new DateTime(2019, 4, 21)
                },
                new GanttDataSource
                {
                    TaskId = 6,
                    TaskName = "Develop floor plan for estimation",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 3,
                    Progress = 30,
                    ParentId = 5
                },
                new GanttDataSource
                {
                    TaskId = 7,
                    TaskName = "List materials",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 3,
                    ParentId = 5
                },
                new GanttDataSource
                {
                    TaskId = 8,
                    TaskName = "Estimation approval",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 0,
                    ParentId = 5
                },
                new GanttDataSource
                {
                    TaskId = 9,
                    TaskName = "Sign Contract",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 1,
                    Progress = 30
                },
                new GanttDataSource
                {
                    TaskId = 10,
                    TaskName = "Project Approval and kick off",
                    StartDate = new DateTime(2019, 4, 4),
                    EndDate = new DateTime(2019, 4, 21),
                    Duration = 0
                },
                new GanttDataSource
                {
                    TaskId = 11,
                    TaskName = "Site Work",
                    StartDate = new DateTime(2019, 4, 4),
                    EndDate = new DateTime(2019, 4, 21)
                },
                new GanttDataSource
                {
                    TaskId = 12,
                    TaskName = "Clear the building site",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 2,
                    Progress = 30,
                    ParentId = 11
                },
                new GanttDataSource
                {
                    TaskId = 13,
                    TaskName = "Install temporary power service",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 2,
                    ParentId = 11
                },
                new GanttDataSource
                {
                    TaskId = 14,
                    TaskName = "Foundation",
                    StartDate = new DateTime(2019, 4, 4),
                    EndDate = new DateTime(2019, 4, 21)
                },
                new GanttDataSource
                {
                    TaskId = 15,
                    TaskName = "Excavate for foundations",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 3,
                    Progress = 30,
                    ParentId = 14
                },
                new GanttDataSource
                {
                    TaskId = 16,
                    TaskName = "Dig footer",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 2,
                    ParentId = 14
                },
                new GanttDataSource
                {
                    TaskId = 17,
                    TaskName = "Install plumbing grounds",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 4,
                    Progress = 30,
                    ParentId = 14
                },
                new GanttDataSource
                {
                    TaskId = 18,
                    TaskName = "Pour a foundation and footer with concrete",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 1,
                    ParentId = 14
                },
                new GanttDataSource
                {
                    TaskId = 19,
                    TaskName = "Cure basement walls",
                    StartDate = new DateTime(2019, 4, 4),
                    Duration = 4,
                    Progress = 30,
                    ParentId = 14
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