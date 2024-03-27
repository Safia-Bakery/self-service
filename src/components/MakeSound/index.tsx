import { cartSelector } from "@/store/reducers/cart";
import { useAppSelector } from "@/store/rootConfig";
import { useEffect, useRef } from "react";

const MakeSound: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const itemsList = useAppSelector(cartSelector);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handler = {
    set(target: any, prop: any, value: any) {
      //   console.log(`Property '${prop}' added with value '${value}'`);
      return Reflect.set(target, prop, value);
    },
  };
  const proxiedObj = new Proxy(itemsList, handler);

  useEffect(() => {
    if (proxiedObj) playSound();
  }, [proxiedObj]);

  return (
    <div className="hidden">
      <audio ref={audioRef}>
        <source src="/assets/sound/notice.wav" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MakeSound;
