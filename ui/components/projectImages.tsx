import { HtmlElement } from "@/types/HtmlElement"
import Image, { StaticImageData } from "next/image";
import { createElement, useState } from "react";
import Lightbox from "yet-another-react-lightbox"
import Captions from "yet-another-react-lightbox/plugins/captions";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import LightboxComponent, {
    LightboxExternalProps,
} from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ProjectImages = ({ images }: {
    images: {
        image: StaticImageData, desc: string
    }[]
}) => {
    const [open, setOpen] = useState(false);

    const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

    const photos = images.map((image, index) => {
        const width = breakpoints[0];
        const height = Math.round((image.image.height / image.image.width) * width);
        return {
            src: image.image.src,
            width: width,
            height: height,
            images: breakpoints.map((breakpoint) => {
                const height = Math.round((image.image.height / image.image.width) * breakpoint);
                return {
                    src: image.image.src,
                    width: breakpoint,
                    height: height,

                };
            }),
            description: image.desc
        }
    });
    return (
        <div className="w-full">
            <button type="button" className="bg-green-300 float-right mb-4 text-zinc-700 px-2 py-1 rounded inline-flex" onClick={() => setOpen(true)}>View Gallery
                <svg className="h-8 ml-4 fill-zinc-600 stroke-zinc-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
            </button>
            <LightboxComponent
                open={open}
                slides={photos}
                close={() => setOpen(false)}
                plugins={[Captions, Slideshow, Thumbnails]}
            />
        </div>
    )
}

export default ProjectImages