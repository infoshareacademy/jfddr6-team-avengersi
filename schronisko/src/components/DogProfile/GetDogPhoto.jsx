import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../../db";

export const GetDogPhoto = () => {
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
    <div
      className="gallery"
      // style={{ maxHeight: "100%", height: "200px", width: "200px" }}
    >
      {imageList.map((url) => (
        <img
          key={url}
          alt="blogphoto"
          src={url}
          style={{ width: "100%", height: "100%" }}
        />
      ))}
    </div>
  );
};
