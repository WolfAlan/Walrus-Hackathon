// This file contains the JavaScript logic specifically for the NFT upload feature.
// It handles file input, validation, and submission of NFT data to the server.

document.addEventListener('DOMContentLoaded', () => {
    const uploadForm = document.getElementById('nft-upload-form');
    const fileInput = document.getElementById('file-input');
    const submitButton = document.getElementById('submit-button');
    const messageBox = document.getElementById('message-box');

    uploadForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const file = fileInput.files[0];
        if (!file) {
            messageBox.textContent = 'Please select a file to upload.';
            return;
        }

        const formData = new FormData();
        formData.append('nftFile', file);

        try {
            const response = await fetch('/api/upload-nft', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                messageBox.textContent = 'NFT uploaded successfully!';
            } else {
                messageBox.textContent = 'Failed to upload NFT. Please try again.';
            }
        } catch (error) {
            messageBox.textContent = 'An error occurred while uploading the NFT.';
            console.error('Upload error:', error);
        }
    });
});