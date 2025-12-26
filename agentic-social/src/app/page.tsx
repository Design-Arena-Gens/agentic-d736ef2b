"use client";

import { useMemo, useState } from "react";

type Platform = "Instagram" | "TikTok" | "LinkedIn";
type Objective = "Launch buzz" | "Product promotion" | "Community growth";

const platformVoices: Record<Platform, string> = {
  Instagram:
    "Vibrant, lifestyle-forward tone that invites viewers into the brand story with aspirational visuals.",
  TikTok:
    "Energetic, fast-cut storytelling that hooks in the first 3 seconds with a playful, behind-the-scenes voice.",
  LinkedIn:
    "Insight-driven narrative that elevates expertise, balancing thought leadership with actionable value.",
};

const objectiveAngles: Record<Objective, string> = {
  "Launch buzz":
    "Spotlight the mission, tease the journey so far, and build anticipation with a clear countdown CTA.",
  "Product promotion":
    "Highlight the hero benefit, lean on social proof, and close with a frictionless conversion path.",
  "Community growth":
    "Ask an engaging question, celebrate user stories, and promote a branded hashtag to rally around.",
};

const automationPlaybooks = [
  {
    title: "Always-On Awareness",
    description:
      "Blend evergreen content pillars with trending audio, auto-fill gaps with repost prompts, and amplify best performers.",
    steps: [
      "Daily trend scan at 08:00 with platform-specific insights",
      "Repurpose top posts into stories + reels with new hooks",
      "Automated creator outreach when engagement spikes > 18%",
    ],
  },
  {
    title: "Launch Countdown Sprint",
    description:
      "Orchestrate a 10-day drip from teaser to reveal, with auto-generated scripts, shot lists, and paid boost recommendations.",
    steps: [
      "Draft long-form manifesto → auto-slice into micro-narratives",
      "Coordinate creator hand-offs with smart approvals and nudges",
      "Deploy real-time sentiment tracking and adjust talking points",
    ],
  },
  {
    title: "Retention Pulse",
    description:
      "Warm your existing audience with staggered community highlights, DM follow-ups, and surprise-and-delight drops.",
    steps: [
      "Identify top fans weekly and spin up custom DM sequences",
      "Schedule spotlight reels with user-generated intros",
      "Auto-issue loyalty perks when repeat engagement threshold hits",
    ],
  },
];

const campaignCalendar = [
  {
    day: "MON",
    content: "Launch teaser reel with countdown sticker",
    metric: "Watch-through forecast: 68%",
  },
  {
    day: "TUE",
    content: "Behind-the-scenes carousel introducing the mission",
    metric: "Save rate estimate: 21%",
  },
  {
    day: "WED",
    content: "Live Q&A prompts with founder talking points",
    metric: "Live RSVP projection: +312",
  },
  {
    day: "THU",
    content: "Micro-influencer stitch challenge goes live",
    metric: "Creator participation goal: 18 clips",
  },
  {
    day: "FRI",
    content: "Launch day hero video + boosted spend recommendation",
    metric: "CPA prediction: $4.21",
  },
];

const faqs = [
  {
    question: "What does the agent actually automate?",
    answer:
      "PulsePilot handles your content planning, scripting, scheduling, approvals, creator outreach, and performance check-ins. You stay in the loop with smart nudges instead of spreadsheets.",
  },
  {
    question: "Do I need to connect my social accounts?",
    answer:
      "You can start in simulation mode to validate strategy. Connect Instagram, TikTok, LinkedIn, and YouTube via secure OAuth when you're ready to publish directly from the agent workspace.",
  },
  {
    question: "Can it match our brand voice?",
    answer:
      "Absolutely. Upload brand guidelines, tone references, competitive examples, and historical posts. The agent trains a custom voice model and keeps learning from approvals and edits.",
  },
  {
    question: "How does reporting work?",
    answer:
      "Daily flash updates keep you ahead of trends, while Monday recaps deliver performance breakdowns, media mix recommendations, and next-best actions ranked by potential impact.",
  },
];

const pricingPlans = [
  {
    name: "Creator Lab",
    price: "$129",
    cadence: "/month",
    highlight: "Perfect for solo strategists shipping volume content.",
    perks: [
      "Platform intelligence for Instagram + TikTok",
      "10 automated campaign blueprints",
      "AI caption, script, and hook writer",
      "Smart scheduler with best-time predictions",
    ],
  },
  {
    name: "Growth Squad",
    price: "$349",
    cadence: "/month",
    highlight: "Built for lean teams managing multiple brands.",
    perks: [
      "Multi-brand workspaces & approvals",
      "Influencer CRM with auto follow-ups",
      "Paid media briefs with budget guardrails",
      "Advanced reporting + Slack insights feed",
    ],
    popular: true,
  },
  {
    name: "Agency OS",
    price: "Let’s talk",
    cadence: "",
    highlight: "Custom automations for agencies and in-house teams at scale.",
    perks: [
      "Dedicated strategist + success engineer",
      "Content ops integrations and webhook actions",
      "Bespoke KPI dashboards and white-label exports",
      "Priority roadmap access & co-creation sprints",
    ],
  },
];

const metrics = [
  { label: "Avg. engagement lift", value: "31%" },
  { label: "Launch prep time saved", value: "22 hrs" },
  { label: "Creator response rate", value: "4.6x" },
  { label: "Team satisfaction score", value: "92/100" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_rgba(15,23,42,0.95))]" />
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 sm:px-10">
        <Hero />
        <MetricPanel />
        <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <AgentFlywheel />
          <CampaignComposer />
        </section>
        <AutomationPlaybooks />
        <CampaignMomentum />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section className="flex flex-col gap-12">
      <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200">
        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
        AI Social Growth Agent · PulsePilot
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Ship social campaigns with an agent that plans, writes, and launches
            alongside you.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
            PulsePilot listens to your brand story, spins up multi-platform
            narratives, routes approvals, and nudges the team when timing
            matters most. Replace manual calendars with an adaptive operator
            that runs 24/7.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 hover:shadow-sky-400/40"
            >
              Launch my agent
            </a>
            <a
              href="#demo"
              className="rounded-full border border-slate-700 px-6 py-3 text-base font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              See a live plan
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 -translate-y-6 rounded-3xl bg-sky-500/20 blur-3xl" />
          <div className="relative rounded-3xl border border-slate-800/70 bg-slate-900/80 p-6 shadow-xl shadow-slate-900/70 backdrop-blur">
            <h2 className="text-lg font-medium text-slate-200">
              Agent Daily Brief · 07:00
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Quick pulses from overnight channels. 4 opportunities detected.
            </p>
            <ul className="mt-6 flex flex-col gap-5">
              {[
                {
                  title: "Trend detected: “Power Morning Rituals”",
                  body: "Recommend remixing your latest reel with trending audio + add CTA for the new product waitlist.",
                },
                {
                  title: "Creator collab follow-up",
                  body: "Jules Rivera sent draft edits. Agent suggests approving and appending limited-offer trackable link.",
                },
                {
                  title: "LinkedIn spotlight opportunity",
                  body: "Top client testimonial is gaining traction—turn into carousel insights post and schedule AMP version.",
                },
              ].map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4"
                >
                  <p className="text-sm font-medium text-slate-100">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricPanel() {
  return (
    <section className="grid gap-4 rounded-3xl border border-slate-800/70 bg-slate-950/50 p-6 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="flex flex-col gap-2 rounded-2xl border border-slate-800/70 bg-slate-900/60 px-5 py-6"
        >
          <span className="text-3xl font-semibold text-slate-50">
            {metric.value}
          </span>
          <span className="text-sm uppercase tracking-wide text-slate-400">
            {metric.label}
          </span>
        </div>
      ))}
    </section>
  );
}

function AgentFlywheel() {
  return (
    <section className="rounded-3xl border border-slate-800/70 bg-slate-950/50 p-6 backdrop-blur">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Agent Flywheel
      </span>
      <h2 className="mt-4 text-3xl font-semibold text-slate-50">
        One cockpit to orchestrate ideas, creators, and delivery.
      </h2>
      <p className="mt-4 text-base text-slate-400">
        PulsePilot keeps your content engine spinning with adaptive rituals.
        The agent captures signals, drafts assets, routes for review, schedules
        across platforms, and learns from performance—all without human
        handoffs slowing momentum.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          {
            title: "Signal Intake",
            description:
              "Daily listening across trends, mentions, and keyword shifts to surface hot topics.",
          },
          {
            title: "Narrative Builder",
            description:
              "Transforms briefs into platform-native scripts, carousels, hooks, and shot lists.",
          },
          {
            title: "Launch Control",
            description:
              "Auto-schedules, routes approvals, and syncs reminders across the team’s inboxes.",
          },
          {
            title: "Performance Loop",
            description:
              "Compares KPIs against models, reallocates spend, and proposes next experiments.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5"
          >
            <h3 className="text-lg font-semibold text-slate-100">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CampaignComposer() {
  const [platform, setPlatform] = useState<Platform>("Instagram");
  const [objective, setObjective] = useState<Objective>("Launch buzz");

  const sample = useMemo(() => {
    const angle = objectiveAngles[objective];
    const voice = platformVoices[platform];
    const callToAction =
      platform === "LinkedIn"
        ? "Invite readers to save the post and join the executive circle."
        : platform === "TikTok"
        ? "Wrap with an on-screen CTA and pin the top comment linking the drop."
        : "Use a CTA sticker nudging viewers to tap through the product story.";

    const hook =
      platform === "TikTok"
        ? "Hook: “POV — your morning ritual just went from snooze to legendary.”"
        : platform === "Instagram"
        ? "Hook: “Behind the launch: the moment our community asked for more.”"
        : "Hook: “3 takeaways from building a category-defining wellness ritual.”";

    const format =
      platform === "LinkedIn"
        ? "Carousel Format:\n1. Opening insight with bold stat\n2. Behind-the-scenes framework\n3. Community highlight quote\n4. Call-to-action slide"
        : platform === "TikTok"
        ? "Video Beat Sheet:\n• 0-3s: Smash cut of product in action\n• 3-7s: Creator VO names the pain point\n• 7-13s: Rapid demo with onscreen captions\n• 13-20s: Social proof overlay + CTA"
        : "Story Sequence:\n• Frame 1: Tease with countdown sticker\n• Frame 2: Feature hero benefit with overlay text\n• Frame 3: Creator cameo reacting to first use\n• Frame 4: Swipe-up with incentive";

    return {
      angle,
      voice,
      callToAction,
      hook,
      format,
    };
  }, [platform, objective]);

  return (
    <section
      id="demo"
      className="rounded-3xl border border-slate-800/70 bg-slate-950/50 p-6 backdrop-blur"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Campaign Composer
          </span>
          <h2 className="mt-2 text-2xl font-semibold text-slate-50">
            Generate platform-native narratives in seconds.
          </h2>
        </div>
        <span className="rounded-full border border-slate-800 px-3 py-1 text-xs text-slate-400">
          Simulation Mode
        </span>
      </div>
      <div className="mt-6 flex flex-col gap-4 text-sm text-slate-300">
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Platform focus
          </span>
          <select
            value={platform}
            onChange={(event) =>
              setPlatform(event.target.value as Platform)
            }
            className="rounded-xl border border-slate-800/60 bg-slate-900/80 px-4 py-3 text-base text-slate-100 outline-none transition hover:border-slate-600 focus:border-sky-500"
          >
            <option value="Instagram">Instagram</option>
            <option value="TikTok">TikTok</option>
            <option value="LinkedIn">LinkedIn</option>
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Objective
          </span>
          <select
            value={objective}
            onChange={(event) =>
              setObjective(event.target.value as Objective)
            }
            className="rounded-xl border border-slate-800/60 bg-slate-900/80 px-4 py-3 text-base text-slate-100 outline-none transition hover:border-slate-600 focus:border-sky-500"
          >
            <option value="Launch buzz">Launch buzz</option>
            <option value="Product promotion">Product promotion</option>
            <option value="Community growth">Community growth</option>
          </select>
        </label>
      </div>
      <div className="mt-6 space-y-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 text-sm text-slate-300">
        <p>
          <strong className="text-slate-100">Voice calibration:</strong>{" "}
          {sample.voice}
        </p>
        <p>
          <strong className="text-slate-100">Narrative angle:</strong>{" "}
          {sample.angle}
        </p>
        <p className="whitespace-pre-line">
          <strong className="text-slate-100">Format blueprint:</strong>{" "}
          {sample.format}
        </p>
        <p>
          <strong className="text-slate-100">Hero hook:</strong> {sample.hook}
        </p>
        <p>
          <strong className="text-slate-100">Agent CTA guidance:</strong>{" "}
          {sample.callToAction}
        </p>
      </div>
      <p className="mt-4 text-xs text-slate-500">
        The agent can push this story directly to your connected scheduler or
        convert it into briefs for your creators.
      </p>
    </section>
  );
}

function AutomationPlaybooks() {
  return (
    <section className="rounded-3xl border border-slate-800/70 bg-slate-950/50 p-6 backdrop-blur">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Automation Playbooks
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-slate-50">
            Pre-built rituals to scale your social operation.
          </h2>
        </div>
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
        >
          Unlock full library →
        </a>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {automationPlaybooks.map((playbook) => (
          <article
            key={playbook.title}
            className="flex h-full flex-col gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5"
          >
            <h3 className="text-lg font-semibold text-slate-100">
              {playbook.title}
            </h3>
            <p className="text-sm text-slate-400">{playbook.description}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {playbook.steps.map((step) => (
                <li
                  key={step}
                  className="flex gap-2 rounded-xl border border-slate-800/60 bg-slate-950/70 px-3 py-2"
                >
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function CampaignMomentum() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="rounded-3xl border border-slate-800/70 bg-slate-950/50 p-6 backdrop-blur">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Impact Forecast
        </span>
        <h2 className="mt-3 text-3xl font-semibold text-slate-50">
          Predictive insights keep every launch on track.
        </h2>
        <p className="mt-4 text-base text-slate-400">
          PulsePilot models campaign performance using platform data, brand
          history, and real-time benchmarks. You get daily red/yellow/green
          scores with tactical nudges. No more reactive pivots—your agent
          reroutes before momentum dips.
        </p>
        <div className="mt-6 grid gap-4">
          {[
            {
              label: "Creator response health",
              value: "97%",
              caption: "Automated nudges delivered 3.6x faster approvals.",
            },
            {
              label: "Media mix efficiency",
              value: "82%",
              caption: "Budget shifted from underperforming boosts in real time.",
            },
            {
              label: "Audience sentiment index",
              value: "+14",
              caption:
                "Agent flagged new community language trend and rewrote captions mid-flight.",
            },
          ].map((signal) => (
            <div
              key={signal.label}
              className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5"
            >
              <div className="flex items-baseline justify-between">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  {signal.label}
                </p>
                <span className="text-2xl font-semibold text-emerald-400">
                  {signal.value}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{signal.caption}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-slate-800/70 bg-slate-950/50 p-6 backdrop-blur">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Campaign Cadence
        </span>
        <h2 className="mt-3 text-2xl font-semibold text-slate-50">
          Auto-orchestrated launch week timeline.
        </h2>
        <div className="mt-6 grid gap-4 text-sm text-slate-300">
          {campaignCalendar.map((event) => (
            <div
              key={event.day}
              className="grid gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 sm:grid-cols-[80px_1fr]"
            >
              <div className="flex h-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 text-lg font-semibold text-slate-100">
                {event.day}
              </div>
              <div>
                <p className="font-medium text-slate-100">{event.content}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-500">
                  {event.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="rounded-3xl border border-slate-800/70 bg-slate-950/50 p-6 backdrop-blur">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        Pricing
      </span>
      <h2 className="mt-3 text-3xl font-semibold text-slate-50">
        Choose the agent configuration that matches your current stage.
      </h2>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`flex h-full flex-col gap-4 rounded-2xl border ${
              plan.popular
                ? "border-sky-500/70 bg-slate-900/80 shadow-lg shadow-sky-500/20"
                : "border-slate-800/70 bg-slate-900/60"
            } p-6`}
          >
            {plan.popular && (
              <span className="inline-flex max-w-fit items-center rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                Most booked
              </span>
            )}
            <div>
              <h3 className="text-xl font-semibold text-slate-100">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{plan.highlight}</p>
            </div>
            <div className="text-3xl font-semibold text-slate-50">
              {plan.price}
              <span className="ml-1 text-base font-normal text-slate-400">
                {plan.cadence}
              </span>
            </div>
            <ul className="flex flex-1 flex-col gap-2 text-sm text-slate-300">
              {plan.perks.map((perk) => (
                <li
                  key={perk}
                  className="flex gap-2 rounded-xl border border-slate-800/60 bg-slate-950/70 px-3 py-2"
                >
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@pulsepilot.ai?subject=PulsePilot%20Agent%20Inquiry"
              className={`inline-flex items-center justify-center rounded-full border px-4 py-3 text-sm font-semibold transition ${
                plan.popular
                  ? "border-sky-400 bg-sky-500/20 text-sky-100 hover:bg-sky-400/30"
                  : "border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white"
              }`}
            >
              Talk to an agent strategist →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="rounded-3xl border border-slate-800/70 bg-slate-950/50 p-6 backdrop-blur">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
        FAQ
      </span>
      <h2 className="mt-3 text-3xl font-semibold text-slate-50">
        Everything you need to know before you onboard the agent.
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {faqs.map((item) => (
          <details
            key={item.question}
            className="group rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 text-slate-300"
          >
            <summary className="cursor-pointer text-base font-semibold text-slate-100 transition group-open:text-sky-300">
              {item.question}
            </summary>
            <p className="mt-3 text-sm text-slate-400">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-r from-slate-950/90 via-sky-900/40 to-slate-950/90 p-8">
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.25),_transparent_60%)] lg:block" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-slate-50">
            Ready to hand campaign ops to your AI co-pilot?
          </h2>
          <p className="mt-3 max-w-2xl text-base text-slate-300">
            Book a 30-minute working session. We’ll map your next launch,
            connect data sources, and have PulsePilot drafting your content
            stacks by the end of the call.
          </p>
        </div>
        <a
          href="https://cal.com"
          className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400 hover:shadow-sky-400/40"
        >
          Book a build session →
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col gap-6 border-t border-slate-800/60 pt-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} PulsePilot Labs. All rights reserved.</span>
      <div className="flex flex-wrap gap-4">
        <a href="#pricing" className="transition hover:text-sky-300">
          Pricing
        </a>
        <a href="#demo" className="transition hover:text-sky-300">
          Demo
        </a>
        <a href="mailto:hello@pulsepilot.ai" className="transition hover:text-sky-300">
          Contact
        </a>
        <a href="https://legal.pulsepilot.ai/terms" className="transition hover:text-sky-300">
          Terms
        </a>
        <a href="https://legal.pulsepilot.ai/privacy" className="transition hover:text-sky-300">
          Privacy
        </a>
      </div>
    </footer>
  );
}
