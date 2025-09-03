import {
  createNotificationService,
  updateNotificationService,
  transitionStatusService,
  getNotificationsService,
  getNotificationByIdService
} from '../services/notificationService.js'

export const createNotification = async (req, res) => {
  try {
    const notification = await createNotificationService(req.body)
    res.status(201).json(notification)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateNotification = async (req, res) => {
  try {
    const notification = await updateNotificationService(req.params.id, req.body)
    res.json(notification)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const transitionStatus = async (req, res) => {
  try {
    const notification = await transitionStatusService(req.params.id, req.body.nextStatus)
    res.json(notification)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getNotifications = async (req, res) => {
  try {
    const notifications = await getNotificationsService()
    res.json({ items: notifications })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getNotificationById = async (req, res) => {
  try {
    const notification = await getNotificationByIdService(req.params.id)
    res.json(notification)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
