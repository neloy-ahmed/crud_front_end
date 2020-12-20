import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}/edit`);
  }

  create(data) {
    // let formData = new FormData();

    // formData.append("file", file);

    return http.post("/products", data,{
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/findByTitle/${title}`);
  }
}

export default new TutorialDataService();
