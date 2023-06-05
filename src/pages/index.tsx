import Card from "@/components/Card";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="grid gap-4 grid-cols-3">
      <Card /> <Card /> <Card />
    </div>
  );
}
