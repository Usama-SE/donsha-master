import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import Householddata from "../data/householddata";
import Vitaminsdata from "../data/vitaminsdata";
import Medicinal from "../data/medicinal";
import ProductCard from "../components/ProductCard";
function Productdescription({ match }) {
  const pid = match.params.id;
  const [qval, setqval] = useState(0);

  const products = [...Householddata, ...Vitaminsdata, ...Medicinal];

  let data = [];
  if (pid >= 1 && pid <= 16) {
    data = Householddata;
  } else if (pid >= 17 && pid <= 32) {
    data = Medicinal;
  } else {
    data = Vitaminsdata;
  }
  var cur = products.filter((x) => x.id == pid)[0];
  const handlePrice = (g) => {
    if (g.id >= 33 && g.id <= 48) {
      return g.Bottle_Price + g.Case_price;
    } else {
      return g.Price;
    }
  };

  const inc = () => {
    qval += 1;
    alert(qval);
    setqval(qval);
  };
  const dec = () => {
    qval -= 1;
    setqval(qval);
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row" style={{ marginTop: 100 }}>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            <div className="row" style={{ height: 500 }}>
              <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
              <div
                className="col-11 col-sm-11 col-md-11 col-lg-11 border-none"
                style={{ maxHeight: "100%", display:"flex", justifyContent:"center", alignItems:"center" }}
              >
                <img
                  src={cur.image}
                  alt="Not Found"
                  className="img-fluid  rounded"
                  style={{ height: "100%", maxWidth: "100%" }}
                ></img>
              </div>
            </div>
            <div className="row" style={{ padding: 30 }}>
            <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>

              <div
                className="col-3 col-sm-3 col-md-3 col-lg-3 border-none"
                style={{ height: 150 }}
              >
                <img
                  src={cur.image}
                  alt="Not Found"
                  className="img-fluid  rounded"
                  style={{ height: "100%", maxWidth: "100%" }}
                ></img>
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
              <div
                className="col-3 col-sm-3 col-md-3 col-lg-3 border-none"
                style={{ height: 150 }}
              >
                <img
                  src={cur.image}
                  alt="Not Found"
                  className="img-fluid  rounded"
                  style={{ height: "100%", maxWidth: "100%" }}
                ></img>
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
              <div
                className="col-3 col-sm-3 col-md-3 col-lg-3 border-none"
                style={{ height: 150 }}
              >
                <img
                  src={cur.image}
                  alt="Not Found"
                  className="img-fluid  rounded"
                  style={{ height: "100%", maxWidth: "100%" }}
                ></img>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-sm-12 col-md-6 col-lg-6"
            style={{ padding: 30 }}
          >
            <h2>{cur.title}</h2>

            <div>
              <p
                className="bg-light text-secondary border"
                style={{ padding: 20 }}
              >
                {cur.description ? (
                  cur.description
                ) : (
                  <i>
                    Description: Fusce rhoncus eget libero ut grabida. Etiam
                    vulputate libero vitae leo conseectetur, feugiat vivara dui
                    faucibus. Ut ullamcoprer lacus ac prota elefiend. Quisquie a
                    mauris alliquam, tincidun elit ut, consequant metur. Eivamus
                    congue euasmiod jisto, a lobortois purius posiure non.
                  </i>
                )}
                <br />
                <br />
                Price:{handlePrice(cur)}
                <br />
                <br />
                Ratings
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> 4.5
              </p>
            </div>
            <div className="quantity">
              <button
                onClick={() => {
                  document.getElementById("qi").value = qval - 1;
                  setqval(qval - 1);
                }}
              >
                -
              </button>
              <input
                type="number"
                value={qval}
                id="qi"
                min={0}
                style={{ width: 40, textAlign: "center", }}
              />
              <button
                onClick={() => {
                  document.getElementById("qi").value = qval + 1;
                  setqval(qval + 1);
                }}
              >
                +
              </button>
            </div>
            <div style={{ padding: 20 }}>
              <button
                className="borderbtn"
                style={{
                  border: 2,
                  backgroundcolor: "white",
                  height: 50,
                  width: 150,
                }}
              >
                Add to cart <BiCart style={{ fontSize: 20, marginleft: 8 }} />
              </button>
              <button
                className="text-light borderbtn"
                style={{ border: 2, height: 50, width: 150, backgroundColor:"#0000ff ",  }}
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginLeft: "10%",
          marginRight: "10%",
          marginTop:"50px",
          flexWrap: "wrap",
          minHeight: "300px",
          gap: 10,
        }}
      >
        {data.map((s) => (
          <ProductCard
            id={s.id}
            title={s.title}
            img={s.image}
            categ={s.category}
          />
        ))}
      </div>
    </div>
  );
}

export default Productdescription;