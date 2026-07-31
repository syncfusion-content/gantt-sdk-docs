define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.projectNewData = [
        {
            TaskID: 1,
            TaskName: 'Product Concept',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Defining the product and its usage', StartDate: new Date('04/02/2019'), Duration: 3, Progress: 30 },
                { TaskID: 3, TaskName: 'Defining target audience', StartDate: new Date('04/02/2019'), Duration: 3 },
                {
                    TaskID: 4, TaskName: 'Prepare product sketch and notes', StartDate: new Date('04/02/2019'), Duration: 2,
                    Predecessor: '2', Progress: 30
                },
            ]
        },
        {
            TaskID: 5, TaskName: 'Concept Approval', StartDate: new Date('04/02/2019'), Duration: 0, Predecessor: '3,4',
            Indicators: [
                {
                    'date': '04/10/2019',
                    'name': '#briefing',
                    'title': 'Product concept breifing',
                }
            ]
        },
        {
            TaskID: 6,
            TaskName: 'Market Research',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 7,
                    TaskName: 'Demand Analysis',
                    StartDate: new Date('04/04/2019'),
                    EndDate: new Date('04/21/2019'),
                    subtasks: [
                        {
                            TaskID: 8, TaskName: 'Customer strength', StartDate: new Date('04/04/2019'), Duration: 4,
                            Predecessor: '5', Progress: 30
                        },
                        { TaskID: 9, TaskName: 'Market opportunity analysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '5' }
                    ]
                },
                {
                    TaskID: 10, TaskName: 'Competitor Analysis', StartDate: new Date('04/04/2019'), Duration: 4,
                    Predecessor: '7, 8', Progress: 30
                },
                { TaskID: 11, TaskName: 'Product strength analsysis', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '9' },
                {
                    TaskID: 12, TaskName: 'Research complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '10',
                    Indicators: [
                        {
                            'date': '04/20/2019',
                            'name': '#meeting',
                            'title': '1st board of directors meeting',
                        }
                    ]
                }
            ]
        },
        {
            TaskID: 13,
            TaskName: 'Product Design and Development',
            StartDate: new Date('04/04/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 14, TaskName: 'Functionality design', StartDate: new Date('04/04/2019'),
                    Duration: 3, Progress: 30, Predecessor: '12'
                },
                { TaskID: 15, TaskName: 'Quality design', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '12' },
                { TaskID: 16, TaskName: 'Define Reliability', StartDate: new Date('04/04/2019'), Duration: 2, Progress: 30, Predecessor: '15' },
                { TaskID: 17, TaskName: 'Identifying raw materials', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '15' },
                {
                    TaskID: 18,
                    TaskName: 'Define cost plan',
                    StartDate: new Date('04/04/2019'),
                    EndDate: new Date('04/21/2019'),
                    subtasks: [
                        {
                            TaskID: 19, TaskName: 'Manufacturing cost', StartDate: new Date('04/04/2019'),
                            Duration: 2, Progress: 30, Predecessor: '17'
                        },
                        { TaskID: 20, TaskName: 'Selling cost', StartDate: new Date('04/04/2019'), Duration: 2, Predecessor: '17' }
                    ]
                },
                {
                    TaskID: 21,
                    TaskName: 'Development of the final design',
                    StartDate: new Date('04/04/2019'),
                    EndDate: new Date('04/21/2019'),
                    subtasks: [
                        {
                            TaskID: 22, TaskName: 'Defining dimensions and package volume', StartDate: new Date('04/04/2019'),
                            Duration: 2, Progress: 30, Predecessor: '19,20'
                        },
                        {
                            TaskID: 23, TaskName: 'Develop design to meet industry standards', StartDate: new Date('04/04/2019'),
                            Duration: 2, Predecessor: '22'
                        },
                        { TaskID: 24, TaskName: 'Include all the details', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '23' }
                    ]
                },
                {
                    TaskID: 25, TaskName: 'CAD Computer-aided design', StartDate: new Date('04/04/2019'),
                    Duration: 3, Progress: 30, Predecessor: '24'
                },
                { TaskID: 26, TaskName: 'CAM Computer-aided manufacturing', StartDate: new Date('04/04/2019'), Duration: 3, Predecessor: '25' },
                {
                    TaskID: 27, TaskName: 'Design complete', StartDate: new Date('04/04/2019'), Duration: 0, Predecessor: '26',
                    Indicators: [
                        {
                            'date': '05/18/2019',
                            'name': '#meeting',
                            'title': '2nd board of directors meeting',
                        }
                    ]
                }
            ]
        },
        { TaskID: 28, TaskName: 'Prototype Testing', StartDate: new Date('04/04/2019'), Duration: 4, Progress: 30, Predecessor: '27' },
        { TaskID: 29, TaskName: 'Include feedback', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '28ss' },
        { TaskID: 30, TaskName: 'Manufacturing', StartDate: new Date('04/04/2019'), Duration: 5, Progress: 30, Predecessor: '28,29' },
        { TaskID: 31, TaskName: 'Assembling materials to finsihed goods', StartDate: new Date('04/04/2019'), Duration: 5, Predecessor: '30' },
        {
            TaskID: 32,
            TaskName: 'Feedback and Testing',
            StartDate: new Date('04/04/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 33, TaskName: 'Internal testing and feedback', StartDate: new Date('04/04/2019'),
                    Duration: 3, Progress: 45, Predecessor: '31'
                },
                {
                    TaskID: 34, TaskName: 'Customer testing and feedback', StartDate: new Date('04/04/2019'),
                    Duration: 3, Progress: 50, Predecessor: '33'
                }
            ]
        },
        {
            TaskID: 35,
            TaskName: 'Final Product Development',
            StartDate: new Date('04/04/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                {
                    TaskID: 36, TaskName: 'Important improvements', StartDate: new Date('04/04/2019'),
                    Duration: 4, Progress: 30, Predecessor: '34'
                },
                {
                    TaskID: 37, TaskName: 'Address any unforeseen issues', StartDate: new Date('04/04/2019'),
                    Duration: 4, Progress: 30, Predecessor: '36ss'
                }
            ]
        },
        {
            TaskID: 38,
            TaskName: 'Final Product',
            StartDate: new Date('04/04/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 39, TaskName: 'Branding product', StartDate: new Date('04/04/2019'), Duration: 4, Predecessor: '37' },
                {
                    TaskID: 40, TaskName: 'Marketing and presales', StartDate: new Date('04/04/2019'),
                    Duration: 4, Progress: 30, Predecessor: '39'
                }
            ]
        }
    ];
    exports.editingResources = [
        { resourceId: 1, resourceName: 'Martin Tamer' },
        { resourceId: 2, resourceName: 'Rose Fuller' },
        { resourceId: 3, resourceName: 'Margaret Buchanan' },
        { resourceId: 4, resourceName: 'Fuller King' },
        { resourceId: 5, resourceName: 'Davolio Fuller' },
        { resourceId: 6, resourceName: 'Van Jack' },
        { resourceId: 7, resourceName: 'Fuller Buchanan' },
        { resourceId: 8, resourceName: 'Jack Davolio' },
        { resourceId: 9, resourceName: 'Tamer Vinet' },
        { resourceId: 10, resourceName: 'Vinet Fuller' },
        { resourceId: 11, resourceName: 'Bergs Anton' },
        { resourceId: 12, resourceName: 'Construction Supervisor' }
    ];
    var indicatorImage = "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";

    exports.editingData = [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            Indicators: [
          
                {
                    'date': '04/11/2019',
                    'iconClass': 'e-btn-icon e-notes-info e-icons e-icon-left e-gantt e-notes-info::before',
                    'name': 'Indicator title',
                    'base64':indicatorImage,
                }
            ],
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 90 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 40  },
                { TaskID: 4, Predecessor: '3FS', TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 10 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/10/2019'),
            Indicators: [
          
                {
                    'date': '04/13/2019',
                    'iconClass': 'e-btn-icon e-notes-info e-icons e-icon-left e-gantt e-notes-info::before',
                    'name': 'Indicator title',
                    'base64':indicatorImage,
                }
            ],
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 85 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 15 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 70 }
            ]
        },
    ];
    exports.remoteData = [
        {
            TaskID: 1,
            TaskName: 'Germination',
            StartDate: new Date('03/01/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Dry seed (caryopsis)', StartDate: new Date('03/01/2019'), Duration: 0 },
                { TaskID: 3, TaskName: 'Seed imbibition complete', StartDate: new Date('03/01/2019'), Duration: 3, Predecessor: '2FS' },
                { TaskID: 4, TaskName: 'Radicle emerged from caryopsis', StartDate: new Date('03/04/2019'), Duration: 2, Predecessor: '3FS' },
                {
                    TaskID: 5, TaskName: 'Coleoptile emerged from caryopsis', StartDate: new Date('03/06/2019'),
                    Duration: 2, Predecessor: '4FS'
                },
                {
                    TaskID: 6, TaskName: 'Emergence: coleoptile penetrates soil surface (cracking stage)',
                    StartDate: new Date('03/08/2019'), Duration: 2, Predecessor: '5FS'
                },
            ]
        },
        {
            TaskID: 7,
            TaskName: 'Leaf development',
            StartDate: new Date('03/10/2019'),
            subtasks: [
                { TaskID: 8, TaskName: 'First leaf through coleoptile', StartDate: new Date('03/10/2019'), Duration: 1, Predecessor: '6FS' },
                { TaskID: 9, TaskName: 'First leaf unfolded', StartDate: new Date('03/11/2019'), Duration: 1, Predecessor: '8FS' },
                { TaskID: 10, TaskName: '3 leaves unfolded', StartDate: new Date('03/12/2019'), Duration: 2, Predecessor: '9FS' },
                { TaskID: 11, TaskName: '9 or more leaves unfolded', StartDate: new Date('03/14/2019'), Duration: 5, Predecessor: '10FS' },
            ]
        },
        {
            TaskID: 12,
            TaskName: 'Tillering',
            StartDate: new Date('03/18/2019'),
            subtasks: [
                {
                    TaskID: 13, TaskName: 'Beginning of tillering: first tiller detectable',
                    StartDate: new Date('03/18/2019'), Duration: 0, Predecessor: '11FS'
                },
                { TaskID: 14, TaskName: '2 tillers detectable', StartDate: new Date('03/19/2019'), Duration: 3, Predecessor: '13FS' },
                { TaskID: 15, TaskName: '3 tillers detectable', StartDate: new Date('03/22/2019'), Duration: 3, Predecessor: '14FS' },
                {
                    TaskID: 16, TaskName: 'Maximum no. of tillers detectable', StartDate: new Date('03/25/2019'),
                    Duration: 6, Predecessor: '15FS'
                },
                { TaskID: 17, TaskName: 'End of tillering', StartDate: new Date('03/30/2019'), Duration: 0, Predecessor: '16FS' },
            ]
        },
        {
            TaskID: 18,
            TaskName: 'Stem elongation',
            StartDate: new Date('03/30/2019'),
            subtasks: [
                {
                    TaskID: 19,
                    TaskName: 'Beginning of stem elongation: pseudostem and tillers erect, first internode begins to elongate,' +
                        'top of inflorescence at least 1 cm above tillering node',
                    StartDate: new Date('03/30/2019'),
                    Duration: 0,
                    Predecessor: '17FS'
                },
                {
                    TaskID: 20, TaskName: 'First node at least 1 cm above tillering node', StartDate: new Date('03/31/2019'),
                    Duration: 1, Predecessor: '19FS'
                },
                {
                    TaskID: 21, TaskName: 'Node 3 at least 2 cm above node 2', StartDate: new Date('04/01/2019'),
                    Duration: 2, Predecessor: '20FS'
                },
                {
                    TaskID: 22, TaskName: 'Flag leaf just visible, still rolled', StartDate: new Date('04/03/2019'),
                    Duration: 4, Predecessor: '21FS'
                },
                {
                    TaskID: 23, TaskName: 'Flag leaf stage: flag leaf fully unrolled, ligule just visible', StartDate: new Date('04/07/2019'),
                    Duration: 2, Predecessor: '22FS'
                },
            ]
        },
        {
            TaskID: 24,
            TaskName: 'Booting',
            StartDate: new Date('04/09/2019'),
            subtasks: [
                {
                    TaskID: 25, TaskName: 'Early boot stage: flag leaf sheath extending', StartDate: new Date('04/09/2019'),
                    Duration: 2, Predecessor: '23FS'
                },
                {
                    TaskID: 26, TaskName: 'Mid boot stage: flag leaf sheath just visibly swollen', StartDate: new Date('04/11/2019'),
                    Duration: 2, Predecessor: '25FS'
                },
                {
                    TaskID: 27, TaskName: 'Late boot stage: flag leaf sheath swollen', StartDate: new Date('04/13/2019'),
                    Duration: 2, Predecessor: '26FS'
                },
                { TaskID: 28, TaskName: 'Flag leaf sheath opening', StartDate: new Date('04/15/2019'), Duration: 2, Predecessor: '27FS' },
                {
                    TaskID: 29, TaskName: 'First awns visible (in awned forms only)', StartDate: new Date('04/17/2019'),
                    Duration: 2, Predecessor: '28FS'
                },
            ]
        },
        {
            TaskID: 30,
            TaskName: 'Inflorescence emergence, heading',
            StartDate: new Date('04/18/2019'),
            subtasks: [
                {
                    TaskID: 31, TaskName: 'Beginning of heading: tip of inflorescence emerged from sheath, first spikelet just visible',
                    StartDate: new Date('04/18/2019'), Duration: 0, Predecessor: '29FS'
                },
                { TaskID: 32, TaskName: '20% of inflorescence emerged', StartDate: new Date('04/19/2019'), Duration: 3, Predecessor: '31FS' },
                { TaskID: 33, TaskName: '40% of inflorescence emerged', StartDate: new Date('04/22/2019'), Duration: 2, Predecessor: '32FS' },
                {
                    TaskID: 34, TaskName: 'Middle of heading: half of inflorescence emerged', StartDate: new Date('04/23/2019'),
                    Duration: 0, Predecessor: '33FS'
                },
                { TaskID: 35, TaskName: '60% of inflorescence emerged', StartDate: new Date('04/24/2019'), Duration: 2, Predecessor: '34FS' },
                { TaskID: 36, TaskName: '80% of inflorescence emerged', StartDate: new Date('04/26/2019'), Duration: 3, Predecessor: '35FS' },
                {
                    TaskID: 37, TaskName: 'End of heading: inflorescence fully emerged', StartDate: new Date('04/28/2019'),
                    Duration: 0, Predecessor: '36FS'
                },
            ]
        },
        {
            TaskID: 38,
            TaskName: 'Flowering, anthesis',
            StartDate: new Date('04/28/2019'),
            subtasks: [
                {
                    TaskID: 39, TaskName: 'Beginning of flowering: first anthers visible', StartDate: new Date('04/28/2019'),
                    Duration: 0, Predecessor: '37FS'
                },
                {
                    TaskID: 40, TaskName: 'Full flowering: 50% of anthers mature', StartDate: new Date('04/29/2019'),
                    Duration: 5, Predecessor: '39FS'
                },
                {
                    TaskID: 41, TaskName: 'spikelet have completed flowering', StartDate: new Date('05/04/2019'),
                    Duration: 5, Predecessor: '40FS'
                },
                { TaskID: 42, TaskName: 'End of flowering', StartDate: new Date('05/08/2019'), Duration: 0, Predecessor: '41FS' },
            ]
        },
        {
            TaskID: 43,
            TaskName: 'Development of fruit',
            StartDate: new Date('05/08/2019'),
            subtasks: [
                {
                    TaskID: 44, TaskName: 'Watery ripe: first grains have reached half their final size',
                    StartDate: new Date('05/08/2019'), Duration: 0, Predecessor: '42FS'
                },
                { TaskID: 45, TaskName: 'Early milk', StartDate: new Date('05/09/2019'), Duration: 3, Predecessor: '44FS' },
                {
                    TaskID: 46, TaskName: 'Medium milk: grain content milky, grains reached final size,still green',
                    StartDate: new Date('05/12/2019'), Duration: 3, Predecessor: '45FS'
                },
                { TaskID: 47, TaskName: 'Late milk', StartDate: new Date('05/15/2019'), Duration: 2, Predecessor: '46FS' },
            ]
        },
        {
            TaskID: 48,
            TaskName: 'Ripening',
            StartDate: new Date('05/17/2019'),
            subtasks: [
                { TaskID: 49, TaskName: 'Early dough', StartDate: new Date('05/17/2019'), Duration: 6, Predecessor: '47FS' },
                {
                    TaskID: 50, TaskName: 'Soft dough: grain content soft but dry. Fingernail impression not held',
                    StartDate: new Date('05/23/2019'), Duration: 2, Predecessor: '49FS'
                },
                {
                    TaskID: 51, TaskName: 'Hard dough: grain content solid. Fingernail impression held',
                    StartDate: new Date('05/25/2019'), Duration: 2, Predecessor: '50FS'
                },
                {
                    TaskID: 52, TaskName: 'Fully ripe: grain hard, difficult to divide with thumbnail',
                    StartDate: new Date('05/27/2019'), Duration: 2, Predecessor: '51FS'
                },
            ]
        },
        {
            TaskID: 53,
            TaskName: 'Senescence',
            StartDate: new Date('05/29/2019'),
            subtasks: [
                {
                    TaskID: 54, TaskName: 'Over-ripe: grain very hard, cannot be dented by thumbnail',
                    StartDate: new Date('05/29/2019'), Duration: 3, Predecessor: '52FS'
                },
                { TaskID: 55, TaskName: 'Grains loosening in day-time', StartDate: new Date('06/01/2019'), Duration: 1, Predecessor: '54FS' },
                { TaskID: 56, TaskName: 'Plant dead and collapsing', StartDate: new Date('06/02/2019'), Duration: 4, Predecessor: '55FS' },
                { TaskID: 57, TaskName: 'Harvested product', StartDate: new Date('06/06/2019'), Duration: 2, Predecessor: '56FS' },
            ]
        },
    ];
    exports.filteredData = [
        {
            TaskID: 1,
            TaskName: 'Launch and flight to lunar orbit',
            StartDate: new Date('07/16/1969'),
            subtasks: [
                {
                    TaskID: 2, TaskName: 'Apollo 11 blasts off from launch pad', StartDate: new Date('07/16/1969 03:32:00 AM'),
                    EndDate: new Date('07/16/1969 03:32:00 AM'), Duration: 0,
                },
                {
                    TaskID: 3, TaskName: 'Entry to Earth’s orbit', StartDate: new Date('07/16/1969 03:32:00 AM'),
                    EndDate: new Date('07/16/1969 03:44:00 AM'), Predecessor: '2FS'
                },
                {
                    TaskID: 4, TaskName: 'Travelling in earth’s orbit', StartDate: new Date('07/16/1969 03:44:00 AM'),
                    EndDate: new Date('07/16/1969 04:22:13 AM'), Predecessor: '3FS'
                },
                {
                    TaskID: 5, TaskName: 'Trajectory change toward the Moon', StartDate: new Date('07/16/1969 04:22:13 AM'),
                    EndDate: new Date('07/16/1969 04:52:00 AM'), Predecessor: '4FS'
                },
                {
                    TaskID: 6, TaskName: 'extraction maneuver performed', StartDate: new Date('07/16/1969 04:52:00 AM'),
                    EndDate: new Date('07/16/1969 04:52:00 AM'), Predecessor: '5FS'
                },
                {
                    TaskID: 7, TaskName: 'Travelling toward moon and entering into lunar orbit', StartDate: new Date('07/16/1969 04:52:00 AM'),
                    EndDate: new Date('07/16/1969 04:21:50 PM'), Predecessor: '6FS'
                },
                {
                    TaskID: 8, TaskName: 'Midcourse correction, sharpening the course and testing the engine',
                    StartDate: new Date('07/16/1969 11:22:00 PM'), EndDate: new Date('07/17/1969 05:21:50 AM')
                },
                {
                    TaskID: 9, TaskName: 'Reached half the distance spanning between earth and moon',
                    StartDate: new Date('07/17/1969 05:22:00 AM'), EndDate: new Date('07/17/1969 08:00:50 PM')
                },
                {
                    TaskID: 10, TaskName: 'Reached 3/4th distance spanning between earth and moon',
                    StartDate: new Date('07/17/1969 8:02:00 PM'), EndDate: new Date('07/18/1969 04:21:50 PM')
                },
                {
                    TaskID: 11, TaskName: 'Reached distance 45000 miles from moon',
                    StartDate: new Date('07/18/1969 11:22:00 PM'), EndDate: new Date('07/19/1969 05:21:50 PM')
                },
            ]
        },
        {
            TaskID: 12,
            TaskName: 'Lunar descent',
            StartDate: new Date('07/19/1969 05:21:50 PM'),
            subtasks: [
                {
                    TaskID: 13, TaskName: 'Lunar Orbiting (30 orbits)', StartDate: new Date('07/19/1969 05:21:50 PM'),
                    EndDate: new Date('07/20/1969 12:52:00 AM'), Predecessor: '11FS'
                },
                {
                    TaskID: 14, TaskName: 'Landing site identified', StartDate: new Date('07/20/1969 12:52:00 AM'),
                    EndDate: new Date('07/20/1969 12:52:00 AM'), Predecessor: '13FS'
                },
                {
                    TaskID: 15, TaskName: 'Eagle separated from Columbia.', StartDate: new Date('07/20/1969 05:44:00 PM'),
                    EndDate: new Date('07/20/1969 05:44:00 PM')
                },
                {
                    TaskID: 16, TaskName: 'Eagle’s decent to Moon', StartDate: new Date('07/20/1969 05:44:00 PM'),
                    EndDate: new Date('07/20/1969 08:16:40 PM'), Predecessor: '15FS'
                }
            ]
        },
        {
            TaskID: 17,
            TaskName: 'Landing',
            StartDate: new Date('07/20/1969 08:17:40 PM'),
            subtasks: [
                {
                    TaskID: 18, TaskName: 'Eagle’s touch down', StartDate: new Date('07/20/1969 08:17:40 PM'),
                    EndDate: new Date('07/20/1969 08:17:40 PM')
                },
                {
                    TaskID: 19, TaskName: 'Radio communication and Performing post landing checklist',
                    StartDate: new Date('07/20/1969 08:17:40 PM'), EndDate: new Date('07/20/1969 11:43:00 PM'), Predecessor: '18FS'
                },
                {
                    TaskID: 20, TaskName: 'Preparations for EVA (Extra Vehicular Activity)',
                    StartDate: new Date('07/20/1969 11:43:00 PM'), EndDate: new Date('07/21/1969 02:39:33 AM'), Predecessor: '19FS'
                },
                {
                    TaskID: 21, TaskName: 'Hatch open and climbing down the moon', StartDate: new Date('07/21/1969 02:39:33 AM'),
                    EndDate: new Date('07/21/1969 02:56:15 AM'), Predecessor: '20FS'
                },
                {
                    TaskID: 22, TaskName: 'Armstrong stepped down on the moon', StartDate: new Date('07/21/1969 02:56:15 AM'),
                    EndDate: new Date('07/21/1969 03:11:00 AM'), Predecessor: '21FS'
                },
            ]
        },
        {
            TaskID: 23,
            TaskName: 'Lunar surface operations',
            StartDate: new Date('07/21/1969'),
            subtasks: [
                {
                    TaskID: 24, TaskName: 'Soil sample collections', StartDate: new Date('07/21/1969 02:56:15 AM'),
                    EndDate: new Date('07/21/1969 03:11:00 AM')
                },
                {
                    TaskID: 25, TaskName: 'Aldrin joined Armstrong', StartDate: new Date('07/21/1969 03:11:00 AM'),
                    EndDate: new Date('07/21/1969 03:41:00 AM'), Predecessor: '24FS'
                },
                {
                    TaskID: 26, TaskName: 'planted the Lunar Flag Assembly', StartDate: new Date('07/21/1969 03:41:00 AM'),
                    EndDate: new Date('07/21/1969 03:46:00 AM'), Predecessor: '25FS'
                },
                {
                    TaskID: 27, TaskName: 'President Richard Nixon’s telephone-radio transmission ',
                    StartDate: new Date('07/21/1969 03:48:00 AM'), EndDate: new Date('07/21/1969 03:51:00 AM')
                },
                {
                    TaskID: 28, TaskName: 'Collect rock samples, photos and other mission controls',
                    StartDate: new Date('07/21/1969 03:52:00 AM'), EndDate: new Date('07/21/1969 04:50:00 AM')
                },
            ]
        },
        {
            TaskID: 29,
            TaskName: 'Lunar ascent',
            StartDate: new Date('07/21/1969'),
            subtasks: [
                {
                    TaskID: 30, TaskName: 'Climbing the eagle to ascent', StartDate: new Date('07/21/1969 04:51:00 AM'),
                    EndDate: new Date('07/21/1969 05:00:00 AM')
                },
                {
                    TaskID: 31, TaskName: 'Hatch closing', StartDate: new Date('07/21/1969 05:01:00 AM'),
                    EndDate: new Date('07/21/1969 05:01:00 AM'), Predecessor: '30FS'
                },
                {
                    TaskID: 32, TaskName: 'Final housekeeping', StartDate: new Date('07/21/1969 05:02:00 AM'),
                    EndDate: new Date('07/21/1969 08:00:00 AM')
                },
                {
                    TaskID: 33, TaskName: 'Resting of astronauts', StartDate: new Date('07/21/1969 08:00:00 AM'),
                    EndDate: new Date('07/21/1969 03:00:00 PM'), Predecessor: '32FS'
                },
                {
                    TaskID: 34, TaskName: 'Preparation for lift off and Ascent engine started', StartDate: new Date('07/21/1969 03:00:00 PM'),
                    EndDate: new Date('07/21/1969 05:54:00 PM'), Predecessor: '33FS'
                },
                {
                    TaskID: 35, TaskName: 'Eagle lifted off', StartDate: new Date('07/21/1969 05:54:00 PM'),
                    EndDate: new Date('07/21/1969 05:54:00 PM'), Predecessor: '34FS'
                },
                {
                    TaskID: 36, TaskName: 'Eagle’s travel toward Columbia', StartDate: new Date('07/21/1969 05:54:00 PM'),
                    EndDate: new Date('07/21/1969 09:23:00 PM'), Predecessor: '35FS'
                },
            ]
        },
        {
            TaskID: 37,
            TaskName: 'Return',
            StartDate: new Date('07/21/1969 09:24:00 PM'),
            subtasks: [
                {
                    TaskID: 38, TaskName: 'Eagle docked with Columbia', StartDate: new Date('07/21/1969 09:24:00 PM'),
                    EndDate: new Date('07/21/1969 09:35:00 PM')
                },
                {
                    TaskID: 39, TaskName: 'Eagle’s ascent stage jettisoned into lunar orbit', StartDate: new Date('07/21/1969 09:35:00 PM'),
                    EndDate: new Date('07/21/1969 11:41:00 PM'), Predecessor: '38FS'
                },
            ]
        },
        {
            TaskID: 40,
            TaskName: 'Decent toward earth  and Splashdown',
            StartDate: new Date('07/21/1969'),
            subtasks: [
                {
                    TaskID: 41, TaskName: 'Spacecraft reaches 1/4th distance spanning between moon and earth',
                    StartDate: new Date('07/21/1969 11:50:00 PM'), EndDate: new Date('07/22/1969 04:40:00 PM')
                },
                {
                    TaskID: 42, TaskName: 'Spacecraft travels to midway point of journey',
                    StartDate: new Date('07/22/1969 04:40:00 PM'), EndDate: new Date('07/23/1969 04:00:00 PM'), Predecessor: '41FS'
                },
                {
                    TaskID: 43, TaskName: 'Spacecraft travels to 3/4th point of journey', StartDate: new Date('07/23/1969 04:40:00 PM'),
                    EndDate: new Date('07/24/1969 10:00:00 AM'), Predecessor: '42FS'
                },
                {
                    TaskID: 44, TaskName: 'Crew prepares for splashdown', StartDate: new Date('07/24/1969 11:47:00 AM'),
                    EndDate: new Date('07/24/1969 04:20:00 PM')
                },
                {
                    TaskID: 45, TaskName: 'Command and service modules separates', StartDate: new Date('07/24/1969 04:20:00 PM'),
                    EndDate: new Date('07/24/1969 04:35:00 PM'), Predecessor: '44FS'
                },
                {
                    TaskID: 46, TaskName: 'Command module re-enters the Earth’s atmosphere', StartDate: new Date('07/24/1969 04:35:00 PM'),
                    EndDate: new Date('07/24/1969 04:50:00 PM'), Predecessor: '45FS'
                },
                {
                    TaskID: 47, TaskName: 'Spacecraft splashes near USS hornet', StartDate: new Date('07/24/1969 04:51:00 PM'),
                    EndDate: new Date('07/24/1969 04:51:00 PM')
                },
            ]
        }
    ];
    exports.customizedData = [
        {
            TaskId: 1, TaskName: '90th Academy awards kicks-off',
            StartDate: new Date('03/05/2015 06:00:00 PM'), EndDate: new Date('03/05/2015 06:00:00 PM'), Duration: 0,
        },
        {
            TaskId: 2, TaskName: 'Oscar moments', Predecessor: '1FS', column3: 'Jimmy kimmel hosts the show',
            StartDate: new Date('03/05/2015 06:00:00 PM'), EndDate: new Date('03/05/2015 06:15:00 PM')
        },
        {
            TaskId: 3, TaskName: 'Actor in a supporting role', Predecessor: '2FS',
            StartDate: new Date('03/05/2015 06:16:00 PM'), EndDate: new Date('03/05/2015 06:25:00 PM'),
            Winner: 'Sam Rockwell', Movie: 'Three Billboards Outside Ebbing, Missouri.'
        },
        {
            TaskId: 4, TaskName: 'Hair and makeup', Movie: 'Darkest Hour', Predecessor: '3FS',
            StartDate: new Date('03/05/2015 06:26:00 PM'), EndDate: new Date('03/05/2015 06:32:00 PM')
        },
        {
            TaskId: 5, TaskName: 'Costume design', Winner: 'Mark Bridges', Movie: 'Phantom Thread', Predecessor: '4FS',
            StartDate: new Date('03/05/2015 06:33:00 PM'), EndDate: new Date('03/05/2015 06:40:00 PM')
        },
        {
            TaskId: 6, TaskName: 'Documentary feature', Winner: 'Bryan Fogel', Movie: ' Icarus', Predecessor: '5FS',
            StartDate: new Date('03/05/2015 06:41:00 PM'), EndDate: new Date('03/05/2015 06:58:00 PM')
        },
        {
            TaskId: 7, TaskName: 'Best sound editing and sound mixing', Winner: 'Richard King and Alex Gibson', Movie: 'Dunkirk',
            StartDate: new Date('03/05/2015 06:59:00 PM'), EndDate: new Date('03/05/2015 07:10:00 PM'), Predecessor: '6FS'
        },
        {
            TaskId: 8, TaskName: 'Production design', Movie: 'The Shape of Water', Predecessor: '7FS',
            StartDate: new Date('03/05/2015 07:11:00 PM'), EndDate: new Date('03/05/2015 07:15:00 PM')
        },
        {
            TaskId: 9, TaskName: 'Oscar performance', column3: 'Second performance of the night is "Remember Me" from Coco',
            StartDate: new Date('03/05/2015 07:16:00 PM'), EndDate: new Date('03/05/2015 07:23:00 PM'), Predecessor: '8FS'
        },
        {
            TaskId: 10, TaskName: 'Best foreign language film goes', Movie: 'A Fantastic Woman', Predecessor: '9FS',
            StartDate: new Date('03/05/2015 07:24:00 PM'), EndDate: new Date('03/05/2015 07:29:00 PM')
        },
        {
            TaskId: 11, TaskName: 'Best supporting actress', Winner: 'Allison Janney', Movie: 'I, Tonya',
            StartDate: new Date('03/05/2015 07:30:00 PM'), EndDate: new Date('03/05/2015 07:35:00 PM'), Predecessor: '10FS'
        },
        {
            TaskId: 12, TaskName: 'Best animated short', Winner: 'Kobe Bryant', Movie: 'Dear Basketball',
            StartDate: new Date('03/05/2015 07:36:00 PM'), EndDate: new Date('03/05/2015 07:45:00 PM'), Predecessor: '11FS'
        },
        {
            TaskId: 13, TaskName: 'Award for best animated feature.', Movie: 'Coco', Predecessor: '12FS',
            StartDate: new Date('03/05/2015 07:46:00 PM'), EndDate: new Date('03/05/2015 07:52:00 PM')
        },
        {
            TaskId: 14, TaskName: 'Best visual effects.', Movie: 'Blade Runner 2049', Predecessor: '13FS',
            StartDate: new Date('03/05/2015 07:53:00 PM'), EndDate: new Date('03/05/2015 07:56:00 PM')
        },
        {
            TaskId: 15, TaskName: 'Achievement in film editing', Movie: 'Dunkirk', Predecessor: '14FS',
            StartDate: new Date('03/05/2015 07:57:00 PM'), EndDate: new Date('03/05/2015 07:59:00 PM')
        },
        {
            TaskId: 16, TaskName: 'Oscar moments', column3: 'Jimmy Kimmel surprises moviegoers along with celebrities',
            StartDate: new Date('03/05/2015 08:00:00 PM'), EndDate: new Date('03/05/2015 08:09:00 PM'), Predecessor: '15FS'
        },
        {
            TaskId: 17, TaskName: 'Best documentary short', Movie: 'Heaven is a Traffic Jam on the 405', Predecessor: '16FS',
            StartDate: new Date('03/05/2015 08:10:00 PM'), EndDate: new Date('03/05/2015 08:12:00 PM')
        },
        {
            TaskId: 18, TaskName: 'Best live action short film', Movie: 'The Silent Child', Predecessor: '17FS',
            StartDate: new Date('03/05/2015 08:13:00 PM'), EndDate: new Date('03/05/2015 08:15:00 PM')
        },
        {
            TaskId: 19, TaskName: 'Oscar performance',
            column3: 'Jimmy Kimmel surprCommon and Andra Day performs "Stand Up for Something" by "Marshall"',
            StartDate: new Date('03/05/2015 08:16:00 PM'), EndDate: new Date('03/05/2015 08:25:00 PM'), Predecessor: '18FS'
        },
        {
            TaskId: 20, TaskName: 'Oscar moments',
            column3: 'The Oscars are showcasing the #MeToo and #TimesUp movements with a montage and interviews with actors and filmmakers',
            StartDate: new Date('03/05/2015 08:26:00 PM'), EndDate: new Date('03/05/2015 08:29:00 PM'), Predecessor: '19FS'
        },
        {
            TaskId: 21, TaskName: 'Oscar for best adapted screenplay', Winner: 'James Ivory', Movie: 'Call Me By Your Name',
            StartDate: new Date('03/05/2015 08:30:00 PM'), EndDate: new Date('03/05/2015 08:35:00 PM'), Predecessor: '20FS'
        },
        {
            TaskId: 22, TaskName: 'Oscar for best original screenplay', Winner: 'Jordan Peele', Movie: 'Get Out',
            StartDate: new Date('03/05/2015 08:36:00 PM'), EndDate: new Date('03/05/2015 08:44:00 PM'), Predecessor: '21FS'
        },
        {
            TaskId: 23, TaskName: 'Oscar moments',
            column3: 'Who’s trending on Twitter at the Oscars? Actors Timothée Chalamet, Chadwick Boseman,' +
                'Tom Holland, Lupita Nyong’o and Adam Rippon.',
            StartDate: new Date('03/05/2015 08:40:00 PM'), EndDate: new Date('03/05/2015 08:45:00 PM'), Predecessor: '22FS'
        },
        {
            TaskId: 24, TaskName: 'Best cinematography', Winner: 'Roger A. Deakins', Movie: 'Blade Runner 2049',
            StartDate: new Date('03/05/2015 08:46:00 PM'), EndDate: new Date('03/05/2015 08:48:00 PM'), Predecessor: '23FS'
        },
        {
            TaskId: 25, TaskName: 'Oscar performance',
            column3: 'Keala Settle performs the nominated song "This is Me" from "The Greatest Showman".',
            StartDate: new Date('03/05/2015 08:49:00 PM'), EndDate: new Date('03/05/2015 08:54:00 PM'), Predecessor: '24FS'
        },
        {
            TaskId: 26, TaskName: 'Best original score', Movie: 'The Shape of Water', Predecessor: '25FS',
            StartDate: new Date('03/05/2015 08:55:00 PM'), EndDate: new Date('03/05/2015 08:59:00 PM')
        },
        {
            TaskId: 27, TaskName: 'Award for original song', Winner: 'Remember Me', Movie: 'Coco', Predecessor: '26FS',
            StartDate: new Date('03/05/2015 09:00:00 PM'), EndDate: new Date('03/05/2015 09:07:00 PM')
        },
        {
            TaskId: 28, TaskName: 'Oscar moments', column3: 'Time to pay tribute to those in the cinema world we lost last year',
            StartDate: new Date('03/05/2015 09:05:00 PM'), EndDate: new Date('03/05/2015 09:11:00 PM'), Predecessor: '27FS'
        },
        {
            TaskId: 29, TaskName: 'Oscar for best director', Winner: 'Guillermo del Toro', Movie: 'The Shape of Water',
            StartDate: new Date('03/05/2015 09:12:00 PM'), EndDate: new Date('03/05/2015 09:19:00 PM'), Predecessor: '28FS'
        },
        {
            TaskId: 30, TaskName: 'Best actor in a leading role', Winner: 'Gary Oldman', Movie: 'The Shape of Water',
            StartDate: new Date('03/05/2015 09:20:00 PM'), EndDate: new Date('03/05/2015 09:29:00 PM'), Predecessor: '29FS'
        },
        {
            TaskId: 31, TaskName: 'Best leading actress', Winner: 'Frances McDormand', Movie: 'Three Billboards Outside Ebbing, Missouri',
            StartDate: new Date('03/05/2015 09:30:00 PM'), EndDate: new Date('03/05/2015 09:44:00 PM'), Predecessor: '30FS'
        },
        {
            TaskId: 32, TaskName: 'Oscar for best picture.', Movie: 'The Shape of Water', Predecessor: '31FS',
            StartDate: new Date('03/05/2015 09:45:00 PM'), EndDate: new Date('03/05/2015 10:00:00 PM')
        },
        {
            TaskId: 33, TaskName: '90th Academy awards wind-up', Predecessor: '32FS',
            StartDate: new Date('03/05/2015 10:00:00 PM'), EndDate: new Date('03/05/2015 10:00:00 PM'), Duration: 0
        }
    ];
    exports.projectResources = [
        { resourceId: 1, resourceName: 'Project Manager' },
        { resourceId: 2, resourceName: 'Software Analyst' },
        { resourceId: 3, resourceName: 'Developer' },
        { resourceId: 4, resourceName: 'Testing Engineer' }
    ];
    exports.projectData = [
        {
            taskID: 1,
            taskName: 'Project Schedule',
            startDate: new Date('02/08/2019'),
            endDate: new Date('03/15/2019'),
            subtasks: [
                {
                    taskID: 2,
                    taskName: 'Planning',
                    startDate: new Date('02/08/2019'),
                    endDate: new Date('02/12/2019'),
                    subtasks: [
                        {
                            taskID: 3, taskName: 'Plan timeline', startDate: new Date('02/08/2019'),
                            endDate: new Date('02/12/2019'), duration: 5, progress: '100', resourceId: [1]
                        },
                        {
                            taskID: 4, taskName: 'Plan budget', startDate: new Date('02/08/2019'),
                            endDate: new Date('02/12/2019'), duration: 5, progress: '100', resourceId: [1]
                        },
                        {
                            taskID: 5, taskName: 'Allocate resources', startDate: new Date('02/08/2019'),
                            endDate: new Date('02/12/2019'), duration: 5, progress: '100', resourceId: [1]
                        },
                        {
                            taskID: 6, taskName: 'Planning complete', startDate: new Date('02/10/2019'),
                            endDate: new Date('02/10/2019'), duration: 0, predecessor: '3FS,4FS,5FS'
                        }
                    ]
                }, {
                    taskID: 7,
                    taskName: 'Design',
                    startDate: new Date('02/15/2019'),
                    endDate: new Date('02/19/2019'),
                    subtasks: [
                        {
                            taskID: 8, taskName: 'Software Specification', startDate: new Date('02/15/2019'),
                            endDate: new Date('02/17/2019'), duration: 3, progress: '60', predecessor: '6FS', resourceId: [2]
                        },
                        {
                            taskID: 9, taskName: 'Develop prototype', startDate: new Date('02/15/2019'),
                            endDate: new Date('02/17/2019'), duration: 3, progress: '100', predecessor: '6FS', resourceId: [3]
                        },
                        {
                            taskID: 10, taskName: 'Get approval from customer', startDate: new Date('02/18/2019'),
                            endDate: new Date('02/19/2019'), duration: 2, progress: '100', predecessor: '9FS', resourceId: [1]
                        },
                        {
                            taskID: 11, taskName: 'Design complete', startDate: new Date('02/17/2019'),
                            endDate: new Date('02/17/2019'), duration: 0, predecessor: '10FS'
                        }
                    ]
                },
                {
                    taskID: 12,
                    taskName: 'Implementation Phase',
                    startDate: new Date('02/25/2019'),
                    endDate: new Date('03/05/2019'),
                    subtasks: [
                        {
                            taskID: 13,
                            taskName: 'Phase 1',
                            startDate: new Date('02/25/2019'),
                            endDate: new Date('03/07/2019'),
                            subtasks: [{
                                    taskID: 14,
                                    taskName: 'Implementation Module 1',
                                    startDate: new Date('02/25/2019'),
                                    endDate: new Date('03/07/2019'),
                                    subtasks: [
                                        {
                                            taskID: 15, taskName: 'Development Task 1', startDate: new Date('02/22/2019'),
                                            endDate: new Date('02/24/2019'), duration: 3, progress: '50', predecessor: '11FS', resourceId: [3]
                                        },
                                        {
                                            taskID: 16, taskName: 'Development Task 2', startDate: new Date('02/22/2019'),
                                            endDate: new Date('02/24/2019'), duration: 3, progress: '50', predecessor: '11FS', resourceId: [3]
                                        },
                                        {
                                            taskID: 17, taskName: 'Testing', startDate: new Date('02/25/2019'),
                                            endDate: new Date('02/26/2019'), duration: 2, progress: '0', predecessor: '15FS,16FS', resourceId: [4]
                                        },
                                        {
                                            taskID: 18, taskName: 'Bug fix', startDate: new Date('03/01/2019'),
                                            endDate: new Date('03/02/2019'), duration: 2, progress: '0', predecessor: '17FS', resourceId: [3]
                                        },
                                        {
                                            taskID: 19, taskName: 'Customer review meeting', startDate: new Date('03/03/2019'),
                                            endDate: new Date('03/07/2019'), duration: 2, progress: '0', predecessor: '18FS', resourceId: [1]
                                        },
                                        {
                                            taskID: 20, taskName: 'Phase 1 complete', startDate: new Date('03/05/2019'),
                                            endDate: new Date('03/05/2019'), duration: 0, predecessor: '19FS'
                                        }
                                    ]
                                }]
                        },
                        {
                            taskID: 21,
                            taskName: 'Phase 2',
                            startDate: new Date('02/25/2019'),
                            endDate: new Date('03/05/2019'),
                            subtasks: [{
                                    taskID: 22,
                                    taskName: 'Implementation Module 2',
                                    startDate: new Date('02/25/2019'),
                                    endDate: new Date('03/05/2019'),
                                    subtasks: [
                                        {
                                            taskID: 23, taskName: 'Development Task 1', startDate: new Date('02/22/2019'),
                                            endDate: new Date('02/25/2019'), duration: 4, progress: '50', resourceId: [3]
                                        },
                                        {
                                            taskID: 24, taskName: 'Development Task 2', startDate: new Date('02/22/2019'),
                                            endDate: new Date('02/25/2019'), duration: 4, progress: '50', resourceId: [3]
                                        },
                                        {
                                            taskID: 25, taskName: 'Testing', startDate: new Date('02/26/2019'),
                                            endDate: new Date('03/01/2019'), duration: 2, progress: '0', predecessor: '23FS,24FS', resourceId: [4]
                                        },
                                        {
                                            taskID: 26, taskName: 'Bug fix', startDate: new Date('03/02/2019'),
                                            endDate: new Date('03/03/2019'), duration: 2, progress: '0', predecessor: '25FS', resourceId: [3]
                                        },
                                        {
                                            taskID: 27, taskName: 'Customer review meeting', startDate: new Date('03/07/2019'),
                                            endDate: new Date('03/05/2019'), duration: 2, progress: '0', predecessor: '26FS', resourceId: [1]
                                        },
                                        {
                                            taskID: 28, taskName: 'Phase 2 complete', startDate: new Date('03/03/2019'),
                                            endDate: new Date('03/03/2019'), duration: 0, predecessor: '27FS'
                                        }
                                    ]
                                }]
                        },
                        {
                            taskID: 29,
                            taskName: 'Phase 3',
                            startDate: new Date('02/25/2019'),
                            endDate: new Date('03/07/2019'),
                            subtasks: [{
                                    taskID: 30,
                                    taskName: 'Implementation Module 3',
                                    startDate: new Date('02/25/2019'),
                                    endDate: new Date('03/07/2019'),
                                    subtasks: [
                                        {
                                            taskID: 31, taskName: 'Development Task 1', startDate: new Date('02/22/2019'),
                                            endDate: new Date('02/24/2019'), duration: 3, progress: '50', resourceId: [3]
                                        },
                                        {
                                            taskID: 32, taskName: 'Development Task 2', startDate: new Date('02/22/2019'),
                                            endDate: new Date('02/24/2019'), duration: 3, progress: '50', resourceId: [3]
                                        },
                                        {
                                            taskID: 33, taskName: 'Testing', startDate: new Date('02/25/2019'), endDate: new Date('02/26/2019'),
                                            duration: 2, progress: '0', predecessor: '31FS,32FS', resourceId: [4]
                                        },
                                        {
                                            taskID: 34, taskName: 'Bug fix', startDate: new Date('03/01/2019'), endDate: new Date('03/05/2019'),
                                            duration: 2, progress: '0', predecessor: '33FS', resourceId: [3]
                                        },
                                        {
                                            taskID: 35, taskName: 'Customer review meeting', startDate: new Date('03/03/2019'),
                                            endDate: new Date('03/04/2019'), duration: 2, progress: '0', predecessor: '34FS',
                                            resourceId: [1]
                                        },
                                        {
                                            taskID: 36, taskName: 'Phase 3 complete', startDate: new Date('03/02/2019'),
                                            endDate: new Date('03/02/2019'), duration: 0, predecessor: '35FS'
                                        },
                                    ]
                                }]
                        }
                    ]
                },
                {
                    taskID: 37, taskName: 'Integration', startDate: new Date('03/08/2019'), endDate: new Date('03/10/2019'), duration: 3,
                    progress: '0', predecessor: '20FS,28FS,36FS', resourceId: [3]
                },
                {
                    taskID: 38, taskName: 'Final Testing', startDate: new Date('03/11/2019'), endDate: new Date('03/12/2019'), duration: 2,
                    progress: '0', predecessor: '37FS', resourceId: [4]
                },
                {
                    taskID: 39, taskName: 'Final Delivery', startDate: new Date('03/10/2019'), endDate: new Date('03/10/2019'),
                    duration: 0, predecessor: '38FS'
                }
            ]
        }
    ];
    exports.baselineData = [
        {
            TaskId: 1, TaskName: 'Receive vehicle and create job card', BaselineStartDate: new Date('03/05/2018 10:00:00 AM'),
            BaselineEndDate: new Date('03/05/2018 10:00:00 AM'), StartDate: new Date('03/05/2018 10:00:00 AM'),
            EndDate: new Date('03/05/2018 10:00:00 AM')
        },
        {
            TaskId: 2, TaskName: 'Allot mechanic and send vehicle to service bay', BaselineStartDate: new Date('03/05/2018 10:00:00 AM'),
            BaselineEndDate: new Date('03/05/2018 10:15:00 AM'), StartDate: new Date('03/05/2018 10:15:00 AM'),
            EndDate: new Date('03/05/2018 10:20:00 AM')
        },
        {
            TaskId: 3, TaskName: 'Change the Receive vehicle and create job cardengine oil',
            BaselineStartDate: new Date('03/05/2018 10:15:00 AM'),
            BaselineEndDate: new Date('03/05/2018 10:45:00 AM'), StartDate: new Date('03/05/2018 10:20:00 AM'),
            EndDate: new Date('03/05/2018 10:35:00 AM')
        },
        {
            TaskId: 4, TaskName: 'Replace the oil filter', BaselineStartDate: new Date('03/05/2018 10:45:00 AM'),
            BaselineEndDate: new Date('03/05/2018 11:15:00 AM'), StartDate: new Date('03/05/2018 10:35:00 AM'),
            EndDate: new Date('03/05/2018 11:00:00 AM')
        },
        {
            TaskId: 5, TaskName: 'Replace the air filter', BaselineStartDate: new Date('03/05/2018 10:45:00 AM'),
            BaselineEndDate: new Date('03/05/2018 11:15:00 AM'), StartDate: new Date('03/05/2018 10:35:00 AM'),
            EndDate: new Date('03/05/2018 11:00:00 AM')
        },
        {
            TaskId: 6, TaskName: 'Replace the fuel filter', BaselineStartDate: new Date('03/05/2018 11:15:00 AM'),
            BaselineEndDate: new Date('03/05/2018 11:25:00 AM'), StartDate: new Date('03/05/2018 11:00:00 AM'),
            EndDate: new Date('03/05/2018 11:20:00 AM')
        },
        {
            TaskId: 7, TaskName: 'Replace the cabin filter', BaselineStartDate: new Date('03/05/2018 11:00:00 AM'),
            BaselineEndDate: new Date('03/05/2018 11:20:00 AM'), StartDate: new Date('03/05/2018 11:00:00 AM'),
            EndDate: new Date('03/05/2018 11:25:00 AM')
        },
        {
            TaskId: 8, TaskName: 'Replace the spark plugs', BaselineStartDate: new Date('03/05/2018 11:00:00 AM'),
            BaselineEndDate: new Date('03/05/2018 11:30:00 AM'), StartDate: new Date('03/05/2018 11:25:00 AM'),
            EndDate: new Date('03/05/2018 11:45:00 AM')
        },
        {
            TaskId: 9, TaskName: 'Check level and refill brake fluid/clutch fluid', BaselineStartDate: new Date('03/05/2018 11:20:00 AM'),
            BaselineEndDate: new Date('03/05/2018 11:40:00 AM'), StartDate: new Date('03/05/2018 11:30:00 AM'),
            EndDate: new Date('03/05/2018 11:50:00 AM')
        },
        {
            TaskId: 10, TaskName: 'Check Brake Pads/Liners, Brake Discs/Drums, and replace if worn out.',
            BaselineStartDate: new Date('03/05/2018 11:40:00 AM'),
            BaselineEndDate: new Date('03/05/2018 12:00:00 PM'), StartDate: new Date('03/05/2018 11:50:00 AM'),
            EndDate: new Date('03/05/2018 12:20:00 PM')
        },
        {
            TaskId: 11, TaskName: 'Check level and refill power steering fluid', BaselineStartDate: new Date('03/05/2018 11:40:00 AM'),
            BaselineEndDate: new Date('03/05/2018 12:00:00 PM'), StartDate: new Date('03/05/2018 11:50:00 AM'),
            EndDate: new Date('03/05/2018 12:15:00 PM')
        },
        {
            TaskId: 12, TaskName: 'Check level and refill Automatic/Manual Transmission Fluid',
            BaselineStartDate: new Date('03/05/2018 12:00:00 PM'),
            BaselineEndDate: new Date('03/05/2018 12:35:00 PM'), StartDate: new Date('03/05/2018 11:50:00 AM'),
            EndDate: new Date('03/05/2018 12:20:00 PM')
        },
        {
            TaskId: 13, TaskName: 'Grease and lubricate components', BaselineStartDate: new Date('03/05/2018 12:20:00 PM'),
            BaselineEndDate: new Date('03/05/2018 12:35:00 PM'), StartDate: new Date('03/05/2018 12:20:00 PM'),
            EndDate: new Date('03/05/2018 12:45:00 PM')
        },
        {
            TaskId: 14, TaskName: 'Inspect and replace the timing belt or timing chain if needed',
            BaselineStartDate: new Date('03/05/2018 12:35:00 PM'),
            BaselineEndDate: new Date('03/05/2018 1:00:00 PM'), StartDate: new Date('03/05/2018 12:45:00 PM'),
            EndDate: new Date('03/05/2018 1:00:00 PM')
        },
        {
            TaskId: 15, TaskName: 'Wheel Balancing', BaselineStartDate: new Date('03/05/2018 1:00:00 PM'),
            BaselineEndDate: new Date('03/05/2018 1:20:00 PM'), StartDate: new Date('03/05/2018 1:00:00 PM'),
            EndDate: new Date('03/05/2018 1:45:00 PM')
        },
        {
            TaskId: 16, TaskName: 'Wheel Alignment', BaselineStartDate: new Date('03/05/2018 1:20:00 PM'),
            BaselineEndDate: new Date('03/05/2018 1:45:00 PM'), StartDate: new Date('03/05/2018 1:45:00 PM'),
            EndDate: new Date('03/05/2018 2:45:00 PM')
        },
        {
            TaskId: 17, TaskName: 'Check for proper operation of all lights, wipers etc.', BaselineStartDate: new Date('03/05/2018 1:50:00 PM'),
            BaselineEndDate: new Date('03/05/2018 02:30:00 PM'), StartDate: new Date('03/05/2018 02:45:00 PM'),
            EndDate: new Date('03/05/2018 03:30:00 PM')
        },
        {
            TaskId: 18, TaskName: 'Check for any Error codes in the ECU and take corrective action.',
            BaselineStartDate: new Date('03/05/2018 2:30:00 PM'),
            BaselineEndDate: new Date('03/05/2018 3:30:00 PM'), StartDate: new Date('03/05/2018 03:30:00 PM'),
            EndDate: new Date('03/05/2018 04:15:00 PM')
        },
        {
            TaskId: 19, TaskName: 'Use scan tool read trouble code', BaselineStartDate: new Date('03/05/2018 03:30:00 PM'),
            BaselineEndDate: new Date('03/05/2018 04:45:00 PM'), StartDate: new Date('03/05/2018 04:15:00 PM'),
            EndDate: new Date('03/05/2018 04:45:00 PM')
        },
        {
            TaskId: 20, TaskName: 'Exterior washing', BaselineStartDate: new Date('03/05/2018 04:45:00 PM'),
            BaselineEndDate: new Date('03/05/2018 05:15:00 PM'), StartDate: new Date('03/05/2018 04:45:00 PM'),
            EndDate: new Date('03/05/2018 05:30:00 PM')
        },
        {
            TaskId: 21, TaskName: 'Interior vacuuming', BaselineStartDate: new Date('03/05/2018 05:15:00 PM'),
            BaselineEndDate: new Date('03/05/2018 05:45:00 PM'), StartDate: new Date('03/05/2018 05:30:00 PM'),
            EndDate: new Date('03/05/2018 06:00:00 PM')
        },
        {
            TaskId: 22, TaskName: 'Final service inspection', BaselineStartDate: new Date('03/05/2018 05:45:00 PM'),
            BaselineEndDate: new Date('03/05/2018 06:00:00 PM'), StartDate: new Date('03/05/2018 06:00:00 PM'),
            EndDate: new Date('03/05/2018 06:30:00 PM')
        },
        {
            TaskId: 23, TaskName: 'Vehicle handover', BaselineStartDate: new Date('03/05/2018 06:00:00 PM'),
            BaselineEndDate: new Date('03/05/2018 06:00:00 PM'), StartDate: new Date('03/05/2018 06:30:00 PM'),
            EndDate: new Date('03/05/2018 06:30:00 PM')
        }
    ];
});
