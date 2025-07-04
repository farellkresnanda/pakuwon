FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Build the application
COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

# ENV NODE_ENV=production


# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
#COPY --from=builder /app/.env.local ./
COPY --from=builder /app/next.config.ts ./
# COPY --from=builder /app/tsconfig.json ./
# COPY --from=builder /app/tsconfig.node.json ./



# Install production dependencies only
# RUN npm ci --only=production

EXPOSE 3000
CMD ["npm", "run", "dev"]