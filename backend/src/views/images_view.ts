import Image from '../model/Image';

export default {
    render(image:Image){
        return{
            id: image.id,
            // url: `http://localhost:3333/uploads/${image.path}`,
            url: `http://172.16.0.3:3333/uploads/${image.path}`,
        }
    },

    renderMany(images: Image[]){
        return images.map(image => this.render(image));
    }
}