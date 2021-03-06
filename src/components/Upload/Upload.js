import { useEffect, useState } from 'react';
import { client } from '../../services/client';
import { FileInput, FormField, Form } from 'grommet';

export default function Upload({ url, sizeW, sizeH, onUpload }) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  const downloadImage = async (path) => {
    try {
      const { data, error } = await client.storage.from('mybucket').download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      'Error downloading image: ', error.message;
    }
  };

  const uploadAvatar = async (event) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }

      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await client.storage.from('mybucket').upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
    // downloadImage();
  };

  return (
    <Form>
      {avatarUrl && (
        <img
          src={avatarUrl ? avatarUrl : `https://place-hold.it/${sizeW}x${sizeH}`}
          alt={avatarUrl ? 'image' : 'No image'}
          className="avatar image"
          style={{ height: sizeH, width: sizeW }}
        />
      )}
      {uploading ? (
        'Uploading...'
      ) : (
        <FormField>{!avatarUrl && <FileInput name="file" onChange={uploadAvatar} />}</FormField>
      )}
    </Form>
  );
}
