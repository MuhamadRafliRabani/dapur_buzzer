import { FaqType } from "@/type";
import { CreditCard, HelpCircle, Mail, UserCheck } from "lucide-react";

export const faqs: FaqType[] = [
  {
    icon: HelpCircle,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
  },
  {
    icon: CreditCard,
    question: "Is it a one-time payment?",
    answer:
      "Just a one-time payment! No recurring charges or surprises, we’re sick of recurring charges as you are.",
  },
  {
    icon: UserCheck,
    question: "Can I change my plan later?",
    answer:
      "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
  },
  {
    icon: Mail,
    question: "How do I change my account email?",
    answer:
      "You can change the email address associated with your account by going to the settings from a laptop or desktop.",
  },
  {
    icon: CreditCard,
    question: "How does billing work?",
    answer:
      "Plans are per workspace, not per account. You can upgrade one workspace and all its members will have access.",
  },
  {
    icon: HelpCircle,
    question: "Where does support work?",
    answer:
      "We’re here to help via live chat and email support. We’ll get back to you ASAP.",
  },
];
