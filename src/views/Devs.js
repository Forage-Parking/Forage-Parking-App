import { PageContent, Heading, Grid, Card, Image } from 'grommet';
import React from 'react';
import styled from 'styled-components';

function Devs() {
  return (
    <div>
      <PageContent>
        <Heading>Foragers</Heading>
        <Grid>
          <StyledCard background="#eo7a5f" pad="large">
            <h2>Andrea</h2>
            <p>Full-stack software developer, mom, enjoyer of good bagels!</p>
            <a href="https://www.linkedin.com/in/andrea-cleland/">
              <img src="../assets/pixel-andrea.png" />
            </a>
          </StyledCard>
          <StyledCard background="#eo7a5f" pad="large">
            <h2>Bradley</h2>
            <p>Full Stack Software Developer. I like pizza and coding.</p>
            <a href="https://www.linkedin.com/in/bradleybird/">
              <Image src="../assets/bradleydev.png" />
            </a>
          </StyledCard>
          <StyledCard background="#eo7a5f" pad="large">
            <h2>Brenden</h2>
            <p>Full-Stack Software Developer. I love bad movies and animals.</p>
            <a href="https://www.linkedin.com/in/brendenseifried/">
              <Image src="../assets/devBren.png" />
            </a>
          </StyledCard>
          <StyledCard background="#eo7a5f" pad="large">
            <h2>Josh</h2>
            <p>I am a Full-Stack Software. Love gaming and reading. Also love pizza and ramen.</p> 
            <a img = "https://www.linkedin.com/in/joshua-stresing-a6703b232/"></a>
            <Image src = "../assets/josh.png" />
          </StyledCard>
          <StyledCard background="#eo7a5f" pad="large">
            <h2>Kamie</h2>
            <br />
            <p>
              Full Stack Software Engineer. Learning cool stuff every day! Loves dogs, family, and
              campervans!
            </p>
            <a href="https://www.linkedin.com/in/kamieshort/">
              <Image src="../assets/devimage.png" />
            </a>
          </StyledCard>
        </Grid>
      </PageContent>
    </div>
  );
}
const StyledCard = styled(Card)`
  color: white;
  height: 200px;
`;
export default Devs;
