
import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, useToast } from '@chakra-ui/react';
import axios from 'axios';

const UploadPDF = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFileAndGetUrl = async (file) => {
    // Mock implementation of file upload
    // Replace this with actual file upload logic
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('https://example.com/path/to/your/uploaded/file.pdf');
      }, 1000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast({
        title: 'No file selected.',
        description: 'Please select a PDF file to upload.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      // Upload the file and get its URL
      const fileUrl = await uploadFileAndGetUrl(file);

      // Call the OCR API
      const options = {
        method: 'POST',
        url: 'https://api.edenai.run/v2/ocr/ocr_async',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWFkODY4MzEtNzZjMS00NmU2LTliMzAtOWI1NTc4OGFjYzkzIiwidHlwZSI6ImFwaV90b2tlbiJ9.1Rftx0U-YVYRS3Ng8rn1f-m9Is7QumWRsXLWq8ptpiA',
        },
        data: {
          providers: 'amazon',
          file_url: fileUrl,
        },
      };

      const response = await axios.request(options);
      const result = response.data;
      console.log(result);

      toast({
        title: 'File uploaded.',
        description: 'Your PDF file has been uploaded and processed.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error processing PDF:', error);
      toast({
        title: 'Error processing PDF.',
        description: 'There was an error processing your PDF file.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%">
      <FormControl mt="4%">
        <FormLabel htmlFor="pdf-file">Upload PDF</FormLabel>
        <Input id="pdf-file" type="file" accept="application/pdf" onChange={handleFileChange} />
      </FormControl>
      <Button mt="4%" colorScheme="blue" type="submit" width="100%">
        Submit
      </Button>
    </Box>
  );
};

export default UploadPDF;