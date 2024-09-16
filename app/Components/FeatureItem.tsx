import Image from "next/image";
import Link from "next/link";

export type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
  link: string;
  label: string;
};

const FeatureItem = ({
  title,
  icon,
  description,
  link,
  label,
}: FeatureItemProps) => {
  return (
    <li className="flex flex-col">
      <div className="flex items-center">
        <div className="mr-4 flex-shrink-0">
          <div className="p-4 rounded-full bg-primary/80">
            <Image src={icon} alt="map" width={28} height={28} />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold capitalize">{title}</h4>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-gray-30">{description}</p>
        <Link href={link} className="mt-2 btn btn-outline btn-primary btn-sm">
          {label}
        </Link>
      </div>
    </li>
  );
};

export default FeatureItem;
