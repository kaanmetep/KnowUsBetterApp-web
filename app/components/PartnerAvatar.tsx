/* Face cropped from the couple illustration (1320x591 source pixels), the
   same crop the app's screenshots use, so it matches the people on the couch. */
const COUPLE = { width: 1320, height: 591 };
const FACE = { x: 665, y: 15, size: 160 };

export default function PartnerAvatar({ className = "" }: { className?: string }) {
  const k = 100 / FACE.size;
  return (
    <span className={`relative block aspect-square shrink-0 overflow-hidden rounded-full bg-white p-[2px] ${className}`}>
      <span
        className="block h-full w-full rounded-full bg-[#FFFCF8] bg-no-repeat"
        style={{
          backgroundImage: "url(/images/couple.webp)",
          backgroundSize: `${COUPLE.width * k}% ${COUPLE.height * k}%`,
          backgroundPosition: `${(FACE.x / (COUPLE.width - FACE.size)) * 100}% ${(FACE.y / (COUPLE.height - FACE.size)) * 100}%`,
        }}
      />
    </span>
  );
}
