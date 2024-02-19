import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import VideoDescription from "../components/VideoDescription";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  const [MoreDescription, setMoreDescription] = useState(false);
  function handleDescription() {
    setMoreDescription((prev) => !prev);
  }
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          className="rounded-lg"
          title={video.id}
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <button
            className="p-4 bg-zinc-800 rounded-lg text-base text-left w-full"
            onClick={handleDescription}
          >
            {MoreDescription ? (
              <VideoDescription id={video.id} />
            ) : (
              <pre className="whitespace-pre-wrap">
                <div className="line-clamp-2">{description}</div>
              </pre>
            )}
          </button>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={channelId} />
      </section>
    </section>
  );
}
