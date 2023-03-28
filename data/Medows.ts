import { Project } from "@/types/Project";
import medowsPicture from '../public/projects/medows/medows.png';
import addRequestPicture from '../public/projects/medows/addRequest.png';
import requestsListPicture from '../public/projects/medows/requestsList.png';
import responsePicture from '../public/projects/medows/response.png';

export const Medows: Project = {
    position: 3,
    name: "Medows",
    src: medowsPicture,
    alt: "Medows Project",
    url: "https://medo.ws",
    synopsis: "Introducing Medows: The Revolutionary Communication Tool for GPs and Care Home Staff!\n\nSay goodbye to missed appointments and outdated patient information with Medows' efficient and effective system.\n\nGPs can plan their rounds and visits with ease, thanks to Medows' patient list and observation, medication, and care plan information.\n\nManaging care home residents has never been simpler, and hospital discharges are a breeze with Medows' population overview.\n\nJoin the Primary Care Networks that are already transforming the way GPs work with Medows.\n\nRest easy knowing that Medows is fully GDPR compliant, with a legal and ethical framework in place. It's not a replacement for GP or care home staff, but it's the communication tool you've been waiting for!",
    tech: [
        "Vue.js",
        "Buefy",
        "Firebase"
    ],
    description:[
        {
            tag: "p",
            text: "As a software developer, I have been fortunate enough to work on a project that is not only challenging but also has the potential to change lives. Medows is a communication tool that connects GPs and Care Home staff, providing them with the information they need to plan ward rounds and care home visits efficiently and effectively."
        },
        {
            tag: "h4",
            text: "How It Began"
        },
        {
            tag: "p",
            text: "Over three years ago I was approached by a friend who is a GP, who found that communication with the care home staff was currently inadequate and has the potential to cause harm to the patient due to its inefficiences. We decided to build a solution to help them."
        },
        {
            tag: "p",
            text: "Even in the wake of the pandemic, GPs and Care Home staff are over worked and desperately crying out for help. We are extremely proud to have created a tool that can help make a difference."
        },
        {
            tag: "h4",
            text: "Tech Stack"
        },
        {
            tag: "p",
            text: "Medows is built using VueJS, NodeJS, Firebase, Google Cloud Platform, and Buefy. We have taken great care to ensure that the tool is fully GDPR compliant and has a legal and ethical framework in place."
        },
        {
            tag: "p",
            text: "One of the most important things about Medows is that it is not a replacement for GPs or Care Home staff. Instead, it is a tool to help them communicate better. It provides GPs with a list of patients who have recently had concerns with health, along with observations, medication, and care plan information, which helps them plan their ward rounds and care home visits more efficiently. At the same time, it allows Care Home staff to manage their current residents and provides an overview of the population to aid hospital discharges."
        },
        {
            tag: "h4",
            text: "The Benefits"
        },
        {
            tag: "p",
            text: "We have already received a lot of positive feedback from GPs and Care Home staff who are using Medows. Anecdotal data shows that it has helped reduce the number of hospital admissions, and early estimates suggest that it could save the NHS at least £19 million per year if it was rolled out nationwide. We believe that this is a conservative estimate and that the actual figure could be much higher."
        },
        {
            tag: "p",
            text: "Medows is an excellent example of how technology can be used to make a real difference in people's lives. As a software developer, it is gratifying to work on a project that has such a positive impact on society. We hope that Medows will continue to be successful and that it will help GPs and Care Home staff communicate more effectively for years to come."
        }
    ],
    images: [
        {
            image: addRequestPicture,
            desc: "This is the request page where Care Home staff can add a request for a GP to look into a residents medical query."
        },
        {
            image: requestsListPicture,
            desc: "This is the requests list page where GPs can see a list of requests from Care Home staff."
        },
        {
            image: responsePicture,
            desc: "This is the response page where GPs can add a response to a request from Care Home staff."
        }
    ]
};
