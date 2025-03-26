import axios from 'axios';

const API_BASE_URL = 'https://api.myvrloan.com/api';

export interface LoanInquiryData {
  fullName: string;
  email: string;
  phone: string;
  loanAmount: number;
  loanType: 'personal' | 'business' | 'home';
  employmentType: 'salaried' | 'business';
  monthlyIncome: number;
}

export const submitLoanInquiry = async (data: LoanInquiryData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/inquiries`, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to submit loan inquiry');
    }
    throw error;
  }
};
