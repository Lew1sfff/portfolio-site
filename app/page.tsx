import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";
import { getSortedProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "首页",
  description:
    "个人作品集 — 摄影、视频、商业设计创意作品展示",
};

export default function Home() {
  const projects = getSortedProjects();

  return <HomeClient projects={projects} />;
}
