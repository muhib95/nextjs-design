import Image from "next/image";
import { Inter } from "next/font/google";
import footer from "../public/ass/footer.png";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      class={`min-h-screen flex flex-col bg-cover bg max-w-[3020px] mx-auto`}
    >
      <div class="flex-none">
        <div class=" text-white p-4">Header</div>
      </div>

      <div class="flex-grow">
        <div class="p-2 border border-sky-500">
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
          <p className="text-white">Muhib</p>
        </div>
      </div>

      <div class="flex-none">
        <div class="">
          <Image className="max-w-full w-full" src={footer} alt=""></Image>
        </div>
      </div>
    </div>
  );
}
