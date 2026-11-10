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
            List<GanttDataSource> virtualData = new List<GanttDataSource>();

            List<GanttDataSource> tempData = new List<GanttDataSource>()
            {
                new GanttDataSource
                {
                    TaskId = 1,
                    TaskName = "Product concept",
                    StartDate = new DateTime(2019, 4, 2),
                    EndDate = new DateTime(2019, 4, 21),
                    ParentId = 0
                },
                new GanttDataSource
                {
                    TaskId = 2,
                    TaskName = "Defining the product and its usage",
                    StartDate = new DateTime(2019, 4, 2),
                    Duration = 3,
                    Progress = 30,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 3,
                    TaskName = "Defining target audience",
                    StartDate = new DateTime(2019, 4, 2),
                    Duration = 3,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 4,
                    TaskName = "Prepare product sketch and notes",
                    StartDate = new DateTime(2019, 4, 5),
                    Duration = 2,
                    Progress = 30,
                    ParentId = 1
                },
                new GanttDataSource
                {
                    TaskId = 5,
                    TaskName = "Concept approval",
                    StartDate = new DateTime(2019, 4, 8),
                    Duration = 0,
                    ParentId = 0
                }
            };

            for (int i = 0; i < 50; i++)
            {
                int x = virtualData.Count + 1;

                virtualData.Add(new GanttDataSource
                {
                    TaskId = x,
                    TaskName = $"Project {i + 1}"
                });

                foreach (var item in tempData)
                {
                    virtualData.Add(new GanttDataSource
                    {
                        TaskId = item.TaskId + x,
                        TaskName = item.TaskName,
                        StartDate = item.StartDate,
                        EndDate = item.EndDate,
                        Duration = item.Duration,
                        Progress = item.Progress,
                        ParentId = item.ParentId + x
                    });
                }
            }

            return virtualData;
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