import React from "react";
import Inventory from './Inventory'
import styles from "../css/global.css";
import employeeStyles from "../css/employee.css";
import propTypes from 'prop-types';

function Employee(props) {
    return (
        <div id="employeeComponent">
                <Inventory
                employee={props.employee}
                coffeeList={props.coffeeList}
                itemSubtract={props.itemSubtract}
                />
        </div>
    );
}

Employee.propTypes = {
    stockList: propTypes.array,
    employee: propTypes.bool,
    itemSubtract: propTypes.func
}

export default Employee;