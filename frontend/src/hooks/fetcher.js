import { useEffect, useState } from "react";
import api from "../lib/axios";

export const useFetcher = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(url).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
