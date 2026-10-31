using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttDataSourceCollection { get; set; }

        public DateTime ProjectStartDate { get; set; }

        public DateTime ProjectEndDate { get; set; }

        public void OnGet()
        {
            ProjectStartDate = new DateTime(2024, 3, 31);
            ProjectEndDate = new DateTime(2024, 4, 23);

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
                    StartDate = new DateTime(2024, 3, 31),
                    EndDate = new DateTime(2024, 4, 23)
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Identify Site location",
                    StartDate = new DateTime(2024, 4, 1),
                    Duration = 4,
                    Progress = 50,
                    Verified = true,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Perform Soil test",
                    StartDate = new DateTime(2024, 4, 2),
                    Duration = 4,
                    Progress = 50,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 4,
                    TaskName = "Soil test approval",
                    StartDate = new DateTime(2024, 4, 5),
                    Duration = 4,
                    Progress = 50,
                    Verified = true,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 5,
                    TaskName = "Project Estimation",
                    StartDate = new DateTime(2024, 4, 8),
                    EndDate = new DateTime(2024, 4, 23)
                },
                new GanttDataSource
                {
                    TaskId = 6,
                    TaskName = "Develop floor plan for estimation",
                    StartDate = new DateTime(2024, 4, 8),
                    Duration = 3,
                    Progress = 50,
                    ParentId = 5
                },
                new GanttDataSource
                {
                    TaskId = 7,
                    TaskName = "List materials",
                    StartDate = new DateTime(2024, 4, 11),
                    Duration = 3,
                    Progress = 50,
                    Verified = true,
                    ParentId = 5
                },
                new GanttDataSource
                {
                    TaskId = 8,
                    TaskName = "Estimation approval",
                    StartDate = new DateTime(2024, 4, 15),
                    Duration = 3,
                    Progress = 50,
                    Verified = true,
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

        public bool Verified { get; set; }

        public string? Predecessor { get; set; }

        public int? ParentId { get; set; }
    }
}