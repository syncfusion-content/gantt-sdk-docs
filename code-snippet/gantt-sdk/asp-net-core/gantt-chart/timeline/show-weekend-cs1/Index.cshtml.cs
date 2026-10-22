using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;

namespace CoreSamples.Pages
{
    public class IndexModel : PageModel
    {
        public List<GanttDataSource> GanttData { get; set; }

        public void OnGet()
        {
            GanttData = new List<GanttDataSource>()
            {

            };
        }
    }

    public class GanttDataSource
    {

    }
}
