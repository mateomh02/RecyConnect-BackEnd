# --- PASO 1: Compilación ---
FROM node:20-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm run build

# --- PASO 2: Ejecución en producción ---
FROM node:20-alpine AS runner

RUN npm install -g pnpm

WORKDIR /app

ENV NODE_ENV=production

COPY package.json pnpm-lock.yaml ./

# Copiar la carpeta dist completa
COPY --from=builder /app/dist ./dist

RUN pnpm install --prod --frozen-lockfile

EXPOSE 3000

# 🌟 CAMBIO AQUÍ: Apuntar a dist/src/main
CMD ["node", "dist/src/main"]