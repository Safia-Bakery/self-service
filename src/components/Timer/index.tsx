import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Timer = () => {
  const [time, $time] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => $time(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <p className="lg:text-4xl text-xl">{dayjs(time).format("HH:mm")}</p>
      <p>{dayjs(time).format("DD.MM.YYYY")}</p>
    </>
  );
};

export default Timer;
