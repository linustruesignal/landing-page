import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "True Signal Digital privacy policy. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-navy-900">Privacy Policy</h1>
        <p className="mt-4 text-navy-600">Last updated: January 2025</p>

        <div className="mt-12 prose prose-navy max-w-none">
          <h2 className="text-2xl font-bold text-navy-900 mt-8">1. Information We Collect</h2>
          <p className="mt-4 text-navy-600">
            We collect information you provide directly to us, such as when you fill out a
            contact form, request a demo, or communicate with us. This may include your
            name, email address, phone number, business name, and any other information
            you choose to provide.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">2. How We Use Your Information</h2>
          <p className="mt-4 text-navy-600">
            We use the information we collect to provide, maintain, and improve our
            services, to communicate with you about our services, and to respond to your
            inquiries and requests.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">3. Information Sharing</h2>
          <p className="mt-4 text-navy-600">
            We do not sell, trade, or otherwise transfer your personal information to
            third parties without your consent, except as described in this policy or as
            required by law.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">4. Data Security</h2>
          <p className="mt-4 text-navy-600">
            We implement appropriate technical and organizational measures to protect
            your personal information against unauthorized access, alteration, disclosure,
            or destruction.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">5. Contact Us</h2>
          <p className="mt-4 text-navy-600">
            If you have any questions about this Privacy Policy, please contact us at
            hello@truesignaldigital.com.
          </p>
        </div>
      </div>
    </div>
  );
}
