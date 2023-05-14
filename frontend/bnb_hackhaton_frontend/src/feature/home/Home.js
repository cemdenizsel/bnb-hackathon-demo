import axios from "axios";
import React, { useEffect, useState } from "react";
import {Row, Col} from 'react-bootstrap';

const Home = () =>{
    const [res,setRes] = useState("Wait....");
    const getUniswapValues = useEffect(()=>{
        async function fetchData() {
            let instanceOfAxious = axios.create();
            instanceOfAxious.interceptors.request.use(
                function(config) {
                    config.headers["Access-Control-Allow-Origin"] =  "*";
                    return config;
                },
                function(error) {
                    return Promise.reject(error);
                }
            );
            let path = "http://localhost:8080/uniswap/yield/values/usdc-usdt"
            setRes((await instanceOfAxious.get(path)).data);

        }
        fetchData();
    },[]);

    return (
        <React.Fragment >
            <Row className="mx-5" style={{marginTop:"100px"}}>
                <h1>Lets trade</h1>
                <div>
                    {res}
                </div>
            </Row>
        </React.Fragment>
    )
}

export default Home;