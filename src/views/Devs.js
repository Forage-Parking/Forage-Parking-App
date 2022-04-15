import { PageContent, Heading, Paragraph, Grid, Card } from 'grommet';
import React from 'react';
import styled from 'styled-components';

function Devs() {
  return (
    <div>
      <PageContent>
        <Heading>Foragers</Heading>
        <Grid>
          <StyledCard background="#eo7a5f" pad="large">
            <p>Andrea</p>
          </StyledCard>
          <StyledCard background="#eo7a5f" pad="large">
            <p>Bradley</p>
          </StyledCard>
          <StyledCard background="#eo7a5f" pad="large">
            <p>Brenden</p>
          </StyledCard>
          <StyledCard background="#eo7a5f" pad="large">
            <p>Josh</p>
          </StyledCard>
          <StyledCard background="#eo7a5f" pad="large">
            <p>Kamie</p>
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
