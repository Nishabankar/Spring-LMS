import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import userRoutes from './routes/userRoutes.js'
import courseRoutes from "./routes/courseRoutes.js";



// Intialize Express
const app = express()

// Connect to database
await connectDB()

//Middleware
app.use( cors() )
app.use(express.json())


// Routes
app.get( '/', ( req, res ) => res.send( "API Working" ) )
app.use( "/api/users", userRoutes );
app.use("/api/courses", courseRoutes);




// Port
const PORT = process.env.PORT || 5000

app.listen( PORT, () => {
    console.log( `Server running on port ${ PORT }` )
})
