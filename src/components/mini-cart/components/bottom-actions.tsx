import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// ==============================================================
interface Props {
  total: string;
  handleNavigate: (path: string) => () => void;
}
// ==============================================================

export default function BottomActions({ total, handleNavigate }: Props) {
  return (
    <Box p={2.5}>


      <Button
        fullWidth
        color="primary"
        variant="contained"
        sx={{ mb: "0.75rem", height: "40px" }}>
        Contact Support
      </Button>

      <Button
        fullWidth
        color="primary"
        variant="outlined"
        sx={{ height: 40 }}
        onClick={handleNavigate("/cart")}>
        Clear All
      </Button>



    </Box>
  );
}
