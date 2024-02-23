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
}

const Button = ({ children, className, progress, ...others }: Props) => {
  return (
    <button className={cl(styles.btn, className)} {...others}>
      {progress && (
        <div className={cl(styles.progressContainer, styles.progressBar)} />
      )}
      {children}
    </button>
  );
};

export default Button;
