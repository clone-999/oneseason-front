export default function PlaceImg({place,index=0,className=null}) {
    if (!place.photos?.length) {
      return '';
    }
    if (!className) {
      className = 'object-cover';
    }
    return (
      <img className="inset-0 h-full w-full object-cover object-center" src={place.photos[index].url} alt=""/>
    );
}