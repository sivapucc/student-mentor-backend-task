import { ObjectId } from "../db.js";
import { client } from "../db.js";
//get all students data

export async function getAllStudents(req) {
  return client.db("zenclass").collection("students").find().toArray();
}

//get all mentors data

export async function getAllMentors(req) {
  return client.db("zenclass").collection("mentors").find().toArray();
}

//get student by id

export async function getStudentById(id) {
  return client
    .db("zenclass")
    .collection("students")
    .findOne({ _id: new ObjectId(id) });
}

//get mentor by id

export async function getMentorById(id) {
  return client
    .db("zenclass")
    .collection("mentors")
    .findOne({ _id: new ObjectId(id) });
}

//Insert new student data

export async function insertNewStudent(req) {
  return client.db("zenclass").collection("students").insertOne(req);
}

//Insert new mentor data

export async function insertNewMentor(req) {
  return client.db("zenclass").collection("mentors").insertOne(req);
}

//Asign a student to mentor

export async function addStudentToMentor(id, data) {
  return client
    .db("zenclass")
    .collection("mentors")
    .updateOne({ _id: new ObjectId(id) }, { $push: { students: data } });
}

// Change mentor

export async function editMentor(id, data) {
  return client
    .db("zenclass")
    .collection("students")
    .findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: data },
      { returnDocument: "after" }
    );
}
