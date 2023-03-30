

export default function techNameToImage(name: string) {
    switch (name) {
        case 'React':
            return require('../public/techicons/react.svg')
        case 'Node.js':
            return require('../public/techicons/nodejs.svg')
        case 'JavaScript':
            return require('../public/techicons/javascript.svg')
        case 'TypeScript':
            return require('../public/techicons/typescript.svg')
        case 'Next.js':
            return require('../public/techicons/nextjs.svg')
        case 'BabylonJS':
            return require('../public/techicons/babylonjs.svg')
        case 'Prisma':
            return require('../public/techicons/prisma.svg')
        case 'GraphQL':
            return require('../public/techicons/graphql.svg')
        case 'Firebase':
            return require('../public/techicons/firebase.svg')
        case 'Gatsby':
            return require('../public/techicons/gatsby.svg')
        case 'Vercel':
            return require('../public/techicons/vercel.svg')
        case 'TailwindCSS':
            return require('../public/techicons/tailwindcss.svg')
        case 'OpenAI':
            return require('../public/techicons/openai.svg')
        case 'PostgreSQL':
            return require('../public/techicons/postgresql.svg')
        case 'Buefy':
            return require('../public/techicons/buefy.png')
        case 'Vue.js':
            return require('../public/techicons/vue.svg')
        default:
            return null;
    }
}