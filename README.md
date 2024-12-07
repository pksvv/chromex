# WebPage Split Capture

A web application that captures screenshots of web pages and splits them into equal vertical segments.

## Features

- **User Interface:**
  - Modal pop-up to collect user's name and email.
  - Input fields for webpage URL and number of splits.
  - Loading indicator during processing.
  - Download links for each image segment.

- **Screenshot Functionality:**
  - Captures full-page screenshots using Puppeteer.
  - Splits the screenshot into equal vertical segments using Sharp.
  - Provides images as downloadable PNG files.

## Technologies Used

- **Next.js** (App Router) for the frontend.
- **React Modal** for modal dialogs.
- **Axios** for HTTP requests.
- **Puppeteer-Core** and **Chrome-AWS-Lambda** for headless browser automation.
- **Sharp** for image processing.
- **Vercel** for deployment.

## Setup Instructions

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **Visual Studio Code** (or any code editor).


### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/webpage-split-capture.git

# Vipul Gaur