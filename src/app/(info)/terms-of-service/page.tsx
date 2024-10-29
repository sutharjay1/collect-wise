import {
  BlockQuote,
  H1,
  H2,
  H3,
  P,
  TypographyLead,
} from "@/components/ui/typography";
import { geistSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function TermsOfService() {
  const date = new Date("2024-07-12");

  return (
    <div className={cn("mx-auto max-w-3xl px-4 py-8", geistSans.variable)}>
      <H1 className="mb-4 font-gilroy text-3xl font-bold">Terms of Service</H1>
      <TypographyLead className="mb-2">
        Last Update: {date.toDateString()}
      </TypographyLead>

      <H2 className="mb-2 mt-6 text-2xl font-semibold">1. Acceptance</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        These Terms of Service (the “Terms”) govern your visits to
        www.collectwise.co (the “Site”) and/or app.collectwise.org (the “App”).
        The Site and the App are collectively referred to herein as the
        “Platform.” CollectWise, Inc. (“we,” “us,” or “our”) owns and operates
        this Platform. The term “you” refers to any user of the Platform. These
        Terms have a force of a legally binding agreement, even if you are
        simply browsing without intention to contact us or register an account.
        Privacy Policy is another important document that you should familiarize
        yourself with because it describes our practices with respect to your
        personal information. You cannot visit the Platform if you do not agree
        to these Terms or the Privacy Policy. Sometimes we modify these Terms.
        We don&apos;t notify users about every change to the Terms but you can
        see the date of the last update at the top of this page. If you still
        wish to visit the Platform after said date, that constitutes your
        agreement to the updates.
      </P>

      <H2 className="mb-2 mt-6 text-2xl font-semibold">2. Neutral Venue</H2>
      <H3 className="mt-4 text-xl font-semibold">a) Description</H3>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        CollectWise is an AI-powered debt collection platform that helps
        creditors and lenders minimize collection costs and maximize recovery
        rates.
      </P>
      <H3 className="mt-4 text-xl font-semibold">b) ACH Debit Authorization</H3>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        By agreeing to these terms of service, you also authorize CollectWise
        Inc. to debit you and your client&#39;s bank account via ACH for any
        necessary subscriptions, transfers, refunds, returns, or other charges
        listed in the CollectWise Site or App...
      </P>

      <H3 className="mt-4 text-xl font-semibold">c) Our Fees</H3>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        We charge a percentage of the amount successfully collected. This amount
        ranges based on the age of the debt, the client&#39;s volume, and the
        debt size.
      </P>

      <H3 className="mt-4 text-xl font-semibold">d) Neutral Venue</H3>
      <BlockQuote>
        Our Platform is a neutral venue. We are not a party to users& data,
        transactions. WE SHALL NOT BE HELD LIABLE FOR USERS& data, DATA,
        TRANSACTIONS, INTERACTIONS AND INFORMATION.
      </BlockQuote>

      <H2 className="mb-2 mt-6 text-2xl font-semibold">
        3. Intellectual Property
      </H2>
      <H3 className="mt-4 text-xl font-semibold">
        a) Our Intellectual Property
      </H3>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        We and our content suppliers own all intellectual property rights in our
        Platform contents, logos, trademarks (whether registered or
        unregistered) and data. Our IP rights are protected by U.S. law and
        international IP conventions. By using our Platform you do not acquire
        any of our IP rights...
      </P>

      <H2 className="mb-2 mt-6 text-2xl font-semibold">
        4. Acceptable Use Policy
      </H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        By visiting this Platform, you represent and agree that:
      </P>
      <ul className="mb-4 ml-8 list-disc">
        <li>You are 18 years of age or older.</li>
        <li>
          You have a full capacity to enter into a legally binding agreement,
          such as these Terms.
        </li>
        <li>
          You will not let others use your account, except as may be explicitly
          authorized by us...
        </li>
      </ul>

      <H2 className="mb-2 mt-6 text-2xl font-semibold">5. Order Terms</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        If purchasing anything, you are responsible for ensuring your payment
        method is valid...
      </P>

      <H2 className="mb-2 mt-6 text-2xl font-semibold">6. Refund Policy</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        Users can receive refunds upon request as long as they have a valid
        reason that is approved by the CollectWise team.
      </P>

      <H2 className="mb-2 mt-6 text-2xl font-semibold">7. Confidentiality</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        You cannot use or disclose any confidential information relating to our
        business, users, operations and properties for any purpose without our
        express prior written authorization...
      </P>

      <H2 className="mb-2 mt-6 text-2xl font-semibold">
        8. Breach of These Terms
      </H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        If any user violates these Terms or any law, we can, without limitation:
        (i) ban that user from the Platform...
      </P>

      <H2 className="mb-2 mt-6 text-2xl font-semibold">9. Indemnification</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        You agree to defend, indemnify and hold harmless us, our company, its
        officers, directors, employees and agents...
      </P>

      <H2 className="mb-2 mt-6 text-2xl font-semibold">
        10. Arbitration; Class Action Waiver
      </H2>
      <H3 className="mt-4 text-xl font-semibold">a) Arbitration</H3>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        Any controversy or claim arising out of or relating to these Terms shall
        be settled by arbitration...
      </P>
      <H3 className="mt-4 text-xl font-semibold">b) Class Action Waiver</H3>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        You acknowledge and agree that you waive your right to participate as a
        plaintiff or class member...
      </P>

      <H2 className="mb-2 mt-6 text-2xl font-semibold">11. Apple App Store</H2>
      <P className="mb-1 [&:not(:first-child)]:mt-0">
        By downloading the Platform from a device made by Apple, Inc. (“Apple”)
        or from Apple&apos;s App Store, you specifically acknowledge and agree
        that...
      </P>
    </div>
  );
}
