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
                    TaskName = "Planning and Permits",
                    StartDate = new DateTime(2025, 4, 2),
                    EndDate = new DateTime(2025, 4, 10),
                    Duration = 7,
                    Progress = 100,
                    ConstraintType = 0
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Site Evaluation",
                    StartDate = new DateTime(2025, 4, 2),
                    EndDate = new DateTime(2025, 4, 4),
                    Duration = 2,
                    Progress = 100,
                    ParentId = 1,
                    ConstraintType = 4,
                    ConstraintDate = new DateTime(2025, 4, 2)
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Obtain Permits",
                    StartDate = new DateTime(2025, 4, 7),
                    EndDate = new DateTime(2025, 4, 9),
                    Duration = 3,
                    Progress = 100,
                    ParentId = 1,
                    Predecessor = "2FS+2days",
                    ConstraintType = 2,
                    ConstraintDate = new DateTime(2025, 4, 7)
                },
                new GanttDataSource
                {
                    TaskId = 4,
                    TaskName = "Finalize Planning",
                    StartDate = new DateTime(2025, 4, 10),
                    EndDate = new DateTime(2025, 4, 11),
                    Duration = 2,
                    Progress = 100,
                    ParentId = 1,
                    Predecessor = "3FS",
                    ConstraintType = 6,
                    ConstraintDate = new DateTime(2025, 4, 11)
                },
                new GanttDataSource
                {
                    TaskId = 5,
                    TaskName = "Site Preparation",
                    StartDate = new DateTime(2025, 4, 14),
                    EndDate = new DateTime(2025, 4, 18),
                    Duration = 5,
                    Progress = 100,
                    ConstraintType = 0
                },
                new GanttDataSource
                {
                    TaskId = 6,
                    TaskName = "Site Clearing",
                    StartDate = new DateTime(2025, 4, 14),
                    Duration = 0,
                    Progress = 100,
                    ParentId = 5,
                    ConstraintType = 1
                },
                new GanttDataSource
                {
                    TaskId = 7,
                    TaskName = "Grading and Excavation",
                    StartDate = new DateTime(2025, 4, 15),
                    EndDate = new DateTime(2025, 4, 17),
                    Duration = 3,
                    Progress = 100,
                    ParentId = 5,
                    Predecessor = "6",
                    ConstraintType = 0
                },
                new GanttDataSource
                {
                    TaskId = 8,
                    TaskName = "Foundation Work",
                    StartDate = new DateTime(2025, 4, 18),
                    EndDate = new DateTime(2025, 4, 21),
                    Duration = 4,
                    Progress = 100,
                    ParentId = 5,
                    Predecessor = "7+1",
                    ConstraintType = 4,
                    ConstraintDate = new DateTime(2025, 4, 18)
                },
                new GanttDataSource
                {
                    TaskId = 9,
                    TaskName = "Foundation and Basement",
                    StartDate = new DateTime(2025, 4, 22),
                    EndDate = new DateTime(2025, 4, 28),
                    Duration = 5,
                    Progress = 100,
                    ParentId = 5,
                    ConstraintType = 0
                },
                new GanttDataSource
                {
                    TaskId = 10,
                    TaskName = "Pour Foundation",
                    StartDate = new DateTime(2025, 4, 22),
                    EndDate = new DateTime(2025, 4, 23),
                    Duration = 2,
                    Progress = 100,
                    ParentId = 9,
                    Predecessor = "8",
                    ConstraintType = 4,
                    ConstraintDate = new DateTime(2025, 4, 22)
                },
                new GanttDataSource
                {
                    TaskId = 11,
                    TaskName = "Cure Foundation",
                    StartDate = new DateTime(2025, 4, 28),
                    EndDate = new DateTime(2025, 4, 29),
                    Duration = 2,
                    Progress = 100,
                    ParentId = 9,
                    Predecessor = "10",
                    ConstraintType = 3,
                    ConstraintDate = new DateTime(2025, 4, 29)
                },
                new GanttDataSource
                {
                    TaskId = 12,
                    TaskName = "Basement Walls",
                    StartDate = new DateTime(2025, 4, 28),
                    EndDate = new DateTime(2025, 4, 30),
                    Duration = 3,
                    Progress = 100,
                    ParentId = 9,
                    Predecessor = "11FS",
                    ConstraintType = 0
                },
                new GanttDataSource
                {
                    TaskId = 13,
                    TaskName = "Framing",
                    StartDate = new DateTime(2025, 5, 1),
                    EndDate = new DateTime(2025, 5, 7),
                    Duration = 5,
                    Progress = 100,
                    ConstraintType = 0
                },
                new GanttDataSource
                {
                    TaskId = 14,
                    TaskName = "Frame Floors",
                    StartDate = new DateTime(2025, 5, 1),
                    EndDate = new DateTime(2025, 5, 2),
                    Duration = 2,
                    Progress = 100,
                    ParentId = 13,
                    ConstraintType = 4,
                    ConstraintDate = new DateTime(2025, 5, 1)
                },
                new GanttDataSource
                {
                    TaskId = 15,
                    TaskName = "Frame Walls",
                    StartDate = new DateTime(2025, 5, 8),
                    EndDate = new DateTime(2025, 5, 9),
                    Duration = 2,
                    Progress = 100,
                    ParentId = 13,
                    Predecessor = "14FS+3",
                    ConstraintType = 2,
                    ConstraintDate = new DateTime(2025, 5, 8)
                },
                new GanttDataSource
                {
                    TaskId = 16,
                    TaskName = "Install Trusses",
                    StartDate = new DateTime(2025, 5, 7),
                    EndDate = new DateTime(2025, 5, 8),
                    Duration = 2,
                    Progress = 100,
                    ParentId = 13,
                    Predecessor = "15",
                    ConstraintType = 6,
                    ConstraintDate = new DateTime(2025, 5, 8)
                },

                // Continue similarly for TaskId 17 through 40
                // using the exact values from the Angular datasource.

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

        public string? Predecessor { get; set; }

        public int? ConstraintType { get; set; }

        public DateTime? ConstraintDate { get; set; }
    }
}