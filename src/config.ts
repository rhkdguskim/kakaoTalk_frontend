export enum PAGE_PATHS {
    HOME = '/',
    LOGIN = '/login',
    SIGNUP = '/signup',
    MENU = '/menu',
    FRIENDS = '/friends',
    CHATTING = '/menu/chatting',
    CHATTING_ROOM = '/room'
  }
  
  export const HOST = process.env.HOST || 'http://localhost:3000';
  
  export const API_HOST = process.env.API_HOST || `${HOST}`;
  
  export const BASE_IMG_URL = '/asset/base_profile.jpg';