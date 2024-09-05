'use client';
import Image from 'next/image';

interface ImageCardProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    src: string;
}

export const ImageCard = ({ backgroundImage, title, subtitle, src }: ImageCardProps) => {
    return (
        <div
            className={`h-full w-full min-w-[100dvw] lg:min-w-[1100px] ${backgroundImage} bg-cover bg-center bg-no-repeat lg:rounded-5xl`}
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-purple-300 p-4">
                        <Image
                            src={src} // "/folded-map.svg"
                            alt="map"
                            width={28}
                            height={28}
                            className="rounded-full" // Ensure the image itself is rounded
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-18 text-white">{title}</h4>
                        <p className="regular-14 text-white">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
