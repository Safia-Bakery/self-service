import { ReactNode } from "react";
import styles from "./index.module.scss";
import cl from "classnames";

interface Props {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  progress?: boolean;
  secondary?: boolean;
  collected?: boolean;
}

const Button = ({
  children,
  className,
  progress,
  secondary,
  collected,
  ...others
}: Props) => {
  return (
    <button
      className={cl(className, styles.btn, "shadow-button transition-colors", {
        ["bg-secondary"]: secondary,
        ["bg-mainBrown"]: collected,
      })}
      {...others}
    >
      {progress && (
        <div className={cl(styles.progressContainer, styles.progressBar)} />
      )}
      {children}
    </button>
  );
};

export default Button;
