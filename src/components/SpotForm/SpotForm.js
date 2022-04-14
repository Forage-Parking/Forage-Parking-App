import React from 'react';
import './SpotForm.css';
import { Box, Form, FormField, Select, TextArea, TextInput } from 'grommet';

const suggestions = ['Ye ol Parking Spot'];
export default function SpotForm({ setSize, setDetails, setNickname, setPrice, handleSubmit }) {
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
            <button type="submit" label="Save Spot">
              Save Spot
            </button>
            <button type="reset" label="Reset form">
              Reset form
            </button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
}

// const StyledSelect = styled.select`
/* width: 100vw;
`; */
