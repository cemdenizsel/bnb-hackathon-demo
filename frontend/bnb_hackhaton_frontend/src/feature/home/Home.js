import axios from "axios";
import React, { useEffect, useState } from "react";
import {Row, Col} from 'react-bootstrap';

const Home = () =>{
    const [resUniswap,setResUniswap] = useState("Wait for uniswap....");
    const [resPancake,setPancake] = useState("Wait for pancake....");
    const getUniswapValues = useEffect(()=>{
        async function fetchDataForUniswap() {
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
            setResUniswap((await instanceOfAxious.get(path)).data);
        }
        async function fetchDataForPancake() {
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
            let path = "http://localhost:8080/pancake"
            setPancake((await instanceOfAxious.get(path)).data);
        }
        fetchDataForUniswap();
        fetchDataForPancake();
    },[]);

    return (
        <React.Fragment >
            <Row className="mx-5" style={{marginTop:"100px"}}>
                <h1>Lets trade</h1>
                <div>
                    {resUniswap}
                    <hr/>
                    {resPancake}
                </div>
            </Row>
        </React.Fragment>
    )
}

export default Home;