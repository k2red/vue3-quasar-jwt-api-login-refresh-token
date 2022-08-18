import { axios } from 'boot/axios'

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

const baseurl = 'http://localhost:8000/api/auth';

async function signin( username : string, password : string) {
  try {
    // const data : LoginUserResponse|null = null;
    const { data } = await axios.post<LoginUserResponse>(
      `${baseurl}/signin`,
      { username: username, password: password },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      // 👇️ error: AxiosError<any, any>
      // return error.message;
      throw error.message;
    } else {
      console.log('unexpected error: ', error);
      // return 'An unexpected error occurred';
      throw 'An unexpected error occurred';
    }
  }
}
async function signup( username : string, email : string, password : string) {
  try {
    // const data : LoginUserResponse|null = null;
    const { data } = await axios.post<LoginUserResponse>(
      `${baseurl}/signup`,
      { username: username, email : email,  password: password },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      throw error.message;
    } else {
      console.log('unexpected error: ', error);
      throw 'An unexpected error occurred';
    }
  }
}

async function refreshToken( refreshToken : string) {
  try {
    // const data : LoginUserResponse|null = null;
    const { data } = await axios.post<LoginUserResponse>(
      `${baseurl}/refreshtoken`,
      { refreshToken: refreshToken },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      throw error.message;
    } else {
      console.log('unexpected error: ', error);
      throw 'An unexpected error occurred';
    }
  }
}
export { signin, signup, refreshToken }
