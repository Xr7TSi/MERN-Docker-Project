// defines how to handle the array of posts based on each action


export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [ ...posts, action.payload];
        
        case 'UPDATE_POST':
            return posts.map(post => {
                if (post._id === action.payload._id) {
                    return action.payload;
                } else {
                    return post;
                };
            });

            case 'LIKE_POST':
                return posts.map(post => {
                    if (post._id === action.payload._id) {
                        return action.payload;
                    } else {
                        return post;
                    };
                });    

        case 'DELETE_POST':
            return posts.filter((post) => post._id !== action.payload);

      
        default:
            return posts;
    }   

}