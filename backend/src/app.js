import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";




// Routes
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";




// Load environment variables
dotenv.config();



const app = express();


// ===============================
// Middleware
// ===============================


app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        credentials: true
    })
);



app.use(
    express.json()
);



app.use(
    express.urlencoded({
        extended: true
    })
);


app.use(
    "/uploads",
    express.static(
        path.join(process.cwd(), "uploads")
    )
);


// ===============================
// API Routes
// ===============================



// Authentication

app.use(
    "/api/auth",
    authRoutes
);



// Profile

app.use(
    "/api/profile",
    profileRoutes
);



// Services

app.use(
    "/api/services",
    serviceRoutes
);



// Portfolio

app.use(
    "/api/portfolio",
    portfolioRoutes
);



app.use(
    "/api/skill",
    skillRoutes
);

app.use(
    "/api/resume",
    resumeRoutes
);


app.use(

    "/api/testimonial",

    testimonialRoutes

);


// ===============================
// Health Check
// ===============================


app.get(
    "/",
    (req, res) => {

        res.json({
            message: "CipherPortfolio API running 🚀"
        });

    }
);





// ===============================
// 404 Handler
// ===============================


app.use(
    (req, res) => {

        res.status(404).json({

            success: false,
            message: "API endpoint not found"

        });

    }
);






// ===============================
// Global Error Handler
// ===============================


app.use(
    (err, req, res, next) => {


        console.error(err.stack);


        res.status(
            err.status || 500
        )
            .json({

                success: false,
                message:
                    err.message || "Server Error"

            });


    }
);





export default app;