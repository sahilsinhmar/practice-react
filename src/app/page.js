"use client";
import Link from "next/link";
import { useContext } from "react";
import { MYContext } from "@/lib/useContext";

export default function Home() {
  const contextValue = useContext(MYContext);

  const navigationlinks = [
    {
      name: "Hooks",
      url: "/hooks",
    },
    {
      name: "High Orde Components",
      url: "hoc",
    },
    {
      name: "Form",
      url: "/form",
    },
    {
      name: "Multistep form",
      url: "/multiform",
    },
    {
      name: "Upload",
      url: "/upload",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-3xl font-bold tracking-wider underline">
        {contextValue}
      </div>
      <div className="flex gap-10 p-16">
        {navigationlinks.map((item) => (
          <Links key={item.url.slice(1)} links={item} />
        ))}
      </div>
    </div>
  );
}

export const Links = ({ links }) => {
  const { name, url } = links;
  return (
    <Link
      className="border px-3 py-2 text-lg rounded-md border-slate-500 bg-sky-800 text-white font-semibold tracking-wider outline-none hover:bg-sky-700/100 hover:scale-105"
      href={url}
    >
      {name}
    </Link>
  );
};
