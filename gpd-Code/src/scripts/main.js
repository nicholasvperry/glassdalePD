 
import { OfficerList } from "./officers/OfficerList.js";

import {CriminalList} from "./criminals/CriminalList.js";

import {FacilityList} from "./facilities/FacilityList.js"

import { NoteForm } from "./notes/NoteForm.js";

import {NoteList} from "./notes/NoteList.js"

import {ConvictionSelect} from "./Conviction/ConvictionSelect.js"

import {officerSelect} from "./officers/OfficerDataProvider.js"

NoteForm()





const darkModeButton = document.querySelector("#dark-mode")

darkModeButton.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList.toggle("dark-background")
  })


const criminialBackround = document.querySelector("#criminals-nav-link")

criminialBackround.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList = "criminal-background"
  })
  
const officerBackround = document.querySelector("#officers-nav-link")

officerBackround.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList = "officer-background"
  })

const facilityBackround = document.querySelector("#facilitiesnav-link")
  
facilityBackround.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList = "facility-background"
  })

const notesBackround = document.querySelector("#notes-nav-link")
  
notesBackround.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList = "notes-background"
  })
