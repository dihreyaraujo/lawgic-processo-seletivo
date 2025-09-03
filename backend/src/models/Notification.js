import { DataTypes } from 'sequelize'

export default (sequelize) => {
  return sequelize.define('Notification', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    hearingDate: { type: DataTypes.DATEONLY, allowNull: false },
    status: { type: DataTypes.ENUM('EM_ANDAMENTO','VALIDACAO','CONCLUIDO'), defaultValue: 'EM_ANDAMENTO' },
    notifiedName: { type: DataTypes.STRING, allowNull: true },
    notifiedEmail: { type: DataTypes.STRING, allowNull: true },
    notifiedPhone: { type: DataTypes.STRING, allowNull: true },
    notifiedAddress: { type: DataTypes.STRING, allowNull: true }
  });
}