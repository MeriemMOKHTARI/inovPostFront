import axios from 'axios';

const API_BASE_URL =  'http://127.0.0.1:8000/feedback';

export const fetchFeedbacks = async (sourceFilter = 'all') => {
  try {
    // Fetch from different endpoints based on source
    const qrFeedbacksPromise = axios.get(`${API_BASE_URL}/qr-feedback/`);
    const formFeedbacksPromise = axios.get(`${API_BASE_URL}/form-feedback/`);
    const socialFeedbacksPromise = axios.get(`${API_BASE_URL}/social-media-feedback/`);

    const [qrFeedbacks, formFeedbacks, socialFeedbacks] = await Promise.all([
      qrFeedbacksPromise,
      formFeedbacksPromise,
      socialFeedbacksPromise
    ]);

    // Combine and normalize the data
    const allFeedbacks = [
      ...qrFeedbacks.data.map(item => ({ ...item, type: 'qr' })),
      ...formFeedbacks.data.map(item => ({ ...item, type: 'form' })),
      ...socialFeedbacks.data.map(item => ({ ...item, type: 'social' }))
    ];

    // Apply client-side filtering
    return sourceFilter === 'all' 
      ? allFeedbacks 
      : allFeedbacks.filter(item => item.type === sourceFilter);

  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return [];
  }
};

// QR Code generation function
export const generateQRCode = async (code) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/generate-qr/${code}/`, {
      responseType: 'blob'
    });
    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error('Error generating QR code:', error);
    return null;
  }
};

// Optional: Add filtering functions
export const filterFeedbacksByService = async (service) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/form-feedback/`, {
      params: { service }
    });
    return response.data;
  } catch (error) {
    console.error('Error filtering feedbacks:', error);
    return [];
  }
};