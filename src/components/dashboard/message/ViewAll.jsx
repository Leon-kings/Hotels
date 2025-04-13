 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Mail as MailIcon,
  ChevronLeft,
  ChevronRight,
  NineKPlus
} from '@mui/icons-material';

export const MessagesAllManager = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 8;

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://hotel-nodejs-oa32.onrender.com/63729/892308'
      );
      setMessages(response.data.data || response.data || []);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  // Get current messages for pagination
  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);
  const totalPages = Math.ceil(messages.length / messagesPerPage);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await axios.delete(
          `https://hotel-nodejs-oa32.onrender.com/63729/892308/${id}`
        );
        setMessages(messages.filter(msg => msg._id !== id));
        // Reset to first page if current page becomes empty
        if (currentMessages.length === 1 && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      } catch (err) {
        // setError('Failed to delete message');
        alert(err,'Delete failed !!')
      }
    }
  };

  const handleEdit = (message) => {
    setEditingId(message._id);
    setEditForm({
      name: message.name || '',
      phone: message.phone || '',
      email: message.email || '',
      subject: message.subject || '',
      message: message.message || ''
    });
  };

  const handleUpdate = async (id) => {
    try {
      // 1. First validate the form data
      if (!editForm.name || !editForm.email) {
        throw new Error('Name and email are required');
      }
  
      // 2. Make the API call with proper headers
      const response = await axios.put(
        `https://hotel-nodejs-oa32.onrender.com/63729/89230/${id}`,
        editForm,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
  
      // 3. Verify the response
      if (!response.data) {
        throw new Error('No data returned from server');
      }
  
      // 4. Update state
      setMessages(messages.map(msg => 
        msg._id === id ? { ...msg, ...editForm } : msg
      ));
      setEditingId(null);
      
      // Optional: Show success feedback
      alert('Message updated successfully!');
      
    } catch (err) {
      const errorMessage = err.response?.data?.message || 
                          err.response?.data?.error || 
                          err.message;
      console.error('Update failed:', {
        error: err,
        response: err.response,
        request: err.request
      });
      alert(`Update failed: ${errorMessage}`);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
        <div className="flex items-center">
          <h4 className="text-lg font-semibold">Messages Management</h4>
        </div>
        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages} ({messages.length} total messages)
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[200px]">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[300px]">Message</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentMessages.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No messages found on this page
                </td>
              </tr>
            ) : (
              currentMessages.map((message) => (
                <tr key={message._id} className="hover:bg-gray-50">
                  {editingId === message._id ? (
                    <>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          name="name"
                          value={editForm.name}
                          onChange={handleInputChange}
                          className="border rounded px-3 py-2 w-full min-w-[150px]"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="text"
                          name="phone"
                          value={editForm.phone}
                          onChange={handleInputChange}
                          className="border rounded px-3 py-2 w-full min-w-[150px]"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="email"
                          name="email"
                          value={editForm.email}
                          onChange={handleInputChange}
                          className="border rounded px-3 py-2 w-full min-w-[230px]"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                     {editForm.subject}
                      </td>
                      <td className="px-6 py-4">
                        <textarea
                          name="message"
                          value={editForm.message}
                          onChange={handleInputChange}
                          className="border rounded px-3 py-2 w-full min-w-[300px]"
                          rows="3"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap space-x-2">
                        <button
                          onClick={() => handleUpdate(message._id)}
                          className="text-green-600 hover:text-green-900 p-1"
                          title="Save"
                        >
                          <NineKPlus className='text-green-500' />
                        </button>
                        <button
                          onClick={handleCancel}
                          className="text-gray-600 hover:text-gray-900 p-1"
                          title="Cancel"
                        >
                          <CancelIcon className='text-red-500' />
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-3 text-left whitespace-nowrap min-w-[150px]">
                        <div className="text-sm text-gray-900">{message.name || '-'}</div>
                      </td>
                      <td className="px-6 py-3 text-left whitespace-nowrap min-w-[150px]">
                        <div className="text-sm text-gray-900">{message.phone || '-'}</div>
                      </td>
                      <td className="px-6 py-3 text-left whitespace-nowrap min-w-[200px]">
                        <div className="text-sm text-gray-900">{message.email || '-'}</div>
                      </td>
                      <td className="px-6 py-3 text-left whitespace-nowrap min-w-[200px]">
                        <div className="text-sm text-gray-900">{message.subject || '-'}</div>
                      </td>
                      <td className="px-6 py-4 min-w-[300px]">
                        <div className="text-sm text-gray-900">
                          {message.message || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap min-w-[120px] space-x-2">
                        <button
                          onClick={() => handleEdit(message)}
                          className="text-blue-600 hover:text-blue-900 p-1"
                          title="Edit"
                        >
                          <EditIcon className='text-blue-400' />
                        </button>
                        <button
                          onClick={() => handleDelete(message._id)}
                          className="text-red-600 hover:text-red-900 p-1"
                          title="Delete"
                        >
                          <DeleteIcon className='text-red-400' />
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {messages.length > messagesPerPage && (
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center px-4 py-2 rounded-md ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <ChevronLeft />
            Previous
          </button>
          
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-3 py-1 rounded-md ${currentPage === number ? 'bg-purple-500 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                {number}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center px-4 py-2 rounded-md ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Next
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

