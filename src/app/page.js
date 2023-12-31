"use client";
import Link from "next/link";
import { useContext } from "react";
import { MYContext } from "@/lib/useContext";

export default function Home() {
  const contextValue = useContext(MYContext);
  return (
    <div>
      hey {contextValue}
      <div className="flex gap-10 p-16">
        <Link href="/hooks">Hooks</Link>
        <Link href="/hoc">High order component</Link>
      </div>
    </div>
  );
}
