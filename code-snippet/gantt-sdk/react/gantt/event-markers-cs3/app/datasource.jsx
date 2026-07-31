export const projectNewData = [
    {
        TaskID: 1,
        TaskName: "Product Concept",
        StartDate: new Date('2019-04-02'),
        EndDate: new Date('2019-04-21')
    },
    {
        TaskID: 2,
        TaskName: "Defining the product and its usage",
        StartDate: new Date('2019-04-02'),
        Duration: 3,
        Progress: 30,
        ParentID: 1
    },
    {
        TaskID: 3,
        TaskName: "Defining target audience",
        StartDate: new Date('2019-04-02'),
        Duration: 3,
        ParentID: 1
    },
    {
        TaskID: 4,
        TaskName: "Prepare product sketch and notes",
        StartDate: new Date('2019-04-02'),
        Duration: 2,
        Predecessor: "2",
        Progress: 30,
        ParentID: 1
    },
    {
        TaskID: 5,
        TaskName: "Concept Approval",
        StartDate: new Date('2019-04-02'),
        Duration: 0,
        Predecessor: "3,4",
        Indicators: [
            { date: new Date('2019-04-10'), name: "#briefing", title: "Product concept briefing" }
        ]
    },
    {
        TaskID: 6,
        TaskName: "Market Research",
        StartDate: new Date('2019-04-02'),
        EndDate: new Date('2019-04-20')
    },
    {
        TaskID: 7,
        TaskName: "Demand Analysis",
        StartDate: new Date('2019-04-04'),
        EndDate: new Date('2019-04-20'),
        ParentID: 6
    },
    {
        TaskID: 8,
        TaskName: "Customer strength",
        StartDate: new Date('2019-04-04'),
        Duration: 4,
        Predecessor: "5",
        Progress: 30,
        ParentID: 7
    },
    {
        TaskID: 9,
        TaskName: "Market opportunity analysis",
        StartDate: new Date('2019-04-04'),
        Duration: 4,
        Predecessor: "5",
        ParentID: 7
    },
    {
        TaskID: 10,
        TaskName: "Competitor Analysis",
        StartDate: new Date('2019-04-04'),
        Duration: 4,
        Predecessor: "7,8",
        Progress: 30,
        ParentID: 6
    },
    {
        TaskID: 11,
        TaskName: "Product strength analysis",
        StartDate: new Date('2019-04-04'),
        Duration: 4,
        Predecessor: "9",
        ParentID: 6
    },
    {
        TaskID: 12,
        TaskName: "Research complete",
        StartDate: new Date('2019-04-20'),
        Duration: 0,
        Predecessor: "10",
        Indicators: [
            { date: new Date('2019-04-20'), name: "#meeting", title: "1st board of directors meeting" }
        ],
        ParentID: 6
    },
    {
        TaskID: 13,
        TaskName: "Product Design and Development",
        StartDate: new Date('2019-04-21'),
        EndDate: new Date('2019-05-18')
    },
    {
        TaskID: 14,
        TaskName: "Functionality design",
        StartDate: new Date('2019-04-21'),
        Duration: 3,
        Progress: 30,
        Predecessor: "12",
        ParentID: 13
    },
    {
        TaskID: 15,
        TaskName: "Quality design",
        StartDate: new Date('2019-04-21'),
        Duration: 3,
        Predecessor: "12",
        ParentID: 13
    },
    {
        TaskID: 16,
        TaskName: "Define Reliability",
        StartDate: new Date('2019-04-24'),
        Duration: 2,
        Progress: 30,
        Predecessor: "15",
        ParentID: 13
    },
    {
        TaskID: 17,
        TaskName: "Identifying raw materials",
        StartDate: new Date('2019-04-24'),
        Duration: 2,
        Predecessor: "15",
        ParentID: 13
    },
    {
        TaskID: 18,
        TaskName: "Define cost plan",
        StartDate: new Date('2019-04-26'),
        EndDate: new Date('2019-05-18'),
        ParentID: 13
    },
    {
        TaskID: 19,
        TaskName: "Manufacturing cost",
        StartDate: new Date('2019-04-26'),
        Duration: 2,
        Progress: 30,
        Predecessor: "17",
        ParentID: 18
    },
    {
        TaskID: 20,
        TaskName: "Selling cost",
        StartDate: new Date('2019-04-26'),
        Duration: 2,
        Predecessor: "17",
        ParentID: 18
    },
    {
        TaskID: 21,
        TaskName: "Development of the final design",
        StartDate: new Date('2019-04-28'),
        EndDate: new Date('2019-05-18'),
        ParentID: 13
    },
    {
        TaskID: 22,
        TaskName: "Defining dimensions and package volume",
        StartDate: new Date('2019-04-28'),
        Duration: 2,
        Progress: 30,
        Predecessor: "19,20",
        ParentID: 21
    },
    {
        TaskID: 23,
        TaskName: "Develop design to meet industry standards",
        StartDate: new Date('2019-04-30'),
        Duration: 2,
        Predecessor: "22",
        ParentID: 21
    },
    {
        TaskID: 24,
        TaskName: "Include all the details",
        StartDate: new Date('2019-05-02'),
        Duration: 3,
        Predecessor: "23",
        ParentID: 21
    },
    {
        TaskID: 25,
        TaskName: "CAD Computer-aided design",
        StartDate: new Date('2019-05-05'),
        Duration: 3,
        Progress: 30,
        Predecessor: "24",
        ParentID: 13
    },
    {
        TaskID: 26,
        TaskName: "CAM Computer-aided manufacturing",
        StartDate: new Date('2019-05-08'),
        Duration: 3,
        Predecessor: "25",
        ParentID: 13
    },
    {
        TaskID: 27,
        TaskName: "Design complete",
        StartDate: new Date('2019-05-11'),
        Duration: 0,
        Predecessor: "26",
        Indicators: [
            { date: new Date('2019-05-18'), name: "#meeting", title: "2nd board of directors meeting" }
        ],
        ParentID: 13
    },
    {
        TaskID: 28,
        TaskName: "Prototype Testing",
        StartDate: new Date('2019-05-19'),
        Duration: 4,
        Progress: 30,
        Predecessor: "27"
    },
    {
        TaskID: 29,
        TaskName: "Include feedback",
        StartDate: new Date('2019-05-23'),
        Duration: 4,
        Predecessor: "28",
        ParentID: 32
    },
    {
        TaskID: 30,
        TaskName: "Manufacturing",
        StartDate: new Date('2019-05-27'),
        Duration: 5,
        Progress: 30,
        Predecessor: "28,29"
    },
    {
        TaskID: 31,
        TaskName: "Assembling materials to finished goods",
        StartDate: new Date('2019-06-01'),
        Duration: 5,
        Predecessor: "30"
    },
    {
        TaskID: 32,
        TaskName: "Feedback and Testing",
        StartDate: new Date('2019-05-23'),
        EndDate: new Date('2019-06-05')
    },
    {
        TaskID: 33,
        TaskName: "Internal testing and feedback",
        StartDate: new Date('2019-05-23'),
        Duration: 3,
        Progress: 45,
        Predecessor: "31",
        ParentID: 32
    },
    {
        TaskID: 34,
        TaskName: "Customer testing and feedback",
        StartDate: new Date('2019-05-26'),
        Duration: 3,
        Progress: 50,
        Predecessor: "33",
        ParentID: 32
    },
    {
        TaskID: 35,
        TaskName: "Final Product Development",
        StartDate: new Date('2019-05-29'),
        EndDate: new Date('2019-06-05')
    },
    {
        TaskID: 36,
        TaskName: "Important improvements",
        StartDate: new Date('2019-05-29'),
        Duration: 4,
        Progress: 30,
        Predecessor: "34",
        ParentID: 35
    },
    {
        TaskID: 37,
        TaskName: "Address any unforeseen issues",
        StartDate: new Date('2019-06-02'),
        Duration: 4,
        Progress: 30,
        Predecessor: "36",
        ParentID: 35
    },
    {
        TaskID: 38,
        TaskName: "Final Product",
        StartDate: new Date('2019-06-20'),
        EndDate: new Date('2019-06-27')
    },
    {
        TaskID: 39,
        TaskName: "Branding product",
        StartDate: new Date('2019-06-20'),
        Duration: 4,
        Predecessor: "37",
        ParentID: 38
    },
    {
        TaskID: 40,
        TaskName: "Marketing and presales",
        StartDate: new Date('2019-06-24'),
        Duration: 4,
        Progress: 30,
        Predecessor: "39",
        ParentID: 38
    }
];