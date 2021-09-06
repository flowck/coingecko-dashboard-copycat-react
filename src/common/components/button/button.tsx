import { ButtonContainer } from "./button.style";

interface Props {
  label: String;
  onClick(): unknown;
}

export function Button({ onClick, label }: Props) {
  return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>;
}
