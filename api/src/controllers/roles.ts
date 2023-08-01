import { IRoles } from "interfaces/IRoles";
import Roles from "../models/Roles";

export const getRoleByName = async (role: IRoles) => {
  try {

    const rol = await Roles.findOne({
      where: {
        name: role.name,
      },
    });
    if (!role) return false;

    return rol;
  } catch (error) {
    console.log(error)
  }
};
