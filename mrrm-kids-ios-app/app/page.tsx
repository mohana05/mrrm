import Image from "next/image";
import heroImage from "@/public/Images/home.png";
import heroIpadImage from "@/public/Images/home-ipad.png";
import activityNumbers from "@/public/Images/number-learning.png";
import activityShapes from "@/public/Images/shape-counting.png";
import speechPractice from "@/public/Images/speech-practice.png";
import progressImage from "@/public/Images/progress.png";
import premiumImage from "@/public/Images/premium.png";
import mrrmLogo from "@/public/Images/mrrm-logo.png";
import appLogo from "@/public/Images/app-logo.png";

const heroBadges = [
  "Perfect for ages 3-8",
  "10+ interactive activities",
  "3 languages",
];

const featureCards = [
  {
    title: "Interactive Learning",
    icon: "🎯",
    points: [
      "Counting 1-100 & skip counting",
      "Shape recognition & number patterns",
      "Ascending / descending sequences",
    ],
  },
  {
    title: "Speech Practice",
    icon: "🎤",
    points: [
      "Instant pronunciation feedback",
      "Visual + audio reinforcement",
      "Builds real-world confidence",
    ],
  },
  {
    title: "Progress Tracking",
    icon: "📊",
    points: [
      "Detailed activity stats",
      "100+ reward stickers",
      "Multiple skill levels",
    ],
  },
  {
    title: "Kid-Safe Design",
    icon: "🛡️",
    points: [
      "COPPA compliant",
      "No third-party ads",
      "Distraction-free interface",
    ],
  },
];

const activities = [
  {
    title: "Number Counting",
    description:
      "Recognize and count numbers from 1 to 100 with playful visuals and supportive narration.",
    image: activityNumbers,
    highlights: ["Number sequences", "Skip counting", "Basic math practice"],
  },
  {
    title: "Shape & Pattern Play",
    description:
      "Spot shapes, colors, and repeating patterns to boost logical thinking and early geometry skills.",
    image: activityShapes,
    highlights: ["Shape counting", "Pattern matching", "Find biggest / smallest"],
  },
  {
    title: "Speech Practice",
    description:
      "Say numbers out loud, get instant feedback, and build confident bilingual speaking skills.",
    image: speechPractice,
    highlights: ["Pronunciation tips", "VoiceOver ready", "Dynamic Type support"],
  },
];

const languages = [
  { label: "English", emoji: "🇺🇸" },
  { label: "Español", emoji: "🇪🇸" },
  { label: "हिंदी", emoji: "🇮🇳" },
];

const parentHighlights = [
  "Created by educators with accessibility in mind",
  "Dyslexia-friendly font and adjustable sizes",
  "Supports VoiceOver and Dynamic Type",
  "Safe, offline-ready experience",
];

const speechBenefits = [
  "Practice saying numbers in multiple languages",
  "Instant feedback encourages accurate pronunciation",
  "Combines listening, seeing, and speaking",
  "Builds confidence through guided repetition",
];

const privacyPoints = [
  "No personal data collection",
  "No third-party tracking or ads",
  "Runs offline after download",
  "COPPA compliant",
];

const freeTier = [
  "3 core activities",
  "Numbers 1-20",
  "All 3 languages (English, Español, हिंदी)",
  "Basic sticker rewards",
  "Progress tracking",
];

const CTA_APP_STORE =
  "https://apps.apple.com/us/app/numbee-learning/id6754674187";

const premiumTier = [
  "All 10 activities",
  "Numbers 1-100",
  "Speech Practice unlocked",
  "100+ premium stickers",
  "No advertisements ever",
  "Future updates included",
];

const faqItems = [
  {
    question: "Which activities are free and which require Premium?",
    answer:
      "The free download includes three core activities covering numbers 1-20 in all three languages. Premium unlocks all 10 activities, numbers 1-100, speech practice, and 100+ stickers.",
  },
  {
    question: "Does NumBee work offline and stay ad-free?",
    answer:
      "Yes. After the initial download, every activity runs fully offline and no third-party ads or trackers are included, making it safe for kids.",
  },
  {
    question: "Which languages are supported?",
    answer:
      "NumBee guides children in English, Spanish, and Hindi across both free and premium tiers so bilingual families can practice together.",
  },
  {
    question: "Can parents track progress for multiple kids?",
    answer:
      "Built-in progress dashboards show completed activities, skill streaks, and sticker collections so parents or educators can monitor each learner.",
  },
  {
    question: "Is speech recognition stored anywhere?",
    answer:
      "Speech Practice is processed on-device only. Audio is never saved, transmitted, or collected—once feedback is delivered, the audio is discarded.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pt-16">
      <RootShowcase />
      <section id="numbee" className="flex flex-col gap-20">
        <SiteHeader />
        <Hero />
        <TrustSection />
        <FeatureGrid />
        <ActivitiesShowcase />
        <FreeVsPremium />
        <LanguagesBanner />
        <SpeechHighlight />
        <ParentFriendly />
        <FAQSection />
        <PrivacySupport />
        <Footer />
      </section>
    </main>
  );
}

function RootShowcase() {
  const techStack = [
    "iOS",
    "Android",
    "SwiftUI",
    "Swift",
    "Flutter",
    "Kotlin",
  ];

  return (
    <section className="space-y-10 rounded-[3rem] border border-amber-100 bg-white/90 px-8 py-10 shadow-2xl shadow-amber-100">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-purple-50 shadow-inner shadow-amber-100">
              <Image
                src={mrrmLogo}
                alt="mrrm logo"
                className="h-16 w-16 object-contain"
                placeholder="blur"
                sizes="80px"
              />
            </div>
            <div>
              <BrandWordmark className="text-sm tracking-[0.3em] text-amber-500" />
              <h1 className="text-4xl font-semibold text-slate-900">
                Building joyful learning apps for every platform.
              </h1>
            </div>
          </div>
          <p className="text-lg text-slate-600">
            We craft delightful experiences for families using SwiftUI, Kotlin,
            and Flutter—delivering native-quality iOS and Android apps with the
            same playful polish across platforms.
          </p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-900"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#numbee"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              Explore NumBee Learning
            </a>
            <a
              href="mailto:mrrmfamily2022@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-amber-400 hover:text-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
          <span className="flex items-center gap-2">
            Partner with
            <BrandWordmark className="tracking-[0.3em]" />
          </span>
            </a>
          </div>
        </div>
        <a
          href="#numbee"
          className="group block rounded-[2.5rem] border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-purple-50 p-6 shadow-xl shadow-amber-200 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-200"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-amber-200 bg-white shadow-inner shadow-amber-100">
              <Image
                src={appLogo}
                alt="NumBee Learning icon"
                className="h-14 w-14 rounded-[18px] object-cover"
                placeholder="blur"
                sizes="64px"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-amber-500">
                Math & numbers for kids
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">
                NumBee Learning
              </h2>
            </div>
          </div>
          <p className="mt-4 text-base text-slate-600">
            Help kids master counting, speech, and patterns with joyful,
            educator-designed games.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            {["Ages 4+", "Speech practice", "3 languages"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-3 py-1 text-slate-700 shadow"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 py-3 text-base font-semibold text-white shadow-lg shadow-amber-300">
            View NumBee details
          </div>
        </a>
      </div>
    </section>
  );
}

function SiteHeader() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 rounded-[2.5rem] border border-slate-100 bg-white/70 px-6 py-4 shadow-md shadow-amber-50">
      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-purple-50 shadow-inner shadow-amber-100">
          <Image
            src={mrrmLogo}
            alt="mrrm logo"
            className="h-10 w-10 object-contain"
            placeholder="blur"
            sizes="56px"
          />
        </div>
        <div>
          <BrandWordmark className="text-sm tracking-[0.3em] text-amber-500" />
          <p className="text-lg font-semibold text-slate-900">
            NumBee Learning
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-500">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
          iPhone & iPad
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
          Ages 4+
        </span>
        <a
          href={CTA_APP_STORE}
          className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2 font-semibold text-white transition hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
        >
          Download
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="grid gap-10 rounded-[2.5rem] bg-white/80 p-8 shadow-xl shadow-amber-100 ring-1 ring-amber-100/70 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-3 rounded-full border border-amber-200 bg-white/80 px-4 py-1 shadow-sm shadow-amber-100">
          <Image
            src={mrrmLogo}
            alt="NumBee Learning app logo"
            className="h-8 w-8 rounded-2xl border border-amber-100 bg-amber-50 p-1"
            placeholder="blur"
            sizes="32px"
          />
          <span className="text-sm font-semibold text-amber-900">
            <BrandWordmark className="tracking-[0.3em]" /> presents
          </span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          NumBee Learning makes math fun for ages 3-8.
        </h1>
        <p className="text-lg text-slate-600">
          10+ interactive activities help kids master counting, patterns, speech
          practice, and number sense with colorful guidance and instant
          feedback.
        </p>
        <div className="flex flex-wrap gap-3">
          {heroBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-900"
            >
              {badge}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={CTA_APP_STORE}
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            aria-label="Download NumBee Learning on the App Store"
          >
            Download on the App Store
          </a>
          <a
            href="mailto:mrrmfamily2022@gmail.com"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-base font-semibold text-slate-900 transition hover:border-amber-400 hover:text-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
          >
            Contact Support
          </a>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="relative w-full max-w-md">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-200 via-white to-teal-100 blur-2xl" />
          <div className="relative rounded-[32px] border border-white/70 bg-white p-4 shadow-2xl">
            <Image
              src={heroImage}
              alt="NumBee Learning home screen"
              className="rounded-3xl"
              placeholder="blur"
              priority
            />
          </div>
          <div className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 rounded-3xl border border-white/60 bg-white/90 p-3 shadow-xl md:block">
            <Image
              src={heroIpadImage}
              alt="NumBee Learning iPad preview"
              className="w-64 rounded-2xl"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function TrustSection() {
  return (
    <section className="rounded-[2.5rem] border border-slate-100 bg-white/70 p-8 text-center shadow-lg shadow-amber-50">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
        Trusted by Parents & Educators
      </p>
      <p className="mt-4 text-xl text-slate-600">
        Perfect for preschool prep, kindergarten readiness, homeschool families,
        bilingual learners, and children with learning differences.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-semibold text-slate-500">
        {[
          "Preschool",
          "Kindergarten",
          "Homeschool",
          "ESL Families",
          "Learning Support",
        ].map((label) => (
          <span
            key={label}
            className="rounded-full bg-slate-100 px-4 py-2 text-slate-700"
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}

function FeatureGrid() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          Educational Features
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          Interactive learning that grows with your child.
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Every activity includes visual aids, audio support, and multiple modes
          to meet learners where they are.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featureCards.map((card) => (
          <article
            key={card.title}
            className="space-y-4 rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-md shadow-amber-50"
          >
            <div className="inline-flex items-center gap-3">
              <span className="text-2xl">{card.icon}</span>
              <h3 className="text-xl font-semibold text-slate-900">
                {card.title}
              </h3>
            </div>
            <ul className="space-y-2 text-slate-600">
              {card.points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ActivitiesShowcase() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          Activities Explained
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          Every concept is taught with joyful visuals and guidance.
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          From number extremes to pattern recognition, NumBee keeps kids
          exploring new math adventures.
        </p>
      </div>
      <div className="grid gap-8">
        {activities.map((activity, index) => (
          <article
            key={activity.title}
            className="flex flex-col gap-6 rounded-[2.5rem] border border-slate-100 bg-white/80 p-6 shadow-lg shadow-amber-50 md:flex-row md:items-center"
          >
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">
                {activity.title}
              </h3>
              <p className="text-slate-600">{activity.description}</p>
              <ul className="space-y-2 text-slate-600">
                {activity.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="text-amber-500">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 p-2">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  className="rounded-2xl"
                  placeholder="blur"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="rounded-3xl border border-slate-100 bg-white/90 p-6 shadow-md shadow-amber-50 md:flex md:items-center md:gap-8">
        <div className="flex-1 space-y-3">
          <h3 className="text-xl font-semibold text-slate-900">More ways to learn</h3>
          <ul className="grid gap-2 text-slate-600 md:grid-cols-2">
            {[
              "Greater than / less than comparisons",
              "Find biggest & smallest numbers",
              "Sequence ordering (ascending & descending)",
              "Pattern recognition (numbers, shapes, colors)",
              "Basic addition & subtraction",
              "Number extremes challenges",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-amber-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex-1 rounded-3xl border border-dashed border-amber-200 bg-amber-50/60 p-4 text-center text-sm text-amber-800 md:mt-0">
          “Kids earn reward stickers as they progress, motivating repeat play
          while keeping the environment safe and ad-free.”
        </div>
      </div>
    </section>
  );
}

function FreeVsPremium() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          Free vs Premium
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          Unlock the full NumBee experience for only $6.99 (one-time).
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          The free tier keeps three core activities and all three languages
          (English, Spanish, Hindi) open to every family. Premium expands the
          number range, unlocks Speech Practice, and adds 100+ rewards with no
          ads or subscriptions.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <TierCard title="Free Version" price="$0" items={freeTier} />
        <TierCard
          title="Premium Unlock"
          price="$6.99"
          items={premiumTier}
          highlight
        />
      </div>
      <div className="rounded-3xl border border-amber-200 bg-white/80 p-6 shadow-lg shadow-amber-100 md:flex md:items-center md:gap-8">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900">
            One-time purchase, no surprises.
          </h3>
          <p className="text-slate-600">
            Premium removes ads, unlocks all languages, and keeps new features
            coming without subscriptions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={CTA_APP_STORE}
              className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              Upgrade on the App Store
            </a>
          </div>
        </div>
        <div className="mt-8 flex-1 rounded-3xl bg-gradient-to-tr from-purple-50 via-white to-amber-50 p-4 shadow-inner md:mt-0">
          <Image
            src={premiumImage}
            alt="Premium unlock preview"
            className="rounded-2xl"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}

function TierCard({
  title,
  price,
  items,
  highlight,
}: {
  title: string;
  price: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <article
      className={`space-y-4 rounded-[2.5rem] border p-6 shadow-lg ${
        highlight
          ? "border-purple-200 bg-white/90 shadow-purple-100"
          : "border-slate-100 bg-white/70 shadow-amber-50"
      }`}
    >
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          {title}
        </p>
        <p className="text-3xl font-semibold text-slate-900">{price}</p>
      </div>
      <ul className="space-y-2 text-slate-600">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className={highlight ? "text-purple-500" : "text-amber-500"}>
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function LanguagesBanner() {
  return (
    <section className="rounded-[2.5rem] border border-teal-200 bg-gradient-to-r from-teal-50 via-white to-amber-50 p-8 shadow-lg shadow-teal-100">
      <div className="md:flex md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">
            Multi-language Support
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Learn numbers in three languages.
          </h2>
          <p className="text-lg text-slate-600">
            Perfect for bilingual families, ESL learners, and multi-lingual
            classrooms.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3 md:mt-0">
          {languages.map((language) => (
            <span
              key={language.label}
              className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm"
            >
              <span>{language.emoji}</span>
              {language.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpeechHighlight() {
  return (
    <section className="grid gap-8 rounded-[2.5rem] border border-slate-100 bg-white/80 p-6 shadow-xl shadow-amber-50 md:grid-cols-2 md:items-center">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          Speech Practice
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Speak, listen, and learn together.
        </h2>
        <p className="text-lg text-slate-600">
          Our speech recognition feature gives instant feedback so kids gain
          confidence saying numbers out loud.
        </p>
        <ul className="space-y-2 text-slate-600">
          {speechBenefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2">
              <span className="text-amber-500">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
        <Image
          src={progressImage}
          alt="Speech practice feedback screen"
          className="rounded-2xl"
          placeholder="blur"
        />
      </div>
    </section>
  );
}

function ParentFriendly() {
  return (
    <section className="grid gap-8 rounded-[2.5rem] border border-slate-100 bg-white/80 p-6 shadow-lg shadow-amber-50 md:grid-cols-2">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          Designed for Success
        </p>
        <h2 className="text-3xl font-semibold text-slate-900">
          Built with accessibility and caregivers in mind.
        </h2>
        <ul className="space-y-2 text-slate-600">
          {parentHighlights.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="text-amber-500">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4 rounded-3xl border border-dashed border-slate-200 p-6">
        <h3 className="text-xl font-semibold text-slate-900">
          Parent-friendly controls
        </h3>
        <ul className="space-y-2 text-slate-600">
          {[
            "One-time purchase, no subscriptions",
            "Customizable settings per learner",
            "Progress tracking to monitor growth",
            "Safe, distraction-free environment",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-amber-500">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="space-y-6 rounded-[2.5rem] border border-slate-100 bg-white/80 p-6 shadow-lg shadow-amber-50">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">
          Answers for parents, educators, and app reviewers.
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Everything you need to know about pricing, privacy, offline access,
          and speech recognition.
        </p>
      </div>
      <div className="space-y-4">
        {faqItems.map((item) => (
          <details
            key={item.question}
            className="rounded-3xl border border-slate-100 bg-white/90 p-4 shadow-sm shadow-amber-50"
          >
            <summary className="cursor-pointer text-lg font-semibold text-slate-900">
              {item.question}
            </summary>
            <p className="mt-2 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}

function PrivacySupport() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="rounded-[2.5rem] border border-slate-100 bg-white/80 p-6 shadow-lg shadow-amber-50">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Privacy First
          </p>
          <a
            href="https://mohana05.github.io/numbee-learning/privacy-policy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 underline-offset-4 hover:underline"
          >
            View full policy
            <span aria-hidden>↗</span>
          </a>
        </div>
        <h3 className="mt-2 text-2xl font-semibold text-slate-900">
          Safe for kids everywhere.
        </h3>
        <ul className="mt-4 space-y-2 text-slate-600">
          {privacyPoints.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="text-amber-500">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-[2.5rem] border border-slate-100 bg-white/80 p-6 shadow-lg shadow-amber-50">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
          Support
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-slate-900">
          We are here for families and schools.
        </h3>
        <p className="mt-4 text-slate-600">
          Questions or feedback? Email us and a member of the{" "}
          <BrandWordmark className="tracking-[0.3em]" /> team will reply
          quickly.
        </p>
        <a
          href="mailto:mrrmfamily2022@gmail.com"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
        >
          mrrmfamily2022@gmail.com
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="rounded-[2.5rem] border border-slate-100 bg-white/70 p-6 text-center text-sm text-slate-500 shadow-inner shadow-amber-50">
      <p className="font-semibold text-slate-700">
        <BrandWordmark className="tracking-[0.3em]" /> · NumBee Learning
      </p>
      <p className="mt-2">
        Download NumBee Learning and watch your child’s confidence grow.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <a
          href={CTA_APP_STORE}
          className="text-amber-600 underline-offset-4 hover:underline"
        >
          App Store
        </a>
        <a
          href="mailto:mrrmfamily2022@gmail.com"
          className="text-amber-600 underline-offset-4 hover:underline"
        >
          Contact
        </a>
        <a
          href="https://mohana05.github.io/numbee-learning/privacy-policy"
          className="text-amber-600 underline-offset-4 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Privacy
        </a>
      </div>
      <p className="mt-4 text-xs text-slate-400">
        © {new Date().getFullYear()}{" "}
        <BrandWordmark className="tracking-[0.3em]" />. All rights reserved.
      </p>
    </footer>
  );
}

function BrandWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline font-semibold uppercase ${className}`}
    >
      <span className="text-pink-500">MR</span>
      <span className="text-emerald-500">RM</span>
    </span>
  );
}
