import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let checkToken = localStorage.getItem("access_token");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    const fetchUserProfile = async () => {
      try {
        if (!code) {
          console.log("Error receiving code from oauth");
          setError("Authorization code not found");
          setLoading(false);
          return;
        }

        const tokenResponse = await axios.post(
          "https://secure.splitwise.com/oauth/token",
          {
            client_id: import.meta.env.VITE_SPLITWISE_CONSUMER_KEY,
            client_secret: import.meta.env.VITE_SPLITWISE_CONSUMER_SECRET,
            redirect_uri: import.meta.env.VITE_SPLITWISE_REDIRECT_URI,
            grant_type: "authorization_code",
            code,
          }
        );
        if (tokenResponse.data.access_token !== undefined) {
          localStorage.setItem("access_token", tokenResponse.data.access_token);
        }
        const splitwisebearer =
          "Bearer " + localStorage.getItem("access_token");
        const userResponse = await axios.get(
          "https://secure.splitwise.com/api/v3.0/get_current_user",
          {
            headers: { Authorization: splitwisebearer },
          }
        );

        const person = userResponse.data?.user;
        console.log(person)
        if (person) {
          setProfile(person);
          console.log("Data received successfully");
        } else {
          console.error("Invalid Token");
          setError("Invalid Token");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
        setError("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
</div>

    );
  }

  if (error) {
    return (
      <div className="App">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="App">
      {profile ? (
        <section className="pt-4 bg-blueGray-50">
          <div className="w-full lg:w-4/12 px-4 mx-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-4">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 flex justify-center">
                    <div className="relative">
                      <img
                        className="rounded-full"
                        alt="..."
                        src={profile.picture.large}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-semibold leading-normal text-blueGray-700 mb-2">
                    {profile.first_name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-400">
                    {profile.email}
                  </div>
                </div>
                <div className="mt-4 py-6 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <a
                        onClick={()=>navigate("/")}
                        className=" text-primary font-semibold text-xl cursor-pointer"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p>Failed to load profile. Please check your access token.</p>
      )}
    </div>
  );
};

export default Home;
