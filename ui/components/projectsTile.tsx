import Image from 'next/image';

const ProjectsTile = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <div>
                    <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="/projects/coverr.png" alt=""/>
                </div>
                <div>
                    <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="/projects/baxter.webp" alt=""/>
                </div>
                <div>
                    <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="/projects/crowsfootball.png" alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="/projects/medows.png" alt=""/>
                </div>
                <div>
                    <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="/projects/launches.png" alt=""/>
                </div>
                <div>
                    <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
                </div>
                <div>
                    <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
                </div>
                <div>
                    <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
                </div>
                <div>
                    <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
                </div>
                <div>
                    <Image width={200} height={200} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default ProjectsTile;