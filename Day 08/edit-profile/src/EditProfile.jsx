import { useState } from "react";
import "./EditProfile.css";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    theme: "light",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, profilePicture: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Updated:", formData);
  };

  return (
    <div className="container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="profile-picture">
          <img 
            src={formData.profilePicture ? URL.createObjectURL(formData.profilePicture) : "https://unsplash.com/photos/woman-in-white-crew-neck-shirt-smiling-IF9TK5Uy-KI"} 
            alt="Profile Preview"
          />
        </div>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email" 
          required 
        />
        <textarea 
          name="bio" 
          value={formData.bio} 
          onChange={handleChange} 
          placeholder="Short bio"
        ></textarea>
        <select 
          name="theme" 
          value={formData.theme} 
          onChange={handleChange} 
        >
          <option value="light">Light Theme</option>
          <option value="dark">Dark Theme</option>
        </select>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
