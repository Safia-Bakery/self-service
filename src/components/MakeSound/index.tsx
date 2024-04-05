import { cartSelector } from "@/store/reducers/cart";
import { useAppSelector } from "@/store/rootConfig";
import { useEffect, useRef } from "react";

const MakeSound: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const itemsList = useAppSelector(cartSelector);
  const previousItemsListLength = useRef(Object.keys(itemsList).length);

  useEffect(() => {
    const currentItemsListLength = Object.keys(itemsList).length;

    if (currentItemsListLength > previousItemsListLength.current) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }

    previousItemsListLength.current = currentItemsListLength;
  }, [itemsList]);

  return (
    <div className="hidden">
      <audio ref={audioRef}>
        <source src="/assets/sound/notice.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MakeSound;
