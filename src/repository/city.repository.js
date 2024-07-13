import City from "../mysql/models/city.model"

class CityRepository {

    async createCity({name}){
        try{
            const city = await City.create({name})
            if(!city){
                return res.status(400).json({message: 'failed to create City'})
            }
            return city
        }catch(error){
            console.log(error.message)
            throw {error}
        }
    }

    async deleteCity({cityId}){
        try{
            await City.destroy({
                wherer : {
                    id: cityId
                }
            })
        }catch(err){
            console.log(err.message)
            throw { err }
        }
    }

}

export default CityRepository