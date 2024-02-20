import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function VideoDescription({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: description,
  } = useQuery({
    queryKey: ["description", id],
    queryFn: () => {
      return youtube.channelDescription(id);
    },
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {description && <pre className="whitespace-pre-wrap">{description}</pre>}
    </>
  );
}
