-- -----UPDATE EMPLOYEE ROLES---------
UPDATE employee SET id_Rol = (SELECT idRole FROM role WHERE title = 'QA') WHERE first_name = 'Carlos';

-- ----UPDATE EMPLOYEE MANAGERS----------
UPDATE employee e INNER JOIN employee e2 ON (e2.first_name = 'Peter') SET e.id_Mang = e2.idEmployee WHERE e.first_name = 'Andy';

-- ----VIEW EMPLOYEES BY MANAGER------
SELECT id_Rol AS 'Role', first_name AS 'First Name', last_name AS 'Last Name' FROM employee WHERE id_Mang = (SELECT idEmployee FROM employee WHERE first_name = 'Peter');

-- ----DELETE EMPLOYEES---------
DELETE FROM employee WHERE first_name = 'Nicky';

-- ----DELETE DEPARTMENTS--------
DELETE FROM department WHERE name = 'H.R.';

-- ----DELETE ROLE--------
DELETE FROM role WHERE title = 'QA';

-- -----VIEW THE TOTAL UTILIZED BUDGET OF A DEPARTMENT----
SELECT SUM(salary) AS TotalBudget FROM role WHERE idRole IN (SELECT id_Rol FROM employee WHERE id_Rol IN (SELECT idRole FROM role WHERE id_Dep IN (SELECT idDepartment FROM department WHERE name = 'Engineering')));