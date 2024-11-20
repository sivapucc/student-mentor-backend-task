import express from "express";
import {
  editMentor,
  addStudentToMentor,
  getAllStudents,
  getAllMentors,
  getStudentById,
  getMentorById,
  insertNewMentor,
  insertNewStudent,
} from "../controlers/Student.js";

const router = express.Router();

//get all students data

router.get("/all", async (req, res) => {
  try {
    const std = await getAllStudents(req);
    if (!std) {
      res.status(400).json({ data: "User not found" });
    } else {
      res.status(200).json({ data: std });
    }
  } catch (error) {
    res.status(500).json({ data: "internal server error" });
    console.log(error);
  }
});

//get all mentors datas

router.get("/mentor/all", async (req, res) => {
  try {
    const std = await getAllMentors(req);

    if (!std) {
      res.status(400).json({ data: "User not found" });
    } else {
      res.status(200).json({ data: std });
    }
  } catch (error) {
    res.status(500).json({ data: "internal server error" });
    console.log(error);
  }
});

// get particular student data

router.get("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const std = await getStudentById(id);
    if (!std) {
      res.status(400).json({ data: "User not found" });
    } else {
      res.status(200).json({ data: std });
    }
  } catch (error) {
    res.status(500).json({ data: "internal server error" });
    console.log(error);
  }
});

//get particular mentor data

router.get("/mentor/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const std = await getMentorById(id);
    if (!std) {
      res.status(400).json({ data: "User not found" });
    } else {
      res.status(200).json({ data: std });
    }
  } catch (error) {
    res.status(500).json({ data: "internal server error" });
    console.log(error);
  }
});

// Insert new student data

router.post("/add/student", async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      res.status(400).json({ data: "no data not given..." });
    }
    const result = await insertNewStudent(data);
    res.status(200).json({ data: "sucessfully Added...", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "internal server error" });
  }
});

// Insert new mentor data

router.post("/add/mentor", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    if (!data) {
      res.status(400).json({ data: "no data not given..." });
    }

    const result = await insertNewMentor(data);
    res.status(200).json({ data: "sucessfully Added...", result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "internal server error" });
  }
});

//update student data

router.put("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const std = await getMentorById(id);
    const newData = req.body;
    if (!std || !newData) {
      res.status(400).json({ data: "please specify valid data" });
    }
    const results = await addStudentToMentor(id, newData);
    res.status(200).json({ data: "sucessfully Updated...", result: results });
  } catch (error) {
    res.status(500).json({ data: "internal server error" });
  }
});

// Change mentor
router.put("/editmentor/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!id || !data) {
      res.status(400).json({ data: "please specify valid data" });
    }
    const result = await editMentor(id, data);
    res.status(200).json({ data: "sucessfully Updated...", result: results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: "internal server error" });
  }
});
export const studentsRouter = router;
