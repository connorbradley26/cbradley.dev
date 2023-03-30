

export default function techNameToImage(name: string) {
    switch (name) {
        case 'React':
            return require('../assets/techicons/react.svg')
        case 'Node.js':
            return require('../assets/techicons/nodejs.svg')
        case 'JavaScript':
            return require('../assets/techicons/javascript.svg')
        case 'TypeScript':
            return require('../assets/techicons/typescript.svg')
        case 'Next.js':
            return require('../assets/techicons/nextjs.svg')
        case 'BabylonJS':
            return require('../assets/techicons/babylonjs.svg')
        case 'Prisma':
            return require('../assets/techicons/prisma.svg')
        case 'GraphQL':
            return require('../assets/techicons/graphql.svg')
        case 'Firebase':
            return require('../assets/techicons/firebase.svg')
        case 'Gatsby':
            return require('../assets/techicons/gatsby.svg')
        case 'Vercel':
            return require('../assets/techicons/vercel.svg')
        case 'TailwindCSS':
            return require('../assets/techicons/tailwindcss.svg')
        case 'OpenAI':
            return require('../assets/techicons/openai.svg')
        case 'PostgreSQL':
            return require('../assets/techicons/postgresql.svg')
        case 'Buefy':
            return require('../assets/techicons/buefy.png')
        case 'Vue.js':
            return require('../assets/techicons/vue.svg')
        default:
            return null;
    }
}