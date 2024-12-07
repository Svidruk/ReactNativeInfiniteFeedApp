import axios from 'axios';
import {User} from '../types/interfaces';

const USER_API_URL = 'https://reqres.in/api';

interface UserResponse {
  data: User;
}

async function getUserData(userId: number): Promise<User | null> {
  try {
    const response = await axios.get<UserResponse>(
      `${USER_API_URL}/users/${userId}`,
    );
    const {first_name, last_name, avatar}: User = response.data.data;
    return {first_name, last_name, avatar};
  } catch (error: any) {
    console.error('Error fetching user avatar:', error.message || error);
    return null;
  }
}

export default getUserData;
