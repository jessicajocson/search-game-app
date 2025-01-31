import express from "express";
import { getGames, filterGames, getCategories, getGameDetails } from "../controllers/games.controller";

const router = express.Router();

router.get("/", getGames);
router.get("/filter", filterGames);
router.get("/categories", getCategories);
router.get("/game", getGameDetails);

export default router;
