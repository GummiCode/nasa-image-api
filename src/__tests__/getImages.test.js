import React from ('react');
import {render, wait} from '@testing-library/react';
import mockImageData from './mockData/mockImageData';
import getImages from '../controllers/getImages';
jest.mock("../controllers/getImages");


// Not sure what goes before this...
  getImages.mockResolvedValue(mockImageData);


