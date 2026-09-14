import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact // Initiate A Project // ANE Labs",
  description:
    "Initiate a project with ANE Labs. Connect with our hardware and cloud engineering teams in Kokrajhar, Assam for project scoping and rapid prototyping.",
};

export default function ContactPage() {
  return <Contact />;
}
