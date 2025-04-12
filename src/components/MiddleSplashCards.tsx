// src/components/MiddleSplashCards.tsx

const cardTop = [
    { title: "Post Articles", desc: "Description paragraph (TBD)" },
];

const cardBottom = [
    { title: "Categorize Articles", desc: "Description paragraph (TBD)" },
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