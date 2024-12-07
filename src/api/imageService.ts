import axios from 'axios';
import {ImageData} from '../types/interfaces';

const IMAGE_API_URL = 'https://picsum.photos/v2';

export const fetchImageData = async (
  page: number,
  limit: number,
): Promise<ImageData[]> => {
  try {
    const response = await axios.get<ImageData[]>(
      `${IMAGE_API_URL}/list?page=${page}&limit=${limit}`,
    );
    return response.data;
  } catch (error: any) {
    console.error('Error fetching images:', error.message || error);
    throw error;
  }
};
