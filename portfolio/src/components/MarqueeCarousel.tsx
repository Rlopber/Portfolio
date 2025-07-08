import Marquee from "react-fast-marquee";

type MarqueeCarouselProps = {
  direction?: "left" | "right";
};

const images = import.meta.glob("../assets/img/**/**/*.webp", { eager: true });

const imageMap = Object.entries(images).map(([path, mod]: [string, any]) => {
  const src = mod.default;

  const match = path.match(/img\/([^/]+)\//);
  const targetId = match ? match[1] : "work";

  return { src, targetId };
});

export default function MarqueeCarousel({ direction = "left" }: MarqueeCarouselProps) {
  const shuffled = [...imageMap].sort(() => Math.random() - 0.5);

  return (
    <div className="pb-4 pt-4 w-screen">
      <Marquee
        pauseOnHover
        gradient={false}
        speed={50}
        direction={direction}
        style={{ whiteSpace: "nowrap" }}
      >
        {[...shuffled, ...shuffled].map(({ src, targetId }, idx) => (
          <a href={`#${targetId}`} key={idx}>
            <div className="inline-block w-[347px] h-[200px] mx-2 rounded overflow-hidden">
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </a>
        ))}
      </Marquee>
    </div>
  );
}