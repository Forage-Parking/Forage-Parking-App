import React from 'react';
import SpotForm from '../../components/SpotForm/SpotForm';
import Upload from '../../components/Upload/Upload';

export default function NewSpot() {
  return (
    <>
      <div>
        <SpotForm />
      </div>
      <div>
        <Upload />
      </div>
    </>
  );
}
