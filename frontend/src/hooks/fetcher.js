import { useEffect, useState } from "react";
import api from "../lib/axios";

export const useFetcher = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetcher = () =>
    api.get(url).then((res) => {
      setData(res.data);
      setLoading(false);
    });

  useEffect(() => {
    fetcher();
  }, []);

  return { data, loading, refetch: fetcher };
};
