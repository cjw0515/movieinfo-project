import express from 'express';
import movie from './movie';

const router = express.Router();
router.use('/movie', movie);

export default router;
