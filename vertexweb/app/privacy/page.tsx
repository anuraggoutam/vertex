import React from "react";

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-gradient">
          Privacy Policy
        </h1>
        <p className="mb-8">
          This privacy policy sets out how our website uses and protects any
          information that you give us when you use this website.
        </p>
        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
            <p className="mb-4">
              Our website does not collect any personal data from users except
              for email addresses provided by users who wish to contact us.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4">
              How We Use the Information
            </h2>
            <p className="mb-4">
              We use the email addresses provided by users solely for the
              purpose of responding to their inquiries and providing
              information. We do not use this information for any other
              purposes.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4">Security</h2>
            <p className="mb-4">
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorized access or disclosure, we have put in
              place suitable physical, electronic, and managerial procedures to
              safeguard and secure the information we collect online.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4">Cookies</h2>
            <p className="mb-4">
              Our website does not use cookies to collect any personal
              information. Cookies may be used for basic functionality and
              performance tracking, but they do not collect any personal data.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4">Links to Other Websites</h2>
            <p className="mb-4">
              Our website may contain links to other websites of interest.
              However, once you have used these links to leave our site, you
              should note that we do not have any control over that other
              website. Therefore, we cannot be responsible for the protection
              and privacy of any information which you provide whilst visiting
              such sites and such sites are not governed by this privacy
              statement. You should exercise caution and look at the privacy
              statement applicable to the website in question.
            </p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-4">
              Controlling Your Personal Information
            </h2>
            <p className="mb-4">
              You may choose to restrict the collection or use of your personal
              information in the following ways:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                If you have previously agreed to us using your email address for
                contacting purposes, you may change your mind at any time by
                writing to or emailing us at vertexwebstore@gmail.com
              </li>
              <li>
                We will not sell, distribute, or lease your email address to
                third parties unless we have your permission or are required by
                law to do so.
              </li>
              <li>
                You may request details of the email address we hold about you.
                If you would like a copy of the information held on you, please
                write to [VertexWeb, Krishan Vihar, Delhi, New Delhi, 110086] or
                email vertexwebstore@gmail.com
              </li>
              <li>
                If you believe that any information we are holding on you is
                incorrect or incomplete, please write to or email us as soon as
                possible at the above address. We will promptly correct any
                information found to be incorrect.
              </li>
            </ul>
          </section>
          <p className="mb-4">
            This privacy policy is subject to change without notice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
