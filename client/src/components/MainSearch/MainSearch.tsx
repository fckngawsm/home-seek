import { DateInput } from "../CustomInputs/DateInput";
import { GuestsNumberInput } from "../CustomInputs/GuestsNumberInput";
import { RegionInput } from "../CustomInputs/RegionInput";
import { SearchVerticalSeparate } from "../CustomInputs/styled";
import { StyledSearchWrapper } from "./styled";

export const MainSearch = () => {
  return (
    <StyledSearchWrapper>
      <RegionInput />
      <SearchVerticalSeparate />
      <DateInput label="Check in" subtitle="Add dates" />
      <SearchVerticalSeparate />
      <DateInput label="Check out" subtitle="Add dates" />
      <SearchVerticalSeparate />
      <GuestsNumberInput />
    </StyledSearchWrapper>
  );
};
