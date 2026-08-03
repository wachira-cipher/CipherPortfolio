import mongoose from "mongoose";
import dotenv from "dotenv";

import connectDB from "../config/db.js";


import seedServices from "./serviceSeeder.js";
import seedStats from "./statSeeder.js";
import seedSkills from "./skillSeeder.js";
import seedPortfolios from "./portfolioSeeder.js";
import seedTestimonials from "./testimonialSeeder.js";



dotenv.config();



const runSeeders = async () => {

    try {


        await connectDB();


        console.log("🌱 Starting database seeding...");



        await seedServices();

        console.log("✅ Services seeded");



        await seedStats();

        console.log("✅ Stats seeded");



        await seedSkills();

        console.log("✅ Skills seeded");



        await seedPortfolios();

        console.log("✅ Portfolios seeded");



        await seedTestimonials();

        console.log("✅ Testimonials seeded");



        console.log("🎉 All seeders completed successfully");



        await mongoose.connection.close();


        process.exit(0);



    } catch (error) {


        console.error(
            "❌ Seeder failed:",
            error.message
        );


        await mongoose.connection.close();


        process.exit(1);

    }

};



runSeeders();