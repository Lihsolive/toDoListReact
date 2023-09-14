import { useState } from "react";

export default function TaskForm(onAdd) {
    const [taskName, setTaskName] = useState('');

  return (
    <form>
      <input type="text" 
            value={taskName} 
            onChange={ev => setTaskName(ev.target.value)} 
            placeholder="New task"/>
            <button>+</button>
    </form>
  );
}
