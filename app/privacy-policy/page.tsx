import Logo from "@/app/components/Logo";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - KnowUsBetter",
  description: "Privacy Policy for KnowUsBetter app",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mb-8 text-sm text-red-800 dark:text-red-400">
            Last updated: November 16, 2025
          </p>

          <div className="prose prose-red max-w-none dark:prose-invert">
            {/* Introduction */}
            <p className="mb-6 text-red-900 dark:text-red-300">
              This quiz game app is offered on both iOS and Android. We respect
              your privacy and collect only the data needed for core
              functionality. No login or personal account is required – the game
              identifies players only by a random ID. We do not collect names,
              emails, addresses, contacts, or any other personal identifiers. We
              also do not collect location data, photos, microphone access, or
              any sensitive information. The only data tied to a user are a
              unique anonymous device identifier, in-app purchase records
              (handled through RevenueCat), and anonymous analytics data
              collected through Firebase Analytics and Sentry for app
              improvement and crash reporting.
            </p>

            {/* Information We Collect */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              Information We Collect
            </h2>

            <div className="mb-6 space-y-4 text-red-900 dark:text-red-300">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Device ID
                </h3>
                <p>
                  We generate a unique anonymous ID for each player (via
                  RevenueCat or our backend). This lets us associate game
                  progress and purchases with your device, but it is not linked
                  to your personal identity.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Purchase Data
                </h3>
                <p>
                  If you buy in-game coins, we use RevenueCat to process the
                  transaction. RevenueCat's documentation confirms that it
                  collects the user's purchase history (transaction records). We
                  receive only a purchase receipt or status – no personal
                  payment information. Apple processes payments through the App
                  Store; we only get the confirmation necessary to credit your
                  account.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  User Content
                </h3>
                <p>
                  The app lets players send messages to each other during the
                  game. These chat messages are temporarily stored on our server
                  only to deliver them to other players. We do not link message
                  content to any personal data beyond the anonymous ID used in
                  the game. We do not read or use these messages for anything
                  other than gameplay. We do not store or use these messages for
                  any other purpose.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Analytics and Crash Data
                </h3>
                <p>
                  We use Firebase Analytics and Sentry to collect anonymous
                  usage data and crash reports. This includes app usage
                  statistics (screen views, session duration), device
                  information (OS version, device model), and error logs when
                  the app crashes. This data is collected anonymously and helps
                  us improve app performance and fix bugs. We do not collect any
                  personally identifiable information through these services,
                  and we do not use this data for advertising purposes.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              How We Use Your Information
            </h2>

            <div className="mb-6 space-y-4 text-red-900 dark:text-red-300">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Game Functionality
                </h3>
                <p>
                  We use the device ID to manage game sessions (matchmaking,
                  scores, etc.) and to route messages between players. Your
                  messages are delivered based on this anonymous ID.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Purchases
                </h3>
                <p>
                  We use purchase data solely to grant you coins or
                  subscriptions. RevenueCat validates the purchase and notifies
                  us so we can credit your account. We do not use purchase data
                  for marketing or analytics.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Security and Improvements
                </h3>
                <p>
                  We may use minimal data (like device ID) to prevent fraud or
                  enforce game rules. We may also review aggregated,
                  non-identifying data to improve app performance. We do not
                  sell or share your information with any advertisers or data
                  brokers. All data use is strictly for the app's functionality
                  and compliance.
                </p>
              </div>
            </div>

            {/* Third-Party Services */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              Third-Party Services
            </h2>

            <p className="mb-4 text-red-900 dark:text-red-300">
              We use only essential third-party services to operate the app:
            </p>

            <div className="mb-6 space-y-4 text-red-900 dark:text-red-300">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  RevenueCat (In-App Purchases)
                </h3>
                <p>
                  We rely on RevenueCat to handle all in-app purchase
                  transactions. RevenueCat processes your purchase data
                  (purchase history and status) in an anonymous way. They do not
                  collect any personal information from you – only transaction
                  metadata.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Apple App Store
                </h3>
                <p>
                  Apple processes credit/debit card or Apple ID payments for any
                  purchases. We do not receive your payment details, only
                  confirmation of the purchase.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Our Backend (Supabase)
                </h3>
                <p>
                  We use a server (Supabase) to store minimal game data. The
                  only user-related data stored is the anonymous device ID (and
                  chat messages in transit). No other personal data is stored on
                  our servers.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Firebase Analytics
                </h3>
                <p>
                  We use Firebase Analytics (provided by Google) to collect
                  anonymous usage statistics. Firebase Analytics tracks app
                  events, screen views, session duration, and basic device
                  information (OS version, device model, country). This data is
                  anonymized and aggregated, helping us understand how users
                  interact with the app and improve the user experience.
                  Firebase does not collect personal information. You can learn
                  more at{" "}
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-950 dark:hover:text-red-100"
                  >
                    Firebase Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Sentry (Error Tracking)
                </h3>
                <p>
                  We use Sentry to monitor app crashes and errors. When the app
                  encounters an error or crashes, Sentry collects technical
                  information such as error messages, stack traces, device type,
                  OS version, and app version. This data helps us identify and
                  fix bugs quickly. Sentry does not collect any personal user
                  information. You can learn more at{" "}
                  <a
                    href="https://sentry.io/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-950 dark:hover:text-red-100"
                  >
                    Sentry Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  No Advertising
                </h3>
                <p>
                  We do not integrate any advertising networks or use any data
                  for advertising purposes. We do not sell or share your
                  information with advertisers.
                </p>
              </div>
            </div>

            {/* Data Retention and Deletion */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              Data Retention and Deletion
            </h2>

            <p className="mb-6 text-red-900 dark:text-red-300">
              We retain your device ID and purchase records only as long as
              necessary for the app to function (e.g., to remember your coins
              and game progress). We do not keep your data longer than needed.
              While the app does not include an in-app "Delete Account" button,
              we comply with privacy guidelines for data deletion. As Apple's
              guidelines state, even "guest" or automatically-generated accounts
              must be deletable. Therefore, you may request deletion of your
              data at any time. If you want us to erase your information (device
              ID, messages, and purchase records), please contact our support
              (see below). We will promptly delete your data from our systems
              upon request.
            </p>

            {/* Children's Privacy */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              Children's Privacy
            </h2>

            <p className="mb-6 text-red-900 dark:text-red-300">
              Our app is not directed at children under 13. We do not knowingly
              collect personal information from anyone under 13. If a parent or
              guardian believes we have collected personal data from a child
              under 13, they may contact us to have that information deleted.
              Upon such notification, we will delete any information we have
              about that child.
            </p>

            {/* Policy Updates */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              Policy Updates
            </h2>

            <p className="mb-6 text-red-900 dark:text-red-300">
              We may update this Privacy Policy from time to time as our app
              evolves. We will post any changes on this page with a new "Last
              Updated" date. Your continued use of the app after changes means
              you accept the updated policy.
            </p>

            {/* Contact Us */}
            <h2 className="mb-4 mt-8 text-2xl font-bold text-red-950 dark:text-red-200">
              Contact Us
            </h2>

            <p className="mb-6 text-red-900 dark:text-red-300">
              If you have any questions, concerns, or requests (including data
              deletion), please contact our support team at{" "}
              <a
                href="mailto:help@knowusbetter.app"
                className="font-semibold underline hover:text-red-950 dark:hover:text-red-100"
              >
                help@knowusbetter.app
              </a>
              . We will respond promptly to address your privacy requests and
              ensure your data is handled according to this policy.
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
