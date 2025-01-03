// app/components/HeroSection.tsx
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-white px-4 md:px-8 lg:px-16">

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <h1 className="text-6xl font-light text-black leading-tight">
            The Fundamentals
          </h1>
          <h2 className="text-4xl font-light text-black leading-tight max-w-xl">
            Re-imagining residential communities through feedback and thoughtful
            programming.
          </h2>
          <p className="text-gray-600 max-w-xl">
            We work to understand our customers and use feedback to provide a sense
            of place. We weave brand into the small and large design details —
            from our keychains to our interiors — so that our spaces tell
            compelling stories.
          </p>
          <p className="text-sm text-gray-500 italic">
            Branded element from Aker projects.
          </p>
        </div>

        <div className="relative h-[600px] w-full">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/images/placeholder.webp"
              alt="Floor plan with landscape background"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-8 right-8">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-8 h-8 border-2 border-black rotate-45"></div>
          <div className="w-8 h-8 border-2 border-black rotate-45"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
