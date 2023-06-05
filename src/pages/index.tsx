import Card from "@/components/Card";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-4 ">
      <Card /> <Card /> <Card />
    </div>
  );
}
