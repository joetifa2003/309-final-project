import { useCallback, useEffect, useState } from "react";
import api from "../lib/axios";

const debounce = (func, delay) => {
  let timeoutId;
  let isFirstCall = true;

  return (...args) => {
    if (isFirstCall) {
      func(...args);
      isFirstCall = false;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    }
  };
};

export const useFetcher = (url, param = null, delay = 300) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetcher = useCallback(
    debounce(
      (url, param, setData, setLoading) =>
        api.get(`${url}${param ? `?${param}` : ""}`).then((res) => {
          setData(res.data);
          setLoading(false);
        }),
      delay,
    ),
    [],
  );

  useEffect(() => {
    fetcher(url, param, setData, setLoading);
  }, [param]);

  return {
    data,
    loading,
    refetch: () => fetcher(url, param, setData, setLoading),
  };
};
