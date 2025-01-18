import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./Dashboard.css";

export function Dashboard() {
    const crops = useSelector((state: RootState) => state.crop.length);
    const vehicles = useSelector((state: RootState) => state.vehicle.length);
    const equipments = useSelector((state: RootState) => state.equipment.length);
    const staff = useSelector((state: RootState) => state.staff.length);

    const data = [
        { name: "Crops", value: crops },
        { name: "Vehicles", value: vehicles },
        { name: "Equipments", value: equipments },
        { name: "Staff", value: staff },
    ];

    return (
        <div className="container-fluid py-2">
            <div className="row welcome-section">
                <div className="col-12 text-center">
                    <h3 className="mb-0 h4 font-weight-bolder">Green Shadow PVT-LTD.</h3>
                    <p className="mb-4">

                    </p>
                </div>
            </div>

            <section className="bar-chart">
                <BarChart
                    width={600}
                    height={515}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis domain={[0, 100]}/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="value" fill="#82ca9d"/>
                </BarChart>
            </section>
        </div>
    );
}