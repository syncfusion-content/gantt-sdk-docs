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
                    TaskName = "Product Design",
                    StartDate = new DateTime(2026, 4, 2),
                    EndDate = new DateTime(2026, 4, 21)
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Requirement analysis"
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Resource Planning",
                    StartDate = new DateTime(2026, 4, 3),
                    Duration = 5
                },
                new GanttDataSource
                {
                    TaskId = 4,
                    TaskName = "Design Review"
                },
                new GanttDataSource
                {
                    TaskId = 5,
                    TaskName = "Document Preparation"
                }
            };
        }
    }

    public class GanttDataSource
    {
        public int TaskId { get; set; }
        public string? TaskName { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public int? Duration { get; set; }
    }
}