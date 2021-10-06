import axios from 'axios';
import { Image } from '.';
import { UNSPLASH_CREDENTIALS } from '../../config';

export const convertImages = (data: any): Image[] =>
  data.map((i: any): Image => {
    return {
      id: i.id,
      url: {
        full: i.urls.full,
        small: i.urls.small,
      },
    };
  });
export const getNewImages = async (page: number, per_page: number) => {
  try {
    const res = await axios.get('https://api.unsplash.com/photos', {
      params: {
        page,
        per_page,
        client_id: UNSPLASH_CREDENTIALS.ACCESS_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const searchImages = async (
  query: string,
  page: number,
  per_page: number
) => {
  try {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        page,
        per_page,
        query,
        client_id: UNSPLASH_CREDENTIALS.ACCESS_KEY,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
