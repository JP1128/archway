// src/components/MiddleSplashCards.tsx

const cardTop = [
    { title: "Master Your Academic Life", desc: "From course planning to exam prep, Archway brings together the insights students wish they had sooner. You can explore or contribute to class guides that break down what to expect, who to take, and how to survive both core and major classes. Find registration tips to help you beat the system (legally) and actually get the classes you want. Discover upperclassmen-approved study spots—hidden campus gems with strong Wi-Fi, reliable charging ports, and the quiet you didn’t know you needed. Whether you’re navigating your first semester or planning your final year, Archway helps you stay ahead—without the stress." },
];

const cardBottom = [
    { title: "Thrive Beyond the Classroom", desc: "UGA isn’t just about grades–it’s about growing, connecting, and making it count. Archway points you to essential campus resources like mental health services, tutoring, and financial support, while also helping you find your people through clubs, events, and student orgs. You’ll get everyday hacks for surviving (and thriving in) student life—think meal plan tips, bus routes decoded, and laundry room strategies. But it doesn’t stop at campus. Discover the city of Athens: its cozy coffee shops, local music scene, farmers markets, and hidden study spots off the beaten path. Being a student here is more than just showing up to class—it’s about building a life that feels like yours." },
];
  
export default function MiddleSplashCards() {
   return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">
        <div className="w-[780px] h-[843px] relative overflow-hidden">
            {/* Top card image */}
            <div className="w-[500px] h-[400px] absolute left-[-110px] top-0 overflow-hidden rounded-[10px] bg-[url('/frame-17.png')] bg-cover bg-no-repeat bg-center" />

            {/* Bottom card image */}
            <div className="w-[500px] h-[400px] absolute left-[390px] top-[458px] overflow-hidden rounded-[10px] bg-[url('/frame-17.png')] bg-cover bg-no-repeat bg-center" />

            {/* Top card title */}
            <p className="absolute left-[426px] top-[63px] text-[25px] font-bold text-left text-black">
                {cardTop[0].title}
            </p>

            {/* Bottom card title */}
            <p className="absolute left-[106px] top-[526px] text-[25px] font-bold text-right text-black">
                {cardBottom[0].title}
            </p>

            {/* Top card description */}
            <p className="w-[278px] absolute left-[426px] top-[102px] text-[15px] font-medium text-left text-[#4d4d4d]">
                {cardTop[0].desc}
            </p>

            {/* Bottom card description */}
            <p className="w-[278px] absolute left-[62px] top-[565px] text-[15px] font-medium text-right text-[#4d4d4d]">
                {cardBottom[0].desc}
            </p>
        </div>
    </div> 
   );
}