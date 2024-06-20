// [Node.js] Express RESTFul API 서버 만들기

// HTTP URI(Uniform Resource Identifier)를 통해 데이터(자원)를 명시하고 
// Method(GET, POST, PUT, DELETE)를 통해 해당 데이터를 CRUD(Create, Read, Update, Delete)을 한다

//express 모듈 불러오기
const express = require("express");

//express 사용
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//임시 데이터
const users = [
 { id: 1, name: "유저1" },
 { id: 2, name: "유저2" },
 { id: 3, name: "유저3" }
];

/**
 * 파라미터 변수 뜻
 * req : request 요청
 * res : response 응답
 */



app.get("/", (req, res) => {

    res.send("Hello World");

}); // http://localhost:3000/ 로 접속하면 Hello World 데이터 반환


app.get("/api/users", (req, res) => {

    res.json({ok: true, users: users});
}) // http://localhost:3000/api/users 로 접속하면 유저 정보 반환

// http listen port 생성 서버 실행
app.listen(3000, () => console.log("Server Open"));