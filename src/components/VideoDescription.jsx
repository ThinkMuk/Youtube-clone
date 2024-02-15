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
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {description && (
        <pre className="p-4 bg-zinc-800 rounded-lg whitespace-pre-wrap text-base">
          {description}
        </pre>
      )}
    </>
  );
}
