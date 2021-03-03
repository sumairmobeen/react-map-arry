import logo from './logo.svg';
import './App.css';

function App() {

  // const pakistan = ["Karachi", "Lahore", "Islamabad", "Sukher", "KPK"]

  var Country = [
    {
      cityName: "karachi",
      Temp: "36C",
      Humdity: "66%",
      Prece: "hot weather"
    },

    {
      cityName: "Lahore",
      Temp: "25c",
      Humdity: "37",
      Prece: "Idol"
    },

    {
      cityName: "Islambad",
      Temp: "22c",
      Humdity: "28%",
      Prece: "chill"
    },

    {
      cityName: "Queta",
      Temp: "20c",
      Humdity: "78%",
      Prece: "chill"
    },

    {
      cityName: "KPK",
      Temp: "18c",
      Humdity: "56%",
      Prece: "chill"
    }
  ]

  return (


    <div className="container">

      <h1> CITY NAME </h1>
      <div className="main" style={{ display: "flex" }}>

        {Country.map((value, index) => {
          return <div className="main1" key={index}>

            <p>{value.cityName}</p>
            <p>{value.Temp}</p>
            <p>{value.Humdity}</p>
            <p>{value.Prece}</p>
          </div>
        }
        )}
      </div>

    </div>

  )
}
export default App;






//         {/* <h1>
//           {/* HELLO WORLD
//         </h1> */}
// {/* 
//      {pakistan.map((cities)=>{
//        return <>
//        <h1>
//        {cities}


//        </h1> */} */}
//        </>
//      })}

//         {/* <div>

//           {[<div key="1"> <h1>"karachi"</h1></div>, <div key="2"> <h1>"Lahore"</h1></div>, <div key="3"> <h1>"IslamABAD"</h1></div>]}
//         </div> */}

//         <h1>my web class</h1>
//       </header>
//     </div>
//   );
// }

// export default App;
