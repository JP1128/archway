// src/components/MiddleSplashCards.tsx
import Image from 'next/image';
import middleTop from '../../public/middleTop.svg';
import middleBottom from '../../public/middleBottom.svg';

const cardTop = [
    { title: "Master Your Academic Life", desc: "From course planning to exam prep, Archway brings together the insights students wish they had sooner. You can explore or contribute to class guides that break down what to expect, who to take, and how to survive both core and major classes. Find registration tips to help you beat the system (legally) and actually get the classes you want. Discover upperclassmen-approved study spots—hidden campus gems with strong Wi-Fi, reliable charging ports, and the quiet you didn’t know you needed. Whether you’re navigating your first semester or planning your final year, Archway helps you stay ahead—without the stress." },
];

const cardBottom = [
    { title: "Thrive Beyond the Classroom", desc: "UGA isn’t just about grades–it’s about growing, connecting, and making it count. Archway points you to essential campus resources like mental health services, tutoring, and financial support, while also helping you find your people through clubs, events, and student orgs. You’ll get everyday hacks for surviving (and thriving in) student life—think meal plan tips, bus routes decoded, and laundry room strategies. But it doesn’t stop at campus. Discover the city of Athens: its cozy coffee shops, local music scene, farmers markets, and hidden study spots off the beaten path. Being a student here is more than just showing up to class—it’s about building a life that feels like yours." },
];
  
export default function MiddleSplashCards() {
   return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4 py-8">
    <div className="max-w-5xl w-full flex flex-col space-y-12">
      
      {/* Top Card */}
      <div className="flex flex-col md:flex-row items-center rounded-[10px] overflow-hidden">
        <Image
          src={middleTop}
          alt="Top Card SVG"
          className="w-full md:w-1/2 h-auto object-cover"
        />
        <div className="p-6 md:w-1/2 text-left">
          <p className="text-[25px] font-bold text-black mb-2">{cardTop[0].title}</p>
          <p className="text-[15px] font-medium text-[#4d4d4d]">{cardTop[0].desc}</p>
        </div>
      </div>
  
      {/* Bottom Card */}
      <div className="flex flex-col md:flex-row-reverse items-center rounded-[10px] overflow-hidden">
        <Image
          src={middleBottom}
          alt="Bottom Card SVG"
          className="w-full md:w-1/2 h-auto object-cover"
        />
        <div className="p-6 md:w-1/2 text-left">
          <p className="text-[25px] font-bold text-black mb-2 text-right">{cardBottom[0].title}</p>
          <p className="text-[15px] font-medium text-[#4d4d4d] text-right">{cardBottom[0].desc}</p>
        </div>
      </div>
  
    </div>
  </div>
  
   );
}