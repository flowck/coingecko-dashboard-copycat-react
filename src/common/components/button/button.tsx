import { ButtonContainer } from "./button.style";

interface Props {
  id?: string;
  label: string;
  onClick(): unknown;
}

export function Button({ onClick, label, id }: Props) {
  return (
    <ButtonContainer onClick={onClick} id={id}>
      {label}
    </ButtonContainer>
  );
}
