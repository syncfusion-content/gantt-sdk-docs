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
                },

                // Framing
                new GanttDataSource { TaskId = 20, TaskName = "Framing", StartDate = new DateTime(2019, 4, 4), EndDate = new DateTime(2019, 4, 21) },
                new GanttDataSource { TaskId = 21, TaskName = "Add load-bearing structure", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 20 },
                new GanttDataSource { TaskId = 22, TaskName = "Install floor joists", StartDate = new DateTime(2019, 4, 4), Duration = 3, ParentId = 20 },
                new GanttDataSource { TaskId = 23, TaskName = "Add ceiling joists", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 20 },
                new GanttDataSource { TaskId = 24, TaskName = "Install subfloor panels", StartDate = new DateTime(2019, 4, 4), Duration = 3, ParentId = 20 },
                new GanttDataSource { TaskId = 25, TaskName = "Frame floor walls", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 20 },
                new GanttDataSource { TaskId = 26, TaskName = "Frame floor decking", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 20 },

                // Exterior finishing
                new GanttDataSource { TaskId = 27, TaskName = "Exterior finishing", StartDate = new DateTime(2019, 4, 4), EndDate = new DateTime(2019, 4, 21) },
                new GanttDataSource { TaskId = 28, TaskName = "Cover outer walls and roof in OSB", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 27 },
                new GanttDataSource { TaskId = 29, TaskName = "Add water resistive barrier", StartDate = new DateTime(2019, 4, 4), Duration = 3, ParentId = 27 },
                new GanttDataSource { TaskId = 30, TaskName = "Install roof shingles", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 27 },
                new GanttDataSource { TaskId = 31, TaskName = "Install windows", StartDate = new DateTime(2019, 4, 4), Duration = 3, ParentId = 27 },

                // Utilities
                new GanttDataSource { TaskId = 32, TaskName = "Utilities", StartDate = new DateTime(2019, 4, 4), EndDate = new DateTime(2019, 4, 21) },
                new GanttDataSource { TaskId = 33, TaskName = "Install internal plumbing", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 32 },
                new GanttDataSource { TaskId = 34, TaskName = "Install HVAC", StartDate = new DateTime(2019, 4, 4), Duration = 3, ParentId = 32 },
                new GanttDataSource { TaskId = 35, TaskName = "Electrical utilities", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 32 },
                new GanttDataSource { TaskId = 36, TaskName = "Natural gas utilities", StartDate = new DateTime(2019, 4, 4), Duration = 3, ParentId = 32 },
                new GanttDataSource { TaskId = 37, TaskName = "Install bathroom fixtures", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 32 },

                // Interior finishing
                new GanttDataSource { TaskId = 38, TaskName = "Interior finishing", StartDate = new DateTime(2019, 4, 4), EndDate = new DateTime(2019, 4, 21) },
                new GanttDataSource { TaskId = 39, TaskName = "Install insulation", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 38 },
                new GanttDataSource { TaskId = 40, TaskName = "Install drywall panels", StartDate = new DateTime(2019, 4, 4), Duration = 3, ParentId = 38 },
                new GanttDataSource { TaskId = 41, TaskName = "Spackle", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 38 },
                new GanttDataSource { TaskId = 42, TaskName = "Apply primer", StartDate = new DateTime(2019, 4, 4), Duration = 3, ParentId = 38 },
                new GanttDataSource { TaskId = 43, TaskName = "Paint wall and ceilings", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 38 },
                new GanttDataSource { TaskId = 44, TaskName = "Install modular kitchen", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 38 },

                // Flooring
                new GanttDataSource { TaskId = 45, TaskName = "Flooring", StartDate = new DateTime(2019, 4, 4), EndDate = new DateTime(2019, 4, 21) },
                new GanttDataSource { TaskId = 46, TaskName = "Tile kitchen, bathroom and entry walls", StartDate = new DateTime(2019, 4, 4), Duration = 3, Progress = 30, ParentId = 45 },
                new GanttDataSource { TaskId = 47, TaskName = "Tile floor", StartDate = new DateTime(2019, 4, 4), Duration = 3, ParentId = 45 },

                // Final Acceptance
                new GanttDataSource { TaskId = 48, TaskName = "Final Acceptance", StartDate = new DateTime(2019, 4, 4), EndDate = new DateTime(2019, 4, 21) },
                new GanttDataSource { TaskId = 49, TaskName = "Final inspection", StartDate = new DateTime(2019, 4, 4), Duration = 2, Progress = 30, ParentId = 48 },
                new GanttDataSource { TaskId = 50, TaskName = "Cleanup for occupancy", StartDate = new DateTime(2019, 4, 4), Duration = 2, ParentId = 48 },
                new GanttDataSource { TaskId = 51, TaskName = "Property Handover", StartDate = new DateTime(2019, 4, 4), Duration = 0, ParentId = 48 }
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