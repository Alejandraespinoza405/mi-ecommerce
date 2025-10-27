// src/config/dataSource.ts
import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "../entities/User";
import { Credential } from "../entities/Credential";
import { Order } from "../entities/Order";
import { Product } from "../entities/Product";
import { Category } from "../entities/Category";

const isProd = process.env.NODE_ENV === "production" || !!process.env.RENDER;

const entitiesPath = [__dirname + "/../entities/*.{js,ts}"];

export const AppDataSource = new DataSource(
  isProd
    // 🔹 PRODUCCIÓN (Render)
    ? {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        synchronize: true,
        logging: false,
        entities: entitiesPath,
      }
    // 🔹 DESARROLLO LOCAL
    : {
        type: "postgres",
        host: process.env.DB_HOST || "localhost",
        port: Number(process.env.DB_PORT || 5432),
        username: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "mi_ecommerce",
        synchronize: true,
        // dropSchema: true,   
        logging: false,
        entities: entitiesPath,
      }
);
