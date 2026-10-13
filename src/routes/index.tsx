import { createFileRoute } from "@tanstack/react-router";
import { SaluSite } from "@/components/salu-site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <SaluSite />;
}
