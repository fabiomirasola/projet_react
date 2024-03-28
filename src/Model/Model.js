import axios from "axios";

export class RequestProduct {
    static async getProduct() {
        let config = {
            method: 'get',
            url: 'http://localhost:3000/api/product/65fc720ddff5b5ed2e135a46',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWZiZjNkM2RmZjViNWVkMmUxMzVhMTIiLCJpYXQiOjE3MTE0NjE1MDEsImV4cCI6MTcxMTQ2MzMwMSwidHlwZSI6ImFjY2VzcyJ9.3HX5jq9GJOnWaDOPL-6UaxopPbfwLiZXdqroLLAgcKI'
            }
        };
        try {
            const Response = await axios(config);
            return Response.data.product;
        }
        catch(error){
            console.error('Error fetching product:', error);
        }
    }
}
