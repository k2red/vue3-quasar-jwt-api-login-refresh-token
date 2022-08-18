// import { axios } from 'boot/axios'
import { api } from './api'
// import { useAuthStore } from 'src/stores/auth.store'

type LoginUserResponse = {
    token: string;
    type: string;
    id: number,
    username: string;
    email: string;
    roles: string;
    accessToken: string;
    tokenType: string;
};

const baseurl = 'http://localhost:8000/api/test';


async function getData(type : string) {
  try {
    const { data } = await api.get<LoginUserResponse>(
      `${baseurl}/${type}`,
    )
    return data;
  } catch (error) {
    throw 'An unexpected error occurred';
  }
}

export { getData }
