import { Paper } from "@mui/material";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../db";

export const GetDogPhotoOnlyUrl = ({ id }) => {
  const [imageList, setImageList] = useState([]);
  // let id = "25f6188c-1f41-4894-81a2-ecf376ec0b9f/";
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
    // console.log("odpalam galerie");
    // console.log(imageList[0]);
  }, [id]);

  return (
    <>
      <Paper
        style={{
          backgroundImage: `url(${imageList[0]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "400px",
        }}
      ></Paper>
    </>
  );
};
