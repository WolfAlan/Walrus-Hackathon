# NFT Upload Landing Page

This project is a simple web application for uploading NFTs using Vite and TypeScript. It provides a user-friendly interface for selecting and uploading NFT files, along with status updates during the upload process.

## Project Structure

```
nft-upload-landing
├── src
│   ├── main.ts                # Entry point of the application
│   ├── style.css              # Styles for the application
│   ├── index.html             # Main HTML file
│   ├── components
│   │   ├── NFTUploader.ts     # Handles NFT file upload process
│   │   └── StatusDisplay.ts    # Manages upload status messages
│   ├── services
│   │   └── nftService.ts      # Interacts with backend service for uploads
│   └── types
│       └── index.ts           # TypeScript interfaces and types
├── public                      # Public assets
├── vite.config.ts             # Vite configuration file
├── tsconfig.json              # TypeScript configuration file
├── package.json               # npm configuration file
└── README.md                  # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nft-upload-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Features

- Upload NFT files in various formats (PNG, JPG, GIF, MP4, WEBM).
- Display upload status messages to inform users of the upload progress.
- TypeScript support for better development experience and type safety.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.