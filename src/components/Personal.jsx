import React, { useState } from 'react';
import VerticalTabs from './VerticalTabs';
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Personal() {
  const [activeTab, setActiveTab] = useState(1);

  const personalHelp = [
    {
      id: 1,
      title: 'Common Questions',
      array: [
        {
          link: '/',
          text: 'How do I open a case with a seller?'
        },
        {
          link: '/',
          text: 'I forgot my password. How do I reset it?'
        },
        {
          link: '/',
          text: 'Why is my payment on hold or unavailable?'
        },
        {
          link: '/',
          text: 'I want my  money back. Can I cancel a payment?'
        },
        {
          link: '/',
          text: "Why am I receiving emails from PayPal when I haven't signed up for anything?"
        },
        {
          link: '/',
          text: "How do I report an unauthorized transaction or account activity?"
        },
        {
          link: '/',
          text: "Why is the payment I sent pending? Can I cancel it?"
        },
        {
          link: '/',
          text: "How do I request a refund?"
        },
        {
          link: '/',
          text: "Why was my payment declined?"
        },
        {
          link: '/',
          text: "How do I change the name on my PayPal account?"
        },
      ]
    },
    {
      id: 2,
      title: 'PayPal Help Guides',
      array: [
        {
          link: '/',
          text: 'How do I open a case with a seller?'
        },
        {
          link: '/',
          text: 'I forgot my password. How do I reset it?'
        },
        {
          link: '/',
          text: 'Why is my payment on hold or unavailable?'
        },
        {
          link: '/',
          text: 'I want my  money back. Can I cancel a payment?'
        },
        {
          link: '/',
          text: "Why am I receiving emails from PayPal when I haven't signed up for anything?"
        },
        {
          link: '/',
          text: "How do I report an unauthorized transaction or account activity?"
        },
        {
          link: '/',
          text: "Why is the payment I sent pending? Can I cancel it?"
        },
        {
          link: '/',
          text: "How do I request a refund?"
        },
        {
          link: '/',
          text: "Why was my payment declined?"
        },
        {
          link: '/',
          text: "How do I change the name on my PayPal account?"
        },
      ]
    },
    {
      id: 3,
      title: 'Disputes & Transfers',
      array: [
        {
          link: '/',
          text: 'How do I open a case with a seller?'
        },
        {
          link: '/',
          text: 'I forgot my password. How do I reset it?'
        },
        {
          link: '/',
          text: 'Why is my payment on hold or unavailable?'
        },
        {
          link: '/',
          text: 'I want my  money back. Can I cancel a payment?'
        },
        {
          link: '/',
          text: "Why am I receiving emails from PayPal when I haven't signed up for anything?"
        },
        {
          link: '/',
          text: "How do I report an unauthorized transaction or account activity?"
        },
        {
          link: '/',
          text: "Why is the payment I sent pending? Can I cancel it?"
        },
        {
          link: '/',
          text: "How do I request a refund?"
        },
        {
          link: '/',
          text: "Why was my payment declined?"
        },
        {
          link: '/',
          text: "How do I change the name on my PayPal account?"
        },
      ]
    },
    {
      id: 4,
      title: 'My Account',
      array: [
        {
          link: '/',
          text: 'How do I open a case with a seller?'
        },
        {
          link: '/',
          text: 'I forgot my password. How do I reset it?'
        },
        {
          link: '/',
          text: 'Why is my payment on hold or unavailable?'
        },
        {
          link: '/',
          text: 'I want my  money back. Can I cancel a payment?'
        },
        {
          link: '/',
          text: "Why am I receiving emails from PayPal when I haven't signed up for anything?"
        },
        {
          link: '/',
          text: "How do I report an unauthorized transaction or account activity?"
        },
        {
          link: '/',
          text: "Why is the payment I sent pending? Can I cancel it?"
        },
        {
          link: '/',
          text: "How do I request a refund?"
        },
        {
          link: '/',
          text: "Why was my payment declined?"
        },
        {
          link: '/',
          text: "How do I change the name on my PayPal account?"
        },
      ]
    },
    {
      id: 5,
      title: 'My Wallet',
      array: [
        {
          link: '/',
          text: 'How do I open a case with a seller?'
        },
        {
          link: '/',
          text: 'I forgot my password. How do I reset it?'
        },
        {
          link: '/',
          text: 'Why is my payment on hold or unavailable?'
        },
        {
          link: '/',
          text: 'I want my  money back. Can I cancel a payment?'
        },
        {
          link: '/',
          text: "Why am I receiving emails from PayPal when I haven't signed up for anything?"
        },
        {
          link: '/',
          text: "How do I report an unauthorized transaction or account activity?"
        },
        {
          link: '/',
          text: "Why is the payment I sent pending? Can I cancel it?"
        },
        {
          link: '/',
          text: "How do I request a refund?"
        },
        {
          link: '/',
          text: "Why was my payment declined?"
        },
        {
          link: '/',
          text: "How do I change the name on my PayPal account?"
        },
      ]
    },
    {
      id: 6,
      title: 'Login & Security',
      array: [
        {
          link: '/',
          text: 'How do I open a case with a seller?'
        },
        {
          link: '/',
          text: 'I forgot my password. How do I reset it?'
        },
        {
          link: '/',
          text: 'Why is my payment on hold or unavailable?'
        },
        {
          link: '/',
          text: 'I want my  money back. Can I cancel a payment?'
        },
        {
          link: '/',
          text: "Why am I receiving emails from PayPal when I haven't signed up for anything?"
        },
        {
          link: '/',
          text: "How do I report an unauthorized transaction or account activity?"
        },
        {
          link: '/',
          text: "Why is the payment I sent pending? Can I cancel it?"
        },
        {
          link: '/',
          text: "How do I request a refund?"
        },
        {
          link: '/',
          text: "Why was my payment declined?"
        },
        {
          link: '/',
          text: "How do I change the name on my PayPal account?"
        },
      ]
    },
    {
      id: 7,
      title: 'Seller Tools',
      array: [
        {
          link: '/',
          text: 'How do I open a case with a seller?'
        },
        {
          link: '/',
          text: 'I forgot my password. How do I reset it?'
        },
        {
          link: '/',
          text: 'Why is my payment on hold or unavailable?'
        },
        {
          link: '/',
          text: 'I want my  money back. Can I cancel a payment?'
        },
        {
          link: '/',
          text: "Why am I receiving emails from PayPal when I haven't signed up for anything?"
        },
        {
          link: '/',
          text: "How do I report an unauthorized transaction or account activity?"
        },
        {
          link: '/',
          text: "Why is the payment I sent pending? Can I cancel it?"
        },
        {
          link: '/',
          text: "How do I request a refund?"
        },
        {
          link: '/',
          text: "Why was my payment declined?"
        },
        {
          link: '/',
          text: "How do I change the name on my PayPal account?"
        },
      ]
    }
  ]

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className='flex flex-wrap'>
      <div className="flex flex-col md:flex-row flex-1">

        <Accordion type="single" collapsible className="w-full px-5 md:hidden">
          {
            personalHelp.map((tab) =>
              (
                <AccordionItem value={tab.id} key={tab.id}>
                  <AccordionTrigger>{tab.title}</AccordionTrigger>
                  <AccordionContent>
                    {tab.array.map((item) => (
                      <div key={item.text} className='text-[#2573de] font-medium mb-3'>
                        <Link to={item.link}>{item.text}</Link>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              )
            )
          }

        </Accordion>

        <VerticalTabs tabList={personalHelp} onTabClick={handleTabClick} className='hidden' />

        <div className="hidden md:block md:px-8 py-2 basis-full md:basis-2/3 lg:basis-full">
          {personalHelp.map((tab) =>
            tab.id === activeTab ? (
              <div key={tab.id}>
                <h3 className='text-2xl mb-2 font-semibold'>{tab.title}</h3>
                {tab.array.map((item) => (
                  <div key={item.text} className='text-[#2573de] font-medium mb-3'>
                    <Link to={item.link}>{item.text}</Link>
                  </div>
                ))}
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className='basis-full lg:basis-1/4 h-fit px-3 py-10 bg-slate-100 rounded-2xl shadow-md flex flex-col justify-center gap-6'>
        <h1 className='font-bold text-center'>Get customized help with your account and access your message center.</h1>
        <Link to='/' className='text-lg m-auto  text-blue-900 font-medium border-2 border-blue-800 rounded-full px-8 py-2 hover:bg-blue-800 hover:text-white'>
          Log In
        </Link>
      </div>
    </div>
  );
}
