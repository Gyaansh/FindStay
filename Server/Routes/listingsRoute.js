import express from "express";
import multer from "multer";
import sharp from "sharp";

import listings from "../Controllers/listings.js";
import newListing from "../Controllers/newListing.js";
import getListingByid from "../Controllers/getListingById.js";
import addReview from "../Controllers/addReview.js";
import wrapAsync from "../Utils/wrapAsync.js";
import { schemaValidator, reviewValidator } from "../Models/Validator.js";
import isLoggedIn from "../Utils/isLoggedIn.js";
import updateListing from "../Controllers/updateListing.js";
import isOwner from "../Utils/isOwner.js";
import deleteListing from "../Controllers/deleteListing.js";

import fs from "fs";
import cloudinary from "../Utils/cloudConfig.js";
const Router = express.Router();
const upload = multer({ dest: "./Uploads/" });

Router.get("/", wrapAsync(listings));
// Router.post("/newlisting", isLoggedIn, schemaValidator, wrapAsync(newListing));
Router.post("/newlisting", upload.array("images", 15), async (req, res) => {
  try {
    let imageUrls = [];

    for (let file of req.files) {
      console.log("Uploading:", file.path);

      const compressedPath = file.path + "-compressed.jpg";

      await sharp(file.path)
        .resize(1200) // resize width
        .jpeg({ quality: 70 })
        .toFile(compressedPath);

      const result = await cloudinary.uploader.upload(compressedPath);

      console.log("Uploaded:", result.secure_url);

      imageUrls.push(result.secure_url);
    }

    res.json({ success: true, images: imageUrls });
  } catch (err) {
    console.error("Cloudinary ERROR:", err);
    res.status(500).json({ message: "Upload failed" });
  }
});
// Handle specific listing routes
Router.get("/:id", wrapAsync(getListingByid));

// Route to add a review for a specific listing, with input validation
Router.post("/:id/reviews", isLoggedIn, reviewValidator, wrapAsync(addReview));

Router.put(
  "/edit/:id",
  isOwner,
  schemaValidator,
  isLoggedIn,
  wrapAsync(updateListing),
);

Router.delete("/delete/:id", isOwner, isLoggedIn, deleteListing);

export default Router;
