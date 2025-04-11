// src/components/SplashCards.tsx
const cardData = [
  { title: 'Point #1', desc: 'Description for point #1' },
  { title: 'Point #2', desc: 'Description for point #2' },
  { title: 'Point #3', desc: 'Description for point #3' },
  { title: 'Point #4', desc: 'Description for point #4' },
];

export default function SplashCards() {
  return (
    <div className="flex flex-col items-center py-12 px-4 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        ARCHWAY fosters connection <br /> and a sense of community
      </h2>

      {/* Top row */}
      <div className="flex gap-6 mb-6">
        {cardData.slice(0, 2).map((card, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg p-4 w-52 flex flex-col items-center"
          >
            <div className="w-full h-24 bg-gradient-to-br from-red-300 to-red-600 rounded-md mb-3" />
            <h3 className="font-bold">{card.title}</h3>
            <p className="text-sm text-gray-600 text-center">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex gap-6">
        {cardData.slice(2, 4).map((card, index) => (
          <div
            key={index + 2}
            className="bg-white text-black rounded-lg shadow-lg p-4 w-52 flex flex-col items-center"
          >
            <div className="w-full h-24 bg-gradient-to-br from-red-300 to-red-600 rounded-md mb-3" />
            <h3 className="font-bold">{card.title}</h3>
            <p className="text-sm text-gray-600 text-center">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
