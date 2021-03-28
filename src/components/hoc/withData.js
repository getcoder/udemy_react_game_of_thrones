import React, { useState, useEffect } from "react";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";

export const withData = (View) => {
  return (props) => {
    const [datas, setData] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const { getData, itemId } = props;

    useEffect(() => {
      setLoading(true);
      getData(itemId)
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch(onError);
    }, [itemId]);

    const onError = () => {
      setError(true);
      setLoading(false);
    };

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorMessage />;
    }

    return <View {...props} data={datas} />;
  };
};
