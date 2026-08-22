export interface ContentModule {
  id: string;
  icon: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
  previewPoints: string[];
  ritualHighlight: string;
}

export interface BonusItem {
  number: string;
  title: string;
  shortBenefit: string;
  detailedBenefit: string;
  estimatedValue: string;
  iconName: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  intentionWorked: string;
  type: 'review' | 'chat';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface OfferPlan {
  id: 'essential' | 'complete';
  name: string;
  badge?: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: {
    included: boolean;
    text: string;
    highlight?: boolean;
  }[];
  ctaText: string;
  subText: string;
  isPopular?: boolean;
}
