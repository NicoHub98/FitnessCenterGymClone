import axios from "axios";
import { toast } from "react-toastify";

export const axiosGet = async (setTBody, setTError, type) => {
  try {
    const { data } = (await axios(`/api/${type}`))
    // console.log("GET:", data)
    setTBody(data)
  } catch (error) {
    console.log(error.response.data);
    setTError(error.response.data.error);
  }
}

export const axiosPost = async (newElement, type) => {
  try {
    const { data } = (await axios.post(`/api/${type}`, newElement))
    console.log("POST:", data)
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    toast.success("Nuevo elemento agregado");
  } catch (error) {
    console.log(error)
  }
};

export const axiosPut = async (newElementEdited, _id, type) => {
  try {
    const { data } = (await axios.put(`/api/${type}/${_id}`, newElementEdited))
    console.log("EDIT:", data)
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    console.log(error)
  }
};

export const axiosDelete = async (id, type) => {
  try {
    const { data } = (await axios.delete(`/api/${type}/${id}`))
    console.log("DELETE:", data)
    toast.success(`Proveedor: ${data.deleted.name.toUpperCase()}, eliminado`);
  } catch (error) {
    // console.log(error.response.data.error);
    console.log(error);
  }
};