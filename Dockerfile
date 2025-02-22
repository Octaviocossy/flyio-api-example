FROM node:18-slim
WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
EXPOSE 3001
CMD ["sh", "-c", "pnpm build && pnpm start"]
