import express from 'express'
import { getFormSchema } from '../controllers/formSchemaController.js'

const router = express.Router()

router.get('/', getFormSchema);

export default router