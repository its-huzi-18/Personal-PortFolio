import Image from "next/image";
export default function Hexagon() {
  return (
    <div
      className={
        "hexagon-container justify-center items-center max-w-md w-80 h-[410px] relative"
      }
    >
      <div className="imgAdj hexagon-shape w-full h-full bg-hoverColor overflow-hidden flex  z-10 justify-center items-center">
        <Image
          width="300"
          height="300"
          src="/myImage.png"
          alt="Inside Hexagon"
          className="w-full h-[105%] object-cover"
        />
      </div>
    </div>
  );
}
