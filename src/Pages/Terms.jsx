import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16 text-white text-center">
        <h1 className="text-4xl font-bold">Terms & Conditions</h1>
        <p className="mt-4 text-white/80">
          Please read these terms carefully before using our platform.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">

        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By accessing and using our website and enrolling in our courses,
          you agree to comply with and be bound by these Terms & Conditions.
          If you do not agree with any part of these terms, you must not use our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Course Enrollment</h2>
        <p className="mb-6">
          Enrollment in any course is subject to availability. We reserve the right
          to modify course content, schedules, or instructors at any time to ensure
          quality learning experience.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Payments & Refund Policy</h2>
        <p className="mb-6">
          All payments must be made in full before course access is granted.
          Refunds, if applicable, will be processed according to our refund policy.
          We reserve the right to refuse refund requests in case of policy violations.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
        <p className="mb-6">
          Users are responsible for maintaining the confidentiality of their
          account information. Any misuse, sharing of course materials,
          or disruptive behavior may result in suspension or termination of access.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
        <p className="mb-6">
          All course materials, videos, resources, and website content are the
          intellectual property of our organization. Reproduction, distribution,
          or resale of any content without written permission is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
        <p className="mb-6">
          We are not liable for any direct, indirect, incidental, or consequential
          damages arising from the use of our services. Course results may vary
          depending on individual effort and participation.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
        <p className="mb-6">
          We reserve the right to update or modify these Terms & Conditions at any time.
          Continued use of the website after changes indicates acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
        <p>
          If you have any questions regarding these Terms & Conditions,
          please contact us through the contact section on our website.
        </p>

      </div>

      <Footer />
    </div>
  );
};

export default Terms;
