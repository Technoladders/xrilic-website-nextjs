// All site copy lives here. Components read from this file and do not hardcode strings.
// Anything marked SAMPLE is a placeholder and must be replaced with real data before launch.

export const site = {
  name: "Xrilic",
  url: "https://xrilic.ai",
  title: "AI Recruiter and Prospecting CRM for staffing firms | Xrilic",
  description:
    "Xrilic is the AI engine for staffing and recruitment firms. TalentGPT fills roles with an AI Recruiter and LinkedIn Recruit. ProspectGPT wins new clients with a prospecting CRM.",
  // SAMPLE: point these at the real app and booking links.
  links: { login: "#", signup: "#", demo: "/#demo" },
};


export type PlanValue = string | boolean;

// Pricing page (layout modelled on clickup.com/pricing).
// SAMPLE: every price, allowance and plan boundary below is a placeholder. Replace with the real price list before launch.
export const pricing = {
  hero: { title: ["The best recruitment", "for the best"], muted: ["engine,", "price."] },
  guarantee: "Free trial on every plan",
  saveNote: "Save with yearly billing",
  cycles: ["Monthly", "Yearly"],
  currency: "₹",
  homeTitle: "Simple pricing for delivery and sales",
  homeSubtitle: "Pick one GPT or run the whole engine. Pay per seat and add credits when you need them.",
  homeLink: "See full pricing and compare plans",
  compareLabel: "Compare all features",
  more: "and much more…",
  plans: [
    {
      id: "talentgpt",
      name: "TalentGPT",
      monthly: 999,
      yearly: 799,
      unit: "seat / mo",
      note: "",
      cta: "Start free trial",
      popular: false,
      ai: [],
      band: "Key features",
      features: [
        "Jobs and candidate pipeline",
        "AI Recruiter voice screening",
        "LinkedIn Recruit and Chrome extension",
        "Talent Pool and Job Match",
        "Resume parsing and bulk upload",
        "Projects, sequences and tasks",
        "Email sync (Gmail, Outlook)",
        "Goals and incentives",
        "Mobile app",
      ],
    },
    {
      id: "prospectgpt",
      name: "ProspectGPT",
      monthly: 999,
      yearly: 799,
      unit: "seat / mo",
      note: "",
      cta: "Start free trial",
      popular: false,
      ai: [],
      band: "Key features",
      features: [
        "Prospecting CRM and deal pipeline",
        "Company search",
        "People search",
        "Hiring signals",
        "ICP scoring and account lists",
        "Sequences and tasks",
        "Email open tracking",
        "Goals and incentives",
        "Mobile app",
      ],
    },
    {
      id: "engine",
      name: "Engine",
      monthly: 1499,
      yearly: 1299,
      unit: "seat / mo",
      note: "",
      cta: "Book a demo",
      popular: true,
      ai: [
        { text: "TalentGPT + ProspectGPT", strong: true },
        { text: "AI-drafted outreach" },
      ],
      band: "Everything in |TalentGPT and ProspectGPT|, plus:",
      features: [
        "One database for candidates and clients",
        "Built-in dialer",
        "WhatsApp messaging",
        "Dashboards and reports",
        "Reply detection and daily digest",
        "Roles and teams",
        "Priority support",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      monthly: null,
      yearly: null,
      unit: "",
      note: "Talk to our team",
      cta: "Contact sales",
      popular: false,
      ai: [
        { text: "Both GPTs, scaled", strong: true },
        { text: "Custom AI Recruiter call volume" },
        { text: "Custom AI Recruiter scripts" },
        { text: "Custom credits · volume pricing", plus: true },
      ],
      band: "Everything in |Engine|, plus:",
      features: [
        "Guided onboarding and data migration",
        "Dedicated account manager",
        "Custom roles and permissions",
        "Custom reports",
        "Invoice billing",
        "Team training sessions",
      ],
    },
  ],
  max: {
    eyebrow: "One plan. Everything included.",
    name: "MAX",
    line: "The full engine for firms that want AI on every job and every account.",
    monthly: 9999,
    yearly: 7999,
    unit: "seat / mo",
    cta: "Get started",
    secondary: "Contact sales",
    columns: [
      { title: "TalentGPT + ProspectGPT", badge: "MAX", items: ["Highest AI usage limits", "AI Recruiter on every applicant", "AI Assistant for sellers", "Job Match across every job"] },
      { title: "MAX AI engine", items: ["500 AI Recruiter calls / seat / mo", "Unlimited AI-drafted outreach", "Unlimited Job Match runs", "10K credits / seat / mo · pooled"] },
      { title: "Everything in Enterprise", items: ["Guided onboarding and migration", "Dedicated account manager", "Custom roles and reports", "Priority support"] },
    ],
  },
  compare: [
    {
      name: "TalentGPT",
      rows: [
        { label: "Jobs and candidate pipeline", values: [true, false, true, true] },
        { label: "LinkedIn Recruit", values: [true, false, true, true] },
        { label: "Talent Pool and Job Match", values: [true, false, true, true] },
        { label: "Call transcripts and recordings", values: [true, false, true, true] },
      ],
    },
    {
      name: "ProspectGPT",
      rows: [
        { label: "Prospecting CRM", values: [false, true, true, true] },
        { label: "Company and people search", values: [false, true, true, true] },
        { label: "Hiring signals and ICP scoring", values: [false, true, true, true] },
        { label: "AI-drafted outreach", values: [false, true, true, true] },
        { label: "Email open tracking", values: [false, true, true, true] },
      ],
    },
    {
      name: "Engagement",
      rows: [
        { label: "Email sync", values: [true, true, true, true] },
        { label: "Sequences and tasks", values: [true, true, true, true] },
        { label: "Built-in dialer", values: [false, false, true, true] },
        { label: "WhatsApp messaging", values: [false, false, true, true] },
        { label: "Goals and incentives", values: [true, true, true, true] },
      ],
    },
    {
      name: "Admin and support",
      rows: [
        { label: "Mobile app", values: [true, true, true, true] },
        { label: "Dashboards and reports", values: ["Standard", "Standard", "Advanced", "Custom"] },
        { label: "Onboarding and data migration", values: [false, false, "Guided", "Dedicated"] },
        { label: "Support", values: ["Standard", "Standard", "Priority", "Account manager"] },
      ],
    },
  ] as { name: string; rows: { label: string; values: PlanValue[] }[] }[],
  addons: {
    eyebrow: "Go further",
    title: "AI is included. These take it further.",
    subtitle: "Every plan ships with its GPT and a monthly credit allowance. When your team wants more, add exactly what you need.",
    items: [
      { key: "credits", tag: "AI Credits", title: "Add more credits to any plan", desc: "Credits cover contact reveals, searches and enrichment. They are pooled across your team, and you can top up when you run low.", price: "₹999", unit: "per 1K credits", cta: "Get credits" },
      { key: "calls", tag: "AI Recruiter", title: "Extra screening calls for busy months", desc: "Add AI Recruiter call packs when a client opens a volume role. Unused calls roll into the next month.", price: "₹4,999", unit: "per 500 calls", cta: "Add calls" },
      { key: "onboarding", tag: "Xrilic Assist", title: "Live onboarding and migration", desc: "We move your candidates, clients and contacts in, set up your pipelines and train your recruiters and sellers.", price: "Custom", unit: "scoped to your team", cta: "Book a demo" },
    ],
  },
  calculator: {
    eyebrow: "Save with Xrilic",
    title: "Save time. Save money. Drop the extra tools.",
    pick: "Select the tools you use today",
    replace: "Tools to replace",
    perUser: "/ user",
    total: "Total",
    year: "/ year",
    seatsLabel: "People at your firm",
    seatsUnit: "people",
    compareWith: "Compare with",
    savings: "Cost savings",
    savingsLine: "Estimated yearly saving for a team this size, compared with paying for these tools separately.",
    empty: "Pick the tools you pay for today to see the saving.",
    quote: "Get a quote",
    start: "Start free trial",
    // SAMPLE: typical per-user monthly costs, for illustration only.
    tools: [
      { name: "Applicant tracking system", short: "ATS", cost: 3500, on: true },
      { name: "LinkedIn sourcing tool", short: "Sourcing", cost: 6000, on: true },
      { name: "Contact data provider", short: "Contact data", cost: 4000, on: true },
      { name: "Sales CRM", short: "CRM", cost: 2500, on: true },
      { name: "Email sequencer", short: "Sequencer", cost: 3000, on: false },
      { name: "Cloud dialer", short: "Dialer", cost: 1500, on: false },
      { name: "Phone screening service", short: "Screening", cost: 2500, on: false },
      { name: "Reporting tool", short: "Reports", cost: 1000, on: false },
    ],
  },
  fair: {
    eyebrow: "Fair billing policy",
    title: ["Pay once for a contact.", "Never twice."],
    desc: "When you reveal a contact, it stays unlocked for your whole team. Repeat searches and profiles you open again do not use credits.",
    cardBrand: "Xrilic credits",
    cardLabel: "Price per repeat reveal",
    cardValue: "₹0",
  },
  faq: {
    title: "Frequently asked",
    muted: "questions",
    subtitle: "Find answers here, or contact us if you cannot find what you are looking for.",
    cta: "Contact us",
    items: [
      { q: "Can we start with one GPT and add the other later?", a: "Yes. You can start on TalentGPT or ProspectGPT and move to Engine at any time. Your data stays in place and you pay the difference from that day." },
      { q: "What is a credit?", a: "Credits pay for contact reveals, company and people searches, and enrichment. Each plan includes a monthly amount per seat, and credits are pooled across your team." },
      { q: "How are AI Recruiter calls counted?", a: "One call is one completed screening conversation with a candidate. Calls that are not answered are not counted." },
      { q: "How are we billed when we add seats?", a: "New seats are charged pro rata for the rest of the billing period and then at the normal price from the next one." },
      { q: "What payment methods do you accept?", a: "Cards, UPI and net banking. Enterprise customers can pay by invoice." },
      { q: "What happens if we cancel?", a: "Your plan stays active until the end of the period you have paid for. You can export your data before then." },
    ],
  },
  cta: {
    eyebrow: "Free trial. No card needed.",
    title: ["Start with one GPT.", "Add the other when you are ready."],
    primary: "Get started",
    secondary: "Contact sales",
  },
};

export type Product = {
  slug: string;
  group: string; // TalentGPT or ProspectGPT
  name: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  highlights: string[];
  subtitle: string;
  visual: "ai-recruiter" | "linkedin-recruit" | "prospecting-crm" | "advanced-ats";
  // Optional list of every module in a suite, shown as its own section on the product page.
  modules?: { title: string; subtitle: string; items: { icon: string; title: string; desc: string; href?: string; badge?: string }[] };
  // Optional paid add-on shown as its own segment on the product page.
  addon?: {
    id: string;
    eyebrow: string;
    title: string;
    desc: string;
    benefits: { icon: string; title: string; desc: string }[];
    cta: string;
    note: string;
  };
  steps: { title: string; desc: string }[];
  featuresTitle: string;
  featuresSubtitle: string;
  features: { icon: string; title: string; desc: string }[];
  stepTags: string[]; // short label above each step in the timeline
  accents: { chips: string[]; badge: string }; // shown on the two gradient feature cards (1st and 4th)
  spotlight: {
    eyebrow: string;
    title: string;
    desc: string;
    bullets: string[];
    sample: { lines: { from: "them" | "us"; text: string }[]; result: string }; // chat shown on the gradient card
  };
  benefits: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
};

export const productsUi = {
  primary: "Book a demo",
  secondary: "See pricing",
  stepsTitle: "How it works",
  benefitsTitle: "Why teams use it",
  faqTitle: "Questions about",
  faqSubtitle: "Anything else? Talk to us and we will walk you through it.",
  faqHeading: "Anything else you want to know?",
  faqCta: "Talk to us",
  relatedTitle: "More from Xrilic",
  relatedLink: "Learn more",
};

export const products: Record<string, Product> = {
  "advanced-ats": {
    slug: "advanced-ats",
    group: "Hiring suite",
    name: "Advanced ATS",
    metaTitle: "Advanced Applicant Tracking System for staffing firms | Xrilic",
    metaDescription:
      "One system for the whole hiring workflow: jobs, talent pool, bench, submissions, interviews, clients and projects, with AI Recruiter and LinkedIn Recruit built in.",
    title: "The applicant tracking system built for how staffing firms hire",
    highlights: ["applicant tracking system"],
    subtitle:
      "Run the whole hiring workflow in one workspace: jobs, talent pool, submissions, interviews, clients and projects, with AI screening and LinkedIn sourcing built in.",
    visual: "advanced-ats",
    stepTags: ["Open", "Source", "Screen", "Place"],
    accents: { chips: ["Screening", "Interview"], badge: "Pipeline · 5 stages" },
    steps: [
      { title: "Open the job", desc: "Create a job from the client's requirement and publish it to your careers page and job boards." },
      { title: "Source candidates", desc: "Search your talent pool and bench, invite people to apply, and add profiles from LinkedIn." },
      { title: "Screen and submit", desc: "Let AI Recruiter run the first call, then submit the best candidates to the client." },
      { title: "Interview and place", desc: "Schedule interviews, move candidates across the pipeline and record the placement." },
    ],
    featuresTitle: "Everything between a job order and a placement",
    featuresSubtitle: "One pipeline for every job, with your candidates, clients and conversations in the same place.",
    features: [
      { icon: "kanban", title: "A pipeline for every job", desc: "A board per job shows every candidate by stage, so nobody sits unnoticed." },
      { icon: "search", title: "Talent pool and Job Match", desc: "Search your own database first and rank matches against any job." },
      { icon: "phone", title: "AI screening built in", desc: "AI Recruiter calls applicants about the gaps in their resume and scores every call." },
      { icon: "calendar", title: "Submissions and interviews", desc: "Submit candidates to clients, schedule interviews and keep every outcome on the record." },
      { icon: "message", title: "WhatsApp conversations", desc: "Talk to candidates on WhatsApp from the candidate record." },
      { icon: "globe", title: "Careers page and job boards", desc: "Publish a job once and collect the applications in one inbox." },
    ],
    modules: {
      title: "Every module in the Hiring suite",
      subtitle: "All of this is included, so recruiters do not switch tools to get a job filled.",
      items: [
        { icon: "briefcase", title: "Jobs", desc: "Create and manage job orders, with a candidate pipeline for each one." },
        { icon: "users", title: "Talent Pool", desc: "Your candidate database, searchable by skill and title, with Job Match to rank people against a job." },
        { icon: "pin", title: "Bench Pool", desc: "Keep consultants who are available for placement in one list." },
        { icon: "send", title: "My Submissions", desc: "Track every candidate you have submitted to a client and what happened next." },
        { icon: "mail", title: "My Invites", desc: "Invite candidates to apply or share their details, and see who responded." },
        { icon: "calendar", title: "Interviews", desc: "Schedule interviews and keep the feedback with the candidate." },
        { icon: "message", title: "Conversations", desc: "WhatsApp conversations with candidates, inside the candidate record." },
        { icon: "handshake", title: "Clients", desc: "Client accounts and contacts, linked to their jobs." },
        { icon: "folder", title: "Projects", desc: "Group jobs and placements by client project." },
        { icon: "inbox", title: "Careers Applied", desc: "One inbox for the applications that arrive from your careers page." },
        { icon: "globe", title: "Job Boards", desc: "Publish jobs to job boards and promote the ones you need filled fast." },
        { icon: "search", title: "Profile Hub", desc: "Search candidate profiles by skill and title to find people you have not met yet." },
        { icon: "database", title: "Recruiter-X and Zive-X", desc: "Search beyond your own database to find more candidates for a job.", badge: "Beta" },
        { icon: "phone", title: "Telephony", desc: "Call candidates from the candidate record, with call logs and recording.", href: "#telephony", badge: "Add-on" },
        { icon: "phone", title: "AI Recruiter", desc: "Phone-screen every applicant and get a scored transcript.", href: "/ai-recruiter" },
        { icon: "linkedin", title: "LinkedIn Recruit", desc: "Save LinkedIn profiles, reveal contacts and run follow-ups with your team.", href: "/linkedin-recruit" },
      ],
    },
    addon: {
      id: "telephony",
      eyebrow: "Add-on",
      title: "Telephony: call candidates without leaving the ATS",
      desc: "Add calling to your ATS so recruiters call, log and review every conversation from the candidate record, not from a separate phone app.",
      benefits: [
        { icon: "phone", title: "Call from the candidate record", desc: "Answer, hold, mute and transfer from a call panel in the browser." },
        { icon: "list", title: "Every call logged", desc: "Answered, missed, voicemail, after-hours and blocked calls all appear in the call logs." },
        { icon: "mic", title: "Call recording", desc: "Record calls so managers can review them and new recruiters can learn from them." },
        { icon: "users", title: "Route calls to the right desk", desc: "Send callers to the right team with a skills menu, and set who is available." },
        { icon: "bell", title: "Never miss a candidate", desc: "Missed call alerts and voicemail make sure every candidate gets a reply." },
        { icon: "shield", title: "Keep spam out", desc: "Block unwanted numbers and handle calls that arrive after hours." },
      ],
      cta: "Talk to us about Telephony",
      note: "Call recording needs a recording subscription with the telephony provider.",
    },
    spotlight: {
      eyebrow: "One workspace",
      title: "Recruiters stay in one tool from job order to placement",
      desc: "Most staffing desks stitch together a database, a spreadsheet, a calendar and a chat app. In Xrilic, the job, the candidate, the client and the conversation sit on one record.",
      bullets: [
        "Every candidate sits on one record, from first contact to placement",
        "Client, project and job are linked, so a submission always has context",
        "AI Recruiter and LinkedIn Recruit work inside the same pipeline",
      ],
      sample: {
        lines: [
          { from: "them", text: "Java Lead at Northwind Bank: 12 candidates, 3 interviews this week." },
          { from: "us", text: "Submit Priya Nair and book the client interview." },
        ],
        result: "Submitted · interview booked",
      },
    },
    benefits: [
      { title: "One pipeline for every job", desc: "Every job has a board, so your team sees where each candidate stands." },
      { title: "Nothing lost between tools", desc: "Notes, messages, submissions and interviews live on the candidate record." },
      { title: "Built for staffing desks", desc: "Clients, projects, bench and submissions are part of the system, not add-ons." },
    ],
    faq: [
      { q: "What is included in the Advanced ATS?", a: "The whole Hiring suite: jobs, talent pool, bench, submissions, invites, interviews, conversations, clients, projects, careers inbox and job boards, plus AI Recruiter and LinkedIn Recruit." },
      { q: "Does it include AI screening and LinkedIn sourcing?", a: "Yes. AI Recruiter and LinkedIn Recruit are part of the Hiring suite and work inside the same pipeline as the rest of the ATS." },
      { q: "Can we publish jobs and collect applications?", a: "Yes. You can publish a job to your careers page and job boards, and applications from the careers page arrive in one inbox." },
      { q: "Can we move our existing candidates in?", a: "Yes. We help you bring candidates, clients and jobs in from spreadsheets or your current ATS during onboarding." },
      { q: "Is Telephony included?", a: "Telephony is an add-on to the Advanced ATS. It adds calling, call logs and call routing to the candidate record. Talk to us for current pricing." },
    ],
  },

  "ai-recruiter": {
    slug: "ai-recruiter",
    group: "TalentGPT",
    name: "AI Recruiter",
    metaTitle: "AI Recruiter: phone-screen every applicant | Xrilic",
    metaDescription:
      "AI Recruiter reads each resume against your job, phones the candidate to ask about the gaps and sends you a scored transcript and recording.",
    title: "Every applicant gets a call. You get a ranked shortlist.",
    highlights: ["ranked shortlist"],
    subtitle:
      "AI Recruiter reads each resume against your job description, finds the gaps, then phones the candidate to ask about them. You review a scored transcript instead of making the first call yourself.",
    visual: "ai-recruiter",
    stepTags: ["Upload", "Analyse", "Call", "Decide"],
    accents: { chips: ["Kafka: covered", "2023 gap"], badge: "02:14 · recorded" },
    steps: [
      { title: "Add candidates", desc: "Upload resumes, or pick people who are already on the job in Xrilic." },
      { title: "Find the gaps", desc: "Each resume is compared with the job description, and the missing or unclear points are listed." },
      { title: "The agent calls", desc: "A voice agent phones during the calling hours you set and asks about those gaps and your own questions." },
      { title: "Review and move", desc: "Read the transcript, play the recording and check the score. Candidates move to AI Screened in your pipeline." },
    ],
    featuresTitle: "Screening that fits how your desk works",
    featuresSubtitle: "You choose who gets called, when, and what is asked. AI Recruiter does the repetitive first pass.",
    features: [
      { icon: "scan", title: "Resume-to-job gap analysis", desc: "Finds what a resume does not show against the job description, so calls focus on what matters." },
      { icon: "clock", title: "Calling hours", desc: "Set the window in which candidates may be called, so calls land at sensible times." },
      { icon: "message", title: "Your own questions", desc: "Add questions for each job, such as notice period, location or expected pay." },
      { icon: "mic", title: "Transcript and recording", desc: "Every call is transcribed and recorded, so you can read it or listen to it." },
      { icon: "gauge", title: "Score against the job", desc: "A score helps you decide who to speak to first." },
      { icon: "user", title: "On the candidate profile", desc: "An AI Screening tab on each profile keeps the call, transcript and score next to everything else." },
    ],
    spotlight: {
      eyebrow: "Beyond a script",
      title: "Questions come from the resume, not a fixed script",
      desc: "A generic screening call asks everyone the same thing. AI Recruiter asks each candidate about the specific gaps in their own resume.",
      bullets: [
        "Gaps are found by comparing the resume with the job description",
        "Add extra questions that apply to every candidate on the job",
        "Works on new resumes and on candidates already in your database",
      ],
      sample: {
        lines: [
          { from: "them", text: "Your resume shows a gap in 2023. What were you working on?" },
          { from: "us", text: "A contract role on a payments platform, mostly Spring Boot and Kafka." },
        ],
        result: "Gap closed · Score 8.4",
      },
    },
    benefits: [
      { title: "A faster first response", desc: "Applicants hear from you the same day instead of waiting in a queue." },
      { title: "Consistent screening", desc: "Every candidate is asked about their gaps in the same way, and scored the same way." },
      { title: "Recruiters on the right calls", desc: "Your team spends its time with shortlisted candidates and clients." },
    ],
    faq: [
      { q: "How does AI Recruiter decide what to ask?", a: "It compares the resume with the job description, lists the gaps, and asks about them. It also asks any extra questions you add for the job." },
      { q: "Can we choose when candidates are called?", a: "Yes. You set calling hours for each batch, so candidates are called within the window you choose." },
      { q: "What do we get after a call?", a: "A transcript, the recording and a score. The candidate also moves to the AI Screened stage so your pipeline stays up to date." },
      { q: "Does it replace our recruiters?", a: "No. It handles the first-pass screening call. Your recruiters decide who moves forward and run every conversation after that." },
    ],
  },

  "linkedin-recruit": {
    slug: "linkedin-recruit",
    group: "TalentGPT",
    name: "LinkedIn Recruit",
    metaTitle: "LinkedIn Recruit: save, reveal and sequence | Xrilic",
    metaDescription:
      "Save LinkedIn profiles with the Xrilic extension, reveal contact details, group people into projects and run outreach sequences with your team.",
    title: "Turn LinkedIn profiles into a shared recruiting pipeline",
    highlights: ["shared recruiting pipeline"],
    subtitle:
      "Save profiles as you browse LinkedIn with the Xrilic extension. Then reveal contact details, group people into projects and run outreach with your team, all in one workspace.",
    visual: "linkedin-recruit",
    stepTags: ["Save", "Reveal", "Group", "Sequence"],
    accents: { chips: ["Saved", "Open to work"], badge: "Step 2 due today" },
    steps: [
      { title: "Save from LinkedIn", desc: "Use the Chrome extension to save a profile while you browse." },
      { title: "Reveal contact details", desc: "Reveal email and phone when you are ready to reach out. Each reveal uses credits." },
      { title: "Group into projects", desc: "Add people to a project for a role or a talent pool, one at a time or in bulk." },
      { title: "Run sequences", desc: "Each sequence step becomes a task. You send it by email, WhatsApp or phone." },
    ],
    featuresTitle: "Everything after the profile view",
    featuresSubtitle: "LinkedIn is where you find people. LinkedIn Recruit is where you keep track of them and follow up.",
    features: [
      { icon: "puzzle", title: "Chrome extension", desc: "Save profiles from LinkedIn without copying anything into a spreadsheet." },
      { icon: "bookmark", title: "Saved profiles", desc: "Search your saved people, with an open-to-work signal where it is available." },
      { icon: "folder", title: "Projects", desc: "Group people by role, client or talent pool, and add many at once." },
      { icon: "list", title: "Sequences and tasks", desc: "Plan follow-ups as steps. Each one waits as a task for the recruiter who owns it." },
      { icon: "search", title: "Saved searches", desc: "Keep the searches you run often and come back to them." },
      { icon: "users", title: "Team view", desc: "See saves, reveals and outreach across your recruiters, with reply rates." },
    ],
    spotlight: {
      eyebrow: "You stay in control",
      title: "Nothing is sent on your behalf",
      desc: "Sequences plan the follow-up. They do not send it. Every message goes out under your name only after you have reviewed it.",
      bullets: [
        "Each step is a task you send by email, WhatsApp or phone",
        "Log each touch quickly so your team sees what has been done",
        "Stop a sequence at any time when someone replies",
      ],
      sample: {
        lines: [
          { from: "them", text: "Step 2 is ready: follow-up email to Marcus Chen." },
          { from: "us", text: "Looks good. Send it." },
        ],
        result: "Sent by you · logged for the team",
      },
    },
    benefits: [
      { title: "No more profile spreadsheets", desc: "Saved people, contact details and notes live in one place that your whole team can search." },
      { title: "Follow-ups do not slip", desc: "Due steps show up as tasks, so the second and third message actually get sent." },
      { title: "A clear view of the team", desc: "See who saved, revealed and contacted whom, and which outreach gets replies." },
    ],
    faq: [
      { q: "How do profiles get into Xrilic?", a: "You save them from LinkedIn with the Xrilic Chrome extension. Saved profiles then appear in LinkedIn Recruit." },
      { q: "What does a reveal cost?", a: "Revealing a contact's email or phone uses credits from your plan. Saving a profile does not." },
      { q: "Does Xrilic send messages automatically?", a: "No. Sequence steps are tasks. You review and send each message yourself." },
      { q: "Can my team see each other's work?", a: "Yes. The Team view shows saves, reveals and outreach across your recruiters." },
    ],
  },

  "prospecting-crm": {
    slug: "prospecting-crm",
    group: "ProspectGPT",
    name: "Prospecting CRM",
    metaTitle: "Prospecting CRM for staffing sales | Xrilic",
    metaDescription:
      "ProspectGPT finds companies that are hiring, shows who decides on staffing partners, scores accounts against your ideal client profile and runs your pipeline.",
    title: "Find the clients that are hiring, then win them",
    highlights: ["clients that are hiring"],
    subtitle:
      "ProspectGPT finds companies with open roles, shows who decides on staffing partners, scores each account against your ideal client profile and runs outreach and your pipeline in one CRM.",
    visual: "prospecting-crm",
    stepTags: ["Define", "Find", "Reach", "Track"],
    accents: { chips: ["Hiring now", "Pune"], badge: "3 pipeline stages" },
    steps: [
      { title: "Define your ideal client", desc: "Describe the industries, sizes and locations you want, and save it as an ideal client profile." },
      { title: "Find companies and people", desc: "Search companies and the people who decide, with filters for who is hiring." },
      { title: "Reach out", desc: "Reveal work email and phone, then run sequences, calls and WhatsApp from the record." },
      { title: "Track the deal", desc: "Move accounts across a pipeline board and keep lists of the ones you are working." },
    ],
    featuresTitle: "A CRM built for recruitment sales",
    featuresSubtitle: "General CRMs start from a contact. ProspectGPT starts from a company that needs people.",
    features: [
      { icon: "building", title: "Company search", desc: "Find companies by industry, size and location, and see what each one does." },
      { icon: "usersearch", title: "People search", desc: "Find hiring managers and talent leads, with hiring filters to narrow the list." },
      { icon: "gauge", title: "ICP scoring", desc: "Score every account against your saved ideal client profile and work the best fits first." },
      { icon: "kanban", title: "Pipeline board", desc: "See every account by stage and move deals forward in one view." },
      { icon: "layers", title: "Account lists", desc: "Keep lists of target companies for a campaign, a region or a rep." },
      { icon: "bot", title: "Ask in plain English", desc: "Describe the companies or people you want and the assistant sets up the search." },
    ],
    spotlight: {
      eyebrow: "Start free",
      title: "Look first, pay only for what you reveal",
      desc: "A company profile is built from the company's own website without using credits. You spend credits only when you want full details or a contact's email or phone.",
      bullets: [
        "Company profiles from the company's own website, free to view",
        "Credits are used for full details and contact reveals",
        "Repeating a search you have already run does not bill you again",
      ],
      sample: {
        lines: [
          { from: "them", text: "Greenleaf has 14 open roles and no staffing partner listed." },
          { from: "us", text: "Add them to the Pune list." },
        ],
        result: "Added to list · Fit 92",
      },
    },
    benefits: [
      { title: "Reach clients early", desc: "See which companies are hiring and call before the competing agencies do." },
      { title: "Focus on the best fits", desc: "ICP scores tell your sellers which accounts deserve the first call." },
      { title: "Sales and delivery on one database", desc: "A hiring manager you meet today may be a candidate or client contact tomorrow, and the record is already there." },
    ],
    faq: [
      { q: "Where does company and people data come from?", a: "From B2B data sources, combined with each company's own website for the company profile." },
      { q: "Do we need LinkedIn Recruit to use it?", a: "No. Prospecting CRM works on its own. If you use both, recruiters and sellers share one database." },
      { q: "Can recruiters and sellers share records?", a: "Yes. Candidates, companies and contacts sit in one workspace, with roles controlling who sees what." },
      { q: "How is it priced?", a: "You pay per seat, and searches and reveals use credits. See the pricing page for plans." },
    ],
  },
};

export const productOrder = ["advanced-ats", "ai-recruiter", "linkedin-recruit", "prospecting-crm"] as const;


// ---------- Navigation and footer ----------
export const nav = {
  product: {
    label: "Products",
    items: [
      { icon: "kanban", kind: "advanced-ats", palette: "blue", name: "Advanced ATS", desc: "Every job, candidate and client in one pipeline, from job order to placement.", href: "/advanced-ats" },
      { icon: "phone", kind: "ai-recruiter", palette: "warm", name: "AI Recruiter", desc: "Every applicant gets a screening call, with a scored transcript.", href: "/ai-recruiter" },
      { icon: "linkedin", kind: "linkedin-recruit", palette: "green", name: "LinkedIn Recruit", desc: "Every saved profile lands in a shared project, ready for outreach.", href: "/linkedin-recruit" },
      { icon: "building", kind: "prospecting-crm", palette: "orange", name: "Prospecting CRM", desc: "Every hiring company gets scored, so you call the best fits first.", href: "/prospecting-crm" },
    ],
  },
  resources: {
    label: "Resources",
    items: [
      { icon: "tag", name: "Pricing", href: "/pricing" },
      { icon: "help", name: "FAQ", href: "/#faq" },
      { icon: "puzzle", name: "Chrome extension", href: "#" },
    ],
    // SAMPLE: a "latest update" card, as in the reference. Point at a real changelog when there is one.
    update: { tag: "Latest update", date: "17 November 2026", title: "LinkedIn Recruit now keeps projects, sequences and saved searches in one place", href: "/linkedin-recruit" },
  },
  signIn: "Sign in",
  cta: "Book a demo",
};

export const footer = {
  disclaimer: [
    "Xrilic (“Xrilic”) provides technology and AI-powered tools designed to help staffing and recruitment firms screen candidates, run outreach and manage prospects. Xrilic is a software platform and does not provide employment, legal or advisory services.",
    "Any candidate or prospect interactions, summaries or recommendations generated through Xrilic are based on the data and configuration provided by the customer. Xrilic does not control, verify or guarantee the accuracy of that information, and all hiring and commercial decisions remain with the customer.",
  ],
  columns: [
    {
      title: "Product",
      links: [
        { name: "Advanced ATS", href: "/advanced-ats" },
        { name: "AI Recruiter", href: "/ai-recruiter" },
        { name: "LinkedIn Recruit", href: "/linkedin-recruit" },
        { name: "Prospecting CRM", href: "/prospecting-crm" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Pricing", href: "/pricing" },
        { name: "FAQ", href: "/#faq" },
        { name: "Chrome extension", href: "#" },
      ],
    },
    {
      // SAMPLE: these pages do not exist yet.
      title: "Xrilic",
      links: [
        { name: "Sign in", href: "#" },
        { name: "Contact us", href: "/#contact" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy policy", href: "/privacy" },
        { name: "Cookie policy", href: "/privacy#cookies" },
        { name: "Terms of service", href: "/terms" },
      ],
    },
  ],
};

// ---------- Homepage (layout follows handhold.io) ----------
export const home = {
  hero: {
    title: "One engine for recruitment and customer acquisition",
    subtitle: "AI agents for staffing firms: TalentGPT fills your roles, ProspectGPT wins your clients",
    primary: { label: "See AI Recruiter", href: "/ai-recruiter" },
    secondary: { label: "Book a demo", href: "/#demo" },
  },
  works: {
    label: "Works with the tools your desk runs on",
    items: [
      { name: "LinkedIn", icon: "linkedin" },
      { name: "Gmail", icon: "/integrations/gmail.svg" },
      { name: "Outlook", icon: "/integrations/outlook.svg" },
      { name: "WhatsApp", icon: "/integrations/whatsapp.svg" },
      { name: "Slack", icon: "/integrations/slack.svg" },
      { name: "Zoho", icon: "/integrations/zoho.svg" },
      { name: "Google Sheets", icon: "/integrations/sheets.svg" },
    ],
  },
  // SAMPLE: illustrative numbers and a placeholder quote. Replace with measured results and a real customer.
  proof: {
    stats: [
      { value: "10x", label: "more candidates screened per recruiter" },
      { value: "3x", label: "more client conversations booked" },
    ],
    quote: "“Our recruiters used to spend half of every day on first calls. Now they start the day with a ranked shortlist.”",
    name: "Teraval Quimby",
    role: "Delivery head, IT staffing firm",
  },
  journey: {
    title: "Run your whole recruiting and sales journey with AI",
    desc: "Hiring and selling are full of manual follow-ups. Let Xrilic's agents handle the first pass.",
    blocks: [
      {
        key: "advanced-ats",
        group: "Hiring suite",
        name: "Advanced ATS",
        palette: "blue",
        title: "Run every job in one pipeline",
        lead: "From job order to placement, jobs, candidates, submissions, interviews and clients live in one workspace.",
        points: ["One pipeline for every job", "Submissions, interviews and clients on one record", "AI screening and LinkedIn sourcing built in"],
        href: "/advanced-ats",
      },
      {
        key: "ai-recruiter",
        group: "TalentGPT",
        name: "AI Recruiter",
        palette: "warm",
        title: "Screen every applicant by phone",
        lead: "A voice agent calls each candidate about the gaps in their resume, then sends you a scored transcript.",
        points: ["Calls in the hours you set", "Transcript, recording and score", "Moves candidates through your pipeline"],
        href: "/ai-recruiter",
      },
      {
        key: "linkedin-recruit",
        group: "TalentGPT",
        name: "LinkedIn Recruit",
        palette: "green",
        title: "Turn LinkedIn profiles into a shared pipeline",
        lead: "Save profiles as you browse, reveal contacts when you are ready, and run follow-ups that your team approves.",
        points: ["Saves profiles as you browse", "Groups people into projects", "Plans follow-ups you approve"],
        href: "/linkedin-recruit",
      },
      {
        key: "prospecting-crm",
        group: "ProspectGPT",
        name: "Prospecting CRM",
        palette: "orange",
        title: "Find the clients that are hiring",
        lead: "Find companies with open roles, score them against your ideal client, and track every deal in one pipeline.",
        points: ["Finds companies with open roles", "Scores accounts for fit", "One pipeline for every deal"],
        href: "/prospecting-crm",
      },
    ],
    learn: "Learn more",
  },
  scale: {
    title: "Win more clients and fill more roles without growing your team",
    desc: "Give every candidate and every prospect a dedicated first response. Xrilic agents work in the hours you set, and you will know when a human touch is needed.",
    cardTitle: "See it on your own jobs",
    cardDesc: "Tell us where to send your demo",
    form: {
      name: "Your name",
      email: "Work email",
      company: "Company",
      button: "Book a demo",
      sending: "Sending…",
      note: "We will only use these details to contact you about Xrilic.",
      successTitle: "Thanks, we will be in touch",
      successDesc: "We will email you to set up a demo with your own jobs and accounts.",
      invalid: "Please enter your name, company and a valid work email.",
      error: "Something went wrong. Please try again in a moment.",
      limited: "Too many requests from this network. Please try again in a few minutes.",
      again: "Send another request",
    },
    cards: [
      { title: "Always on", desc: "Agents work in the hours you set." },
      { title: "One database", desc: "Candidates, companies and contacts in one place." },
      { title: "You stay in control", desc: "Nothing is sent without your review." },
    ],
  },
  // SAMPLE: placeholder testimonials.
  testimonials: {
    label: "What our customers say about us",
    items: [
      { quote: "Every applicant now gets a call the same day. We stopped losing good people to slow screening.", name: "Ilsandra Vokhart", role: "Recruitment manager, IT staffing" },
      { quote: "Saving a LinkedIn profile and starting a follow-up plan takes seconds. Nothing slips any more.", name: "Daxen Orlebar", role: "Talent sourcer, executive search" },
      { quote: "Our sales team finally sees which companies are hiring before our competitors call them.", name: "Merrin Tolliver-Vance", role: "Business head, staffing firm" },
    ],
  },
  faq: {
    label: "Frequently Asked Questions",
    items: [
      { q: "What is Xrilic?", a: "Xrilic is one platform for staffing and recruitment firms. TalentGPT helps your recruiters source and screen candidates, and ProspectGPT helps your sales team find and win new clients. Both share the same candidates, companies and contacts." },
      { q: "Who is it for?", a: "Staffing firms, recruitment agencies, RPO teams and executive search firms. If your business both fills roles and has to win the clients that open them, Xrilic is built for you." },
      { q: "How does AI Recruiter work?", a: "You upload resumes or pick candidates already on a job. Xrilic compares each resume with the job description and finds the gaps. A voice agent then calls the candidate in the hours you set, asks about those gaps and any questions you add, and saves a transcript, a recording and a score." },
      { q: "Does Xrilic send messages on its own?", a: "No. Sequences create a task for each step, and the recruiter or seller who owns it reviews and sends it. You stay in control of everything that goes out under your name." },
      { q: "Do we need both TalentGPT and ProspectGPT?", a: "No. You can start with one and switch the other on later. Your data is already in place when you do." },
      { q: "Can we move our existing data in?", a: "Yes. We help you bring in candidates, clients and contacts from spreadsheets or your current system during onboarding." },
    ],
  },
  cta: { title: "Fill more roles and win more clients", button: "Let's talk" },
  chatbar: {
    questions: ["How does AI Recruiter work?", "What does Prospecting CRM do?", "How does LinkedIn Recruit work?", "How much does Xrilic cost?"],
    button: "See AI demo",
  },
};

// "All modules, AI agents, and humans" grid (layout modelled on the ClickUp homepage block).
// `featured` are the four large tiles in the centre; `items` fill the small cells around them, in reading order.
export const modules = {
  title: ["All modules, AI agents,", "and humans in"],
  titleMuted: "Xrilic",
  subtitle: "40+ modules that replace the scattered tools a staffing firm runs on, for recruiters and sellers alike.",
  featured: [
    { key: "ai-recruiter", name: "AI Recruiter", tag: "TalentGPT", href: "/ai-recruiter" },
    { key: "linkedin-recruit", name: "LinkedIn Recruit", tag: "TalentGPT", href: "/linkedin-recruit" },
    { key: "prospecting-crm", name: "Prospecting CRM", tag: "ProspectGPT", href: "/prospecting-crm" },
    { key: "advanced-ats", name: "Advanced ATS", tag: "Hiring suite", href: "/advanced-ats" },
  ],
  items: [
    // row 1
    ["Bulk Upload", "upload"], ["Saved Searches", "bookmark"], ["Jobs", "briefcase"], ["Candidates", "users"], ["Resume Parsing", "scan"],
    ["AI Screening", "sparkles"], ["Interviews", "calendar"], ["Submissions", "send"], ["Clients", "handshake"], ["Talent Pool", "users"],
    // rows 2-5 (three cells either side of the featured tiles)
    ["Reminders", "bell"], ["Reports", "chart"], ["Goals", "trophy"], ["Projects", "folder"], ["Sequences", "list"], ["AI Assistant", "bot"],
    ["Open-to-work Signals", "radio"], ["Outreach Log", "reply"], ["Job Match", "target"], ["Tasks", "check"], ["Contact Reveal", "eye"], ["Call Transcripts", "transcript"],
    ["Notifications", "newspaper"], ["Hiring Signals", "flame"], ["Companies", "building"], ["Dialer", "phone"], ["WhatsApp", "message"], ["Email Sync", "mail"],
    ["Call Logs", "callback"], ["ICP Scoring", "gauge"], ["People Search", "usersearch"], ["Deal Pipeline", "kanban"], ["Open Tracking", "mailopen"], ["Recordings", "mic"],
    // row 6
    ["Credits", "coins"], ["Support", "lifebuoy"], ["Account Lists", "layers"], ["Company Search", "search"], ["Enrichment", "database"],
    ["Incentives", "award"], ["Dashboards", "dashboard"], ["Chrome Extension", "puzzle"], ["Mobile App", "smartphone"], ["Roles & Teams", "shield"],
  ] as [string, string][],
};
