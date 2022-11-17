import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components"

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#3C4048" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />}></Route>
          <Route path="/video/:id" element={<VideoDetail />}></Route>
          <Route path="/channel/:id" element={<ChannelDetail />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}