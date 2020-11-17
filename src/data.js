import teamTasks from "./assets/trello-example111.png";
import infoGlance from "./assets/card-back.svg";
import Butler from "./assets/butler.png";
// import Appstore from "./assets/btn-appstore-black.png"
// import Playstore from "./assets/btn-playstore-black.png"
// import Fender from "./assets/logo-fender.svg";
// import Google from "./assets/logo-google.svg";
// import Peloton from "./assets/logo-peloton.svg";
// import Pinterest from "./assets/logo-pinterest.svg";
// import Costco from './assets/logo-costco.svg';
// import Lush from "./assets/logo-lush.svg";
// import Squarespace from "./assets/logo-squarespace.svg";
// import Atlassian from "./assets/atlassian-logo-gray-small.svg";
// import Sync from './assets/updated-layouts-sync.png';
// import Platform from './assets/updated-layouts-platform.png';
// import Collab from './assets/updated-layouts-collab.png';



export default [
    {
         sys: {
             id: 1
         },
        workTeam: {
            title: "Work with any team",
            description: "Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.",
            image: teamTasks
        },
        infosGlance: {
            title: "Information at a glance",
            description: "Dive into the details by adding comments, attachments, due dates, and more directly to Trello cards. Collaborate on projects from beginning to end.",
            image: infoGlance
        },
        autoButter: {
            title: "Built-In Workflow Automation With Butler",
            description: "Let the robots do the work! Boost productivity by unleashing the power of automation across your entire team with Butler, and remove tedious tasks from your to-do lists with:",
            image: Butler,
            lists: [
                'Rule-Based Triggers',
                'Custom Card & Board Buttons',
                'Calendar Commands',
                'Due Date Commands'
            ]
        }
    },
];



// export default [
//     {
//         sys: {
//             id: "1"
//         },
//         fields: {
//             name: "single economy",
//             slug: "single-economy",
//             type: "single",
//             price: 100,
//             extras: [
//                 "Full-sized, pH-balanced toiletries",
//                 "Complimentary refreshments",
//                 "Adequate safety/security",
//                 "Internet"
//             ],
//             images: [
//                 {
//                     fields: {
//                         file: {
//                             url: img1
//                         }
//                     }
//                 },
//                 {
//                     fields: {
//                         file: {
//                             url: room2
//                         }
//                     }
//                 },
//                 {
//                     fields: {
//                         file: {
//                             url: room3
//                         }
//                     }
//                 },
//                 {
//                     fields: {
//                         file: {
//                             url: room4
//                         }
//                     }
//                 }
//             ]
//         }
//     },
// ];



