import { sequelize } from '../config/database.js'
import NotificationModel from './Notification.js'

const Notification = NotificationModel(sequelize)

export { sequelize, Notification }
