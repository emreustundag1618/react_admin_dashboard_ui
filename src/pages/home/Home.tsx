import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
import LineChartBox from "../../components/lineChartBox/LineChartBox";
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data";
import BarChartBox from "../../components/barCharBox/BarChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2"><LineChartBox {...chartBoxUser}/></div>
      <div className="box box3"><LineChartBox {...chartBoxProduct} /></div>
      <div className="box box4">Box4</div>
      <div className="box box5"><LineChartBox {...chartBoxRevenue} /></div>
      <div className="box box6"><LineChartBox {...chartBoxConversion} /></div>
      <div className="box box7">Box7</div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit}/></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  )
}

export default Home
