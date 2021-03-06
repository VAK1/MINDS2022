import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import { SpecialistAd } from "../../components/specialistAd";
import { Vision } from "./vision";
import { WhyJoin } from "./whyjoin";
import { Events } from "./events";
import { Timeline } from "./timeline";
import { Resources } from "./resources";
import { About } from "./about";



import { TopSection } from "./topSection";

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;

export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent />
      </TopSection>
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
          <Vision />
        </ContentContainer>
        <ContentContainer>
          <WhyJoin />
        </ContentContainer>
        <ContentContainer>
          <Events />
        </ContentContainer>
        <ContentContainer>
          <Timeline />
        </ContentContainer>
        <ContentContainer>
          <Resources />
        </ContentContainer>
        <ContentContainer>
          <About />
        </ContentContainer>
        <Marginer direction="vertical" margin="5em" />
        <SpecialistAd />
        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
