import express from 'express'
import { 
  createNotification, 
  updateNotification, 
  transitionStatus, 
  getNotifications, 
  getNotificationById 
} from '../controllers/notificationController.js'

const router = express.Router()

router.get('/', getNotifications)
router.post('/', createNotification)
router.get('/:id', getNotificationById)
router.put('/:id', updateNotification)
router.patch('/:id/status', transitionStatus)

export default router
