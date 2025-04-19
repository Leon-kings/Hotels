import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Mail as MailIcon,
  ChevronRight as ChevronRightIcon,
  ExpandMore as ExpandMoreIcon,
  Person as PersonIcon,
  Schedule as ScheduleIcon,
  Close as CloseIcon,
  Edit,
  Email
} from '@mui/icons-material';

export const UserMessageData = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [view, setView] = useState('count'); // 'count', 'list', 'detail'
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('');

  useEffect(() => {
    // Get logged-in user's email from localStorage or session
    const userEmail = localStorage.getItem('userEmail') || sessionStorage.getItem('userEmail');
    if (userEmail) {
      setLoggedInUserEmail(userEmail);
    }
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://hotel-nodejs-oa32.onrender.com/63729/892308'
        );
        
        // Handle different response structures and sort by date (newest first)
        let messagesData = (response.data.data || 
                          response.data?.data?.messages || 
                          response.data || [])
                          .sort((a, b) => new Date(b.createdAt || b.date) - new Date(a.createdAt || a.date));
        
        // Filter messages to only show those matching the logged-in user's email
        if (loggedInUserEmail) {
          messagesData = messagesData.filter(message => 
            message.email?.toLowerCase() === loggedInUserEmail.toLowerCase()
          );
        }
        
        setMessages(messagesData);
      } catch (err) {
        console.error('Error fetching messages:', err);
        setError(err.response?.data?.message || 'Failed to load messages');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [loggedInUserEmail]); // Add dependency to re-fetch when email changes

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
    setView('detail');
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  if (loading && messages.length === 0) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 w-full">
            <MailIcon className="text-purple-500" />
            <div>
              <h3 className="font-semibold">Messages</h3>
              <p className="text-sm text-gray-600">Loading messages...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 w-full">
            <MailIcon className="text-blue-400 size-6" />
            <div>
              <h3 className="font-semibold">Messages</h3>
              <p className="text-sm text-red-600">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* Count View */}
      {view === 'count' && (
        <div 
          className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => handleViewChange('list')}
        >
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MailIcon className="text-purple-500" />
              <div>
                <h3 className="font-semibold">Messages</h3>
                <p className="text-sm text-gray-600">
                  {messages.length} {messages.length === 1 ? 'message' : 'messages'}
                </p>
              </div>
            </div>
            <ChevronRightIcon className="text-gray-500" />
          </div>
        </div>
      )}

      {/* List View */}
      {view === 'list' && (
        <div className="divide-y divide-gray-200">
          <div 
            className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleViewChange('count')}
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-8 items-center ">
                <MailIcon className="text-purple-500" />
                <div>
                  <h3 className="font-semibold">Messages</h3>
                  <p className="text-sm text-gray-600 right-0">
                    {messages.length} {messages.length === 1 ? 'message' : 'messages'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {messages.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                {loggedInUserEmail ? 'No messages found for your account' : 'No messages found'}
              </p>
            ) : (
              messages.slice(0, 4).map((message) => (
                <div
                  key={message._id || message.id}
                  className="p-4 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100"
                  onClick={() => handleMessageSelect(message)}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <PersonIcon className="text-blue-400 size-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {message.name || 'Anonymous'}
                        </h4>
                        <p className="text-sm text-gray-500 truncate max-w-xs">
                          {message.content || message.message}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <ScheduleIcon className='size-6 text-red-400' />
                      {formatDate(message.createdAt || message.date)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Detail View */}
      {view === 'detail' && selectedMessage && (
        <div className="divide-y divide-gray-200">
          <div 
            className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleViewChange('list')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MailIcon className="text-purple-500" />
                <div>
                  <h3 className="font-semibold">Message Details</h3>
                  <p className="text-sm text-black dark:text-white">
                    Back to messages
                  </p>
                </div>
              </div>
              <ExpandMoreIcon className="text-gray-500" />
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <PersonIcon className="size-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                   {selectedMessage.name || 'Anonymous'}
                  </h4>
                  <p className="text-sm text-gray-500">
                   <Email className='size-1'/> {selectedMessage.email || 'No email provided'}
                  </p>
                </div>
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <ScheduleIcon className='text-red-400 size-auto' />
                {formatDate(selectedMessage.createdAt || selectedMessage.date)} at{' '}
                {formatTime(selectedMessage.createdAt || selectedMessage.date)}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 whitespace-pre-wrap">
                {selectedMessage.content || selectedMessage.message}
              </p>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => handleViewChange('list')}
                className="text-sm font-medium flex items-center gap-1"
              >
                <CloseIcon className='size-6 text-red-600' /> 
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};