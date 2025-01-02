import Link from "next/link";
import Image from "next/image";

interface HightLightProps {
  imageUrl: string;
  avatarUrl: string;
  name: string;
  subName: string;
  title: string;
  description: string;
  href: string;
}

export default function Highlight({
  imageUrl,
  avatarUrl,
  name,
  subName,
  title,
  description,
  href
}: HightLightProps): JSX.Element {
  return (
    <Link 
      className="group relative block rounded-xl focus:outline-none transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" 
      href={href}
    >
      <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70 before:transition-all before:duration-300 group-hover:before:from-gray-900/90">
        <Image
          className="size-full absolute top-0 start-0 object-cover transition-transform duration-300 group-hover:scale-105"
          src={imageUrl}
          alt="Blog Image"
          width={350}
          height={350}
        />
      </div>

      <div className="absolute top-0 inset-x-0 z-10">
        <div className="p-4 flex flex-col h-full sm:p-6">
          {/* Avatar */}
          <div className="flex items-center transform transition-transform duration-300 group-hover:translate-y-1">
            <div className="shrink-0">
              <Image
                className="size-[46px] border-2 border-white rounded-full transition-all duration-300 group-hover:border-opacity-80"
                src={avatarUrl}
                alt="Avatar"
                width={46}
                height={46}
              />
            </div>
            <div className="ms-2.5 sm:ms-4">
              <h4 className="font-semibold text-white transition-colors duration-300 group-hover:text-white/90">
                {name}
              </h4>
              <p className="text-xs text-white/80 transition-colors duration-300 group-hover:text-white/70">
                {subName}
              </p>
            </div>
          </div>
          {/* End Avatar */}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10">
        <div className="flex flex-col h-full p-4 sm:p-6 transform transition-all duration-300 group-hover:translate-y-[-4px]">
          <h3 className="text-lg sm:text-3xl font-semibold text-white transition-colors duration-300 group-hover:text-white/90">
            {title}
          </h3>
          <p className="mt-2 text-white/80 transition-colors duration-300 group-hover:text-white/70">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}