const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

app.use(cors());
app.set("view engine", "ejs");

const homeRaw = fs.readFileSync("home.json");
const home = JSON.parse(homeRaw);
app.get("/home", (req, res) => {
  res.json(home);
});

const organizersRaw = fs.readFileSync("organizing_comitee.json");
const organizers = JSON.parse(organizersRaw);
app.get("/organizers", (req, res) => {
  res.json(organizers);
});

const scientificComiteeRaw = fs.readFileSync("scientific_comitee.json");
const scientificComitee = JSON.parse(scientificComiteeRaw);
app.get("/comitee", (req, res) => {
  res.json(scientificComitee);
});

const participantsRaw = fs.readFileSync("participants.json");
const participants = JSON.parse(participantsRaw);
app.get("/participants", (req, res) => {
  res.json(participants);
});

const speakersRaw = fs.readFileSync("speakers.json");
const speakers = JSON.parse(speakersRaw);
app.get("/speakers", (req, res) => {
  res.json(speakers);
});

const imagesRaw = fs.readFileSync("images.json");
const images = JSON.parse(imagesRaw);
app.get("/images", (req, res) => {
  res.json(images);
});

app.get("/general-info", (req, res) => {
  res.render("general-info");
});

app.get("/accomodation", (req, res) => {
  res.render("accomodation");
});

app.listen(3010, () => {
  console.log("Listening on port 3010...");
});
