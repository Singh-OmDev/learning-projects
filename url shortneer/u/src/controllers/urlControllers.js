import shortid from "shortid";
import Url from "../models/urlSchema.js";

export const createShortId = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl) {
      return res.status(400).json({
        success: false,
        message: "originalUrl is required",
      });
    }

    const shortCode = shortid.generate();

    const url = await Url.create({
      originalUrl,
      shortCode,
    });

    res.status(201).json({
      success: true,
      message: "Short URL created successfully",
      data: {
        ...url.toObject(),
        shortUrl: `${req.protocol}://${req.get("host")}/${shortCode}`,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while creating short URL",
      error: error.message,
    });
  }
};

export const redirectToOriginalUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (!url) {
      return res.status(404).json({
        success: false,
        message: "Short URL not found",
      });
    }

    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while redirecting",
      error: error.message,
    });
  }
};

  export const countClicks = async (req, res)=> {
     try {
       const { shortCode } = req.params;

        const url = await Url.find
One({ shortCode });

        if (!url) {
          return res.status(404).json({
            success: false,
            message: "Short URL not found",
          });
        }

        url.clicksCount += 1;
        await url.save();

        res.status(200).json({
          success: true,
          message: "Click count updated",
          data: {
            shortCode,
            clicksCount: url.clicksCount,
          },
        });
     }
      catch (error){
        res.status(500).json({  
          success: false,
          message: "Error while counting clicks",
          error: error.message,
        });
        
      }

  }
