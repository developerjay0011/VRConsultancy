import axios from 'axios';

const API_BASE_URL = 'https://api.myvrloan.com/api';

export interface LoanInquiryData {
  fullName: string;
  email: string;
  phone: string;
  loanAmount: number;
  loanType: 'personal' | 'home' | 'business' | 'project' | 'securities' | 'msme' | 'education' | 'nri' | 'affordable' | 'transfer' | 'property' | 'working-capital';
  employmentType: 'salaried' | 'business';
  monthlyIncome: number;
}

export async function submitLoanInquiry(data: LoanInquiryData): Promise<void> {
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
