import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Timer = () => {
  const [time, $time] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => $time(new Date()), 3000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <p className="text-4xl">{dayjs(time).format("HH:mm")}</p>
      <p>{dayjs(time).format("DD.MM.YYYY")}</p>
    </>
  );
};

export default Timer;
