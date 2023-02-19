import React, { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function Image() {
  const [imageuplad, setImageuplad] = useState(null);
  const [imageurl, setImageurl] = useState([]);
  const imagelisRef = ref(storage, "image2/");

  const uploadFile = () => {
    if (imageuplad == null) return;
    const imageRef = ref(storage, `image2/${imageuplad.name + v4()}`);
    uploadBytes(imageRef, imageuplad).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageurl((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagelisRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageurl((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setImageuplad(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Upload File</button>
      <div>
        {imageurl.map((url) => {
          return ( 
          
          <img src={url} className={styles.widthheight} />)
        })}
      </div>
    </div>
  );
}

export default Image;
