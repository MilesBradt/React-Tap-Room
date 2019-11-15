import React from "react";
import { Link } from 'react-router-dom';
import Inventory from './Inventory'
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../css/global.css";

function Employee() {
    return (
        <div>
            <p>Employee works</p>
            <Inventory/>
        </div>
    );
}


export default Employee;