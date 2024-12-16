# Use an official TeX Live image for LaTeX packages
FROM texlive/texlive:latest

# Set working directory
WORKDIR /app

# Copy application files
COPY . /app

# Install Node.js
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js dependencies
RUN npm install

RUN npm run build

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "run","start"]
