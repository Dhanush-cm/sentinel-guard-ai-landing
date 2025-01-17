let map: google.maps.Map;

export function initMap(): void {
  const mapOptions: google.maps.MapOptions = {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 13,
  };

  const mapElement = document.getElementById("map");
  if (mapElement) {
    map = new google.maps.Map(mapElement, mapOptions);
    new google.maps.Marker({
      position: { lat: 37.7749, lng: -122.4194 },
      map: map,
    });
  }
}

document.getElementById("contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Form Submitted!");
});
