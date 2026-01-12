import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "True Signal Digital terms of service. Read our terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-navy-900">Terms of Service</h1>
        <p className="mt-4 text-navy-600">Last updated: January 2025</p>

        <div className="mt-12 prose prose-navy max-w-none">
          <h2 className="text-2xl font-bold text-navy-900 mt-8">1. Acceptance of Terms</h2>
          <p className="mt-4 text-navy-600">
            By accessing or using True Signal Digital's services, you agree to be bound
            by these Terms of Service. If you do not agree to these terms, please do not
            use our services.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">2. Description of Services</h2>
          <p className="mt-4 text-navy-600">
            True Signal Digital provides AI-powered phone answering, chatbot, review
            management, and business automation services for local service businesses.
            Services are provided on a subscription basis as described in your service
            agreement.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">3. Payment Terms</h2>
          <p className="mt-4 text-navy-600">
            Services are billed monthly or annually as selected. Payment is due at the
            beginning of each billing period. We offer a 30-day money-back guarantee for
            new customers.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">4. Cancellation</h2>
          <p className="mt-4 text-navy-600">
            You may cancel your subscription at any time. Cancellations take effect at
            the end of your current billing period. No refunds are provided for partial
            billing periods after the initial 30-day guarantee period.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">5. Limitation of Liability</h2>
          <p className="mt-4 text-navy-600">
            True Signal Digital shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from your use of or
            inability to use our services.
          </p>

          <h2 className="text-2xl font-bold text-navy-900 mt-8">6. Contact</h2>
          <p className="mt-4 text-navy-600">
            For questions about these Terms of Service, please contact us at
            hello@truesignaldigital.com.
          </p>
        </div>
      </div>
    </div>
  );
}
