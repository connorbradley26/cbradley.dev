import { HtmlElement } from "@/types/HtmlElement"
import Image, { StaticImageData} from "next/image";
import { createElement } from "react";


const ProjectImages = ({ images }: {images: {
    image: StaticImageData;
    desc: HtmlElement[];
}}) => {
    return (
        <figure>
            <Image src={images.image} alt="Project Image" width={1920} height={1080}
                placeholder="blur" className='rounded' />
                {images.desc.length > 0 && images.desc.map((desc, index) => {
                    return (
                        createElement(desc.tag,
                            { key: index, ...desc.attributes },
                            desc.children ? desc.children.map(child => createElement(child.tag, { ...child.attributes }, child.text)) : desc.text)
                    )}
                )}
        </figure>
    )
}

export default ProjectImages