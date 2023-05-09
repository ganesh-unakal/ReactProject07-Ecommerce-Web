import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Home = () =>{
    return (
      <Container>
        <h2 style={{textAlign : 'center', margin : '20px auto', fontFamily : 'fantasy', }}>TOURS</h2>
        <Table striped  hover style={{borderBottom: "20px"}} >
          <thead >
            <tr>
              <th>DATE</th>
              <th>LOCATION</th>
              <th>VISIT PLACES</th>
              <th>TICKETS</th>
            </tr>
          </thead>
          
          <tbody style={{width: "10px"}}>
           <tr>
              <td>JUL 16</td>
              <td>BNGLOR</td>
              <td>LAL BAAG</td>
              <button style={{backgroundColor: "#56CCF2", width: "100%", border: "none", padding: "7px", borderRadius: "5px", fontWeight:"700"}}>BUY TICKETS</button>
              </tr>
            <tr>
              <td>JUL 18</td>
              <td>KERLA</td>
              <td>Alappuzha</td>
              <button style={{backgroundColor: "#56CCF2", width: "100%", border: "none", padding: "7px", borderRadius: "5px", fontWeight:"700"}}>BUY TICKETS</button>
            </tr>
            <tr>
              <td>JUL 25</td>
              <td>UK</td>
              <td>Kedarnath</td>
              <button style={{backgroundColor: '#56CCF2', width: "100%", border: "none", padding: "7px", borderRadius: "5px", fontWeight:"700"}}>BUY TICKETS</button>
            </tr>
            <tr>
              <td>JUL 30</td>
              <td>UP</td>
              <td>Ayodya Ram Mandir</td>
              <button style={{backgroundColor: "#56CCF2", width: "100%", border: "none", padding: "7px", borderRadius: "5px", fontWeight:"700"}}>BUY TICKETS</button>
            </tr>
          </tbody>
        </Table>
      </Container>

    // <Container>
    //     <h2 style={{textAlign: "center" , fontFamily: "revert" , fontSize: "2rem"}}>
    //         TOURS
    //     </h2>


    // </Container>
    );
}

export default Home