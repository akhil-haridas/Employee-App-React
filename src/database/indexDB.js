// indexedDB.js

const DB_NAME = "employeeDB";
const DB_VERSION = 1;
const OBJECT_STORE_NAME = "employees";

let db;

// Open the IndexedDB database
const openDB = () => {
  const request = window.indexedDB.open(DB_NAME, DB_VERSION);

  request.onupgradeneeded = (event) => {
    // Create an object store if it doesn't exist
    const database = event.target.result;
    if (!database.objectStoreNames.contains(OBJECT_STORE_NAME)) {
      const objectStore = database.createObjectStore(OBJECT_STORE_NAME, {
        keyPath: "id",
        autoIncrement: true,
      });
    }
  };

  request.onsuccess = (event) => {
    db = event.target.result;
    console.log("IndexedDB opened successfully");
  };

  request.onerror = (event) => {
    console.error("Error opening IndexedDB:", event.target.error);
  };
};

// Perform database operations only when 'db' is defined
const withDB = (callback) => {
  if (db) {
    callback();
  } else {
    setTimeout(() => {
      withDB(callback);
    }, 100); // Wait and retry
  }
};

// Add an employee to the database
const addEmployee = (employee) => {
  withDB(() => {
    const transaction = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const store = transaction.objectStore(OBJECT_STORE_NAME);
    const request = store.add(employee);

    request.onsuccess = () => {
      console.log("Employee added successfully");
    };

    request.onerror = (event) => {
      console.error("Error adding employee:", event.target.error);
    };
  });
};

// Retrieve all employees from the database
const getAllEmployees = (callback) => {
  withDB(() => {
    const transaction = db.transaction(OBJECT_STORE_NAME, "readonly");
    const store = transaction.objectStore(OBJECT_STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      const employees = request.result;
      callback(employees);
    };

    request.onerror = (event) => {
      console.error("Error retrieving employees:", event.target.error);
    };
  });
};

// Update an employee in the database
const updateEmployee = (employee) => {
  withDB(() => {
    const transaction = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const store = transaction.objectStore(OBJECT_STORE_NAME);
    const request = store.put(employee);

    request.onsuccess = () => {
      console.log("Employee updated successfully");
    };

    request.onerror = (event) => {
      console.error("Error updating employee:", event.target.error);
    };
  });
};

// Delete an employee from the database
const deleteEmployee = (employeeId) => {
  withDB(() => {
    const transaction = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const store = transaction.objectStore(OBJECT_STORE_NAME);
    const request = store.delete(employeeId);

    request.onsuccess = () => {
      console.log("Employee deleted successfully");
    };

    request.onerror = (event) => {
      console.error("Error deleting employee:", event.target.error);
    };
  });
};

openDB();

export { addEmployee, getAllEmployees, updateEmployee, deleteEmployee };
