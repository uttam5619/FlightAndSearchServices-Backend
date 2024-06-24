import express from 'express'

async function Runserver(){

    const serverInstance = express()
    const PORT = process.env.PORT || 7080

    serverInstance.listen(PORT, ()=>{
        console.log(`server listening on port:${PORT}`)
    })
}

export default Runserver