# Employee Tracker

## Description

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```
## Table of Contents
- [Usage](#usage)
- [Database schema](#DatabaseSchema)
- [License](#license)
- [Questions](#Questions)
- [Demo](#Demo)

## Usage

The application allows the user to:

- Add departments, roles, employees

- View departments, roles, employees

- Update employee roles

- Update employee managers

- View employees by manager

- Delete departments, roles, and employees

- View the total utilized budget of a department -- ie the combined salaries of all employees in that department

## DatabaseSchema

- **department**:

  - **id** - INT PRIMARY KEY
  - **name** - VARCHAR(30) to hold department name

- **role**:

  - **id** - INT PRIMARY KEY
  - **title** - VARCHAR(30) to hold role title
  - **salary** - DECIMAL to hold role salary
  - **department_id** - INT to hold reference to department role belongs to

- **employee**:

  - **id** - INT PRIMARY KEY
  - **first_name** - VARCHAR(30) to hold employee first name
  - **last_name** - VARCHAR(30) to hold employee last name
  - **role_id** - INT to hold reference to role employee has
  - **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager

## License

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
© Licensed under the Apache License 2.0

## Questions

Contact me:

- GitHub: [stamm2911](https://github.com/stamm2911)

- Email: edstamm29@gmail.com

## Demo
https://drive.google.com/file/d/1L8pwceKU6ADdc2WAPtxPZgRsnyugIWbU/view
