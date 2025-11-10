import React, { useEffect, useState } from "react";
import './UsersDashboard.css'; 

export default function UsersDashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    region: '',
    Segment: ''
  });

  const API_URL = "http://localhost:4000/users";
  const fetchUsers = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const fetchUserDetails = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`);
      const data = await res.json();
      setSelectedUser(data);
    } catch (err) {
      console.error(err);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'id' ? Number(value) : value
    }));
  };

  const createUser = async (e) => {
    e?.preventDefault();
    try {
      const res = await fetch(`${API_URL}/data/entry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log('User created:', data);
      setFormData({ name: '', id: '', region: '', Segment: '' }); // Reset form
      setShowForm(false); // Hide form after submission
      fetchUsers(); // Refresh the user list
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  return (
    <div className="dashboard">
      <h1>User Management Dashboard</h1>
      <button onClick={() => setShowForm(true)}>Create New User</button>
      
      {showForm && (
        <div className="form-overlay">
          <div className="user-form">
            <h2>Create New User</h2>
            <form onSubmit={createUser}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>ID:</label>
                <input
                  type="number"
                  name="id"
                  value={formData.id}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Region:</label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Segment:</label>
                <input
                  type="text"
                  name="Segment"
                  value={formData.Segment}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-buttons">
                <button type="submit">Create User</button>
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {!selectedUser ? (
        <div className="user-grid">
          {users.map((user) => (
            <div key={user._id} className="user-card" onClick={() => fetchUserDetails(user._id)}>
              <div className="avatar">{user.name[0]}</div>
              <h2>{user.name}</h2>
              <button onClick={(e) => { e.stopPropagation(); deleteUser(user._id); }}>Delete</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="user-details">
          <button onClick={() => setSelectedUser(null)} className="back-btn">← Back to all users</button>
          <div className="details-card">
            <div className="avatar-large">{selectedUser.name[0]}</div>
            <h2>{selectedUser.name}</h2>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>ID:</strong> {selectedUser._id}</p>
            <p><strong>Region:</strong> {selectedUser.region}</p>
            <p><strong>Segment:</strong> {selectedUser.Segment}</p>
          </div>
        </div>
      )}
    </div>
  );
}