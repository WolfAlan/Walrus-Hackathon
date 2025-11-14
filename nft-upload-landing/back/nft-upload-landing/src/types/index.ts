export interface NFT {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    fileType: string;
}

export interface UploadStatus {
    isUploading: boolean;
    message: string;
    error?: string;
}