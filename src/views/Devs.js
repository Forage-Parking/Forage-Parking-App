import { PageContent, Heading, Grid, Card } from 'grommet';
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
          </StyledCard>
          <StyledCard background="#eo7a5f" pad="large">
            <h2>Brenden</h2>
          </StyledCard>
          <StyledCard background="#eo7a5f" pad="large">
            <h2>Josh</h2>
          </StyledCard>
          <StyledCard background="#eo7a5f" pad="large">
            <h2>Kamie</h2>
            <br />
            <p>
              Full Stack Software Engineer. Learning cool stuff every day! Loves dogs, family, and
              campervans!
            </p>
            <a href="https://www.linkedin.com/in/kamieshort/">
              <img src="../assets/devimage.png" />
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
