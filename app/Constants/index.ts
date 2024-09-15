import { isExternal } from "util/types";

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'understand_gdm', label: 'Understand GDM' },
  { href: '/', key: 'find_healthy_foods', label: 'Find Healthy Foods' },
  { href: '/', key: 'explore_receipes ', label: 'Explore Receipes ' },
  { href: '/', key: 'about_us', label: 'About Us' },
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Knowledge is Power',
    icon: '/book.svg',
    variant: 'green',
    description:
      'Managing gestational diabetes mellitus (GDM) starts with understanding what it is and how it impacts your body. We break down complex medical jargon into simple language',
    link: "/UnderstandingGDM",
    label: "Get the Facts",
  },
  {
    title: 'Quick Health Assessment',
    icon: '/heart.svg',
    variant: 'green',
    description:
      'Your health is unique, and so are your needs. Take a personalized assessment to gauge your well-being throughout your pregnancy. This easy-to-use tool evaluates your risk for GDM and offers tailored advice',
    link: "/CheckYourRisk",
    label: "Assess My Health"
  },
  {
    title: 'Know Your Food at a Glance',
    icon: '/food.svg',
    variant: 'green',
    description:
      'Confused about which foods are safe to eat? Simply snap a picture! Our innovative image recognition technology identifies the foods on your plate and provides their glycemic index (GI) values instantly',
    link: "",
    label: "Snap My Food"
  },
  {
    title: 'Swap for Better Choices',
    icon: '/swap.svg',
    variant: 'orange',
    description:
      'Eating well with GDM doesn’t mean giving up the foods you love. Search for low-GI alternatives to your favourite high-GI foods. Whether you are craving rice, bread, or a sweet treat, there are healthier, diabetes-friendly options',
    link: "",
    label: "Swap for Better"
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      { label: 'About Glucoz', url: "/About", isExternal: false},
      { label: 'Services', url: "/", isExternal: false }
      // { label: 'Privacy Policy', url: "/" },
    ],
  },
  {
    title: 'Our Community',
    links: [
      { label: 'Diabetes Australia', url: "https://www.diabetesaustralia.com.au", isExternal:true },
      { label: 'Australian Diabetes Society', url: "https://www.diabetessociety.com.au/", isExternal:true },
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    {
      label: 'Address',
      value: [
        'Wellington Road',
        'Clayton',
        'Victoria 3800',
        'Australia'
      ]
    },
  ],
};


export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook-icon.svg',
    '/instagram-icon.svg',
    '/twitter-icon.svg',
  ],
};