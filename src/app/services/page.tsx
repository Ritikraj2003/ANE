import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Services // 3D Spatial & Enterprise Cloud // ANE Labs",
  description:
    "Explore ANE's dual engineering capabilities: Precision 3D Modelling & Digital Twins alongside Enterprise Cloud SaaS & ERP Systems.",
};

export default function ServicesPage() {
  return <Services />;
}
