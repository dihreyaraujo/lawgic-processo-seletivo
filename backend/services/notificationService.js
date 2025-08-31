import { Notification } from '../models/index.js'

export const createNotificationService = async ({ title, description, hearingDate }) => {
  return Notification.create({ title, description, hearingDate })
}

export const updateNotificationService = async (id, { title, description, hearingDate, notifiedName, notifiedEmail, notifiedPhone, notifiedAddress }) => {
  const notification = await Notification.findByPk(id)
  if (!notification) throw new Error('Notificação não encontrada')

  await notification.update({ title, description, hearingDate, notifiedName, notifiedEmail, notifiedPhone, notifiedAddress })

  return Notification.findByPk(id)
}

export const transitionStatusService = async (id, nextStatus) => {
  const notification = await Notification.findByPk(id)
  if (!notification) throw new Error('Notificação não encontrada')
  notification.status = nextStatus
  await notification.save()
  return notification
}

export const getNotificationsService = async () => {
  return Notification.findAll({ order: [['createdAt','DESC']] })
}

export const getNotificationByIdService = async (id) => {
  const notification = await Notification.findByPk(id)
  if (!notification) throw new Error('Notificação não encontrada')
  return notification
}
