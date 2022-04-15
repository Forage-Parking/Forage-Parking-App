import React from 'react';
import './SpotForm.css';
import { Box, Button, Form, FormField, Select, TextArea, TextInput } from 'grommet';
import { useSpotContext } from '../../context/SpotContext';
import styled from 'styled-components';

const suggestions = ['Ye ol Parking Spot'];
export default function SpotForm({ handleSubmit }) {
  const { setSize, setDetails, setNickname, setPrice } = useSpotContext();
  return (
    <Box fill align="center" justify="center">
      <Box width="medium">
        <Form className="spot-form" onSubmit={handleSubmit}>
          <FormField name="name">
            <TextInput
              name="name"
              placeholder="enter spot nickname"
              suggestions={suggestions}
              onChange={(e) => setNickname(e.target.value)}
            />
          </FormField>
          <FormField name="price">
            <Select
              placeholder="Price per hour in USD"
              name="price"
              options={[5, 10, 15, 20]}
              onChange={(e) => setPrice(e.target.value)}
            ></Select>
          </FormField>
          <FormField name="size">
            <Select
              placeholder="Vehicle Size"
              name="size"
              options={['compact', 'medium', 'large', 'trailer']}
              onChange={(e) => setSize(e.target.value)}
            ></Select>
          </FormField>
          <FormField label="Spot Details" name="details">
            <TextArea name="details" onChange={(e) => setDetails(e.target.value)} />
          </FormField>
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <ButtonColor type="reset" label="Reset form" />
            <ButtonColor type="submit" label="Save Spot" />
          </Box>
        </Form>
      </Box>
    </Box>
  );
}
const ButtonColor = styled(Button)`
  color: #f4f1de;
`;
// const StyledSelect = styled.select`
/* width: 100vw;
`; */
