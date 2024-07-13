import { Model, Sequelize, DataTypes} from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:')

const City = sequelize.define(
  'City',
  {
    cityName: {
      type: DataTypes.STRING,
      allowNull: false
    } 
  },
  {
    sequelize,
    modelName: 'City',
  }
)

export default City

