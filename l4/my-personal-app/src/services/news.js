export default class NewsService {
    constructor(url) {
        this.url = url;
    }
    async getNews() {
        return await fetch(this.url)
        .then(response => response.json());
    }
}