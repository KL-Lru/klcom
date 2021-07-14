import { Post } from 'types/posts';
import api from './api';

export const getPosts = async (): Promise<Post[]> => {
  return await api.get('posts').json();
}

export const getPost = async (id: number): Promise<Post> => {
  return await api.get(`posts/${id}`).json();
}
