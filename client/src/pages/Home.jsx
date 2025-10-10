// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
import { useSelector } from "react-redux"; // ✅ added to get currentUser

// ✅ styled component for layout
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const { currentUser } = useSelector((state) => state.user); // ✅ get logged-in user

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // ✅ choose endpoint depending on type
        const endpoint =
          type === "trend"
            ? "/videos/trend"
            : type === "sub"
            ? "/videos/sub"
            : "/videos/random";

        const res = await axios.get(endpoint);
        setVideos(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchVideos();
  }, [type]);

  // ✅ filter out logged-in user’s own videos ONLY for subscriptions
  const me = currentUser?._id;
  const feed =
    type === "sub"
      ? videos.filter((v) => String(v.userId) !== String(me))
      : videos;

  return (
    <Container>
      {feed.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;