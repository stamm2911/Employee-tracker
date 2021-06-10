const mysql = require("mysql");
const inquirer = require("inquirer");
const employees = [];
const roles = [];
const managers = [];
const departments = [];
const connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Be sure to update with your own MySQL password!
  password: "R00tr00t",
  database: "employee_trackerdb",
});

connection.connect((err) => {
  if (err) throw err;
  runTracker();
});

const runTracker = () => {
  employees.length = 0;
  roles.length = 0;
  managers.length = 0;
  const query = "SELECT * FROM employee ORDER by idEmployee ASC;";
  connection.query(query, (err, res) => {
    res.forEach(({ first_name }) => {
      employees.push(`${first_name}`);
    });
  });
  const query1 = "SELECT * FROM role ORDER by idRole ASC;";
  connection.query(query1, (err, res) => {
    res.forEach(({ id_Dep, title }) => {
      roles.push(`${title}`);
    });
  });
  const query2 = "SELECT first_name FROM employee WHERE id_Mang IS null;";
  connection.query(query2, (err, res) => {
    res.forEach(({ first_name }) => {
      managers.push(`${first_name}`);
    });
  });
  const query3 = "SELECT name FROM department;";
  connection.query(query3, (err, res) => {
    res.forEach(({ name }) => {
      departments.push(`${name}`);
    });
  });
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add departments",
        "Add Role",
        "Add Employee",
        "Update employee roles",
        "Update employee managers",
        "View departments",
        "View roles",
        "View employees",
        "View employees by manager",
        "View the total utilized budget of a department",
        "Delete departments",
        "Delete roles",
        "Delete employees",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Add departments":
          add("department");
          break;

        case "Add Role":
          add("role");
          break;

        case "Add Employee":
          add("employee");
          break;

        case "Update employee roles":
          update("role");
          break;

        case "Update employee managers":
          update("manager");
          break;

        case "View departments":
          view("department");
          break;

        case "View roles":
          view("role");
          break;

        case "View employees":
          view("employee");
          break;

        case "View employees by manager":
          viewEmbyMan();
          break;

        case "View the total utilized budget of a department":
          viewBudget();
          break;

        case "Delete departments":
          deleteData("department");
          break;

        case "Delete roles":
          deleteData("role");
          break;

        case "Delete employees":
          deleteData("employee");
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const add = (data) => {
  switch (data) {
    case "department":
      inquirer
        .prompt({
          name: "department",
          type: "input",
          message: "Enter department name: ",
        })
        .then((answer) => {
          const query = "INSERT INTO department (name) VALUES (?);";
          connection.query(query, answer.department);
          console.log(answer);
          runTracker();
        });
      break;
    case "role":
      inquirer
        .prompt([
          {
            name: "id_dep",
            type: "input",
            message: "Enter department id: ",
          },
          {
            name: "title",
            type: "input",
            message: "Enter role title: ",
          },
          {
            name: "salary",
            type: "input",
            message: "Enter role salary: ",
          },
        ])
        .then((answer) => {
          const query =
            "INSERT INTO role (id_Dep, title, salary) VALUES (?, ?, ?);";
          connection.query(query, [answer.id_dep, answer.title, answer.salary]);
          console.log(answer);
          runTracker();
        });
      break;
    case "employee":
      inquirer
        .prompt([
          {
            name: "id_Rol",
            type: "input",
            message: "Enter role id: ",
          },
          {
            name: "first_name",
            type: "input",
            message: "Enter first name: ",
          },
          {
            name: "last_name",
            type: "input",
            message: "Enter last name: ",
          },
          {
            name: "id_Mang",
            type: "input",
            message: "Enter manager id: ",
          },
        ])
        .then((answer) => {
          const query =
            "INSERT INTO employee (id_Rol, first_name, last_name, id_Mang) VALUES (?, ?, ?, ?);";
          connection.query(query, [
            answer.id_Rol,
            answer.first_name,
            answer.last_name,
            answer.id_Mang,
          ]);
          console.log(answer);
          runTracker();
        });
      break;
    default:
      console.log(`Invalid action`);
      break;
  }
};

const update = (data) => {
  switch (data) {
    case "role":
      inquirer
        .prompt([
          {
            name: "employee",
            type: "rawlist",
            message: "Choose employee:",
            choices: employees,
          },
          {
            name: "role",
            type: "rawlist",
            message: "Choose role:",
            choices: roles,
          },
        ])
        .then((answer) => {
          const query =
            "UPDATE employee SET id_Rol = (SELECT idRole FROM role WHERE title = ?) WHERE first_name = ?;";
          connection.query(query, [answer.role, answer.employee]);
          console.log(answer);
          runTracker();
        });
      break;
    case "manager":
      inquirer
        .prompt([
          {
            name: "employee",
            type: "rawlist",
            message: "Choose employee:",
            choices: employees,
          },
          {
            name: "manager",
            type: "rawlist",
            message: "Choose Manager:",
            choices: managers,
          },
        ])
        .then((answer) => {
          const query =
            "UPDATE employee e INNER JOIN employee e2 ON (e2.first_name = ?) SET e.id_Mang = e2.idEmployee WHERE e.first_name = ?;";
          connection.query(query, [answer.manager, answer.employee]);
          console.log(answer);
          runTracker();
        });
      break;
    default:
      break;
  }
};

const view = (data) => {
  switch (data) {
    case "department":
      const query = "SELECT * FROM department ORDER BY idDepartment ASC;";
      connection.query(query, (err, res) => {
        console.table(res);
        runTracker();
      });
      break;
    case "role":
      const query2 = "SELECT * FROM role ORDER BY id_Dep ASC;";
      connection.query(query2, (err, res) => {
        console.table(res);
        runTracker();
      });
      break;
    case "employee":
      const query3 = "SELECT * FROM employee ORDER by idEmployee ASC";
      connection.query(query3, (err, res) => {
        console.table(res);
        runTracker();
      });
      break;
    default:
      console.log(`Invalid action`);
      break;
  }
};

const viewEmbyMan = () => {
  inquirer
    .prompt([
      {
        name: "manager",
        type: "rawlist",
        message: "Choose manager:",
        choices: managers,
      },
    ])
    .then((answer) => {
      const query =
        "SELECT id_Rol AS 'Role', first_name AS 'First Name', last_name AS 'Last Name' FROM employee WHERE id_Mang = (SELECT idEmployee FROM employee WHERE first_name = ?);";
      connection.query(query, [answer.manager], (err, res) => {
        console.table(res);
        runTracker();
      });
    });
};

const viewBudget = () => {
  inquirer
    .prompt([
      {
        name: "department",
        type: "rawlist",
        message: "Choose department:",
        choices: departments,
      },
    ])
    .then((answer) => {
      const query =
        "SELECT SUM(salary) AS TotalBudget FROM role WHERE idRole IN (SELECT id_Rol FROM employee WHERE id_Rol IN (SELECT idRole FROM role WHERE id_Dep IN (SELECT idDepartment FROM department WHERE name = ?)));";
      connection.query(query, [answer.department], (err, res) => {
        console.log(`Total Department budget: ${res[0].TotalBudget}`);
        runTracker();
      });
    });
};

const deleteData = (data) => {
  switch (data) {
    case "department":
      inquirer
        .prompt([
          {
            name: "department",
            type: "rawlist",
            message: "Choose department:",
            choices: departments,
          },
        ])
        .then((answer) => {
          const query = "DELETE FROM department WHERE name = ?;";
          connection.query(query, [answer.department]);
          runTracker();
        });
      break;
    case "role":
      inquirer
        .prompt([
          {
            name: "role",
            type: "rawlist",
            message: "Choose role:",
            choices: roles,
          },
        ])
        .then((answer) => {
          const query = "DELETE FROM role WHERE title = ?;";
          connection.query(query, [answer.role]);
          runTracker();
        });
      break;
    case "employee":
      inquirer
        .prompt([
          {
            name: "employee",
            type: "rawlist",
            message: "Choose employee:",
            choices: employees,
          },
        ])
        .then((answer) => {
          const query = "DELETE FROM employee WHERE first_name = ?;";
          connection.query(query, [answer.employee]);
          runTracker();
        });
      break;
    default:
      console.log(`Invalid action`);
      break;
  }
};