class NFTUploader {
    private fileInput: HTMLInputElement;
    private uploadButton: HTMLButtonElement;
    private statusDisplay: StatusDisplay;

    constructor(fileInputId: string, buttonId: string, statusDisplay: StatusDisplay) {
        this.fileInput = document.getElementById(fileInputId) as HTMLInputElement;
        this.uploadButton = document.getElementById(buttonId) as HTMLButtonElement;
        this.statusDisplay = statusDisplay;

        this.uploadButton.addEventListener('click', () => this.uploadNFT());
    }

    private validateFileType(file: File): boolean {
        const validTypes = ['image/png', 'image/jpeg', 'image/gif', 'video/mp4', 'video/webm'];
        return validTypes.includes(file.type);
    }

    private async uploadNFT() {
        const file = this.fileInput.files?.[0];
        if (!file) {
            this.statusDisplay.updateStatus('No file selected.');
            return;
        }

        if (!this.validateFileType(file)) {
            this.statusDisplay.updateStatus('Invalid file type. Please select an image or video.');
            return;
        }

        this.statusDisplay.updateStatus('Uploading...');

        try {
            const response = await nftService.uploadNFT(file);
            if (response.success) {
                this.statusDisplay.updateStatus('Upload successful!');
            } else {
                this.statusDisplay.updateStatus('Upload failed: ' + response.message);
            }
        } catch (error) {
            this.statusDisplay.updateStatus('Upload error: ' + error.message);
        }
    }
}

export default NFTUploader;