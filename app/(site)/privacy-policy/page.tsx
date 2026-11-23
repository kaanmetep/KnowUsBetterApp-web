import Logo from "@/app/components/Logo";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the KnowUsBetter couples quiz app.",
  alternates: { canonical: "/privacy-policy" },
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
            Last updated: November 22, 2026
          </p>

          <div className="prose prose-red max-w-none dark:prose-invert">
            {/* Introduction */}
            <p className="mb-6 text-red-900 dark:text-red-300">
              This quiz game app is offered on both iOS and Android. We respect
              your privacy and collect only the data needed for core
              functionality. No login or personal account is required – the game
              identifies players only by a random ID. We do not collect phone
              numbers, addresses, contacts, precise location data, photos, or
              microphone access, and we only receive an email address if you
              choose to give one when you write to us. The data we handle is: a unique anonymous
              device identifier, the display name and avatar you choose, your
              answers during a game (including short typed answers), reports
              you send about other players, feedback and support messages you
              send us from the app, in-app purchase records (handled
              through RevenueCat), an optional push notification token, and
              analytics, crash and error data and occasional screen
              recordings used to improve the app.
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
                  Display Name and Avatar
                </h3>
                <p>
                  Before playing, you choose a display name and pick one of our
                  preset avatars (no photo uploads). Your name and avatar are
                  saved on your device and shared only with the other player in
                  your game room. Names are automatically filtered for
                  profanity.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Game Answers (Including Typed Answers)
                </h3>
                <p>
                  Games are played in private rooms of at most two players.
                  Your answers – including short typed answers (up to 30
                  characters) for some questions – are sent to our game server
                  so they can be shown to the other player in your room and
                  scored. Typed answers are never shown to anyone outside your
                  room and are never published. Before your answer is shown, it
                  is automatically checked for harmful content (see "Safety and
                  Moderation" below). In one-phone mode, both players answer on
                  the same device, and the partner name and avatar you enter
                  for the other player are sent to our game server and handled
                  like the display name and avatar of any other player.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Reports
                </h3>
                <p>
                  If you report another player's typed answer, we store the
                  report for manual review: the reported answer, the question,
                  the room code, both players' display names, and both
                  players' anonymous IDs.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Feedback, Support Messages and Deletion Requests
                </h3>
                <p>
                  You can send us feedback, a support message, or a data
                  deletion request from inside the app (Settings). We store
                  what you write, your anonymous ID, the app version, your
                  device platform and OS version, and the app language, so we
                  can read and act on it. Giving an email address is optional;
                  if you do, we use it only to reply to you or to confirm a
                  deletion. We do not use it for marketing and do not share it
                  with anyone. Messages are kept until we have handled them and
                  for as long as they are useful for improving the app; you can
                  ask us to delete them at any time.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Push Notification Token
                </h3>
                <p>
                  If you allow notifications, we store your device's push token
                  so we can send you game-related notifications (for example,
                  daily reward reminders). You can turn notifications off at
                  any time in your device settings.
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
                  Analytics and Crash Data
                </h3>
                <p>
                  We use PostHog for product analytics, crash and error
                  reports, and session recordings. Product analytics records how the app is used,
                  linked to your anonymous device ID: app opens, screens
                  viewed, onboarding steps, creating and joining rooms, sharing
                  an invite, starting, finishing or leaving a game, answering
                  questions (we record that you answered, not what you
                  answered), reactions sent and received, opening the coin
                  store, purchase attempts and their result (product, price
                  and currency), daily rewards, AI Match Analysis use, rating
                  prompts and your notification permission choice. Along with
                  these events we receive device information (device model, OS
                  version), app version, language, IP address and the
                  approximate location (country and city) derived from it.
                  Crash and error reports include error messages, stack traces
                  and the last few steps in the app before the error (such as
                  the screen you were on or a lost connection). To find out why
                  games drop, we also record connection events: when the
                  connection to our servers is lost or restored, the technical
                  reason, how long it lasted, the room code, whether the app
                  was in the background and your network type (Wi-Fi or
                  cellular). For a share of sessions we record a replay of the
                  app's screens to see where the app gets stuck. Text you type,
                  your answers, the statements in Two Truths and a Lie, and AI
                  Match Analysis reports are masked and never recorded; other
                  on-screen text, such as the names shown in a room, can appear
                  in a recording. This data helps us understand which features
                  people use, improve the app and fix bugs. We do not use it
                  for advertising.
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
                  We use the device ID, display name, avatar, and answers to run
                  private game rooms: showing each player's answers to the other
                  player in the room, calculating match scores, and checking
                  whether two typed answers mean the same thing.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Safety and Moderation
                </h3>
                <p>
                  Every typed answer is checked on our server before the other
                  player sees it. Offensive words are masked by a profanity
                  filter, and the answer is analyzed by OpenAI's moderation
                  service. Answers flagged as harmful (for example hate,
                  threats, or sexual content) are never shown. Instead, both
                  players see "This answer was hidden". We review reports sent
                  by players, and we may permanently block the anonymous ID of
                  anyone who violates our Terms of Use from creating or joining
                  game rooms.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Daily Analysis and AI Match Analysis (Optional)
                </h3>
                <p>
                  If you play a Daily Analysis or unlock an AI Match Analysis,
                  the display names and answers from that game (including typed
                  answers) are sent to an AI provider to generate a
                  personalized report: Anthropic (Claude), or OpenAI as a backup
                  and for players on older app versions. The app asks every
                  player for their agreement before anything is sent.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Purchases
                </h3>
                <p>
                  We use purchase data to grant you coins or subscriptions.
                  RevenueCat validates the purchase and notifies us so we can
                  credit your account. For the Unlimited subscription we store
                  only its status (when the current period ends and whether it
                  renews), linked to your device ID, so a game can start
                  without spending coins. We also record purchase events
                  (product, price and currency) in our product analytics to
                  understand which packages people choose. We never use
                  purchase data for advertising or marketing.
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
                  Our game server keeps active game rooms (display names,
                  avatars, and answers) in temporary storage that is deleted
                  automatically within a few hours. We use Supabase as our
                  database for coin balances and purchase records, push tokens,
                  player reports, and blocked IDs, all linked only to your
                  anonymous device ID.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  OpenAI (Moderation and AI Features)
                </h3>
                <p>
                  We send typed answers to OpenAI to (1) check them for harmful
                  content, and (2) decide whether two players' typed answers
                  match. Reports for a Daily Analysis or an AI Match Analysis
                  may also be written by OpenAI, as described above. OpenAI
                  processes this data on our behalf. Under its
                  API terms, OpenAI does not use it to train its models and may
                  keep it for up to 30 days for abuse monitoring. You can learn
                  more at{" "}
                  <a
                    href="https://openai.com/policies/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-950 dark:hover:text-red-100"
                  >
                    OpenAI Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  Anthropic (AI Reports)
                </h3>
                <p>
                  If you and your partner agree, the names and answers from a
                  Daily Analysis game are sent to Anthropic, whose Claude models
                  write your report. Anthropic processes this data on our behalf
                  and, under its commercial terms, does not use it to train its
                  models. You can learn more at{" "}
                  <a
                    href="https://www.anthropic.com/legal/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-950 dark:hover:text-red-100"
                  >
                    Anthropic Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-red-950 dark:text-red-200">
                  PostHog (Product Analytics, Error Tracking and Session
                  Recordings)
                </h3>
                <p>
                  We use PostHog to understand how the app is used and to find
                  and fix crashes and errors. PostHog receives the in-app
                  events, crash and error reports, connection events and
                  session recordings described under "Analytics and Crash
                  Data" above, together with your anonymous device ID, device
                  model, OS version, app version, language, network type, IP
                  address and approximate location (country and city). It never
                  receives your answers or any payment details; names can
                  appear only as on-screen text in a session recording.
                  PostHog processes this data on our behalf on servers
                  in the United States, and we do not use it for advertising or
                  to track you across other apps or websites. You can learn
                  more at{" "}
                  <a
                    href="https://posthog.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-950 dark:hover:text-red-100"
                  >
                    PostHog Privacy Policy
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
              Game rooms, including names and answers, are deleted
              automatically from our server within a few hours after a game.
              AI Match Analysis results are kept for up to 2 hours so you can
              reopen them. Player reports are kept only as long as needed to
              review them and enforce our Terms of Use. Blocked IDs are kept
              for as long as the block applies. We retain your device ID and
              purchase records only as long as necessary for the app to
              function (e.g., to remember your coins). Analytics and crash data
              are kept only as long as they are useful for improving the app.
              We do not keep your data longer than needed.
            </p>

            <p className="mb-6 text-red-900 dark:text-red-300">
              You can ask us to delete your data at any time, right from the
              app: open Settings and tap "Request Data Deletion". You can also
              email us (see below) with the User ID shown in Settings. We
              delete the data linked to your anonymous ID within 30 days: your
              coins and coin history, Unlimited status, the questions you have
              already seen, your daily analyses, your push notification token,
              your feedback and support messages, and the analytics data
              linked to your ID. Reports you filed are kept for moderation
              without your ID or name. We keep only what we are required to
              keep: purchase transaction records needed for tax and
              accounting, and blocked IDs for as long as a block applies.
              Deleting your data does not cancel a subscription; you can cancel
              it in your App Store or Google Play settings. If you left an
              email address with your request, we will let you know once the
              deletion is complete.
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
              deletion), write to us from the app (Settings → Contact Us) or
              email our support team at{" "}
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
