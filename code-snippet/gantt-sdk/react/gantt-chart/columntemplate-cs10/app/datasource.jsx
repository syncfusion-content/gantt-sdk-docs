export let ProjectResources = [
    { resourceID: 1, resourceName: 'Martin Tamer' },
    { resourceID: 2, resourceName: 'Rose Fuller' },
    { resourceID: 3, resourceName: 'Margaret Buchanan' },
    { resourceID: 4, resourceName: 'Fuller King' },
    { resourceID: 5, resourceName: 'Davolio Fuller' },
    { resourceID: 6, resourceName: 'Van Jack' },
    { resourceID: 7, resourceName: 'Fuller Buchanan' },
    { resourceID: 8, resourceName: 'Jack Davolio' },
    { resourceID: 9, resourceName: 'Tamer Vinet' },
    { resourceID: 10, resourceName: 'Vinet Fuller' },
    { resourceID: 11, resourceName: 'Bergs Anton' },
    { resourceID: 12, resourceName: 'Construction Supervisor' }
];


export let GanttData = [
    {
        TaskID: 1,
        TaskName: "Product Concept",
        ParentID: null,
        StartDate: new Date("2019-04-02"),
        EndDate: new Date("2019-04-21")
    },
    {
        TaskID: 2,
        TaskName: "Defining the product and its usage",
        ParentID: 1,
        StartDate: new Date("2019-04-02"),
        Duration: 3,
        Progress: 30
    },
    {
        TaskID: 3,
        TaskName: "Defining target audience",
        ParentID: 1,
        StartDate: new Date("2019-04-02"),
        Duration: 3
    },
    {
        TaskID: 4,
        TaskName: "Prepare product sketch and notes",
        ParentID: 1,
        StartDate: new Date("2019-04-02"),
        Duration: 2,
        Progress: 30,
        Predecessor: "2"
    },
    {
        TaskID: 5,
        TaskName: "Concept Approval",
        ParentID: null,
        StartDate: new Date("2019-04-02"),
        Duration: 0,
        Predecessor: "3,4",
        Indicators: [
            {
                date: "04/10/2019",
                name: "#briefing",
                title: "Product concept breifing"
            }
        ]
    },
    {
        TaskID: 6,
        TaskName: "Market Research",
        ParentID: null,
        StartDate: new Date("2019-04-02"),
        EndDate: new Date("2019-04-21")
    },
    {
        TaskID: 7,
        TaskName: "Demand Analysis",
        ParentID: 6,
        StartDate: new Date("2019-04-04"),
        EndDate: new Date("2019-04-21")
    },
    {
        TaskID: 8,
        TaskName: "Customer strength",
        ParentID: 7,
        StartDate: new Date("2019-04-04"),
        Duration: 4,
        Progress: 30,
        Predecessor: "5"
    },
    {
        TaskID: 9,
        TaskName: "Market opportunity analysis",
        ParentID: 7,
        StartDate: new Date("2019-04-04"),
        Duration: 4,
        Predecessor: "5"
    },
    {
        TaskID: 10,
        TaskName: "Competitor Analysis",
        ParentID: 6,
        StartDate: new Date("2019-04-04"),
        Duration: 4,
        Progress: 30,
        Predecessor: "7, 8"
    },
    {
        TaskID: 11,
        TaskName: "Product strength analsysis",
        ParentID: 6,
        StartDate: new Date("2019-04-04"),
        Duration: 4,
        Predecessor: "9"
    },
    {
        TaskID: 12,
        TaskName: "Research complete",
        ParentID: 6,
        StartDate: new Date("2019-04-04"),
        Duration: 0,
        Predecessor: "10",
        Indicators: [
            {
                date: "04/20/2019",
                name: "#meeting",
                title: "1st board of directors meeting"
            }
        ]
    },
    {
        TaskID: 13,
        TaskName: "Product Design and Development",
        ParentID: null,
        StartDate: new Date("2019-04-04"),
        EndDate: new Date("2019-04-21")
    },
    {
        TaskID: 14,
        TaskName: "Functionality design",
        ParentID: 13,
        StartDate: new Date("2019-04-04"),
        Duration: 3,
        Progress: 30,
        Predecessor: "12"
    },
    {
        TaskID: 15,
        TaskName: "Quality design",
        ParentID: 13,
        StartDate: new Date("2019-04-04"),
        Duration: 3,
        Predecessor: "12"
    },
    {
        TaskID: 16,
        TaskName: "Define Reliability",
        ParentID: 13,
        StartDate: new Date("2019-04-04"),
        Duration: 2,
        Progress: 30,
        Predecessor: "15"
    },
    {
        TaskID: 17,
        TaskName: "Identifying raw materials",
        ParentID: 13,
        StartDate: new Date("2019-04-04"),
        Duration: 2,
        Predecessor: "15"
    },
    {
        TaskID: 18,
        TaskName: "Define cost plan",
        ParentID: 13,
        StartDate: new Date("2019-04-04"),
        EndDate: new Date("2019-04-21")
    },
    {
        TaskID: 19,
        TaskName: "Manufacturing cost",
        ParentID: 18,
        StartDate: new Date("2019-04-04"),
        Duration: 2,
        Progress: 30,
        Predecessor: "17"
    },
    {
        TaskID: 20,
        TaskName: "Selling cost",
        ParentID: 18,
        StartDate: new Date("2019-04-04"),
        Duration: 2,
        Predecessor: "17"
    },
    {
        TaskID: 21,
        TaskName: "Development of the final design",
        ParentID: 13,
        StartDate: new Date("2019-04-04"),
        EndDate: new Date("2019-04-21")
    },
    {
        TaskID: 22,
        TaskName: "Defining dimensions and package volume",
        ParentID: 21,
        StartDate: new Date("2019-04-04"),
        Duration: 2,
        Progress: 30,
        Predecessor: "19,20"
    },
    {
        TaskID: 23,
        TaskName: "Develop design to meet industry standards",
        ParentID: 21,
        StartDate: new Date("2019-04-04"),
        Duration: 2,
        Predecessor: "22"
    },
    {
        TaskID: 24,
        TaskName: "Include all the details",
        ParentID: 21,
        StartDate: new Date("2019-04-04"),
        Duration: 3,
        Predecessor: "23"
    },
    {
        TaskID: 25,
        TaskName: "CAD Computer-aided design",
        ParentID: 13,
        StartDate: new Date("2019-04-04"),
        Duration: 3,
        Progress: 30,
        Predecessor: "24"
    },
    {
        TaskID: 26,
        TaskName: "CAM Computer-aided manufacturing",
        ParentID: 13,
        StartDate: new Date("2019-04-04"),
        Duration: 3,
        Predecessor: "25"
    },
    {
        TaskID: 27,
        TaskName: "Design complete",
        ParentID: 13,
        StartDate: new Date("2019-04-04"),
        Duration: 0,
        Predecessor: "26",
        Indicators: [
            {
                date: "05/18/2019",
                name: "#meeting",
                title: "2nd board of directors meeting"
            }
        ]
    },
    {
        TaskID: 28,
        TaskName: "Prototype Testing",
        ParentID: null,
        StartDate: new Date("2019-04-04"),
        Duration: 4,
        Progress: 30,
        Predecessor: "27"
    },
    {
        TaskID: 29,
        TaskName: "Include feedback",
        ParentID: null,
        StartDate: new Date("2019-04-04"),
        Duration: 4,
        Predecessor: "28ss"
    },
    {
        TaskID: 30,
        TaskName: "Manufacturing",
        ParentID: null,
        StartDate: new Date("2019-04-04"),
        Duration: 5,
        Progress: 30,
        Predecessor: "28,29"
    },
    {
        TaskID: 31,
        TaskName: "Assembling materials to finsihed goods",
        ParentID: null,
        StartDate: new Date("2019-04-04"),
        Duration: 5,
        Predecessor: "30"
    },
    {
        TaskID: 32,
        TaskName: "Feedback and Testing",
        ParentID: null,
        StartDate: new Date("2019-04-04"),
        EndDate: new Date("2019-04-21")
    },
    {
        TaskID: 33,
        TaskName: "Internal testing and feedback",
        ParentID: 32,
        StartDate: new Date("2019-04-04"),
        Duration: 3,
        Progress: 45,
        Predecessor: "31"
    },
    {
        TaskID: 34,
        TaskName: "Customer testing and feedback",
        ParentID: 32,
        StartDate: new Date("2019-04-04"),
        Duration: 3,
        Progress: 50,
        Predecessor: "33"
    },
    {
        TaskID: 35,
        TaskName: "Final Product Development",
        ParentID: null,
        StartDate: new Date("2019-04-04"),
        EndDate: new Date("2019-04-21")
    },
    {
        TaskID: 36,
        TaskName: "Important improvements",
        ParentID: 35,
        StartDate: new Date("2019-04-04"),
        Duration: 4,
        Progress: 30,
        Predecessor: "34"
    },
    {
        TaskID: 37,
        TaskName: "Address any unforeseen issues",
        ParentID: 35,
        StartDate: new Date("2019-04-04"),
        Duration: 4,
        Progress: 30,
        Predecessor: "36ss"
    },
    {
        TaskID: 38,
        TaskName: "Final Product",
        ParentID: null,
        StartDate: new Date("2019-04-04"),
        EndDate: new Date("2019-04-21")
    },
    {
        TaskID: 39,
        TaskName: "Branding product",
        ParentID: 38,
        StartDate: new Date("2019-04-04"),
        Duration: 4,
        Predecessor: "37"
    },
    {
        TaskID: 40,
        TaskName: "Marketing and presales",
        ParentID: 38,
        StartDate: new Date("2019-04-04"),
        Duration: 4,
        Progress: 30,
        Predecessor: "39"
    }
];