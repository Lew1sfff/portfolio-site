import type { Metadata } from "next";
import ContactCards from "@/components/ContactCards";
import SocialLinks from "@/components/SocialLinks";

export const metadata: Metadata = {
  title: "联系",
  description: "通过邮箱或电话联系我",
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
      <ContactCards />
      <SocialLinks />
    </div>
  );
}
