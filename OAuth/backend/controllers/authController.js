import axios from "axios";





export const googleLogin = (req, res) => {
  console.log("Google login route hit");

  const url =
    `https://accounts.google.com/o/oauth2/v2/auth` +
    `?client_id=${process.env.CLIENT_ID}` +
    `&redirect_uri=http://localhost:5000/auth/google/callback` +
    `&response_type=code` +
    `&scope=openid email profile`;

  console.log(url);

  res.redirect(url);
};


// export const googleCallback = (req, res) => {
//   console.log(req.query);

//   res.send("Callback received");
// };


export const googleCallback = async (req, res) => {
  try {
    const { code } = req.query;

    const response = await axios.post(
      "https://oauth2.googleapis.com/token",
      {
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: "http://localhost:5000/auth/google/callback",
        grant_type: "authorization_code",
      }
    );

    const accessToken = response.data.access_token;

    const profileResponse = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log("User Profile:");
    console.log(profileResponse.data);

    res.json(profileResponse.data);
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      error: "Token exchange failed",
    });
  }
};