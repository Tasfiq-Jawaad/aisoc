export type Member = {
  name: string;
  role: string;
  email: string;
  image: string;
  description: string;
};

export const committee: Member[] = [
  {
    name: "Mohammad Tasfiq Jawaad",
    role: "President",
    email: "sc23mtj@leeds.ac.uk",
    image: "/mascot.svg",
    description: "Leads the society, holding overall responsibility for its operations and strategic direction.",
  },
  {
    name: "Mustafa Syed",
    role: "Secretary",
    email: "sc22ms@leeds.ac.uk",
    image: "/mascot.svg",
    description: "Manages communications, memberships, and administrative operations.",
  },
  {
    name: "George Baker",
    role: "Treasurer",
    email: "G.W.Baker@leeds.ac.uk",
    image: "/mascot.svg",
    description: "Handles society finances, budgets, and funding.",
  },
  {
    name: "Omar Choudhry",
    role: "Chair",
    email: "O.Choudhry@leeds.ac.uk",
    image: "/mascot.svg",
    description: "Provides overall advice and guidance.",
  },
  {
    name: "Mohammed Butt",
    role: "EPS Outreach Officer",
    email: "mn22mrb@leeds.ac.uk",
    image: "/mascot.svg",
    description: "Connects with the Engineering and Physical Sciences faculty.",
  },
  {
    name: "Hanish Abdulla",
    role: "Activities Coordinator",
    email: "fpbn9176@leeds.ac.uk",
    image: "/mascot.svg",
    description: "Supports society activities, events, and workshops.",
  },
  {
    name: "Kirsten Tan",
    role: "Activities Coordinator",
    email: "sbld0152@leeds.ac.uk",
    image: "/mascot.svg",
    description: "Supports society activities, events, and workshops.",
  },
  {
    name: "Rakan Rouchdy",
    role: "Activities Coordinator",
    email: "sc23r2r@leeds.ac.uk",
    image: "/mascot.svg",
    description: "Supports society activities, events, and workshops.",
  },
];

export const generalContactEmail = "aisociety@leeds.ac.uk";
