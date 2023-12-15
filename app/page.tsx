import Image from "next/image";
import { HomePage } from "./_components/HomePage";

export default function Home() {
  return (
    <main className="min-h-screen z-10 w-screen flex items-center justify-center">
      <HomePage />
    </main>
  );
}
