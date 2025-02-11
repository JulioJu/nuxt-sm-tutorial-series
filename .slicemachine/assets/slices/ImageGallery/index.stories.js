import MyComponent from './../../../../slices/ImageGallery';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageGallery'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_gallery","items":[{"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=727&h=402&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Proident anim tempor laboris consectetur dolore proident in veniam eiusmod. Incididunt laboris laborum aliquip enim cupidatat adipisicing consectetur dolore.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"drive strategic e-markets"},{"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=727&h=402&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Do magna ullamco id labore ullamco dolore mollit irure amet culpa sit pariatur proident magna ex. Id ut culpa velit ex excepteur elit sint eiusmod eiusmod nulla.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"},"linkLabel":"whiteboard global e-tailers"},{"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=727&h=402&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Do nulla elit in qui irure exercitation commodo pariatur.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":"optimize strategic metrics"},{"image":{"dimensions":{"width":727,"height":402},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=727&h=402&fit=crop"},"imageDescription":[{"type":"paragraph","text":"Nostrud proident exercitation fugiat minim aliqua consectetur ad est laborum.","spans":[]}],"link":{"link_type":"Web","url":"http://google.com"},"linkLabel":"matrix user-centric e-markets"}],"primary":{"galleryTitle":[{"type":"heading2","text":"Whiteboard robust e-business","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
