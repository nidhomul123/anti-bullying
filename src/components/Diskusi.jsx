import React, { Component, useState } from "react";
import Disqus from "disqus-react";
import { useDispatch, useSelector } from "react-redux";

function Diskusi() {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);
  const { isLoading } = useSelector((state) => state.artikel);
  const disqusShortname = "antibully";
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "article-id",
    title: "Anti-Bully",
  };
  


  

  return (
    <div className="kontenKomponen">
      <div className="diskusi">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </div>
  );
}

export default Diskusi;
