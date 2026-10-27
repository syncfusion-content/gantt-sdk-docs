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
            List<GanttDataSource> records = new List<GanttDataSource>();
            Random random = new Random();
            for (int i = 1; i <= 5000; i++)
            {
                records.Add(new GanttDataSource()
                {
                    TaskId = i,
                    TaskName = "Task " + i,
                    StartDate = new DateTime(2019, 04, 02).AddDays(i % 30),
                    EndDate = new DateTime(2019, 04, 02).AddDays((i % 30) + (i % 5) + 1),
                    Duration = (i % 5) + 1,
                    Progress = i % 100,
                    ParentId = (i > 15 && i % 16 != 0) ? i - (i % 16) : (int?)null
                });
            }
            return records;
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
