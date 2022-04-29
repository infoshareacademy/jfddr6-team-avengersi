import { Button } from "@mui/material";
import * as React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export const UploadPhoto = () => {
  return (
    <Button
      variant="outlined"
      component="label"
      startIcon={<AddAPhotoIcon />}
      color="primary"
    >
      Prześlij zdjęcie
      <input type="file" accept="image/png, image/jpeg" hidden />
    </Button>
  );
};
