
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'


const socialsList = [
    {
        name: 'Github',
        url: 'https://github.com/connorbradley26',
        icon: faGithub
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/connorbradley26/',
        icon: faLinkedin
    },
    {
        name: 'email',
        url: 'mailto:c.bradley.dev@gmail.com',
        icon: faEnvelope
    }
]


const Socials = () => {
    return (
        <div className=" w-full mx-auto flex justify-center mt-2">
            <div className='w-full md:w-1/3 flex flex-row justify-around'>
            {socialsList.map((social, index) => {
                return (
                    <Link href={social.url} key={index}>
                        <FontAwesomeIcon key={social.name} icon={social.icon} className="h-6 hover:text-zinc-400"/>
                    </Link>
                )
            })}
            </div>
        </div>
    )
}

export default Socials;