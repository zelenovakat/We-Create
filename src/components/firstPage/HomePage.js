import React from "react"
import krasivoImg from "../../images/krasivo.jpg"
import styled from "styled-components"
import { mediaSmall } from "../Screen"
const HomePage = () => {
  return (
    <>
      <DivImg>
        <MainImg src={krasivoImg} />
        <CenterP>LOVE</CenterP>
      </DivImg>
      <TextDiv>
        <h1>info</h1>
        <p>
          Till följd av Coronapandemin (Covid-19) har stora delar av
          näringslivet blivit negativt påverkade. Detta har resulterat i
          ekonomiska svårigheter för företag där några av konsekvenserna varit
          massuppsägningar och konkurser.
        </p>
        <p>
          I och med de stora förändringar som behövts göras och de nya
          arbetssätten som växt fram under denna pandemi så kommer vår bransch,
          bland många andra att se väldigt annorlunda ut i framtiden. Vi tror
          att framtiden kommer att bestå av ett större antal konsulter och
          frilansare samt ett fåtal byråer med flertal medarbetare.
        </p>
        <p>Därför har vi nu valt att starta företaget We Create.</p>
        <h2>Det här är vi</h2>
        <p>
          We Create består av ett fåtal nyckelpersoner med lång erfarenhet inom
          bland annat Event, Pro- duktion, Grafisk formgivning och Digital
          Marknadsföring.
        </p>

        <p>
          Utöver detta har vi tillsammans ett stort nätverk och nära
          samarbetspartners med ett brett spek- trum av unika kunskaper.
        </p>
        <p>
          Med erfarenhet och expertis kan vi för varje nytt uppdrag skräddarsy
          en upplevelse utifrån ditt varumärke eller din produkt. Vi tror på ett
          kollektiv med professionella samarbetspartners som med fokus på
          tydlighet, sam- arbete och engagemang förhöjer upplevelsen av ert
          varumärke.
        </p>
        <h2>Vår vision</h2>
        <p>
          Vi älskar utmaningar och drivs av att hitta kreativa lösningar för dig
          som kund. Med bred kompetens, hög kvalitet, god kommunikation,
          nyfikenhet och stolthet i det vi gör kan vi på We Create hjälpa dig
          att utveckla ditt varumärke eller din produkt.
        </p>
        <h1>contact</h1>
        <ContactCristen>
          <h2>christian</h2>
          <a href="">christian@wecreate</a>
        </ContactCristen>
        <div>
          <h2>dan</h2>
          <a href="">dan@wecreate</a>
        </div>
      </TextDiv>
    </>
  )
}

export default HomePage
const MainImg = styled.img`
  width: 100%;
`
const TextDiv = styled.div`
  margin: 10px 50px 50px 50px;
  h2 {
    font-family: Comic Sans MS;
    margin-bottom: 5px;
  }
  p {
    font-size: 20px;
    font-family: arial;
    font-style: oblique;
  }
  h1 {
    font-family: Comic Sans MS;
    margin-top: 70px;
    margin-bottom: 20px;
  }
  a {
    font-size: 20px;
    color: #201f1f;
    text-decoration: none;
    font-family: arial;
    font-style: oblique;
  }
`
const DivImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const CenterP = styled.p`
  position: absolute;
  color: #ffffff;
  font-size: 70px;
  font-style: oblique;
  font-weight: 600;
  text-transform: lowercase;
  ${mediaSmall} {
    font-size: 150px;
  }
`
const ContactCristen = styled.div`
  margin-bottom: 20px;
`
