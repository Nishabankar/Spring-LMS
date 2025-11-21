import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import userRoutes from './routes/userRoutes.js'
import courseRoutes from "./routes/courseRoutes.js";
import benifitRoutes from "./routes/benefitRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import pricingRoutes from "./routes/pricingRoutes.js";
import faqRoutes from "./routes/faqRoutes.js";
import myCourseRoutes from "./routes/myCourseRoutes.js";

// Intialize Express
const app = express()

// Connect to database
await connectDB()

//Middleware
app.use( cors() )
app.use( express.json() )

app.use((req, res, next) => {
  if (typeof req.url === "string") {
    req.url = req.url.replace(/%0A/g, "").trim(); // remove encoded newline and trim
  }
  next();
});


// Routes
app.get( '/', ( req, res ) => res.send( "API Working" ) )
app.use( "/api/users", userRoutes );
app.use( "/api/courses", courseRoutes );
app.use( "/api/benefits", benifitRoutes );
app.use( "/api/testimonials", testimonialRoutes );
app.use( "/api/pricing", pricingRoutes );
app.use( "/api/faqs", faqRoutes );
app.use("/api/mycourses", myCourseRoutes);

// Port
const PORT = process.env.PORT || 5000

app.listen( PORT, () => {
    console.log( `Server running on port ${ PORT }` )
})
