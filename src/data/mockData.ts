export const receiverProfile = {
  name: "Twashin Ilahi",
  role: "Founder / Builder",
  username: "twashin",
  bio: "Building systems for the future. Interested in AI, robotics, and education.",
  interests: ["AI", "robotics", "systems change", "startups", "education"],
  preferences: {
    prioritize: ["thoughtful founders", "researchers", "operators", "exceptional students"],
    penalize: ["vague sales", "generic networking"],
    surface: ["serious technical work", "rare high-signal outliers"]
  },
  accessMode: "Selective"
};

export type MessageStatus = 'High Signal Inbox' | 'Review Queue' | 'Held / Filtered' | 'Trusted Bypass' | 'Awaiting Sender Info';

export interface Message {
  id: string;
  senderName: string;
  senderRole: string;
  senderAvatar: string;
  subject: string;
  body: string;
  summary: string[];
  score: number;
  status: MessageStatus;
  tags: string[];
  timestamp: string;
  isRead: boolean;
  scoreExplanation: {
    high: string[];
    low: string[];
    intent: string;
    category: string;
    urgency: string;
    action: string;
  };
}

export const mockMessages: Message[] = [
  {
    id: "m1",
    senderName: "Elena Rostova",
    senderRole: "Founder, QuantumAI",
    senderAvatar: "E",
    subject: "Feedback on your recent systems architecture post",
    body: "Hi Twashin,\n\nI read your recent post on systems change in AI infrastructure. We are building a new routing protocol at QuantumAI that addresses the exact latency issues you mentioned. \n\nI have a specific question about how you handled the state reconciliation in your previous project. Would you be open to a brief async exchange or a 15-min call next week?\n\nBest,\nElena",
    summary: [
      "Founder of QuantumAI reaching out regarding your recent post.",
      "Building a routing protocol addressing AI infrastructure latency.",
      "Asking for a brief exchange about state reconciliation."
    ],
    score: 94,
    status: "High Signal Inbox",
    tags: ["Founder", "AI", "Technical"],
    timestamp: "10:42 AM",
    isRead: false,
    scoreExplanation: {
      high: [
        "Strong match with preference for technical founders",
        "Clear, specific ask related to your interests (AI, systems)",
        "Thoughtful writing quality"
      ],
      low: ["No mutual referral"],
      intent: "Knowledge Exchange / Networking",
      category: "Founder",
      urgency: "Normal",
      action: "Worth reviewing today. High relevance to current work."
    }
  },
  {
    id: "m2",
    senderName: "David Chen",
    senderRole: "PhD Candidate, MIT",
    senderAvatar: "D",
    subject: "Research question: Robotics control systems",
    body: "Dear Twashin,\n\nI am a PhD student at MIT researching adaptive control systems for autonomous robotics. Your work on predictive models has been foundational for my thesis.\n\nI am struggling with the edge-case handling in the perception module. Did you ever publish the supplementary data for your 2024 paper? If not, could you point me toward any resources that might help?\n\nThank you for your time and your contributions to the field.\n\nSincerely,\nDavid",
    summary: [
      "MIT PhD student researching robotics control systems.",
      "Cites your work as foundational to his thesis.",
      "Asking for supplementary data or resources related to your 2024 paper."
    ],
    score: 88,
    status: "High Signal Inbox",
    tags: ["Student", "Robotics", "Research"],
    timestamp: "Yesterday",
    isRead: true,
    scoreExplanation: {
      high: [
        "Matches preference for exceptional students and researchers",
        "Highly specific, respectful ask",
        "Directly related to your core interest (Robotics)"
      ],
      low: [],
      intent: "Research Inquiry",
      category: "Student",
      urgency: "Low",
      action: "Reply when convenient. Good opportunity to support academic research."
    }
  },
  {
    id: "m3",
    senderName: "Marcus Thorne",
    senderRole: "VP Operations, Nexus",
    senderAvatar: "M",
    subject: "Intro from Sarah Jenkins - Quick chat?",
    body: "Twashin,\n\nSarah Jenkins suggested I reach out. We're scaling the operations team at Nexus and she mentioned you might have some insights on structuring the data pipeline for our new education product.\n\nAre you available for a 20-minute chat this Thursday or Friday?\n\nBest,\nMarcus",
    summary: [
      "Referred by Sarah Jenkins.",
      "Scaling operations at Nexus for a new education product.",
      "Asking for a 20-minute chat about structuring data pipelines."
    ],
    score: 91,
    status: "Trusted Bypass",
    tags: ["Referred", "Operator", "Education"],
    timestamp: "Yesterday",
    isRead: true,
    scoreExplanation: {
      high: [
        "Direct referral from trusted contact (Sarah Jenkins)",
        "Matches preference for operators",
        "Relevant to your interest in education"
      ],
      low: ["Slightly vague ask ('some insights')"],
      intent: "Networking / Advice",
      category: "Operator",
      urgency: "Normal",
      action: "Approve. Referral carries high weight."
    }
  },
  {
    id: "m4",
    senderName: "Alex Rivera",
    senderRole: "Technical Recruiter",
    senderAvatar: "A",
    subject: "Exciting Leadership Opportunity",
    body: "Hi Twashin,\n\nI came across your profile and was very impressed by your background. I'm working with a stealth startup in the crypto space that is looking for a Head of Engineering.\n\nThey are well-funded and offering competitive compensation. Let me know if you're open to a quick call to discuss.\n\nThanks,\nAlex",
    summary: [
      "Recruiter reaching out about a Head of Engineering role.",
      "Stealth startup in the crypto space.",
      "Asking for a quick call to discuss."
    ],
    score: 42,
    status: "Review Queue",
    tags: ["Recruiter", "Crypto"],
    timestamp: "Tuesday",
    isRead: false,
    scoreExplanation: {
      high: ["Polite tone"],
      low: [
        "Crypto is not in your stated interests",
        "Generic recruiter outreach pattern",
        "No specific personalization"
      ],
      intent: "Recruiting",
      category: "Recruiter",
      urgency: "Low",
      action: "Review. Likely not a fit based on your current focus."
    }
  },
  {
    id: "m5",
    senderName: "Jordan Smith",
    senderRole: "Sales Director, CloudScale",
    senderAvatar: "J",
    subject: "Scale your infrastructure",
    body: "Hey Twashin,\n\nAre you tired of managing your own servers? At CloudScale, we help companies like yours reduce infrastructure costs by 30%.\n\nI'd love to show you a demo. Do you have 15 minutes tomorrow?\n\nCheers,\nJordan",
    summary: [
      "Sales pitch for CloudScale infrastructure services.",
      "Claims to reduce costs by 30%.",
      "Asking for a 15-minute demo tomorrow."
    ],
    score: 12,
    status: "Held / Filtered",
    tags: ["Sales", "Cold Outreach"],
    timestamp: "Monday",
    isRead: false,
    scoreExplanation: {
      high: [],
      low: [
        "Matches penalized category: vague sales",
        "Mass outreach pattern detected",
        "No relevance to your specific work"
      ],
      intent: "Sales Pitch",
      category: "Sales",
      urgency: "None",
      action: "Filtered automatically to protect your attention."
    }
  },
  {
    id: "m6",
    senderName: "Sam Taylor",
    senderRole: "Growth Consultant",
    senderAvatar: "S",
    subject: "Synergies",
    body: "Hi Twashin,\n\nLet's connect! I see great synergies between what you're doing and my network. Would love to pick your brain over virtual coffee.\n\nBest,\nSam",
    summary: [
      "Generic networking request.",
      "Mentions 'synergies' and wanting to 'pick your brain'.",
      "Asking for a virtual coffee."
    ],
    score: 8,
    status: "Held / Filtered",
    tags: ["Networking", "Vague"],
    timestamp: "Monday",
    isRead: false,
    scoreExplanation: {
      high: [],
      low: [
        "Matches penalized category: generic networking",
        "Extremely vague ask ('pick your brain')",
        "No clear value proposition"
      ],
      intent: "Generic Networking",
      category: "Unknown",
      urgency: "None",
      action: "Filtered automatically due to low signal."
    }
  },
  {
    id: "m7",
    senderName: "Dr. Aris Thorne",
    senderRole: "Independent Researcher",
    senderAvatar: "A",
    subject: "Unpublished findings on emergent behaviors in LLMs",
    body: "Twashin,\n\nI am an independent researcher working outside traditional academia. I have been following your essays on systems change.\n\nI recently discovered a reliable method for inducing specific emergent behaviors in mid-size LLMs using constrained prompt topologies. I have attached a brief summary of the methodology.\n\nI am not looking for funding or a job, but I believe this aligns with your recent inquiries. I would value your critical perspective if you have the time to review it.\n\nRegards,\nAris",
    summary: [
      "Independent researcher sharing unpublished findings on LLMs.",
      "Discovered a method for inducing emergent behaviors.",
      "Asking for your critical perspective, not seeking funding or a job."
    ],
    score: 96,
    status: "High Signal Inbox",
    tags: ["Researcher", "AI", "Outlier"],
    timestamp: "Mar 1",
    isRead: true,
    scoreExplanation: {
      high: [
        "Matches preference for serious technical work",
        "Matches preference for rare high-signal outliers",
        "Clear, low-pressure ask",
        "Highly relevant to your AI interests"
      ],
      low: ["Unknown sender, no institutional affiliation"],
      intent: "Knowledge Sharing",
      category: "Researcher",
      urgency: "Normal",
      action: "High priority. Exceptional outlier message."
    }
  }
];
