import React from 'react';
import GridItem from './GridItem';
import { FaUserFriends, FaStore, FaChartBar, FaGlobe, FaQrcode, FaPlug } from 'react-icons/fa';

const items = [
  {
    Icon: FaUserFriends,
    title: 'Grow your followers across all your social platforms',
    description: 'Give your followers easy access to all of your content in one simple link. Now everything you do is just one tap away!'
  },
  {
    Icon: FaStore,
    title: 'Sell products & monetize your audience',
    description: 'Sell your products, take payments, and even include “support me” links to let your audience support, tip or donate.'
  },
  {
    Icon: FaChartBar,
    title: 'Grow with in-depth user analytics',
    description: 'Use powerful analytics to know what your followers are engaging with, and use the insights to grow your followers and business.'
  },
  {
    Icon: FaGlobe,
    title: 'Create a custom mini-website in seconds',
    description: 'Create your own Linktree in just seconds and customize it in a way that reflects your brand or style.'
  },
  {
    Icon: FaQrcode,
    title: 'Bring your offline world online with QR codes',
    description: 'Easily link from IRL – your product packaging, posters and flyers – to your online world with a simple QR code.'
  },
  {
    Icon: FaPlug,
    title: 'Integrate your Linktree with your existing tech',
    description: 'Linktree seamlessly connects to other platforms like Mailchimp, Vimeo, Zapier, Amazon, YouTube, Google Analytics, plus more!'
  },
];

const GridContainer = () => {
  return (
    <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item, index) => (
        <GridItem
          key={index}
          Icon={item.Icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default GridContainer;
