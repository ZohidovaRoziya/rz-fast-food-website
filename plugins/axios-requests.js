export default ({ $axios }, inject) => {
  inject('api', {
    async getCategorysList (params) {
      return await $axios.get('/categories/', { params })
    },
    async getBrandsList (params) {
      return await $axios.get('/brands/', { params })
    },
    async getPopularProducts (params) {
      return await $axios.get('/products/popular/', { params })
    },
    async sendSMSCode (data) {
      return await $axios.post('/users/verification-code/', data, { progress: false })
    },
    async login (data) {
      return await $axios.post('/users/token/', data, { progress: false })
    },
    async verificationCode (data) {
      return await $axios.post('/users/phone/verification/', data, { progress: false })
    },
    async registerUser (data) {
      return await $axios.post('/users/register/', data, { progress: false })
    },
    async getPopularCategorys (params) {
      return await $axios.get('/categories/popular/', { params })
    },
    async getNewProductsList (params) {
      return await $axios.get('/products/', { params })
    },
    async getFullInfoProduct (id, params) {
      return await $axios.get(`/products/${id}/`, { params })
    },
    async getProductComment (id, params) {
      return await $axios.get(`/products/${id}/reviews/`, { params })
    },
    async getSiteNetworks (params) {
      return await $axios.get('/pageconfig/', { params })
    },
    async getAdsData (params) {
      return await $axios.get('/ads/', { params })
    },
    async addNewComment (id, data) {
      return await $axios.post(`/products/${id}/reviews/`, data, { progress: false })
    },
    async getSimilarProduct (id, params) {
      return await $axios.get(`/products/${id}/related-products/`, { params })
    },
    async getBrandsProducts (id, params) {
      return await $axios.get(`/brands/${id}/products/`, { params })
    },
    async editUserInfo (data) {
      return await $axios.patch('/users/profile/', data)
    },
    async getBrandsCategoryList (params) {
      return await $axios.get('/categories/brands/', { params })
    },
    async getCategoryBrandList (id, params) {
      return await $axios.get(`/categories/${id}/brands/`, { params })
    },
    async getPopularSearchs (params) {
      return await $axios.get('/search/terms/', { params, process: false })
    },
    async getInfoBrand (id, params) {
      return await $axios.get(`/brands/${id}/`, { params })
    },
    async getSearchProducts (params) {
      return await $axios.get('/search/', { params })
    },
    async searchBrands (params) {
      return await $axios.get('/products/brands-with-count/', { params })
    },
    async searchSubCategorys (params) {
      return await $axios.get('/products/categories-with-count/', { params })
    },
    async getNewsList (params) {
      return await $axios.get('/blogs/', { params })
    },
    async getNewsFullInfo (id, params) {
      return await $axios.get(`/blogs/${id}/`, { params })
    }
  })
}
