import './Main.css'
import React, { useState } from 'react';

import { 
  getUser,
  useQuery,
  editUser, 
} from 'wasp/client/operations'

export default function EditorPage({ user }) {

  const [formData, setFormData] = useState({
    name: '',
    greeting: '',
    subtitle: '',
    header: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const target = e.target

      const greeting = target.greeting.value;
      const subtitle = target.subtitle.value;
      const header = target.header.value;
      const image = target.image.value;
      const description = target.description.value;

      target.reset()
      await editUser({greeting,subtitle,header,image,description })
    } catch (err) {
      window.alert('Error: ' + err.message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='text-2xl my-1'>A portfolio unlike anything you've seen before</h1>
      <div>
        <input
          type="text"
          name="greeting"
          value={formData.greeting}
          onChange={handleChange}
          placeholder="Greeting"
        />

        <input
          type="text"
          name="subtitle"
          value={formData.subtitle}
          onChange={handleChange}
          placeholder="Subtitle"
        />

        <input
          type="text"
          name="header"
          value={formData.header}
          onChange={handleChange}
          placeholder="Header"
        />

        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image"
        />
      </div>

      <textarea rows="6" cols="80"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
