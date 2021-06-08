USE employee_trackerDB;
-- -------------INSERT DEPARTMENTS INTO DB--------------------
-- Insert departments into db
INSERT INTO department (idDepartment, name) VALUES ('1', 'Engineering');
INSERT INTO department (idDepartment, name) VALUES ('2', 'Accounting');
INSERT INTO department (idDepartment, name) VALUES ('3', 'Sales');
INSERT INTO department (idDepartment, name) VALUES ('4', 'H.R.');

-- ------------INSERT ROLES INTO DB---------------------------
-- Insert roles for department 1
INSERT INTO role (id_Dep, title, salary) VALUES ('1','TM','100000');
INSERT INTO role (id_Dep, title, salary) VALUES ('1','QA','90000');
INSERT INTO role (id_Dep, title, salary) VALUES ('1','BackEnd','120000');
INSERT INTO role (id_Dep, title, salary) VALUES ('1','FrontEnd','110000');
-- Insert roles for department 2
INSERT INTO role (id_Dep, title, salary) VALUES ('2','Accountant Manager','100000');
INSERT INTO role (id_Dep, title, salary) VALUES ('2','Counter','90000');
INSERT INTO role (id_Dep, title, salary) VALUES ('2','Accountant','100000');
-- Insert roles for department 3
INSERT INTO role (id_Dep, title, salary) VALUES ('3','ISM','100000');
INSERT INTO role (id_Dep, title, salary) VALUES ('3','ISR','90000');
INSERT INTO role (id_Dep, title, salary) VALUES ('3','AE','100000');
-- Insert roles for department 4
INSERT INTO role (id_Dep, title, salary) VALUES ('4','HRM','90000');
INSERT INTO role (id_Dep, title, salary) VALUES ('4','Recruiter','100000');


-- ------------INSERT EMPLOYEES INTO DB-----------------------
-- Insert employees for department 1
INSERT INTO employee (id_Rol, first_name, last_name) VALUES ('1', 'Eduardo', 'Stamm');

INSERT INTO employee (id_Rol, first_name, last_name, id_Mang) VALUES ('2', 'Carlos', 'Sanchez','1');

INSERT INTO employee (id_Rol, first_name, last_name, id_Mang) VALUES ('3', 'Andy', 'Smith','1');

INSERT INTO employee (id_Rol, first_name, last_name, id_Mang) VALUES ('4', 'Jessica', 'Lopez','1');

-- Insert employees for department 2
INSERT INTO employee (id_Rol, first_name, last_name) VALUES ('5', 'Peter', 'Parker');

INSERT INTO employee (id_Rol, first_name, last_name, id_Mang) VALUES ('6', 'Demian', 'Esparza','5');

INSERT INTO employee (id_Rol, first_name, last_name, id_Mang) VALUES ('7', 'Rick', 'Futt','5');

-- Insert employees for department 3
INSERT INTO employee (id_Rol, first_name, last_name) VALUES ('8', 'Leo', 'Beerman');

INSERT INTO employee (id_Rol, first_name, last_name, id_Mang) VALUES ('9', 'Santiago', 'Rogan','8');

INSERT INTO employee (id_Rol, first_name, last_name, id_Mang) VALUES ('10', 'John', 'Deen','8');

-- Insert employees for department 4
INSERT INTO employee (id_Rol, first_name, last_name) VALUES ('11', 'Mary', 'Stark');

INSERT INTO employee (id_Rol, first_name, last_name, id_Mang) VALUES ('12', 'Nicky', 'Dion','11');
