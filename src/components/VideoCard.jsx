import React from "react";
import { formatAgo } from "../util/date";

export default function VideoCard({ video }) {
  const { title, etag, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li key={etag}>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
