import axios from "axios";
import { toast } from "react-toastify";
const { VITE_BACKEND_URL } = import.meta.env;

export const axiosGetElement = (setTBody, setTError) => {
  axios
    .get(`${VITE_BACKEND_URL}/api/elements`)
    .then((info) => {
      // setTBody(null)
      setTBody(info.data);
    })
    .catch((err) => {
      console.log(err.response.data.error);
      setTError(err.response.data.error);
    });
};

export const axiosPostElement = (newElement) => {
  axios
    .post(`${VITE_BACKEND_URL}/api/element-client`, newElement)
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

export const axiosPutElement = (newState, _id) => {
  axios
    .put(`${VITE_BACKEND_URL}/api/elements/${_id}`, newState)
    .then((res) => {
      console.log("BUTTON edit:", res.data);
    })
    .catch((err) => {
      console.log(err.response.data.error);
    });
};

export const axiosDeleteElement = (id) => {
  axios
    .delete(`${VITE_BACKEND_URL}/api/elements/${id}`)
    .then((res) => {
      console.log("BUTTON delete:", res.data);
    })
    .catch((err) => {
      console.log(err.response.data.error);
    });
  axiosGetElement();
  toast.success(`Elemento ${id} eliminado`);
};
