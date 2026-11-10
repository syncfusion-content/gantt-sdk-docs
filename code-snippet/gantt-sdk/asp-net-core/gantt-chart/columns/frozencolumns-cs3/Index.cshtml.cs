using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttData { get; set; }
        public List<ResourceDataSource> ResourceCollection { get; set; }

        public void OnGet()
        {
            GanttData = new List<GanttDataSource>
            {
            new GanttDataSource { TaskId = 1, TaskName = "Project Initiation", StartDate = new DateTime(2025, 3, 1), EndDate = new DateTime(2025, 3, 10), Duration = 8, Progress = 100, Resources = new List<int> { 1 } },
            new GanttDataSource { TaskId = 2, TaskName = "Requirements Gathering", StartDate = new DateTime(2025, 3, 1), EndDate = new DateTime(2025, 3, 5), Duration = 4, Progress = 100, Resources = new List<int> { 5 }, ParentId = 1 },
            new GanttDataSource { TaskId = 3, TaskName = "Feasibility Study", StartDate = new DateTime(2025, 3, 3), EndDate = new DateTime(2025, 3, 7), Duration = 4, Progress = 100, Resources = new List<int> { 2 }, ParentId = 1, Predecessor = "2FS" },
            new GanttDataSource { TaskId = 4, TaskName = "Stakeholder Approval", StartDate = new DateTime(2025, 3, 8), EndDate = new DateTime(2025, 3, 8), Duration = 0, Progress = 100, Resources = new List<int> { 3 }, ParentId = 1, Predecessor = "3FS" },
            new GanttDataSource { TaskId = 5, TaskName = "Planning Phase", StartDate = new DateTime(2025, 3, 10), EndDate = new DateTime(2025, 3, 20), Duration = 9, Progress = 90, Resources = new List<int> { 1, 5 }, Predecessor = "4FS" },
            new GanttDataSource { TaskId = 6, TaskName = "Project Plan Creation", StartDate = new DateTime(2025, 3, 10), EndDate = new DateTime(2025, 3, 14), Duration = 4, Progress = 100, Resources = new List<int> { 6 }, ParentId = 5 },
            new GanttDataSource { TaskId = 7, TaskName = "Resource Allocation", StartDate = new DateTime(2025, 3, 12), EndDate = new DateTime(2025, 3, 17), Duration = 5, Progress = 85, Resources = new List<int> { 1, 2 }, ParentId = 5, Predecessor = "6FS" },
            new GanttDataSource { TaskId = 8, TaskName = "Risk Assessment", StartDate = new DateTime(2025, 3, 15), EndDate = new DateTime(2025, 3, 19), Duration = 4, Progress = 70, Resources = new List<int> { 1 }, ParentId = 5, Predecessor = "6FS" },
            new GanttDataSource { TaskId = 9, TaskName = "Design & Development", StartDate = new DateTime(2025, 3, 20), EndDate = new DateTime(2025, 4, 18), Duration = 28, Progress = 65, Resources = new List<int> { 2, 3 }, Predecessor = "5FS" },
            new GanttDataSource { TaskId = 10, TaskName = "UI/UX Design", StartDate = new DateTime(2025, 3, 20), EndDate = new DateTime(2025, 3, 28), Duration = 8, Progress = 90, Resources = new List<int> { 4 }, ParentId = 9 },
            new GanttDataSource { TaskId = 11, TaskName = "Wireframes & Prototypes", StartDate = new DateTime(2025, 3, 20), EndDate = new DateTime(2025, 3, 26), Duration = 6, Progress = 85, Resources = new List<int> { 4 }, ParentId = 10 },
            new GanttDataSource { TaskId = 12, TaskName = "Backend Development", StartDate = new DateTime(2025, 3, 25), EndDate = new DateTime(2025, 4, 10), Duration = 14, Progress = 60, Resources = new List<int> { 2 }, ParentId = 9, Predecessor = "11FS" },
            new GanttDataSource { TaskId = 13, TaskName = "API Design", StartDate = new DateTime(2025, 3, 25), EndDate = new DateTime(2025, 3, 29), Duration = 4, Progress = 100, Resources = new List<int> { 2 }, ParentId = 12 },
            new GanttDataSource { TaskId = 14, TaskName = "Frontend Development", StartDate = new DateTime(2025, 3, 28), EndDate = new DateTime(2025, 4, 12), Duration = 14, Progress = 55, Resources = new List<int> { 3 }, ParentId = 9, Predecessor = "11FS" },
            new GanttDataSource { TaskId = 15, TaskName = "Testing Phase", StartDate = new DateTime(2025, 4, 10), EndDate = new DateTime(2025, 4, 24), Duration = 12, Progress = 40, Resources = new List<int> { 6 }, Predecessor = "14FS" },
            new GanttDataSource { TaskId = 16, TaskName = "Unit Testing", StartDate = new DateTime(2025, 4, 10), EndDate = new DateTime(2025, 4, 15), Duration = 5, Progress = 60, Resources = new List<int> { 6 }, ParentId = 15 },
            new GanttDataSource { TaskId = 17, TaskName = "Integration Testing", StartDate = new DateTime(2025, 4, 16), EndDate = new DateTime(2025, 4, 21), Duration = 5, Progress = 30, Resources = new List<int> { 6 }, ParentId = 15, Predecessor = "16FS" },
            new GanttDataSource { TaskId = 18, TaskName = "Deployment", StartDate = new DateTime(2025, 4, 24), EndDate = new DateTime(2025, 4, 24), Duration = 0, Progress = 0, Resources = new List<int> { 5 }, Predecessor = "17FS" },
            new GanttDataSource { TaskId = 19, TaskName = "Project Closure", StartDate = new DateTime(2025, 4, 25), EndDate = new DateTime(2025, 4, 29), Duration = 4, Progress = 0, Resources = new List<int> { 1 }, Predecessor = "18FS" },
            new GanttDataSource { TaskId = 20, TaskName = "Final Documentation", StartDate = new DateTime(2025, 4, 25), EndDate = new DateTime(2025, 4, 28), Duration = 3, Progress = 0, Resources = new List<int> { 1, 3 }, ParentId = 19 }
            };
            ResourceCollection = new List<ResourceDataSource>
            {
                new ResourceDataSource { ResourceId = 1, ResourceName = "Martin Tamer" },
                new ResourceDataSource { ResourceId = 2, ResourceName = "Rose Fuller" },
                new ResourceDataSource { ResourceId = 3, ResourceName = "Margaret Buchanan" },
                new ResourceDataSource { ResourceId = 4, ResourceName = "Fuller King" },
                new ResourceDataSource { ResourceId = 5, ResourceName = "Davolio Fuller" },
                new ResourceDataSource { ResourceId = 6, ResourceName = "Van Jack" }
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
        public string Predecessor { get; set; }
        public int? ParentId { get; set; }
        public List<int> Resources { get; set; }
    }

    public class ResourceDataSource
    {
        public int ResourceId { get; set; }
        public string ResourceName { get; set; }
    }
}
