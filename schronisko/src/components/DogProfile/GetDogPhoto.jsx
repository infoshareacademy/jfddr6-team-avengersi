import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../db";

export const GetDogPhoto = () => {
  const [imageList, setImageList] = useState([]);
  let id = "8a5a26a7-6819-4aa6-8d23-ad669c20e7ce/";
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
    console.log("odpalam galerie");
  }, [id]);

  return (
    <div className="gallery">
      {imageList.map((url) => (
        <img key={url} alt="blogphoto" src={url} />
      ))}
    </div>
  );
};
