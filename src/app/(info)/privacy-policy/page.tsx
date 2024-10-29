import {
  BlockQuote,
  H1,
  H2,
  H3,
  InlineCode,
  P,
  TypographyLead,
} from "@/components/ui/typography";
import { geistSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function PrivacyPolicy() {
  const date = new Date("2024-07-12");
  return (
    <div className={cn("mx-auto max-w-3xl px-4 py-8", geistSans.variable)}>
      <H1 className="mb-4 font-gilroy text-3xl font-bold">Privacy Policy</H1>
      <TypographyLead className="mb-4">
        Last Update: {date.toDateString()}
      </TypographyLead>

      <H2 className="mt-8 text-2xl font-semibold">1. Scope</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        We care about your online privacy. This Privacy Policy (the “Policy”)
        describes our practices with respect to collection, use, disclosure, and
        protection of your information when you visit{" "}
        <InlineCode>https://collectwise.co</InlineCode>
        (the “Site”) and/or <InlineCode>
          https://app.collectwise.org
        </InlineCode>{" "}
        (the “App”). The Site and the App are collectively referred to herein as
        the “Platform.”
      </P>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        Note that this Policy is only valid on our Platform, not any third-party
        networks, even if they are referenced on our Platform. If you visit our
        Platform, that signifies your legal acceptance of the Policy. You must
        exit the Platform if you do not agree with any provision(s) of this
        Privacy Policy.
      </P>

      <H2 className="mt-8 text-2xl font-semibold">
        2. Collection of User Data
      </H2>
      <H3 className="mt-6 text-xl font-semibold">a. Personal Info</H3>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        Name, email, and address are stored in a Firebase database. We also
        store the account holder name and account status of the bank linked to
        the CollectWise platform. Our fintech API partners store sensitive
        financial information. We do not store such data.
      </P>

      <H3 className="mt-6 text-xl font-semibold">
        b. Controller and Beneficial Owner Information
      </H3>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        Due to customer due diligence rule requirements, we collect controller
        and beneficial owner information for business Verified Customer Record
        (VCR) accounts.
      </P>

      <H3 className="mt-6 text-xl font-semibold">c. Communications</H3>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        If you contact us for any reason, we will receive whatever information
        you voluntarily provide.
      </P>

      <H3 className="mt-6 text-xl font-semibold">d. Your Devices</H3>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        We may collect device identifiers, phone manufacturer, carrier, browser,
        IP address, operating system version, and mobile advertising
        identifiers.
      </P>

      <H3 className="mt-6 text-xl font-semibold">e. Platform Interaction</H3>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        We track user interactions with the Platform to improve user experience
        and functionality.
      </P>

      <H2 className="mt-8 text-2xl font-semibold">3. Use of Data</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        We use the collected data for purposes such as providing requested
        services, sending newsletters, and responding to legal requests.
      </P>

      <H2 className="mt-8 text-2xl font-semibold">4. Disclosure of Data</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        We may disclose data in case of a sale, merger, or if required to
        protect user safety and rights.
      </P>

      <H2 className="mt-8 text-2xl font-semibold">5. Cookie Policy</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        We use cookies to enhance user experience, track analytics, and ensure
        the smooth operation of our Platform.
      </P>

      <H2 className="mt-8 text-2xl font-semibold">6. Data Security</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        Our Platform is protected with SSL and password-protected servers.
        However, transmission over the internet carries inherent risks.
      </P>

      <H2 className="mt-8 text-2xl font-semibold">7. Children’s Privacy</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        We do not knowingly collect personal information from children under 18.
      </P>

      <H2 className="mt-8 text-2xl font-semibold">8. Users’ Rights, CCPA</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        California residents have rights to access and delete their information.
        Users may request access to their data by contacting us.
      </P>

      <H2 className="mt-8 text-2xl font-semibold">9. International Transfer</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        By using our Platform, you consent to the transfer and processing of
        your data in the United States.
      </P>

      <H2 className="mt-8 text-2xl font-semibold">10. EU Users’ Rights</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        This section outlines GDPR rights for users in the European Union,
        including rights to access, rectify, and delete their personal data.
      </P>

      <H2 className="mt-8 text-2xl font-semibold">
        11. Accessing and Correcting Your Personal Information
      </H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        Users can access and modify some of their account information after
        logging in. For other requests, contact us at
        <InlineCode>info@collectwise.org</InlineCode>.
      </P>

      <BlockQuote>
        <P className="mb-1 [&:not(:first-child)]:mt-0">
          © 2024 CollectWise. All rights reserved.
        </P>
        <P>Theme by precisepath</P>
      </BlockQuote>
    </div>
  );
}
