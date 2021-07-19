# Image Processing API
An API that can be used in two different ways. As a simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters (and additional stylization if you choose) for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

## Getting Started

## Backend

### Dependencies

* [Node JS](https://nodejs.org/en/download/)  

### Installation

1. Clone or download this repository and change directory (cd) to this repository - [cd image-processor-api].
2. To install the dependencies run command [npm install].
3. To start the server run command [npm run start].
4. Open a browser and navigate to the url: [http://localhost:3000/image?name=palmtunnel&width=600&height=400]

## Testing

Once you have completed the above installation, you should also be able to run the included unit tests to verify basic functionality as you complete it. To run unit tests:

1. Run command [npm run test].



