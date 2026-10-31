using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttDataSourceCollection { get; set; }

        public DateTime ViewStartDate { get; set; }

        public DateTime ViewEndDate { get; set; }

        public void OnGet()
        {
            ViewStartDate = new DateTime(2025, 12, 29);
            ViewEndDate = new DateTime(2026, 4, 27);

            GanttDataSourceCollection = GetTaskCollection();
        }

        private List<GanttDataSource> GetTaskCollection()
        {
            return new List<GanttDataSource>()
            {
                new GanttDataSource
                {
                    TaskId = 1,
                    TaskName = "Project kickoff & planning",
                    StartDate = new DateTime(2026, 1, 1),
                    EndDate = new DateTime(2026, 1, 10)
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Requirement gathering",
                    StartDate = new DateTime(2026, 1, 1),
                    Duration = 5,
                    Progress = 100,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Scope finalization",
                    StartDate = new DateTime(2026, 1, 6),
                    Duration = 4,
                    Predecessor = "2",
                    ParentId = 1
                },

                new GanttDataSource
                {
                    TaskId = 4,
                    TaskName = "Design phase",
                    StartDate = new DateTime(2026, 1, 11),
                    EndDate = new DateTime(2026, 1, 31)
                },
                new GanttDataSource
                {
                    TaskId = 5,
                    TaskName = "UI/UX design",
                    StartDate = new DateTime(2026, 1, 11),
                    Duration = 10,
                    ParentId = 4
                },
                new GanttDataSource
                {
                    TaskId = 6,
                    TaskName = "Architecture setup",
                    StartDate = new DateTime(2026, 1, 15),
                    Duration = 12,
                    ParentId = 4
                },

                new GanttDataSource
                {
                    TaskId = 7,
                    TaskName = "Development phase",
                    StartDate = new DateTime(2026, 2, 1),
                    EndDate = new DateTime(2026, 12, 15)
                },
                new GanttDataSource
                {
                    TaskId = 8,
                    TaskName = "Frontend development",
                    StartDate = new DateTime(2026, 2, 1),
                    Duration = 120,
                    Progress = 60,
                    ParentId = 7
                },
                new GanttDataSource
                {
                    TaskId = 9,
                    TaskName = "Backend development",
                    StartDate = new DateTime(2026, 2, 5),
                    Duration = 140,
                    Progress = 55,
                    ParentId = 7
                },
                new GanttDataSource
                {
                    TaskId = 10,
                    TaskName = "API integration",
                    StartDate = new DateTime(2026, 8, 1),
                    Duration = 60,
                    Predecessor = "8,9",
                    ParentId = 7
                },

                new GanttDataSource
                {
                    TaskId = 11,
                    TaskName = "Testing & bug fixing",
                    StartDate = new DateTime(2026, 12, 16),
                    EndDate = new DateTime(2027, 1, 31)
                },
                new GanttDataSource
                {
                    TaskId = 12,
                    TaskName = "Unit testing",
                    StartDate = new DateTime(2026, 12, 16),
                    Duration = 20,
                    ParentId = 11
                },
                new GanttDataSource
                {
                    TaskId = 13,
                    TaskName = "Integration testing",
                    StartDate = new DateTime(2027, 1, 5),
                    Duration = 20,
                    Predecessor = "10",
                    ParentId = 11
                },

                new GanttDataSource
                {
                    TaskId = 14,
                    TaskName = "Release",
                    StartDate = new DateTime(2027, 2, 1),
                    EndDate = new DateTime(2027, 2, 15)
                },
                new GanttDataSource
                {
                    TaskId = 15,
                    TaskName = "Beta release",
                    StartDate = new DateTime(2027, 2, 1),
                    Duration = 5,
                    ParentId = 14
                },
                new GanttDataSource
                {
                    TaskId = 16,
                    TaskName = "Production deployment",
                    StartDate = new DateTime(2027, 2, 10),
                    Duration = 2,
                    Predecessor = "15",
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

        public string? Predecessor { get; set; }

        public int? ParentId { get; set; }
    }
}