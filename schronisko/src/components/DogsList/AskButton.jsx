import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { Button, Container } from "@mui/material";

const AskButton = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        size="large"
        onClick={() => navigate("/adopt")}
        color="success"
      >
        Adoptuj
      </Button>
    </Container>
  );
};

export default AskButton;
