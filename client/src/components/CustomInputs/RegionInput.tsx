import { useToogle } from "@/hooks/useToogle";
import { ClickAwayListener } from "../ClickAwayListener/ClickAwayListener";
import {
  ListTitle,
  ListWrapper,
  MenuWithItems,
  RegionListImage,
  RegionListItem,
  RegionListTitle,
  StyledSearchInpurWrapper,
  StyledSearchLabel,
  StyledSearchSubtitle,
} from "./styled";

export const RegionInput = () => {
  // TODO: получаем с бэка
  const allRegions = [
    "africa",
    "asia",
    "europe",
    "rus",
    "idk",
    "soLongGameFOrInputTItle",
  ];
  const [isListOpen, onToogleList] = useToogle();
  const isListVisible = Boolean(isListOpen && allRegions.length > 0);
  return (
    <ClickAwayListener isActive={isListOpen} onClickAway={onToogleList}>
      <div style={{ width: "250px" }}>
        <StyledSearchInpurWrapper>
          <StyledSearchLabel>Location</StyledSearchLabel>
          <StyledSearchSubtitle onClick={onToogleList}>
            Where are you going?
          </StyledSearchSubtitle>
        </StyledSearchInpurWrapper>

        <MenuWithItems $isVisible={isListVisible}>
          <ListTitle>Search by region</ListTitle>
          <ListWrapper>
            {allRegions.map((region) => (
              <RegionListItem key={region}>
                <RegionListImage
                  alt="region-on-map"
                  src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320"
                />
                <RegionListTitle>{region}</RegionListTitle>
              </RegionListItem>
            ))}
          </ListWrapper>
        </MenuWithItems>
      </div>
    </ClickAwayListener>
  );
};
