import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// CUSTOM ICON COMPONENTS
import appIcons from "icons";
// CUSTOM GLOBAL COMPONENTS
import FlexRowCenter from "components/flex-box/flex-row-center";
// CATEGORY TYPESCRIPT INTERFACE
import Category from "models/Category.model";
// STYLED COMPONENTS
import { StyledScrollbar, Title } from "./styles";

// ==========================================================================
interface Props {
  selected: string;
  categories: Category[];
  onChangeCategory: (value: string) => () => void;
}
// ==========================================================================

export default function SalesNavbar({ categories, selected, onChangeCategory }: Props) {
  return (
    <Box bgcolor="background.paper">
      <Container>
        <StyledScrollbar autoHide={false}>
          {categories.map((item) => {
            const Icon = appIcons[item.icon];
            const selectedItem = item.slug === selected ? 1 : 0;

            return (
              <FlexRowCenter
                key={item.id}
                onClick={onChangeCategory(item.slug)}
                sx={{
                  cursor: "pointer",
                  minWidth: "100px",
                  flexDirection: "column",
                  background: selectedItem ? "primary.light" : "transparent"
                }}>
                <Icon sx={{ fontSize: "1.75rem" }} color={selectedItem ? "primary" : "secondary"} />
                <Title selected={selectedItem}>{item.name}</Title>
              </FlexRowCenter>
            );
          })}
        </StyledScrollbar>
      </Container>
    </Box>
  );
}
