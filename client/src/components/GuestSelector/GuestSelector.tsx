import { MinusCircle, PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { IconButton } from "../IconButton";
import {
  StyledCountTitle,
  StyledGuestCounter,
  StyledGuestItem,
  StyledGuestItemDescription,
  StyledGuestItemTextWrapper,
  StyledGuestItemTitle,
  StyledGuestWrapper,
} from "./styled";

export const GuestSelector = () => {
  const [count, setCount] = useState(0);
  return (
    <StyledGuestWrapper>
      <StyledGuestItem>
        <StyledGuestItemTextWrapper>
          <StyledGuestItemTitle>Взрослые</StyledGuestItemTitle>
          <StyledGuestItemDescription>От 13 лет</StyledGuestItemDescription>
        </StyledGuestItemTextWrapper>
        <StyledGuestCounter>
          <IconButton>
            <MinusCircle size={24} weight="regular" />
          </IconButton>
          <StyledCountTitle>{count}</StyledCountTitle>
          <IconButton>
            <PlusCircle size={24} weight="regular" />
          </IconButton>
        </StyledGuestCounter>
      </StyledGuestItem>
    </StyledGuestWrapper>
  );
};
