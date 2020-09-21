import { apiClient } from '../clients';

export const api = {


  async fetchAllProject(projectId) {
    const { data } = await apiClient.get(`/project?page=${projectId}`);
    return data;
  },

  async addProject(projectData) {
    const { data } = await apiClient.post(`/project`,projectData);
    return data;
  },
}
