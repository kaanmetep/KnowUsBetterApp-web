import Logo from "@/app/components/Logo";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service / Terms of Use - KnowUsBetter",
  description: "Terms of Service and Terms of Use for KnowUsBetter app",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex-1 bg-zinc-50 px-4 py-8 font-sans dark:bg-black">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link href="/">
            <Logo size="small" marginTop={0} />
          </Link>
        </div>

        {/* Content */}
        <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-900 md:p-12">
          <h1 className="mb-2 text-4xl font-bold text-red-950 dark:text-red-200">
            Terms of Service / Terms of Use
          </h1>
          <p className="mb-8 text-sm text-red-800 dark:text-red-400">
            Last updated: November 16, 2025
          </p>

          <div className="prose prose-red max-w-none dark:prose-invert">
            {/* 1. Acceptance of Terms */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              1. Acceptance of Terms
            </h2>
            <p className="mb-6 text-red-900 dark:text-red-300">
              By downloading, installing, or using the KnowUsBetter mobile app
              (the "App") and its services, you agree to be bound by these Terms
              of Service. If you do not agree to these Terms, you must not use
              the App. KnowUsBetter is offered in English, Turkish, and Spanish
              for user convenience, but the official Terms are written in
              English. In the event of any discrepancy between the English
              version of these Terms and a translation, the English version
              shall prevail.
            </p>

            {/* 2. Description of Service */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              2. Description of Service
            </h2>
            <p className="mb-6 text-red-900 dark:text-red-300">
              KnowUsBetter is a real-time multiplayer quiz game. The App
              features four categories of yes/no trivia questions, with two
              players competing against each other in each match. Players can
              purchase virtual coins to create private game rooms in their
              chosen category. The App also provides an in-game chat so the two
              players in a room can communicate during the game. The App is
              intended for entertainment purposes only. All gameplay and
              questions are offered "as is" without warranty of accuracy or
              completeness.
            </p>

            {/* 3. Eligibility and User Identification */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              3. Eligibility and User Identification
            </h2>
            <p className="mb-6 text-red-900 dark:text-red-300">
              You must be at least 13 years old to use the App. If you are under
              18, you must have permission from a parent or legal guardian. By
              using the App, you represent that you meet these age requirements.
              No user account or registration is required; instead, each device
              (and the associated Apple/Google account) is identified by a
              unique ID used by our payment system (RevenueCat). Any virtual
              currency (coins) you purchase is tied to that device/account.
              Coins have no cash value and cannot be transferred to another
              user, account, or device. In other words, coins are
              non-transferable and non-redeemable outside the App.
            </p>

            {/* 4. Virtual Currency and In-App Purchases */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              4. Virtual Currency and In-App Purchases
            </h2>
            <div className="mb-6 space-y-4 text-red-900 dark:text-red-300">
              <p>
                The App uses a virtual currency ("coins"). Coins may be
                purchased with real money. Coins have no real-world value and
                cannot be exchanged for cash, goods, or services outside the
                App.
              </p>
              <p>
                All purchases of coins or other virtual items are final and
                non-refundable, except as required by law. We reserve the right
                to change coin pricing, availability, and features at any time
                without prior notice.
              </p>
              <p>
                Coins are not transferable between devices or user accounts. If
                you uninstall the App or switch devices, your coins remain tied
                to your original device/account and cannot be moved.
              </p>
              <p>
                All in-app purchases are processed by Apple's App Store (iOS) or
                Google Play Store (Android). We do not handle the payment
                transactions directly. Consistent with these store providers'
                policies, KnowUsBetter is not responsible for payment issues,
                billing, or refunds. If you have any questions or problems with
                an in-app purchase, you must contact Apple or Google directly
                per their refund policies.
              </p>
            </div>

            {/* 5. Messaging and Communication */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              5. Messaging and Communication
            </h2>
            <p className="mb-6 text-red-900 dark:text-red-300">
              The App allows in-game chat between the two players in a match.
              Chat is only available during the game and only between those two
              players; there is no way to send messages outside of a game room
              or to other users. You may not use the chat feature to share
              personal information (yours or others') or to perform any
              prohibited activity. All normal content rules apply to chat: for
              example, you may not use offensive, threatening, harassing, or
              hateful language, and you must not disclose others' personal data.
              Violating these rules may result in immediate termination of your
              access.
            </p>

            {/* 6. Acceptable Use and No Objectionable Content */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              6. Acceptable Use and No Objectionable Content
            </h2>

            <p className="mb-4 text-red-900 dark:text-red-300">
              By using the KnowUsBetter application, you agree to comply with
              all rules and guidelines. KnowUsBetter does not tolerate any form
              of objectionable content or abusive behavior.
            </p>

            <div className="mb-6 rounded-lg bg-red-50 p-4 dark:bg-red-950/20">
              <h3 className="mb-3 text-lg font-semibold text-red-950 dark:text-red-200">
                No Objectionable Content
              </h3>
              <p className="mb-3 text-sm text-red-900 dark:text-red-300">
                This includes, but is not limited to:
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-red-900 dark:text-red-300">
                <li>Harassment, bullying, or abusive behavior</li>
                <li>Hate speech or discrimination</li>
                <li>Sexually explicit or pornographic content</li>
                <li>Threatening or violent messages</li>
                <li>Any illegal or inappropriate behavior</li>
              </ul>
            </div>

            <div className="mb-6 space-y-4 text-red-900 dark:text-red-300">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  User-Generated Content
                </h3>
                <p>
                  You are responsible for all content you send or share within
                  the app. KnowUsBetter reserves the right to remove users who
                  violate these rules.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Account Removal
                </h3>
                <p>
                  Any user who engages in abusive behavior or sends
                  objectionable content may be banned or removed without notice.
                </p>
              </div>
            </div>

            <p className="mb-4 text-red-900 dark:text-red-300">
              Additionally, you agree not to misuse the App. In particular, you
              must not:
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-red-900 dark:text-red-300">
              <li>
                Use the App for any unlawful, unauthorized, or fraudulent
                purpose.
              </li>
              <li>
                Attempt to hack, reverse-engineer, decompile, or otherwise
                interfere with the App or its servers.
              </li>
              <li>
                Transmit viruses or other harmful code, or engage in any
                activity that disrupts or overloads the App.
              </li>
              <li>
                Upload or share any content that is unlawful, abusive,
                defamatory, obscene, hateful, or otherwise objectionable.
              </li>
              <li>
                Impersonate any person or entity, or falsely claim an
                affiliation with a person or organization.
              </li>
              <li>
                Use automated scripts, bots, or other tools to play the game or
                manipulate scores.
              </li>
              <li>
                Collect or store personal data about other users without their
                consent.
              </li>
              <li>
                Violate any applicable local, national, or international law or
                regulation.
              </li>
            </ul>
            <p className="mb-6 text-red-900 dark:text-red-300">
              We reserve the right to suspend or terminate anyone's access for
              any violation. By using KnowUsBetter, you confirm that you
              understand and accept these Terms.
            </p>

            {/* 7. Intellectual Property */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              7. Intellectual Property
            </h2>
            <p className="mb-6 text-red-900 dark:text-red-300">
              All content in the App – including quiz questions, text, images,
              graphics, logos, software code, and the compilation of the App –
              is the exclusive property of KnowUsBetter or its licensors. These
              materials are protected by copyright, trademark, and other
              intellectual property laws. You may not copy, reproduce,
              distribute, modify, create derivative works from, or publicly
              display any of the material in the App, except as expressly
              permitted by the App's features. Unauthorized use of the App's
              content is a violation of these Terms and applicable law.
            </p>

            {/* 8. Privacy and Data Collection */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              8. Privacy and Data Collection
            </h2>
            <p className="mb-6 text-red-900 dark:text-red-300">
              Your use of the App is also governed by our{" "}
              <Link
                href="/privacy-policy"
                className="font-semibold underline hover:text-red-950 dark:hover:text-red-100"
              >
                Privacy Policy
              </Link>
              , which explains how we collect, use, and protect data. In
              summary, KnowUsBetter does not require you to submit personal
              information. We only collect limited analytics and crash data
              through third-party services (specifically, Firebase and Sentry).
              These services gather device-usage statistics and error reports to
              help us improve the App. We do not collect personal messages or
              private data from users. By using the App, you consent to the data
              practices described in our Privacy Policy. If you have privacy
              concerns or wish to learn more, please consult our Privacy Policy.
            </p>

            {/* 9. Disclaimers */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              9. Disclaimers
            </h2>
            <p className="mb-6 text-red-900 dark:text-red-300">
              The App is provided on an "as is" and "as available" basis. We
              make no warranties of any kind (express or implied) regarding the
              App's performance, security, or content. For example, we do not
              guarantee that the App will always be uninterrupted, error-free,
              or secure. The quiz questions and any content are for
              entertainment and general knowledge only and may contain errors;
              you should not rely on them for any purpose. In no case will
              KnowUsBetter be responsible for any damages or losses resulting
              from your use of the App or reliance on its content.
            </p>

            {/* 10. Limitation of Liability */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              10. Limitation of Liability
            </h2>
            <p className="mb-6 text-red-900 dark:text-red-300">
              To the maximum extent allowed by law, KnowUsBetter (and its
              owners, employees, and affiliates) shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages
              arising out of your use of the App. This includes, without
              limitation, losses of profits, data, goodwill, or any other
              intangible losses. Even if we have been advised of the possibility
              of such damages, our liability is strictly limited as above.
            </p>

            {/* 11. Termination */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              11. Termination
            </h2>
            <p className="mb-6 text-red-900 dark:text-red-300">
              We reserve the right to suspend or terminate your access to the
              App at any time for any reason, including if you violate these
              Terms. Upon termination, you must stop using the App and delete it
              from your device. Terminating the App or your device's access will
              not entitle you to any compensation, and any unused coins will be
              forfeited.
            </p>

            {/* 12. Changes to Terms */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              12. Changes to Terms
            </h2>
            <p className="mb-6 text-red-900 dark:text-red-300">
              KnowUsBetter may update these Terms of Service at any time. If we
              make material changes, we will try to give at least 30 days'
              notice (for example, by posting a notice on our website or in the
              App). Your continued use of the App after the revised Terms take
              effect means you agree to be bound by the new Terms.
            </p>

            {/* 13. Governing Law */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              13. Governing Law
            </h2>
            <p className="mb-6 text-red-900 dark:text-red-300">
              These Terms are governed by and construed in accordance with the
              laws of the Republic of Turkey. Any legal actions or proceedings
              arising from these Terms or your use of the App will be brought in
              the courts of Turkey.
            </p>

            {/* 14. Contact Information */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              14. Contact Information
            </h2>
            <p className="mb-6 text-red-900 dark:text-red-300">
              If you have any questions or concerns about these Terms, please
              contact us at{" "}
              <a
                href="mailto:help@knowusbetter.app"
                className="font-semibold underline hover:text-red-950 dark:hover:text-red-100"
              >
                help@knowusbetter.app
              </a>
              . We will do our best to respond to inquiries in a timely manner.
            </p>

            <p className="mb-6 text-center text-lg font-semibold text-red-950 dark:text-red-200">
              Enjoy playing, and thank you for using KnowUsBetter!
            </p>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block rounded-lg border-2 border-gray-900 bg-[#f0f9ff] px-8 py-3 font-bold text-gray-900 transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
