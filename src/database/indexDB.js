import { Toast } from "../utils/AddpageUTILS";

const DB_NAME = "employeeDB";
const DB_VERSION = 1;
const OBJECT_STORE_NAME = "employees";

let db;

const openDB = () => {
  const request = window.indexedDB.open(DB_NAME, DB_VERSION);

  request.onupgradeneeded = (event) => {
    const database = event.target.result;
    if (!database.objectStoreNames.contains(OBJECT_STORE_NAME)) {
      const objectStore = database.createObjectStore(OBJECT_STORE_NAME, {
        keyPath: "id",
        autoIncrement: true,
      });
      console.log(objectStore);
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

const withDB = (callback) => {
  if (db) {
    callback();
  } else {
    setTimeout(() => {
      withDB(callback);
    }, 100);
  }
};

const addEmployee = (employee) => {
  withDB(() => {
    const transaction = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const store = transaction.objectStore(OBJECT_STORE_NAME);
    const request = store.add(employee);

    request.onsuccess = () => {
      Toast.fire({
        icon: "success",
        title: "Employee added successfully",
      });
    };

    request.onerror = (event) => {
      console.error("Error adding employee:", event.target.error);
    };
  });
};

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

const updateEmployee = (employee) => {
  withDB(() => {
    const transaction = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const store = transaction.objectStore(OBJECT_STORE_NAME);
    const request = store.put(employee);

    request.onsuccess = () => {
     Toast.fire({
       icon: "success",
       title: "Employee updated successfully",
     });
    };

    request.onerror = (event) => {
      console.error("Error updating employee:", event.target.error);
    };
  });
};

const deleteEmployee = (employeeId) => {
  withDB(() => {
    const transaction = db.transaction(OBJECT_STORE_NAME, "readwrite");
    const store = transaction.objectStore(OBJECT_STORE_NAME);
    const request = store.delete(employeeId);

    request.onsuccess = () => {
      Toast.fire({
        icon: "success",
        title: "Employee deleted successfully",
      });
    };

    request.onerror = (event) => {
      console.error("Error deleting employee:", event.target.error);
    };
  });
};

openDB();

export { addEmployee, getAllEmployees, updateEmployee, deleteEmployee };
