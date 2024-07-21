# Stage 1: Build the backend
FROM node:18 AS backend-builder

# Set the working directory for the backend
WORKDIR /usr/src/app/backend

# Copy backend source code and install dependencies
COPY server/package*.json ./
RUN npm install
COPY server/ .

# Stage 2: Build the frontend
FROM node:18 AS frontend-builder

# Set the working directory for the frontend
WORKDIR /usr/src/app/frontend

# Copy frontend source code and install dependencies
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Stage 3: Final stage
FROM node:18

# Set the working directory in the final image
WORKDIR /usr/src/app

# Copy the built backend and frontend from previous stages
COPY --from=backend-builder /usr/src/app/backend /usr/src/app/backend
COPY --from=frontend-builder /usr/src/app/frontend /usr/src/app/frontend

# Expose the ports
EXPOSE 3000
EXPOSE 5173

# Start the backend and frontend services
CMD ["sh", "-c", "cd backend && npm start & cd frontend && npm run dev"]
