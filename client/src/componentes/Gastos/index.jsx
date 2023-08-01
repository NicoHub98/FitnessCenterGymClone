import Title from "../Title";
import iconDelete from "../../assets/imgs/delete.png";
import iconEdit from "../../assets/imgs/edit.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ChartComponent from "./Grafico";
import ModalGastos from "./Modal";
import ModalDos from "./ModalDos";
import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Gastos = () => {
  const [gastos, setGastos] = useState([]);
  const [totalGastado, setTotalGastado] = useState([]);
  const [ingresos, setIngresos] = useState([]);

  const incorporateExpense = (x) => {
    setGastos((prevGastos) => [...prevGastos, x]);
  };

  const incorporateIncome = (x) => {
    setIngresos((prevIncomes) => [...prevIncomes, x]);
  };

  useEffect(() => {
    axios
      .get(`/api/expenses`)
      .then((res) => {
        setGastos(res.data.expenses);
        setTotalGastado(res.data.gastos);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/api/income`)
      .then((res) => {
        setIngresos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const getTotalIncome = () => {
    return ingresos.reduce((total, row) => total + parseInt(row.income), 0);
  };

  const handleDeleteExpenses = (id) => {
    axios.delete(`/api/expense/${id}`)
      .then(res => console.log("DELETE:", res.data))
      .catch(error => console.log(error));

    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  const handleDeleteIncome = (id) => {
    axios.delete(`/api/income/${id}`)
      .then(res => console.log("DELETE:", res.data))
      .catch(error => console.log(error));

    setTimeout(() => {
      window.location.reload();
    }, 500);
  }

  return (
    <div className="mx-auto h-full">
      <div className="mt-[20px]">
        <Title title={"Gastos"} />
      </div>

      <div className="sm:mx-auto md:float-right">
        <Grid container alignItems="center" justifyContent="flex-center">
          <Grid item xs={12} md={6}>
            <ChartComponent />
          </Grid>
        </Grid>
      </div>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <TableContainer>
            <Table
              sx={{ minWidth: 100 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "blue" }}>
                    Gastos Mensuales
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {gastos.map((gasto) => (
                  <TableRow
                    key={gasto.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {gasto.name}
                    </TableCell>

                    <TableCell align="right">
                      <b className="text-pallete-lightgrey" >{gasto.expense}</b>{" "}
                    </TableCell>
                    <TableCell className="text-right">
                      {/* <img
                        src={iconEdit}
                        className="w-[15px] h-[15px] cursor-pointer"
                      ></img> */}
                    </TableCell>
                    <TableCell className="text-right">
                      <button onClick={() => handleDeleteExpenses(gasto.id)} >
                        <img
                          src={iconDelete}
                          className="w-[15px] h-[15px] cursor-pointer"
                        ></img>
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <b>Total</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>{totalGastado}</b>
                  </TableCell>
                  <TableCell className="text-right"></TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="text-center mt-[20px]">
              <ModalGastos
                title={"Agregar Gastos Mensuales"}
                setGastoNuevo={incorporateExpense}
              />
            </div>
          </TableContainer>
        </Grid>

        <Grid item xs={12} md={6}>
          <TableContainer className="mb-5">
            <Table
              sx={{ minWidth: 100 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "blue", whiteSpace: "nowrap" }}>
                    Ingresos Mensuales
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ingresos.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">
                      <b className="text-teal-400">{row.income}</b>
                    </TableCell>
                    <TableCell className="text-right">
                      {/* <img
                        src={iconEdit}
                        className="w-[15px] h-[15px] cursor-pointer"
                      ></img> */}
                    </TableCell>
                    <TableCell className="text-right">
                      <button onClick={() => handleDeleteIncome(row.id)} >
                        <img
                          src={iconDelete}
                          className="w-[15px] h-[15px] cursor-pointer"
                        ></img>
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <b>Total</b>
                  </TableCell>
                  <TableCell align="right">
                    <b>{getTotalIncome()}</b>
                  </TableCell>
                  <TableCell className="text-right"></TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="text-center mt-[20px]">
              <ModalDos setIncomeNuevo={incorporateIncome} />
            </div>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Gastos;
