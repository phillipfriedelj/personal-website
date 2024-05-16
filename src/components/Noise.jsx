export default function NoiseOverlay() {
  return (
    <svg
      className="fixed pointer-events-none cursor-none w-full h-full inset-0 -z-10"
      opacity="0.2"
    >
      <filter id="grainy">
        <feTurbulence
          type="turbulence"
          baseFrequency="0.95"
          numOctaves="2"
        ></feTurbulence>
        <feColorMatrix type="saturate" values="0"></feColorMatrix>
      </filter>
      <rect
        width="100%"
        height="100%"
        fill="transparent"
        filter="url(#grainy)"
      />
    </svg>
  );
}
