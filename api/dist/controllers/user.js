"use strict";
// import { Request, Response } from "express"
// import { IUser, Rol } from '../interfaces/IAdmin';
// import { passwordHashado, passwordCorrecto } from '../helper/bcrypt';
// import { generarToken } from "../helper/JWToken"
// import { ClassGroup, Elements, Provider, User, Expense } from '../models/relations';
// import Google from "../models/Google";
// import { IGoogle } from "../interfaces/IGoogle";
// export const allUsers = async () => {
//   try {
//     let modelGoogle = await Google.findAll();
//     modelGoogle = JSON.parse(JSON.stringify(modelGoogle));
//     let unionModel: (IGoogle | IUser)[] = [];
//     modelGoogle.map((el: IGoogle) => {
//       return unionModel.push({
//         "id": "",
//         "user": el.name,
//         "email": el.email,
//         "password": "",
//         "plan": "",
//         "dateIn": "",
//         "dateOut": "",
//         "contact": "",
//         "occupation": "",
//         // "rol": null,
//       });
//     });
//     let modelUser = await User.findAll();
//     modelUser = JSON.parse(JSON.stringify(modelUser));
//     console.log("MODELS:", modelUser)
//     // unionModel = modelUser.concat(unionModel)
//     unionModel = [...modelGoogle, ...modelUser]
//     return unionModel
//   } catch (error) {
//     console.log("ERROR:", error)
//   }
// }
