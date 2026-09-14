import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About // Built in Kokrajhar, Assam // ANE Labs",
  description:
    "Built in Kokrajhar, Assam. Engineered for the global stage. Discover the DNA of ANE engineering, our dual-native architecture, and the team behind the synthesis.",
};

export default function AboutPage() {
  return <About />;
}
