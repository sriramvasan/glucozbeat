import Image from "next/image";
import { MdiDownload } from "./MdiDownload";

export type DownloadableResourceProps = {
  cover: {
    src: string;
    width?: number;
    height?: number;
  };
  title: string;
  description: string;
  downloadUrl: string;
};

export function DownloadableResource({
  cover,
  title,
  description,
  downloadUrl,
}: DownloadableResourceProps) {
  return (
    <div className="flex flex-col gap-2">
      <Image
        src={cover.src}
        width={cover.width}
        height={cover.height}
        alt={`Download ${title}`}
        className="border-2 border-gray-600"
      ></Image>

      <div>
        <div className="font-bold">{title}</div>
        <div className="text-sm">{description}</div>
      </div>

      <div className="border-b-2 border-b-gray-600">
        <a
          className="uppercase flex justify-between !text-gray-800 hover:!no-underline"
          href={downloadUrl}
          target="_blank"
        >
          Click to see
          <MdiDownload></MdiDownload>
        </a>
      </div>
    </div>
  );
}
