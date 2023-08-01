import axios from "axios";
import { toast } from "react-toastify";
const { VITE_BACKEND_URL } = import.meta.env;

export const axiosGetProviders = (setTBody, setTError) => {
  axios(`${VITE_BACKEND_URL}/api/providers`)
    .then(info => {
      setTBody(info.data)
    })
    .catch(err => {
      console.log(err.response.data.error);
      setTError(err.response.data.error)
    });
}

export const axiosPostProvider = (newElement) => {
  axios
    .post(`${VITE_BACKEND_URL}/api/provider`, newElement)
    .then((res) => {
      console.log("BUTTON ADD:", res.data);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    })
    .catch((err) => {
      console.log(err.response.data.error);
    });
};

export const axiosDeleteProvider = (id, type) => {
  axios
    .delete(`${VITE_BACKEND_URL}/api/${type}/${id}`)
    .then((res) => {
      console.log("BUTTON delete:", res.data);
    })
    .catch((err) => {
      console.log(err.response.data.error);
    });
  axiosGetProviders();
  toast.success(`Proveedor ${id} eliminado`);
};