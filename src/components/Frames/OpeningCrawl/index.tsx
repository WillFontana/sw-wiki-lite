import React from "react";
import { StyledCrawl, StyledCrawlContainer } from "./styles";

interface IOpeningCrawl {
  title: string;
  episode: string;
  crawl: string;
}

const OpeningCrawl: React.FC<IOpeningCrawl> = ({ title, crawl, episode }) => {
  return (
    <StyledCrawlContainer>
      <StyledCrawl>
        <h2>{episode}</h2>
        <h1>{title}</h1>
        <p>{crawl}</p>
      </StyledCrawl>
    </StyledCrawlContainer>
  );
};

export default OpeningCrawl;
