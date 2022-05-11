import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../db";
import { Paper } from "@mui/material";

export const GetDogPhotoForList = () => {
  const [imageList, setImageList] = useState([]);
  let id = "25f6188c-1f41-4894-81a2-ecf376ec0b9f/";
  useEffect(() => {
    const fetchImages = async () => {
      let result = await listAll(ref(storage, `DogPhotos/${id}/`));
      let urlPromises = result.items.map((imageRef) =>
        getDownloadURL(imageRef)
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      setImageList(urls);
    };
    loadImages();
  }, [id]);

  return (
    <>
      <Paper
        style={{
          backgroundImage: `url(${imageList[0]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "200px",
        }}
      ></Paper>
    </>
  );
};
