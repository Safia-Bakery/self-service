import { useEffect, useState } from "react";
interface Props {
  title: string;
}

const ProgressBtn = ({ title }: Props) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: `linear-gradient(90deg, #DCC38B ${
          progress < 100 ? progress / 1.3 : progress
        }%, rgba(180, 200, 140, 0) ${progress}%)`,
      }}
      className="shadow-button rounded-[50px] py-6 text-5xl bg-primary flex w-[30vw] mx-auto justify-center"
    >
      {title}
    </div>
  );
};

export default ProgressBtn;
