import axios from 'axios';
import {Config} from 'react-native-config';

const config = {
  headers: {
    Authorization: `Bearer ${Config.ACCESS_TOKEN}`,
  },
};

export const search = async (query: string, page: number) => {
  try {
    const response = await axios.get(`${Config.API_BASE_URL}/elastic`, {
      params: {
        limit: 20,
        p: page,
        q: query,
        world: 'de',
      },
      ...config,
    });

    return response.data.data.items.materials;
  } catch (error) {
    throw error;
  }
};
