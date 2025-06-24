# Stage 1: Builder
FROM node:21-alpine AS builder
WORKDIR /app
# RUN npm install -g yarn
COPY package.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Stage 2: Production
FROM node:21-alpine AS runner
WORKDIR /app
RUN npm install -g serve@latest
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
