<h1>To-Do List</h1>
A simple and interactive To-Do List application built using HTML, CSS, and JavaScript. The app allows users to add, delete, and mark tasks as completed. It also stores tasks in the browser's local storage so that tasks persist even after the page is refreshed.
<h2>Features</h2>

- **Add Tasks:** Enter new tasks using an input field and submit via a button or by pressing the Enter key.
- **Mark Tasks as Completed:** Click on tasks to toggle between completed and incomplete states.
- **Delete Tasks:** Each task has a delete button (represented by an "X") to remove it from the list.
- **Persistent Data Storage:** Tasks are stored in the browser’s local storage so they remain even after the page is reloaded or the browser is closed.
## How It Works

1. **Task Addition:**  
   Users can add new tasks by typing into the input field and either clicking the "Add" button or pressing the Enter key.

2. **Marking as Completed:**  
   When a user clicks on a task, it toggles between "completed" (strikethrough text) and "incomplete."

3. **Deleting Tasks:**  
   Clicking the "X" next to a task removes it from the list.

4. **Data Persistence:**  
   The tasks are saved in the browser's local storage, so they remain available even after reloading the page or closing and reopening the browser.

## Local Storage

The application stores tasks in the browser's local storage using the `localStorage` API. Tasks are saved automatically when added or deleted, and retrieved when the page loads.

