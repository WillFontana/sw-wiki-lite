import React, { useMemo } from "react";
import { StyledCrawl, StyledCrawlContainer } from "./styles";

interface IOpeningCrawl {
  title: string;
  episode: number;
  crawl: string;
}

const OpeningCrawl: React.FC<IOpeningCrawl> = React.memo(({ title, crawl, episode }) => {
  const formattedCrawl = useMemo(() => crawl.trim(), [crawl]);

  return (
    <StyledCrawlContainer>
      <StyledCrawl>
        <h2>Episode {episode}</h2>
        <h1>{title}</h1>
        <p>{formattedCrawl}</p>
      </StyledCrawl>
    </StyledCrawlContainer>
  );
});

export default OpeningCrawl;

