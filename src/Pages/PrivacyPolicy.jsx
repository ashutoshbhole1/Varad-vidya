import Header from "../components/Header";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16 text-white text-center">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-white/80">
          Your privacy is important to us. Here’s how we collect and protect your information.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-gray-700 leading-relaxed">

        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-6">
          We may collect personal information such as your name, email address,
          phone number, and payment details when you enroll in our courses or
          contact us through the website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-6">
          Your information is used to provide access to courses, process payments,
          communicate important updates, improve our services, and respond to your inquiries.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
        <p className="mb-6">
          We implement appropriate security measures to protect your personal
          information from unauthorized access, disclosure, or misuse.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Sharing of Information</h2>
        <p className="mb-6">
          We do not sell, trade, or rent your personal information to third parties.
          Information may be shared with trusted service providers strictly for
          operational purposes such as payment processing.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Cookies & Tracking</h2>
        <p className="mb-6">
          Our website may use cookies to enhance user experience and analyze
          website traffic. You can choose to disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Third-Party Links</h2>
        <p className="mb-6">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of those sites.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
        <p className="mb-6">
          We reserve the right to update this Privacy Policy at any time.
          Continued use of our website after updates constitutes acceptance
          of the revised policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy,
          please contact us through the contact section available on our website.
        </p>

      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
