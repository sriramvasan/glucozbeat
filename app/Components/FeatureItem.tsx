import Image from "next/image";
import Link from "next/link";

export type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
  link: string;
  label: string;
}

const FeatureItem = ({ title, icon, description, link, label }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-primary/80">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-4 capitalize">
        {title}
      </h2>
      <p className="regular-16 bg-white/80 text-gray-30 lg:bg-none">
        {description}
      </p>
      <Link href={link} className="mt-2 btn btn-outline btn-primary btn-sm">{label}</Link>
    </li>
  );
}

export default FeatureItem;
