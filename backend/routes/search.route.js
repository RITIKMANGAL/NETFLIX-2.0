import express from "express";
import {
	getSearchHistory,
	removeItemFromSearchHistory,
	searchMovie,
	searchPerson,
	searchTv,
} from "../controllers/search.controller.js";

const router = express.Router();

router.get("/person/:query", searchPerson);
router.get("/movie/:query", searchMovie);
router.get("/tv/:query", searchTv);

router.get("/history", getSearchHistory);// to fetch the user search history

router.delete("/history/:id", removeItemFromSearchHistory);// to delete the user search history.

export default router;