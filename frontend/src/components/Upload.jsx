import { useCallback, useState } from "react";
import api from "../lib/axios";

export const Upload = ({ onUpload }) => {
  const [uploading, setUploading] = useState(false);

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      setUploading(true);
      const formData = new FormData(e.target);
      const res = await api.post("/upload", formData);
      onUpload(res.filename);
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  }, []);

  return (
    <form
      action="/upload"
      method="POST"
      enctype="multipart/form-data"
      onSubmit={onSubmit}
    >
      <input type="file" name="file" required />
      <button className="btn" disabled={uploading}>
        Upload
      </button>
    </form>
  );
};
