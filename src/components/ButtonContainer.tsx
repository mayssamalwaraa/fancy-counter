import { ButtonContainerProps } from "../types/ButtonContainerProps";

const ButtonContainer = ({ children }: ButtonContainerProps) => {
  return <div className="button-container">{children}</div>;
};
export default ButtonContainer;
