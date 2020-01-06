import Business from "../components/Business/Business";

const apiKey='Vna5IflOO4PBFOHC4K86E4wj8nIoid34AP_O2EyhO094SiuzFTWL2nJr-4fwGFQlyDNzkQGUV1Bl5RrsqU-_BxNtd9oLJgsX_ymoyHqg-sFaEc7n4E7lKL7z6z1JXXYx';
 const Yelp={
    searchYelp(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{Headers:{Autorization:`Bearer ${apiKey}`}}).then(response =>{
            return response.json();
        }).then((jsonResponse) =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business) =>{
                    console.log(business);
                    return {
                        id:business.id,
                        imageSrc:business.image_url,
                        name:business.name,
                        adress:business.location.adress,
                        city:business.location.city,
                        state: business.location.state,
                        zipCpde: business.location.zip_code,
                        category: business.categories[0].tittle,
                        rating: business.rating,
                        reviewCount: business.review_Count,
                    };
                })
            }
        })

    }
};
export default Yelp;
