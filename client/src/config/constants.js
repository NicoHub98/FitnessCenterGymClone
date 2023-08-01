import {
  
  MdOutlineBrowseGallery,
  MdOutlineCalendarMonth,
  MdOutlineCurrencyExchange,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";

export const menus = [
  { name: "Perfil administrador", link: "/home/admin", icon: AiOutlineUser,description:"Datos" },
  { name: "Bienes", link: "/home/bienes", icon: FiMessageSquare,description:"Maquinas, elementos, mobiliario" },
  { name: "Staff", link: "/home/staff", icon: TbReportAnalytics,description:"Profesores, encargados, personal" },
  { name: "Clientes", link: "/home/clientes", icon: FiFolder,description:"Datos clientes" },
  { name: "Proveedores", link: "/home/proveedores", icon: FiShoppingCart,description:"Datos y pedidos" },
  { name: "Horarios", link: "/home/horarios", icon: MdOutlineBrowseGallery,description:"Horarios semanales" },
  { name: "Clases grupales", link: "/home/clasesgrupales", icon: MdOutlineCalendarMonth,description:"Reservas del día" },
  { name: "Gastos", link: "/home/gastos", icon: MdOutlineCurrencyExchange,description:"Ingresos, egresos, gastos fijos" },
];