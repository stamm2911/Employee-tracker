DROP DATABASE IF EXISTS employee_trackerDB;

-- CREATES DB------------------------
CREATE database employee_trackerDB;

USE employee_trackerDB;

-- CREATES DEPARTMENTS TABLE------------
CREATE TABLE department(
	idDepartment INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

-- CREATES ROLES TABLE------------
CREATE TABLE role (
    idRole INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_Dep INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary INTEGER(10) NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (id_Dep) REFERENCES department(idDepartment) ON DELETE CASCADE
);

-- CREATES EMPLOYEES TABLE------------
CREATE TABLE employee (
    idEmployee INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_Rol INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    id_Mang VARCHAR(30),
    CONSTRAINT fk_role FOREIGN KEY (id_Rol) REFERENCES role(idRole) ON DELETE CASCADE
);