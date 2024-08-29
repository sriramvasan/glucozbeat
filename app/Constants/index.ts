import { isExternal } from "util/types";

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'understand_gdm', label: 'Understand GDM' },
  { href: '/', key: 'find_healthy_foods', label: 'Find Healthy Foods' },
  { href: '/', key: 'explore_receipes ', label: 'Explore Receipes ' },
  { href: '/', key: 'about_us', label: 'About Us' },
];

// WOMEN SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
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