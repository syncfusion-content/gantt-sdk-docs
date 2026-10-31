using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttDataSourceCollection { get; set; }
        public List<ProjectResource> ProjectResources { get; set; }

        public void OnGet()
        {
            GanttDataSourceCollection = GetTaskCollection();
            ProjectResources = GetResources();
        }

        private List<ProjectResource> GetResources()
        {
            return new List<ProjectResource>()
            {
                new ProjectResource { ResourceId = 1, ResourceName = "Project Manager" },
                new ProjectResource { ResourceId = 2, ResourceName = "Software Analyst" },
                new ProjectResource { ResourceId = 3, ResourceName = "Developer" },
                new ProjectResource { ResourceId = 4, ResourceName = "Testing Engineer" }
            };
        }

        private List<GanttDataSource> GetTaskCollection()
        {
            return new List<GanttDataSource>()
            {
                new GanttDataSource
                {
                    TaskId = 1,
                    TaskName = "Project Schedule",
                    StartDate = new DateTime(2019, 2, 8),
                    EndDate = new DateTime(2019, 3, 15)
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Planning",
                    StartDate = new DateTime(2019, 2, 8),
                    EndDate = new DateTime(2019, 2, 12),
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Plan timeline",
                    StartDate = new DateTime(2019, 2, 8),
                    EndDate = new DateTime(2019, 2, 12),
                    Duration = 5,
                    Progress = 100,
                    ParentId = 2,
                    ResourceId = new int[] { 1 }
                },
                new GanttDataSource
                {
                    TaskId = 4,
                    TaskName = "Plan budget",
                    StartDate = new DateTime(2019, 2, 8),
                    EndDate = new DateTime(2019, 2, 12),
                    Duration = 5,
                    Progress = 100,
                    ParentId = 2,
                    ResourceId = new int[] { 1 }
                },
                new GanttDataSource
                {
                    TaskId = 5,
                    TaskName = "Allocate resources",
                    StartDate = new DateTime(2019, 2, 8),
                    EndDate = new DateTime(2019, 2, 12),
                    Duration = 5,
                    Progress = 100,
                    ParentId = 2,
                    ResourceId = new int[] { 1 }
                },
                new GanttDataSource
                {
                    TaskId = 6,
                    TaskName = "Planning complete",
                    StartDate = new DateTime(2019, 2, 10),
                    EndDate = new DateTime(2019, 2, 10),
                    Duration = 0,
                    ParentId = 2,
                    Predecessor = "3FS,4FS,5FS"
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
        public string Predecessor { get; set; }
        public int[] ResourceId { get; set; }
    }

    public class ProjectResource
    {
        public int ResourceId { get; set; }
        public string ResourceName { get; set; }
    }
}