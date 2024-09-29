import { useState, useEffect } from "react";

function useQueryParams() {
  const [params, setParams] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryParams: { [key: string]: string } = {};
    searchParams.forEach((value, key) => {
      queryParams[key] = value;
    });
    setParams(queryParams);
  }, []);

  return params;
}

export default useQueryParams;
