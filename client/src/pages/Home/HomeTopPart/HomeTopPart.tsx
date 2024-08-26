import { Header } from "../../../components/Header/Header";
import { MainSearch } from "../../../components/MainSearch/MainSearch";
import { WrapperTopPart } from "./styled";

export const HomeTopPart = () => {
  return (
    <WrapperTopPart>
      <Header />
      <MainSearch />
    </WrapperTopPart>
  );
};
