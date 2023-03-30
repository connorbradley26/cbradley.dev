import { Project } from "@/types/Project";
import crowsfootballPicture from '../assets/projects/crowsfootball/crowsfootball.png';
import aboutPicture from '../assets/projects/crowsfootball/about.png';
import wherePicture from '../assets/projects/crowsfootball/where.png';
import fixturesPicture from '../assets/projects/crowsfootball/fixtures.png';
import socialsPicture from "../assets/projects/crowsfootball/socials.png";


export const CrowsFootball: Project = {
        position: 2,
        name: "Manchester Crows American Flag Football Website",
        src: crowsfootballPicture,
        alt: "Crows Football Project",
        url: "https://crowsfootball.com",
        synopsis: "A home page for the Manchester Crows, an American Flag Football team, with a heavy focus on SEO.",
        tech: [
            "Next.js",
            "TailwindCSS",
            "GraphQL",
            "Firebase",
            "TypeScript"
        ],
        description:[
            {
                tag: "p",
                text: "As a software developer and a passionate member of the Manchester Crows American Flag Football team, I was tasked with building a new home page for our team with a heavy focus on search engine optimization (SEO). Our priorities were clear: we wanted to increase our online visibility, attract new players, and gain sponsors. To accomplish these goals, I decided to use Next.js, TailwindCSS, GraphQL, and Firebase."
            },
            {
                tag: "p",
                text: "As the defensive coordinator and captain for the Manchester Crows, I was personally motivated to build the best possible website for our team. We wanted to showcase our talent and dedication and attract new players and sponsors. We also wanted to save costs on our existing website hosting and improve our online presence."
            },
            {
                tag: "p",
                text: "The website has been a huge success so far. We have seen a significant increase in our online visibility and have attracted new players and sponsors. We have also saved money on our hosting costs and have a website that is easy to maintain and update from even non-technical team members."
            },
            {
                tag: "h4",
                text: "Tech Stack"
            },
            {
                tag: "p",
                children: [
                    {
                        tag: "a",
                        text: "Next.js",
                        attributes: {
                            href: "https://nextjs.org/",
                        }
                    },
                    {
                        tag: "span",
                        text: " is a React-based framework that allows for server-side rendering (SSR) and static site generation (SSG), which are essential for SEO. SSR means that our pages will be pre-rendered on the server, making them more easily indexed by search engines. SSG means that we can generate our pages as static HTML files, which can be cached by browsers and also help with SEO. With Next.js, we can take advantage of both SSR and SSG to create a fast and SEO-friendly website."
                    }
                ]
            },
            {
                tag: "span",
                children: [
                    {
                        tag: "a",
                        text: "TailwindCSS",
                        attributes: {
                            href: "https://tailwindcss.com/",
                        }
                    },
                    {
                        tag: "span",
                        text: " is a utility-first CSS framework that helps us create responsive and customizable designs quickly. It provides a set of pre-defined classes that we can use to style our components without writing any custom CSS. With TailwindCSS, we can ensure that our website looks great on all devices and is easy to navigate."
                    }
                ]                
            },
            {
                tag: "p",
                children: [
                    {
                        tag: "a",
                        text: "GraphQL",
                        attributes: {
                            href: "https://graphql.org/",
                        }
                    },
                    {
                        tag: "span",
                        text: " is a query language for APIs that allows us to fetch data efficiently from our server. It provides a flexible and powerful way to describe the data we need and retrieve it in a single request. With GraphQL, we can reduce the number of requests our website makes to the server, which helps with performance and also reduces our hosting costs. This combined with Contentful's API means we can easily update our website's content without having to redeploy the site. This is perfect for the fixtures section of our website, which we update every week."
                    }
                ]
            },
            {
                tag: "p",
                children: [
                    {
                        tag: "a",
                        text: "Firebase",
                        attributes: {
                            href: "https://firebase.google.com/",
                        }
                    },
                    {
                        tag: "span",
                        text: " is a cloud-based platform that provides a suite of tools for building and hosting web and mobile applications. It includes a real-time database, authentication, hosting, and more. With Firebase, we can quickly deploy our website and take advantage of its scalability and reliability."
                    }
                ]
            },
            {
                tag: "p",
                text: "In conclusion, building a new home page for the Manchester Crows was an exciting challenge for me as a software developer and a passionate member of the team. By using Next.js, TailwindCSS, GraphQL, and Firebase, we were able to create a fast, responsive, and SEO-friendly website that reflects our team's values and ambitions. I am proud to be part of this project and look forward to seeing our team thrive online and on the field."
            }
        ],
    
    images: [

        {
            image: fixturesPicture,
            desc: "Fixtures are pulled in from Contentful, using GraphQL and displayed using TailwindCSS"
        },
        {
            image: socialsPicture,
            desc: "Social media links are pulled in from Curator.io, they are a great way to show the culture of the team"
        },
        {
            image: aboutPicture,
            desc: "A simple about section, with a video explaining what Flag Football is"
        },
        {
            image: wherePicture,
            desc: "A contact form that uses formspree.io to send emails to management for potential new players to get in touch."
        }
    ]
}