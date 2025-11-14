import axios from 'axios';
import { NFT } from '../types';

const API_URL = 'https://your-api-url.com/nfts';

export const uploadNFT = async (file: File): Promise<NFT> => {
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await axios.post(API_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to upload NFT: ' + error.message);
    }
};

export const getNFTs = async (): Promise<NFT[]> => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch NFTs: ' + error.message);
    }
};