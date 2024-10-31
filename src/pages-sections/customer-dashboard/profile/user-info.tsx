import { format } from "date-fns";
import Card from "@mui/material/Card";
import { Theme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";
import { Small, Span } from "components/Typography";
// CUSTOM DATA MODEL
import User from "models/User.model";

// ==============================================================
type Props = { user: User };
// ==============================================================

export default function UserInfo({ user }: Props) {
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        mt: 3,
        display: "flex",
        flexWrap: "wrap",
        p: "0.75rem 1.5rem",
        alignItems: "center",
        justifyContent: "space-between",
        ...(downMd && {
          alignItems: "start",
          flexDirection: "column",
          justifyContent: "flex-start"
        })
      }}>
      <TableRowItem title="First Name" value="Radhika Srivastav" />
      <TableRowItem title="Email" value="radhika@stazy.live"/>
      <TableRowItem title="Phone" value="+919372728789" />
      <TableRowItem title="DOB" value="05 July 2003" />
    </Card>
  );
}

function TableRowItem({ title, value }: { title: string; value: string }) {
  return (
    <FlexBox flexDirection="column" p={1}>
      <Small color="grey.600" mb={0.5}>
        {title}
      </Small>

      <Span>{value}</Span>
    </FlexBox>
  );
}
