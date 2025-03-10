"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <p>Home</p>
      <Button onClick={() => router.push("/editor")} className="text-[#FCFCFC]">Go to editor</Button>
      <Button onClick={() => router.push("/viewer")} className="text-[#FCFCFC]">Go to viewer</Button>
    </div>
  );
}
