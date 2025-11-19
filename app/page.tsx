import Logo from "./components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <Logo />
      <Image
        src="/images/girl-and-boy-web-landing.png"
        alt="KnowUsBetter"
        width={600}
        height={450}
      />
      <p className="text-center text-lg text-gray-500">
        almost there... your journey to deeper connections starts soon.
      </p>
    </div>
  );
}
