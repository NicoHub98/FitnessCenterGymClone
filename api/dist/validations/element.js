"use strict";
// import { IElements, State } from "../interfaces/IElements";
// const isString = (string: string): boolean => {
//   return typeof string === "string";
// }
// // const parseName = (nameRequest: any): string => {
// const parseName = (nameRequest: string): string => {
//   if (!isString(nameRequest) || nameRequest.length < 1) {
//     throw new Error(`Incorrect or missing name`);
//     // throw `Incorrect or missing name`;
//   }
//   return nameRequest;
// }
// const parseType = (typeRequest: any): string => {
//   if (!isString(typeRequest)) {
//     throw new Error(`Incorrect or missing type`);
//     // throw `Incorrect or missing type`;
//   }
//   return typeRequest;
// }
// const parseDescription = (descriptionRequest: any): string => {
//   if (!isString(descriptionRequest) || descriptionRequest.length < 11) {
//     throw new Error(`Incorrect or missing description`);
//     // throw `Incorrect or missing description`;
//   }
//   return descriptionRequest;
// }
// const isNumber = (number: number): boolean => {
//   return typeof number === "number";
// }
// const parsePrice = (priceRequest: any): number => {
//   console.log("priceRequest:", priceRequest)
//   console.log("priceRequest:",typeof priceRequest)
//   if (!isNumber(priceRequest)) {
//     throw new Error(`Incorrect or missing price`);
//     // throw `Incorrect or missing price`;
//   }
//   return priceRequest;
// }
// const parseYear = (yearRequest: any): number => {
//   console.log("yearRequest:", yearRequest)
//   console.log("yearRequest:",typeof yearRequest)
//   if (!isNumber(yearRequest)) {
//     throw new Error(`Incorrect or missing year`);
//     // throw `Incorrect or missing year`;
//   }
//   return yearRequest;
// }
// const isState = (paramState: any): boolean => {
//   // console.log("paramState:", paramState)
//   // console.log("paramState:",typeof paramState)
//   return Object.values(State).includes(paramState);
// }
// const parseState = (stateRequest: any): State => {
//   // console.log("stateRequest:", stateRequest)
//   // console.log("stateRequest:",typeof stateRequest)
//   if (!isString(stateRequest) || !isState(stateRequest)) {
//     throw new Error(`Incorrect or missing state`);
//     // throw `Incorrect or missing state`;
//   }
//   return stateRequest;
// }
// export const createElement = (object: any): IElements => {
//   const newElement: IElements = {
//     name: parseName(object.name),
//     type: parseType(object.type),
//     description: parseDescription(object.description),
//     price: parsePrice(object.price),
//     // date: parseYear(object.date),
//     state: parseState(object.state),
//   }
//   return newElement;
// }
